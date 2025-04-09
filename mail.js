import nodemailer from 'nodemailer'
import 'dotenv/config'
// import {htmlMailContent} from "./sponserMail.js"
import {mailHtml} from "./TeslaInductionMail/mail.js";

const transporter=await nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MY_EMAIL,
        pass:process.env.MY_PASSWORD
    }
});

export const sendMail=async(data)=>{
    const info=await transporter.sendMail({
        from:process.env.MY_EMAIL,
        to:data.email,
        // cc: ['tesla.club@nitp.ac.in'],
        // bcc: ['suraj.ug22.ec@nitp.ac.in'],
        // subject:"Collaboration Invite for HARDWARE HACKATHON in NIT PATNA",
        subject:'T.E.S.L.A: Crypto Campt-2025',
        // html:htmlMailContent(company),
        html:mailHtml(),
        // attachments:[
        //     {
        //         filename: 'HARD CON Brochure.pdf',
        //         path: './HARD_CON_Brochure.pdf'
        //     },
        //     {
        //         filename: 'CLUB PROPOSAL.pdf',
        //         path: './CLUB_PROPOSAL.pdf'
        //     }
        // ]
    }); 
}

// sendMail(mydata);