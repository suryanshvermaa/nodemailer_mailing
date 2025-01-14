import cliProgress from 'cli-progress'
import { emailsData } from './recipients.js';
import { sendMail } from './mail.js';
import { fileListForMailing } from './files-viwer/fileList.js';
import inquirer from 'inquirer';

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const mail = async(filePath) => {
    console.log('Email fetching from json file...');
    const emailData=await emailsData(filePath);
    const emailCount=emailData.length;
    let value=0;
    console.log('emails fetched successfully!');
    console.log('emails are sending...');
    progressBar.start(emailCount, value);
    emailData.map(async(data)=>{
        if(data.email){
            await sendMail(data.email, data.company).then(()=>{
                value++;
                progressBar.update(value);
                if(value>=emailCount){
                    progressBar.stop();
                }
            }).catch(()=>{
                console.log('error in sending email to '+data.email);
            });
        }
    });
}
export const sendingMail=async()=>{
    const files=await fileListForMailing('.');
    const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedOption',
          message: 'Select Json file to view',
          choices: files,
        },
      ]);
    mail(answer.selectedOption);
}