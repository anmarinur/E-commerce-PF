const nodemailer = require('nodemailer');

const emailNotifications = async (email, subject, message) => {
  try{
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "tecnoshop.pf@gmail.com", // generated ethereal user
        pass: "pxoehajwpkapqlkz", // generated ethereal password
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    try {
     await transporter.verify()
     console.log('Ready')
    } catch (error) {
     console.log(error.message)
    }
    

    let info = await transporter.sendMail({
      from: '"Tecnoshop" <tecnoshop.pf@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: `${subject}`, // Subject line
      text: `${message}`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    res.json('Done');
  } catch (error) {
    return error.message;
  }    
};

module.exports= emailNotifications;