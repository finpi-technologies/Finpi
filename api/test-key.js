// api/test-key.js
export default function handler(req, res) {
  const key = process.env.PI_API_KEY || "";
  if (key) {
    return res.status(200).json({ ok: true, sample: key.slice(0, 8) + "..." });
  } else {
    return res.status(500).json({ ok: false, error: "PI_API_KEY not set" });
  }
}
