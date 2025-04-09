import cliProgress from 'cli-progress'
import { emailsData } from './recipients.js';
import { sendMail } from '../mail.js';

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
            console.log(data);
            
            await sendMail(data).then(()=>{
                value++;
                progressBar.update(value);
                if(value>=emailCount){
                    progressBar.stop();
                }
            }).
            catch(()=>{
                console.log('error in sending email to '+data.email);
                value++;
                progressBar.update(value);
                if(value>=emailCount){
                    progressBar.stop();
                }
            });
        }
    });
}

mail('./TeslaInductionMail/data.json').catch((err)=>console.log(err))