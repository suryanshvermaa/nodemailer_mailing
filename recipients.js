import fs from 'fs';
import csv from 'csv-parser';
export const emailsData=(fileName)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err){
                reject(err);
            }
            const objData=JSON.parse(data);
            const mails=[];
            objData.map((item)=>{
                const obj={};
                obj.id=item.id;
                obj.company=item.company;
                obj.email=item.email;
                mails.push(obj);
            });
            resolve(mails);
        });
    });
}
// export const emailsData=(fileName)=>{
//     return new Promise((resolve, reject)=>{
//         const mailsData=[];
//         fs.createReadStream(fileName)
//         .pipe(csv({}))
//         .on('data', (data) => {
//                 const obj={};
//                 obj.id=data.id;
//                 obj.company=data.company;
//                 obj.email=data.email;
//                 if(data.email && data.id>=58&&data.id<=74){
//                     mailsData.push(obj);
//                 }
//         })
//         .on('end', () => {
//             resolve(mailsData);
//         });
//     });
// }
