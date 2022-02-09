import { NextApiRequest, NextApiResponse } from "next";
import {connectDB} from '../../../models/index'
import nextConnect from "next-connect";
import mailgun from 'mailgun-js'

const mg = mailgun({apiKey: process.env.MAILGUN_KEY as string, domain: process.env.MAILGUN_DOMAIN as string});

const handler = nextConnect({});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    const {email, title, message} = req.body
    try {
        const data = {
            from: email,
            to: "stalinramosbw@gmail.com",
            subject: title,
            text: message
        };
        await mg.messages().send(data);
        res.json({success:true, res:"Message sent"})
    } catch (error) {
        res.json({success:false, res:error})
    }
});

export default connectDB(handler); 
