import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    success: boolean;
    message: string;
    driveFileId?: string;
};

// Initialize Google Auth (Checks GOOGLE_APPLICATION_CREDENTIALS)
const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/drive.file'],
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { spore } = req.body;

    if (!spore) {
        return res.status(400).json({ success: false, message: 'Missing spore data' });
    }

    try {
        console.log('Syncing spore:', spore.id);

        // Check if we have credentials to perform real sync
        const hasCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

        if (hasCredentials) {
            const drive = google.drive({ version: 'v3', auth });

            // 1. Create Metadata
            const fileMetadata = {
                name: `Spore_${spore.id}.txt`,
                mimeType: 'text/plain',
                parents: ['appDataFolder'] // Or a specific Folder ID if provided
            };

            // 2. Create Media
            const media = {
                mimeType: 'text/plain',
                body: `ID: ${spore.id}\nCreated: ${new Date(spore.createdAt).toISOString()}\nTags: ${spore.tags?.join(', ')}\n\n${spore.content}`
            };

            // 3. Upload
            const response = await drive.files.create({
                requestBody: fileMetadata,
                media: media,
                fields: 'id'
            });

            console.log('Uploaded to Drive:', response.data.id);

            res.status(200).json({
                success: true,
                message: 'Synced to Google Drive',
                driveFileId: response.data.id || 'unknown'
            });
        } else {
            // Fallback for Demo/Dev without keys
            console.warn('No Google Creds found. Simulating Drive Sync.');
            await new Promise(resolve => setTimeout(resolve, 800)); // Latency sim
            res.status(200).json({
                success: true,
                message: 'Synced to Neo-Cloud (Simulated - No Credentials)',
                driveFileId: `simulated-drive-id-${Date.now()}`
            });
        }

    } catch (error) {
        console.error('Sync failed:', error);
        res.status(500).json({ success: false, message: 'Sync Failure' });
    }
}
