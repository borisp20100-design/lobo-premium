import { Jimp } from 'jimp';
import path from 'path';

const imagePath = path.resolve('src/assets/logo-original.png');

Jimp.read(imagePath)
  .then(image => {
    image.autocrop();
    return image.write(imagePath);
  })
  .then(() => {
    console.log('Logo cropped successfully!');
  })
  .catch(err => {
    console.error('Error cropping logo:', err);
  });
