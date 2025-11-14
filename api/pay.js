// api/pay.js
export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { amount, memo, metadata } = req.body || {};
  if (!amount) return res.status(400).json({ error: "Missing amount" });

  return res.status(200).json({ success: true, amount, memo, metadata });
}
