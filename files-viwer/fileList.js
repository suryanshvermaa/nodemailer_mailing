import path from 'path';
import fs from 'fs';
export const fileList = async (dirPath) => {
    return new Promise((resolve, reject) => {
      try {
      const files = fs.readdirSync(dirPath);
      const jsonFiles=files.filter(file=>path.extname(file).toLowerCase()==='.json'||path.extname(file).toLowerCase()==='.csv'||path.extname(file).toLowerCase()==='.xlsx'||path.extname(file).toLowerCase()==='.csv'||path.extname(file).toLowerCase()==='.xls'||path.extname(file).toLowerCase()==='.docx'||path.extname(file).toLowerCase()==='.doc');    
     resolve(jsonFiles);
      } catch (error) {
        console.log('Error in openning files');
        reject(error)
      }
    })
  };

  export const fileListForMailing = async (dirPath) => {
    return new Promise((resolve, reject) => {
      try {
      const files = fs.readdirSync(dirPath);
      const jsonFiles=files.filter(file=>path.extname(file).toLowerCase()==='.json');    
     resolve(jsonFiles);
      } catch (error) {
        console.log('Error in openning files');
        reject(error)
      }
    })
  };