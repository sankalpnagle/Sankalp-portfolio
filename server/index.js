import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Blocked by CORS policy"));
    },
  }),
);

app.use(express.json({ limit: "1mb" }));

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

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const body = req.body || {};

  const to = String(body.to || process.env.CONTACT_TO_EMAIL || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();

  if (!to || !subject || !message) {
    res.status(400).json({ error: "Missing fields" });
    return;
  }

  if (email && !isValidEmail(email)) {
    res.status(400).json({ error: "Invalid email" });
    return;
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    res.status(500).json({ error: "Email configuration missing" });
    return;
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

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error?.message || error);
    res.status(500).json({ error: "Email failed" });
  }
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
