import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, company, country, updates, blogDigest } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Transport konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // 465 = true, 587 = false
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Mail verschicken
    await transporter.sendMail({
      from: `"OTraze Website" <${process.env.EMAIL_USER}>`,
      to: "contact@otraze.io",
      subject: "New Demo Request - OTraze",
      text: `
New Demo Request from OTraze Website

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Company: ${company || 'Not provided'}
- Country: ${country || 'Not provided'}

Preferences:
- Product Updates: ${updates ? 'Yes' : 'No'}
- Blog Digest: ${blogDigest ? 'Yes' : 'No'}

This request was submitted from the OTraze website demo form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0582fb;">New Demo Request - OTraze</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Country:</strong> ${country || 'Not provided'}</p>
          </div>
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Preferences:</h3>
            <p><strong>Product Updates:</strong> ${updates ? 'Yes' : 'No'}</p>
            <p><strong>Blog Digest:</strong> ${blogDigest ? 'Yes' : 'No'}</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This request was submitted from the OTraze website demo form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Fehler beim Senden" });
  }
}
