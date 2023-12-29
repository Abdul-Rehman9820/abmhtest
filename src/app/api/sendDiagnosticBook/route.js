import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req, content) {
  try {
    const formData = await req.formData();

    const username = formData.get('username');
    const userPhone = formData.get('userPhone');
    const usermail = formData.get('usermail');
    const userlocation = formData.get('userlocation');
    const usermessage = formData.get('usermessage');
    const selecteSubject = formData.get('selecteSubject');
    const selecteTopic = formData.get('selecteTopic');

    const prescription = formData.get('prescription');

    // // Read the resume file as a Buffer
    // const resumeBuffer = await fs.readFile(resume.path);

    const byteData= await prescription.arrayBuffer();
    const buffer= Buffer.from (byteData);

    const htmlContent = `<div>
      <p>Name = ${username}</p>
      <p>Phone = ${userPhone}</p>
      <p>Email = ${usermail}</p>
      <p>Location = ${userlocation}</p>
      <p>Message = ${usermessage}</p>
      <p>Diagnostic Category = ${selecteSubject}</p>
      <p>Diagnostic Service = ${selecteTopic}</p>
    </div>`;

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
      from: '"New Booking of Diagnostic Service From ABMH Diagnostic Form" <abmh_enquiry@mindframeindia.com>',
      to: ['abmh_enquiry@mindframeindia.com','corporate.desk@adityabiral.com'],
      subject: 'New Booking of Diagnostic Service',
      html: htmlContent,
      attachments: [
        {
          // filename: 'resume.pdf', // You can customize the filename here
          content: buffer,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ status: 200, message: 'mail send', messageId: info.messageId });
    
  } catch (error) {
    console.error('Error in mail API:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json({
      status: 500,
      message: 'Error sending mail',
      error: errorMessage,
    });
  }
}
