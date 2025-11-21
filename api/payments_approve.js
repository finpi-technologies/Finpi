// /api/payments_approve.js

export default async function handler(req, res) {
  try {
    const { paymentId } = req.body;

    if (!paymentId) {
      return res.status(400).json({ error: "paymentId missing" });
    }

    console.log("APPROVED:", paymentId);

    // No approval logic required for Testnet
    return res.status(200).json({ status: "approved", paymentId });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
