import User from "@/models/userModel";
import crypto from "crypto";
import { connectDB } from "@/dbConnection/dbConnection";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    await connectDB();

    const hashedToken = crypto.randomBytes(32).toString("hex");

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpiry: Date.now() + 3600000,
      });
    }

    // Auto generate test account (no signup needed)
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const subject =
      emailType === "VERIFY" ? "Verify your email" : "Reset your password";
    const link = `${process.env.DOMAIN}/verifyemail?token=${hashedToken}`;

    const mailResponse = await transporter.sendMail({
      from: '"My App" <no-reply@myapp.com>',
      to: email,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>${subject}</h2>
          <p>Click below to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}:</p>
          <a href="${link}" style="
            background-color: #4F46E5;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin: 16px 0;">
            Click here
          </a>
          <p>Or copy: ${link}</p>
          <p>Expires in <strong>1 hour</strong>.</p>
        </div>
      `,
    });

    // This URL lets you preview the email in your browser
    console.log("Preview URL:", nodemailer.getTestMessageUrl(mailResponse));
    return mailResponse;
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};
