const nodeMailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  //Create Email transporter
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    // port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      type: "SMTP",
      host: process.env.EMAIL_HOST,
      secure: true,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //Options for sending Emails
  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  //send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      console.log("DONE: ", info.response);
    }
  });
};
module.exports = sendEmail;
