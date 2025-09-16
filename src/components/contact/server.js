import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ⚠️ Pune aici datele tale Gmail + parola de aplicație
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "artmaster.manager.md@gmail.com",
    pass: "dklx cpfv gfnx rgjt", // App password, nu parola normală
  },
});

app.post("/send", async (req, res) => {
  const { nume, prenume, email, mesaj } = req.body;

  if (!nume || !prenume || !email || !mesaj) {
    return res.status(400).json({ success: false, message: "Toate câmpurile sunt obligatorii." });
  }

  try {
    await transporter.sendMail({
      from: `"${nume} ${prenume}" <${email}>`,
      to: "artmaster.manager.md@gmail.com",
      subject: `Mesaj nou de pe site!!`,
      text: `
        Nume: ${nume}
        Prenume: ${prenume}
        Email: ${email}
        Mesaj: ${mesaj}
      `,
    });

    res.status(200).json({ success: true, message: "✅ Email trimis cu succes!" });
  } catch (error) {
    console.error("Eroare la trimiterea emailului:", error);
    res.status(500).json({ success: false, message: "❌ Eroare server la trimiterea emailului." });
  }
});

app.listen(3001, () => {
  console.log("🚀 Backend server rulează pe http://localhost:3001");
});