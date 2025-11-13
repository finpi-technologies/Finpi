import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Finpi Backend Running ✅");
});

// Login simulation
app.post("/login", (req, res) => {
  const { userId } = req.body;
  if (userId) {
    res.json({ success: true, message: "Login successful", userId });
  } else {
    res.status(400).json({ success: false, message: "Missing userId" });
  }
});

// Payment simulation
app.post("/pay", (req, res) => {
  const { amount, sender, receiver } = req.body;
  if (amount && sender && receiver) {
    res.json({
      success: true,
      message: "Payment successful on Pi Testnet 💸",
      details: { amount, sender, receiver },
    });
  } else {
    res.status(400).json({ success: false, message: "Invalid payment data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Finpi Backend running on port ${PORT}`));
