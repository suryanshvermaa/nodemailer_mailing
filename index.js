import fs from 'fs';

fs.readFile('sponsersTesla.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const objData=JSON.parse(data);
    const updatedData=[];
    objData.map((item)=>{
        if(item.email){
            const obj={};
            obj.id=item.id;
            obj.company=item.company;
            obj.email=item.email;
            updatedData.push(obj);
        }
    });
    console.log(JSON.stringify(updatedData));
    
});