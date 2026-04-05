import User from "@/models/userModel";
import { nodemailer } from "nodemailer";
const sendEmail = async ({ email, emailtype, userId }) => {
  //email type check
  const HasedToken = await bcrypt.hash(userId.toString(), 10);
  if (emailtype == "VERIFY_EMAIL") {
    User.findByIdAndUpdate(userId, {
      verifyToken: HasedToken,
      verifyTokenExpiry: Date.now() + 3600000, // 1 hour
    });
  } else if (emailtype == "RESET_PASSWORD") {
    User.findByIdAndUpdate(userId, {
      resetPasswordToken: HasedToken,
      resetPasswordTokenExpiry: Date.now() + 3600000, // 1 hour
    });
  }

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: "team@example.com", // sender address
    to: email, // list of recipients
    subject:
      emailtype == "VERIFY_EMAIL" ? "Verify your email" : "Reset your password", // subject line
    text: "Hello world?", // plain text body
    html: `<p>Click <a href="${process.env.DOMAIN}/api/auth/verifyemail?token=${HasedToken}">here</a> or click the link below: ${emailtype === "VERIFY_EMAIL" ? "verify your email" : "reset your password"}</p>`, // HTML body
  };
  const mainResponse = await transport.sendMail(mailOptions);
  return mainResponse;
};
