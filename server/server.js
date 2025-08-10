import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

app.post('/send', async (req, res) => {
    const { name, email, phone, company, message } = req.body;

    if (!validateEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            replyTo: email,
            subject: 'New Contact Form Submission',
            html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
