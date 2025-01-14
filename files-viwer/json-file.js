import fs from 'fs';
export const jsonFileContent=(filePath)=>{
    return new Promise((resolve, reject) => {
        const jsonData=fs.readFileSync(filePath);
        resolve(JSON.parse(jsonData));
    })
}