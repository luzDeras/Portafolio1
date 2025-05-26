const webp = require('webp-converter');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src', 'assets', 'luz', 'images');

// Función para convertir una imagen a WebP
async function convertToWebP(inputPath) {
    const outputPath = inputPath.replace(/\.(jpg|png)$/, '.webp');
    try {
        await webp.cwebp(inputPath, outputPath, "-q 80");
        console.log(`Convertido: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
        // Opcional: eliminar el archivo original
        // fs.unlinkSync(inputPath);
    } catch (error) {
        console.error(`Error al convertir ${inputPath}:`, error);
    }
}

// Leer el directorio y convertir todas las imágenes
fs.readdir(imagesDir, async (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    const imageFiles = files.filter(file => 
        file.endsWith('.jpg') || file.endsWith('.png')
    );

    for (const file of imageFiles) {
        const inputPath = path.join(imagesDir, file);
        await convertToWebP(inputPath);
    }
}); 