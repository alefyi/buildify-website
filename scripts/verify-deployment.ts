import https from 'https';

const URL = 'https://usebuildify.com/business';

function verifyDeployment() {
    console.log(`Checking ${URL}...`);

    https.get(URL, (res) => {
        console.log(`Status Code: ${res.statusCode}`);
        console.log('Headers:', res.headers);

        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            if (data.includes('<title>Buildify for Business | Solutions & Pricing</title>')) {
                console.log('✅ Title verified: "Buildify for Business | Solutions & Pricing"');
            } else {
                console.error('❌ Title mismatch. Deployment might not be live or cached.');
            }

            // Check for industry links
            if (data.includes('/for/restaurant') && data.includes('/for/retail-store')) {
                console.log('✅ Industry links verified.');
            } else {
                console.warn('⚠️ Industry links not found in HTML response (might be client-side rendered).');
            }

            // Check for blog post links
            if (data.includes('/post/best-online-ordering-system-for-restaurants')) {
                console.log('✅ Blog post link "Best Online Ordering" verified.');
            } else {
                console.warn('⚠️ Blog post link "Best Online Ordering" not found.');
            }
        });

    }).on('error', (err) => {
        console.error('Error fetching URL:', err.message);
    });
}

verifyDeployment();
