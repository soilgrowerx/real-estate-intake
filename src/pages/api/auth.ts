import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let protocol = req.headers['x-forwarded-proto'] || 'http';
  if (Array.isArray(protocol)) protocol = protocol[0];
  const host = req.headers.host;
  const redirectUri = `${protocol}://${host}/api/auth`;

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    redirectUri
  );

  const SCOPES = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/script.projects',
    'https://www.googleapis.com/auth/script.deployments',
    'https://www.googleapis.com/auth/gmail.modify'
  ];

  if (req.query.code) {
    const { code } = req.query;
    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      // Redirect to home with tokens (in production, use session/cookie)
      // For this MVP, we'll pass tokens in URL query params or set a simple cookie
      // WARNING: Passing tokens in URL is not secure for production, but okay for local MVP. 
      // Better: Set a cookie.
      const cookieValue = encodeURIComponent(JSON.stringify(tokens));
      res.setHeader('Set-Cookie', `google_token=${cookieValue}; Path=/; SameSite=Lax`);
      res.redirect('/');
    } catch (error) {
      console.error('Error retrieving access token: [REDACTED]');
      res.status(500).json({ error: 'Failed to retrieve access token' });
    }
  } else {
    // Generate auth url
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    res.redirect(url);
  }
}
