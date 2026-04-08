import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailtype, userId }) => {
  try {
    // Fix #2: Typo fixed HasedToken → hashedToken
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailtype === "VERIFY_EMAIL") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailtype === "RESET_PASSWORD") {
      await User.findByIdAndUpdate(userId, {
        resetPasswordToken: hashedToken,
        resetPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Fix #1: Changed host to sandbox for development
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io", // ✅ was: send.smtp.mailtrap.io
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || "noreply@yourdomain.com", // Fix #4: use env variable
      to: email,
      subject:
        emailtype === "VERIFY_EMAIL"
          ? "Verify your email"
          : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/api/auth/${
        emailtype === "VERIFY_EMAIL" ? "verifyemail" : "resetpassword"
      }?token=${hashedToken}">
        ${emailtype === "VERIFY_EMAIL" ? "Verify your email" : "Reset your password"}
      </a></p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    // Fix #3: added try/catch
    throw new Error(`Failed to send email: ${error.message}`);
  }
};
