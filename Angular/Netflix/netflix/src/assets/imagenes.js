const fs = require('fs');
const path = require('path');

function readFiles(directory, fileData) {
  const files = fs.readdirSync(directory);

  files.forEach(function (file) {
    // Comprueba si la carpeta es "Icons" o "Logo", y si es así, salta a la siguiente iteración
    if (file === 'Icons' || file === 'LOGO') {
      return;
    }
    //concatenamos los directorios con el nombre del fichero
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      readFiles(filePath, fileData);
    } else {
      const ultimoE = filePath.split('/').pop();
      fileData.push({
        title: ultimoE,
        src: filePath,
      });
    }
  });

  // Cuando se hayan recorrido todos los archivos, escribir los datos en un archivo JSON
  const fileContent = JSON.stringify(fileData, null, 2);
  fs.writeFileSync('imagenes.json', fileContent);

  console.log('Datos guardados correctamente en imagenes.json');
}

// Llamada inicial a la función con la ruta de la carpeta imagen y una matriz vacía
readFiles('./images', []);
