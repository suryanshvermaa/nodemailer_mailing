import mammoth from 'mammoth';
import fs from 'fs';
export const docxContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
        }
        mammoth.extractRawText({ buffer: data })
          .then((result) => {
            resolve(result.value); // Extracted text
          })
          .catch((err) => {
            reject(err);
          });
      });
  })
};