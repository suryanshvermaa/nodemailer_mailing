import cliProgress from 'cli-progress'
import { emailsData } from './recipients.js';
import { sendMail } from './mail.js';

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const mail = async() => {
    console.log('Email fetching from json file...');
    const emailData=await emailsData("sponsers.json");
    const emailCount=emailData.length;
    let value=0;
    console.log('emails fetched successfully!');
    console.log('emails are sending...');
    progressBar.start(emailCount, value);
    emailData.map(async(data)=>{
        console.log(data);
        await sendMail('suryanshverma9580@gmail.com',"Suryansh");
        // await sendMail(data.email, data.company).then(()=>{
        //     value++;
        //     progressBar.update(value);
        //     if(value>=emailCount){
        //         progressBar.stop();
        //     }
        // }).catch(()=>{
        //     console.log('error in sending email to '+data.email);
        // });
    });
}
mail();