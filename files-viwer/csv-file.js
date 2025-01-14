import fs from 'fs';
import csv from 'csv-parser';

export const csvFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      resolve(results);
    })
    .on('error', (err) => {
      console.error('Error reading CSV file:', err);
      reject(err);
    });
  })
};