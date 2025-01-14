import inquirer from 'inquirer';
import { fileList } from './files-viwer/fileList.js';
import { jsonFileContent } from './files-viwer/json-file.js';
import { csvFileContent } from './files-viwer/csv-file.js';
import { docxContent } from './files-viwer/docx.js';
import { xlsxFileContent } from './files-viwer/xlsx.js';

const main=async()=>{
    return new Promise(async(resolve, reject) => {
      const files=await fileList('.');
      resolve(files);
    })
  }
export const openFile=async()=>{
    main().then(async(files)=>{
      const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedOption',
          message: 'Select Json file to view',
          choices: files,
        },
      ]);
     return answer.selectedOption;
    }).then(async(file)=>{
      const fileNameArr=String(file).split('.');
      const fileExt=fileNameArr[fileNameArr.length-1];
      console.log(fileExt);
      
      if(fileExt=='json'){
        const fileContent=await jsonFileContent(file);
        console.log(fileContent);
      }
      if(fileExt=='csv'){
        const fileContent=await csvFileContent(file);
        console.table(fileContent);
      }
      if(fileExt=='xlsx'||fileExt=='xls'){
        const fileContent=await xlsxFileContent(file);
        console.table(fileContent);
      }
      if(fileExt=='docx'||fileExt=='doc'){
        const fileContent=await docxContent(file);
        console.log(fileContent);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }