export default function handler(req, res) {
  const apiKey = process.env.PI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: "❌ No API key found" });
  }

  res.status(200).json({
    message: "✅ API key is active and accessible",
    sample: apiKey.slice(0, 6) + "... (hidden)",
  });
}
