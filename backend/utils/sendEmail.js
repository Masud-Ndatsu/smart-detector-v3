const nodeMailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  //Create Email transporter
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "dev.masud0X0@gmail.com",
      pass: "Masudnda@3",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //Options for sending Emails
  const options = {
    from: "dev.masud0X0@gmail.com",
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  //send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log("DONE: ", info);
    }
  });
};
module.exports = sendEmail;
