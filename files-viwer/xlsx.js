import fs from 'fs';
import XLSX from 'xlsx';
export const xlsxFileContent=async(filePath)=>{
    return new Promise((resolve, reject) => {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0]; // First sheet
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet); // Convert sheet to JSON
        resolve(jsonData);
    })
}