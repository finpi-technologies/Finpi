// /api/payments_complete.js

export default async function handler(req, res) {
  try {
    const { paymentId, txid } = req.body;

    if (!paymentId || !txid) {
      return res.status(400).json({ error: "Missing paymentId or txid" });
    }

    console.log("COMPLETED:", paymentId, "TX:", txid);

    // Respond OK
    return res.status(200).json({
      status: "completed",
      paymentId,
      txid
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
