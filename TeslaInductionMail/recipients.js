import fs from 'fs';
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
                obj.name=item.name;
                obj.email=item.email;
                mails.push(obj);
            });
            resolve(mails);
        });
    });
}