const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generatePDF() {
    const doc = new PDFDocument({
        size: 'LETTER',
        margins: { top: 40, bottom: 40, left: 40, right: 40 }
    });

    const outputDir = 'public';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const outputPath = path.join(outputDir, 'lobo_logo_sheet.pdf');
    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    // Title / Header Metadata
    doc.fillColor('#121212')
       .font('Helvetica-Bold')
       .fontSize(22)
       .text('LOBO - GUÍA DE PERSONALIZACIÓN Y LOGOTIPO', { align: 'center' });
    
    doc.fontSize(10)
       .font('Helvetica')
       .fillColor('#666666')
       .text('Contorno minimalista para grabado láser / tampografía en varilla de lentes', { align: 'center' });

    doc.moveDown(1.5);
    
    // Draw horizontal separator line
    doc.moveTo(40, doc.y).lineTo(doc.page.width - 40, doc.y).strokeColor('#E0E0E0').lineWidth(1).stroke();
    
    doc.moveDown(2);

    // Section 1: Logo Positivo
    doc.fillColor('#121212')
       .font('Helvetica-Bold')
       .fontSize(14)
       .text('1. LOGOTIPO POSITIVO (Contorno Blanco sobre Negro)');
    
    doc.font('Helvetica')
       .fontSize(10)
       .fillColor('#444444')
       .text('Recomendado para grabados en varillas de colores oscuros (Negro Mate, Azul Cobalto).');
    
    doc.moveDown(0.5);

    const posImagePath = path.join(process.cwd(), 'public', 'lobo_logo_positive_1780700374194.png');
    if (fs.existsSync(posImagePath)) {
        doc.image(posImagePath, {
            fit: [200, 200],
            align: 'center',
            valign: 'center'
        });
    } else {
        doc.text('[Error: No se encontró la imagen positivo en el directorio actual]', { color: 'red' });
    }

    doc.moveDown(2.5);

    // Section 2: Logo Negativo
    doc.fillColor('#121212')
       .font('Helvetica-Bold')
       .fontSize(14)
       .text('2. LOGOTIPO NEGATIVO (Contorno Negro sobre Blanco)');
    
    doc.font('Helvetica')
       .fontSize(10)
       .fillColor('#444444')
       .text('Recomendado para plantillas de tampografía, impresión física o cristales claros.');

    doc.moveDown(0.5);

    const negImagePath = path.join(process.cwd(), 'public', 'lobo_logo_negative_1780700389356.png');
    if (fs.existsSync(negImagePath)) {
        doc.image(negImagePath, {
            fit: [200, 200],
            align: 'center',
            valign: 'center'
        });
    } else {
        doc.text('[Error: No se encontró la imagen negativo en el directorio actual]', { color: 'red' });
    }

    doc.moveDown(2);
    
    // Footer technical details
    doc.moveTo(40, doc.page.height - 80).lineTo(doc.page.width - 40, doc.page.height - 80).strokeColor('#E0E0E0').stroke();
    
    doc.fillColor('#888888')
       .fontSize(8)
       .font('Helvetica-Oblique')
       .text('LOBO Premium Smart Glasses Pro • Formato de alta definición para vectorización industrial', 40, doc.page.height - 65, {
           align: 'center'
       });

    stream.on('finish', () => {
        console.log('PDF generado exitosamente en public/lobo_logo_sheet.pdf');
    });

    doc.end();
}

generatePDF();
