import nodemailer from 'nodemailer'
import 'dotenv/config'
import {htmlMailContent} from "./sponserMail.js"

const transporter=await nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MY_EMAIL,
        pass:process.env.MY_PASSWORD
    }
});
export const sendMail=async(email,company)=>{
    const info=await transporter.sendMail({
        from:process.env.MY_EMAIL,
        to:email,
        cc: ['yashgupta2202144@gmail.com'],
        bcc: ['surajnitp26@outlook.com'],
        subject:"Collaboration Invite for HARDWARE HACKATHON in NIT PATNA",
        html:htmlMailContent(company),
        attachments:[
            {
                filename: 'HARD CON Brochure.pdf',
                path: './HARD_CON_Brochure.pdf'
            },
            {
                filename: 'CLUB PROPOSAL.pdf',
                path: './CLUB_PROPOSAL.pdf'
            }
        ]
    });    
}