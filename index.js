import fs from 'fs';

fs.readFile('csvjson.json', 'utf8', (err, data) => {
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
            obj.name=item.name;
            obj.email=item.email;
            obj.company=item.company;
            obj.contactNo=item.contactNo;
            updatedData.push(obj);
        }
    });
    fs.writeFile('updatedData.json', JSON.stringify(updatedData), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been created');
    });
});