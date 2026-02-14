import { google } from 'googleapis';
import open from 'open';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

// "webmasters" scope is required for submission (readonly is not enough)
const SCOPES = ['https://www.googleapis.com/auth/webmasters'];
// Use a different token file to avoid conflict with the read-only token
const TOKEN_PATH = path.join(process.cwd(), 'gsc-token-full.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'gsc-credentials.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (query: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
    // Add close handler to prevent hanging
};

async function authorize() {
    let credentials;
    try {
        const content = fs.readFileSync(CREDENTIALS_PATH, 'utf8');
        credentials = JSON.parse(content);
    } catch (err) {
        console.log('⚠️  No credentials file found at:', CREDENTIALS_PATH);
        console.log('Please ensure gsc-credentials.json exists in the root.');
        process.exit(1);
    }

    const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, 'http://localhost:3000/oauth2callback'
    );

    // Check if we have previously stored a token.
    try {
        const token = fs.readFileSync(TOKEN_PATH, 'utf8');
        oAuth2Client.setCredentials(JSON.parse(token));
        return oAuth2Client;
    } catch (err) {
        return getNewToken(oAuth2Client);
    }
}

async function getNewToken(oAuth2Client: any) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('Authorize this app by visiting this url:', authUrl);
    await open(authUrl);

    const code = await question('Enter the code from that page here: ');
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
    console.log('Token stored to', TOKEN_PATH);
    return oAuth2Client;
}

async function submitSitemap(auth: any) {
    const searchConsole = google.searchconsole({ version: 'v1', auth });
    const siteUrl = 'https://usebuildify.com/';
    const feedpath = 'https://usebuildify.com/sitemap.xml';

    console.log(`Submitting sitemap ${feedpath} for ${siteUrl}...`);

    try {
        await searchConsole.sitemaps.submit({
            siteUrl,
            feedpath,
        });
        console.log('✅ Sitemap submitted successfully!');
    } catch (error) {
        console.error('❌ Error submitting sitemap:', error.message);
        if (error.code === 403) {
            console.log('Tip: You might need to re-authenticate with write permissions. Try deleting gsc-token-full.json and running again.');
        }
    }
}

async function main() {
    try {
        const auth = await authorize();
        await submitSitemap(auth);
    } catch (e) {
        console.error(e);
    } finally {
        rl.close();
        process.exit(0);
    }
}

main();
