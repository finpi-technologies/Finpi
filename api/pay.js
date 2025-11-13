export default function handler(req, res) {
  if (req.method === "POST") {
    const { amount, sender, receiver } = req.body;
    if (!amount || !sender || !receiver) {
      return res.status(400).json({ success: false, message: "Invalid payment data" });
    }

    res.status(200).json({
      success: true,
      message: "Payment simulated successfully 💸",
      details: { amount, sender, receiver },
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
