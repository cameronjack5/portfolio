// functions/index.js
import functions = require("firebase-functions");
import admin = require("firebase-admin");
import nodemailer = require("nodemailer");

admin.initializeApp();


const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", 
  port: 465,
  secure: true,
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

exports.sendEmailOnFeedbackSubmission = functions.firestore
  .document("feedback/{submissionId}")
  .onCreate((snap: { data: () => any; }, context: any) => {
    const data = snap.data();
    const mailOptions = {
      from: functions.config().email.user,
      to: "cameronjack@protonmail.com",
      subject: `[PORTFOLIO] Feedback from ${data.name}`,
      text: `
      Name: ${data.name}\n
      Email: ${data.email}\n
      Feedback: ${data.feedback}\n
      Experience: ${data.experience}\n
      `,
    };

    return transporter.sendMail(mailOptions)
      .then(() => console.log("Feedback FYI email sent successfully"))
      .catch((error: any) => console.error("Error sending feedback FYI email:", error));
  });

exports.sendEmailOnBugReportSubmission = functions.firestore
  .document("bugreport/{submissionId}")
  .onCreate((snap: { data: () => any; }, context: any) => {
    const data = snap.data();
    const mailOptions = {
      from: functions.config().email.user,
      to: "cameronjack@protonmail.com",
      subject: `[PORTFOLIO] Bug Report from ${data.name}`,
      text: `
      Name: ${data.name}\n
      Email: ${data.email}\n
      Nature of Problem: ${data.type}\n
      Description: ${data.description}\n
      Reproduction: ${data.reproduction}\n
      [IMPORTANT] Level: ${data.level}\n
      `,
    };

    return transporter.sendMail(mailOptions)
      .then(() => console.log("Bug report FYI email sent successfully"))
      .catch((error: any) => console.error("Error sending bug report FYI email:", error));
  });

  