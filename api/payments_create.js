// /api/payments_create.js

export default async function handler(req, res) {
  try {
    const { amount, memo, metadata } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    // Return payment object for Pi.createPayment()
    res.status(200).json({
      amount,
      memo,
      metadata
    });

  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
}
