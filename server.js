import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5174', 'http://localhost:5173', 'https://otraze.io', 'https://www.otraze.io'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true = 465, false = 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Input sanitization function
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 1000); // Limit length
};

// Email endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, country, updates, blogDigest } = req.body;

    // Input validation
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Sanitize all inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: sanitizeInput(company),
      country: sanitizeInput(country),
      updates: Boolean(updates),
      blogDigest: Boolean(blogDigest)
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const mailOptions = {
      from: `"OTraze Website" <${process.env.EMAIL_USER}>`,
      to: 'contact@otraze.io',
      subject: 'New Demo Request - OTraze',
      text: `
New Demo Request from OTraze Website

Contact Information:
- Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
- Email: ${sanitizedData.email}
- Phone: ${sanitizedData.phone || 'Not provided'}
- Company: ${sanitizedData.company || 'Not provided'}
- Country: ${sanitizedData.country || 'Not provided'}

Preferences:
- Product Updates: ${sanitizedData.updates ? 'Yes' : 'No'}
- Blog Digest: ${sanitizedData.blogDigest ? 'Yes' : 'No'}

This request was submitted from the OTraze website demo form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0582fb;">New Demo Request - OTraze</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Phone:</strong> ${sanitizedData.phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${sanitizedData.company || 'Not provided'}</p>
            <p><strong>Country:</strong> ${sanitizedData.country || 'Not provided'}</p>
          </div>
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Preferences:</h3>
            <p><strong>Product Updates:</strong> ${sanitizedData.updates ? 'Yes' : 'No'}</p>
            <p><strong>Blog Digest:</strong> ${sanitizedData.blogDigest ? 'Yes' : 'No'}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This request was submitted from the OTraze website demo form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Service temporarily unavailable' });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});
