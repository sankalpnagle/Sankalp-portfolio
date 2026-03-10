import nodemailer from "nodemailer";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setCorsHeaders(req, res) {
  const requestOrigin = req.headers.origin;
  const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://www.codewithsankalp.cv",
    "https://codewithsankalp.cv",
    process.env.CLIENT_ORIGIN,
  ].filter(Boolean);

  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    res.setHeader("Access-Control-Allow-Origin", requestOrigin);
    res.setHeader("Vary", "Origin");
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};
  const to = String(body.to || process.env.CONTACT_TO_EMAIL || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (email && !isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return res.status(500).json({ error: "Email configuration missing" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const safeName = escapeHtml(name || "Website Visitor");
    const safeEmail = email ? escapeHtml(email) : "Not provided";

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      replyTo: email || undefined,
      html: `<div><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p>${safeMessage}</p></div>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error?.message || error);
    return res.status(500).json({ error: "Email failed" });
  }
}
