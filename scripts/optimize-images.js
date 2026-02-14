
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const SIZES = [320, 640, 1280, 1920, 2560];
const QUALITY = 80;

async function optimizeImages() {
    const files = await glob(['public/**/*.{jpg,jpeg,png}', 'src/assets/**/*.{jpg,jpeg,png}'], { ignore: ['**/node_modules/**'] });

    console.log(`Found ${files.length} images to optimize.`);

    for (const file of files) {
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const dir = path.dirname(file);

        console.log(`Optimizing: ${file}`);

        // Create WebP version
        const webpPath = path.join(dir, `${basename}.webp`);
        if (!fs.existsSync(webpPath)) {
            await sharp(file)
                .webp({ quality: QUALITY })
                .toFile(webpPath);
            console.log(`  -> Created ${basename}.webp`);
        }

        // Generate responsive sizes (only for large images in public/)
        if (file.includes('public/')) {
            const metadata = await sharp(file).metadata();

            for (const size of SIZES) {
                if (metadata.width && metadata.width > size) {
                    const resizedPath = path.join(dir, `${basename}-${size}w.webp`);
                    if (!fs.existsSync(resizedPath)) {
                        await sharp(file)
                            .resize(size)
                            .webp({ quality: QUALITY })
                            .toFile(resizedPath);
                        console.log(`  -> Created ${basename}-${size}w.webp`);
                    }
                }
            }
        }
    }
}

optimizeImages().catch(console.error);
