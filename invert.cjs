const { Jimp } = require('jimp');
const path = require('path');

async function processImages() {
    try {
        const inputPath = 'C:\\Users\\Boris Peña Navea\\.gemini\\antigravity\\brain\\1998fb8f-3aa8-45ac-833d-36d731fabace\\final_wolf_silhouette_pos_1780701986118.png';
        const posDestPath = path.join(__dirname, 'public', 'lobo_logo_positive_1780700374194.png');
        const negDestPath = path.join(__dirname, 'public', 'lobo_logo_negative_1780700389356.png');

        console.log('Cargando imagen base...', inputPath);
        const image = await Jimp.read(inputPath);

        // Clonamos para el positivo
        const posImage = image.clone();
        await posImage.write(posDestPath);
        console.log('Imagen positivo guardada en:', posDestPath);

        // Creamos el negativo invirtiendo todos los píxeles
        const negImage = image.clone();
        negImage.scan(0, 0, negImage.bitmap.width, negImage.bitmap.height, function(x, y, idx) {
            // Invertimos R, G, B
            this.bitmap.data[idx] = 255 - this.bitmap.data[idx];     // Red
            this.bitmap.data[idx + 1] = 255 - this.bitmap.data[idx + 1]; // Green
            this.bitmap.data[idx + 2] = 255 - this.bitmap.data[idx + 2]; // Blue
            // Dejamos el canal alpha (transparencia/opacidad) intacto
        });

        await negImage.write(negDestPath);
        console.log('Imagen negativo generada e invertida correctamente en:', negDestPath);

    } catch (err) {
        console.error('Error procesando las imágenes:', err);
    }
}

processImages();
