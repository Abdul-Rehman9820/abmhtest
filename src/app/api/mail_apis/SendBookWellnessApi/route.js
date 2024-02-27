

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
    const userdate = body.userdate;
    const selectedOption = body.selectedOption;


    var maildatahtlm = `<div>

                                <p>Name = ${username}</p>
                                <p>Phone  = ${userPhone}</p>
                                <p>Email = ${usermail}</p>
                                <p>Location = ${userlocation}</p>
                                <p>Message  = ${usermessage}</p>
                                <p>Date  = ${userdate}</p>
                                <p>Wellness Package  = ${selectedOption}</p>
          
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

    //Wellness.abmh@adityabirla.com
    const mailOptions = {
      from: '"New Enquiry From ABMH Book Wellness Packages Form" <abmh_enquiry@mindframeindia.com>',
      to: ['abmh_enquiry@mindframeindia.com', 'Wellness.abmh@adityabirla.com'],
      subject: 'New Wellness Packages Enquiry From ABMH',
      html: maildatahtlm,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ status: 200, message: 'mail send', messageId: info.messageId });



  } catch (e) {


    return NextResponse.json({ status: 500, message: 'Not working API', error: e });


  }



}


