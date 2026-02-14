
import { google } from 'googleapis';
import open from 'open';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'gsc-token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'gsc-credentials.json');
const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

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
};


async function authorize() {
    let credentials;
    try {
        const content = fs.readFileSync(CREDENTIALS_PATH, 'utf8');
        credentials = JSON.parse(content);
    } catch (err) {
        console.log('⚠️  No credentials file found.');
        console.log('To run this script, you need OAuth 2.0 Credentials from Google Cloud Console.');
        console.log('1. Go to https://console.cloud.google.com/');
        console.log('2. Create a project and enable "Google Search Console API"');
        console.log('3. Create OAuth 2.0 Client ID (Desktop App)');
        console.log('4. Download JSON and save as "gsc-credentials.json" in root OR enter details below:');

        const clientId = await question('Enter Client ID: ');
        const clientSecret = await question('Enter Client Secret: ');

        credentials = { installed: { client_id: clientId, client_secret: clientSecret } };
        fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(credentials, null, 2));
    }

    const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, 'http://localhost:3000/oauth2callback' // simplistic redirect or urn:ietf:wg:oauth:2.0:oob for manual copy-paste
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

async function fetchSearchAnalytics(auth: any) {
    const searchConsole = google.searchconsole({ version: 'v1', auth });

    const siteUrl = 'https://usebuildify.com/'; // Replace with your property URL
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 30 days ago

    console.log(`Fetching data for ${siteUrl} from ${startDate} to ${endDate}...`);

    try {
        const res = await searchConsole.searchanalytics.query({
            siteUrl,
            requestBody: {
                startDate,
                endDate,
                dimensions: ['query', 'page'],
                rowLimit: 5000,
            },
        });

        const rows = res.data.rows || [];
        console.log(`Fetched ${rows.length} rows.`);

        const dataPath = path.join(DATA_DIR, 'gsc_data.json');
        fs.writeFileSync(dataPath, JSON.stringify(rows, null, 2));
        console.log(`Data saved to ${dataPath}`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function main() {
    try {
        const auth = await authorize();
        await fetchSearchAnalytics(auth);
    } catch (e) {
        console.error(e);
    } finally {
        rl.close();
    }
}

main();
