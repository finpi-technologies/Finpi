export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { amount = 0.01, memo = "Finpi Test Payment", metadata = {} } = req.body || {};
  const payment = { amount, memo, metadata };
  return res.status(200).json(payment);
}
