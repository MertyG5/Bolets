const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// La ruta a la teva carpeta d'imatges (per defecte `img`).
// Pots passar una carpeta concreta com a argument: `node optimitzar.js Agaricus_campestris`
let IMG_DIR = path.join(__dirname, 'img');
const arg = process.argv[2];
if (arg) {
    if (path.isAbsolute(arg)) {
        IMG_DIR = arg;
    } else if (arg.startsWith('img' + path.sep) || arg.startsWith('img/')) {
        IMG_DIR = path.join(__dirname, arg);
    } else {
        // Permet passar només el nom de l'espècie: 'Agaricus_campestris'
        IMG_DIR = path.join(__dirname, 'img', arg);
    }
}

// Les tres mides que volem generar
const SIZES = [
    { name: 'petit', width: 320 },
    { name: 'mitja', width: 640 },
    { name: 'gran', width: 1280 }
];

async function processDirectory(directory) {
    // Llegeix tot el que hi ha dins la carpeta
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        // Si és una carpeta (ex: img/esclata-sang), entra-hi a dins recursivament
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } 
        // Si és un fitxer d'imatge vàlid
        else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
            // Evitem processar imatges que ja hem creat prèviament per error
            if (file.includes('-petit.') || file.includes('-mitja.') || file.includes('-gran.')) {
                continue;
            }
            await processImage(fullPath, directory, file);
        }
    }
}

async function processImage(filePath, dir, fileName) {
    const nameWithoutExt = path.parse(fileName).name;
    console.log(`⏳ Processant: ${fileName}...`);

    try {
        // Per a cada mida definida, generem els 3 formats
        for (const size of SIZES) {
            const baseName = `${nameWithoutExt}-${size.name}`;

            // 1. Generar WebP
            await sharp(filePath)
                .resize(size.width)
                .webp({ quality: 80 })
                .toFile(path.join(dir, `${baseName}.webp`));

            // 2. Generar AVIF
            await sharp(filePath)
                .resize(size.width)
                .avif({ quality: 75 })
                .toFile(path.join(dir, `${baseName}.avif`));

            // 3. Generar JPEG (per al fallback)
            await sharp(filePath)
                .resize(size.width)
                .jpeg({ quality: 80 })
                .toFile(path.join(dir, `${baseName}.jpg`));
        }

        // ESBORRAR L'ORIGINAL
        fs.unlinkSync(filePath);
        console.log(`✅ Completat i original esborrat: ${fileName}`);

    } catch (error) {
        console.error(`❌ Error processant ${fileName}:`, error);
    }
}

// Executar el procés
console.log(`Iniciant optimització d'imatges a: ${IMG_DIR}`);
processDirectory(IMG_DIR).then(() => {
    console.log('🎉 Procés completat!');
}).catch(err => {
    console.error('❌ Error en el procés:', err);
});