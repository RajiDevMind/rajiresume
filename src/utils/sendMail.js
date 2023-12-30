import key from "../../secrets.json" assert { type: "json" };
import nodemailer from "nodemailer";

// sending notification on register
function sendEmailNotification(username, email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "omoiyaalasso@gmail.com",
      pass: key.password,
    },
  });

  const mailOptions = {
    from: "omoiyaalasso@gmail.com",
    to: email,
    subject: "I Got Your Response!",
    text: `Hello ${username},\n\n This is Raji!\n\n I would love to work and serve you! \n\n Kindly contact direct via https://wa.link/oowia5`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default sendEmailNotification;
