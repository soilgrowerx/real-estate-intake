import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const INBOX_DIR = path.join(process.cwd(), 'data/inbox');
const API_TOKEN = process.env.GARDEN_HARVEST_TOKEN || 'GARDEN_HARVEST_TOKEN_2026';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // 1. Validate Token
    const token = req.headers['x-garden-token'];
    if (token !== API_TOKEN) {
        return res.status(401).json({ error: 'Unauthorized: Invalid Garden Token' });
    }

    // 2. Handle Ingestion (POST)
    if (req.method === 'POST') {
        try {
            const data = req.body;
            if (!data.content || !data.source) {
                return res.status(400).json({ error: 'Missing content or source' });
            }

            const id = crypto.randomUUID();
            const filePath = path.join(INBOX_DIR, `${Date.now()}-${id}.json`);

            // Add metadata
            const payload = {
                ...data,
                receivedAt: Date.now(),
                id
            };

            if (!fs.existsSync(INBOX_DIR)) {
                fs.mkdirSync(INBOX_DIR, { recursive: true });
            }

            fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
            console.log(`[API] Harvested ${data.source} spore into silo: ${id}`);

            return res.status(200).json({ success: true, id });
        } catch (error) {
            console.error('[API] Ingestion Error:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // 3. Handle Scavenging (GET - used by the Garden UI to pull data)
    if (req.method === 'GET') {
        try {
            if (!fs.existsSync(INBOX_DIR)) {
                return res.status(200).json([]);
            }

            const files = fs.readdirSync(INBOX_DIR).filter(f => f.endsWith('.json'));
            const spores = files.map(f => {
                const filePath = path.join(INBOX_DIR, f);
                const content = fs.readFileSync(filePath, 'utf-8');
                return { ...JSON.parse(content), _file: f };
            });

            // "Drain" the inbox: Delete files after sending
            // In a production app, you might want a more sophisticated 'ack' system
            files.forEach(f => fs.unlinkSync(path.join(INBOX_DIR, f)));

            return res.status(200).json(spores);
        } catch (error) {
            console.error('[API] Scavenge Error:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
}
