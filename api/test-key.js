export default function handler(req, res) {
  const key = process.env.PI_API_KEY;
  if (key) {
    res.status(200).json({
      message: "✅ API key is active and accessible",
      sample: key.slice(0, 10) + "...",
    });
  } else {
    res.status(500).json({ error: "❌ API key not found" });
  }
}
