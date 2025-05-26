import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'src', 'assets', 'luz', 'images');

async function convertToWebP(inputPath) {
    const outputPath = inputPath.replace(/\.(jpg|png)$/, '.webp');
    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`Convertido: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`Error al convertir ${inputPath}:`, error);
    }
}

async function processImages() {
    try {
        const files = fs.readdirSync(imagesDir);
        const imageFiles = files.filter(file => 
            file.endsWith('.jpg') || file.endsWith('.png')
        );

        for (const file of imageFiles) {
            const inputPath = path.join(imagesDir, file);
            await convertToWebP(inputPath);
        }
        console.log('¡Conversión completada!');
    } catch (error) {
        console.error('Error:', error);
    }
}

processImages(); 