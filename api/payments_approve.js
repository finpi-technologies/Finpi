export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { paymentId } = req.body || {};
  if (!paymentId) return res.status(400).json({ error: "Missing paymentId" });
  console.log('approve request', paymentId);
  // In production call Pi API to approve (use PI_API_KEY). For test, respond OK.
  return res.status(200).json({ ok: true, paymentId });
}
