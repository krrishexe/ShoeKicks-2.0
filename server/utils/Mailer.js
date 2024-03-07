const nodemailer = require('nodemailer')
const bcryptjs = require('bcryptjs')
const {User} = require('../models/User')

const sendMail = async ({ email, emailType, userId }) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)
        console.log(hashedToken)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            }, { new: true, runValidators: true })

        }
        else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            }, { new: true, runValidators: true })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "aa00a777b7613e",
              pass: "027b74675e634f"
            }
          });

        const mailOptions = {
            from: 'aryan.yadav.9889@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
            html:emailType === 'VERIFY' ? `<p>Click on the link to verify your email <a href="http://localhost:3000/verifyemail?token=${hashedToken}">here</a> to verify your email or copy paste the link in your browser. <br> http://localhost:3000/verifyemail?token=${hashedToken}</p>` :
            `<p>Click on the link to reset your password <a href="http://localhost:3000/confirmpassword?token=${hashedToken}">here</a> to reset your password or copy paste the link in your browser. <br> http://localhost:3000/confirmpassword?token=${hashedToken}</p>`
        }

        const mailResponse = await transport.sendMail(mailOptions)
        return mailResponse;

    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}


module.exports = sendMail