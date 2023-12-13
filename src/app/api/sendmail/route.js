	

import { NextResponse } from 'next/server'

import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

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



          const data = await resend.emails.send({
            from: 'ABMH Enquiry Form <abmh_enquiry@mindframeindia.com>',
            to: ['abmh_enquiry@mindframeindia.com','hospitalcareers@adityabirla.com'],
            subject: 'New Enquiry',
            // react: 'John' ,
            // text: 'This is text a test email.',
            // html: '<p>This is a test email html.</p>',
            html: maildatahtlm,
          });
          

          return NextResponse.json({ status: 200, message: 'mail send', data: data });



        } catch (e) {


          return NextResponse.json({ status: 500, message: 'Not working API', error : e });


        }



}


