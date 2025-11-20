// api/payments_complete.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { paymentId, txid } = req.body || {};
  if (!paymentId || !txid) return res.status(400).json({ error: "Missing paymentId or txid" });

  const KEY = process.env.PI_API_KEY;
  if (!KEY) return res.status(500).json({ error: "PI_API_KEY not configured" });

  try {
    const resp = await fetch(`https://api.minepi.com/v2/payments/${encodeURIComponent(paymentId)}/complete`, {
      method: "POST",
      headers: {
        "Authorization": `Key ${KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ txid })
    });
    const j = await resp.json();
    return res.status(resp.ok ? 200 : 400).json(j);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || err });
  }
}
