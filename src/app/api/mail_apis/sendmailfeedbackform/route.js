

import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer';


export async function POST(req, content) {


  try {


    const body = await req.json(); // Get the search value from the URL

    const username = body.username;
    const userPhone = body.userPhone;
    const usermail = body.usermail;
    const userlocation = body.userlocation;
    const usermessage = body.usermessage;


    var maildatahtlm = `<div>

                                <p>Name = ${username}</p>
                                <p>Phone  = ${userPhone}</p>
                                <p>Email = ${usermail}</p>
                                <p>Location = ${userlocation}</p>
                                <p>Message  = ${usermessage}</p>
          
                           <div>`;



    const transporter = nodemailer.createTransport({
      host: 'sm26.siteground.biz',
      port: 465,
      secure: true,
      auth: {
        user: 'abmh_enquiry@mindframeindia.com',
        pass: 'abmh_enquiry@admin',
      },
    });

    const mailOptions = {
      from: '"New Enquiry From ABMH Feedback Form" <abmh_enquiry@mindframeindia.com>',
      to: ['abmh_enquiry@mindframeindia.com', 'corporate.desk@adityabirla.com'],
      subject: 'New Feedback From ABMH Website',
      html: maildatahtlm,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ status: 200, message: 'mail send', messageId: info.messageId });



  } catch (e) {


    return NextResponse.json({ status: 500, message: 'Not working API', error: e });


  }



}


