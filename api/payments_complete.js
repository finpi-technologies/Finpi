// api/payments_complete.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { paymentId, txid } = req.body || {};
  console.log("Payment complete:", { paymentId, txid });

  return res.status(200).json({ success: true, paymentId, txid });
}
