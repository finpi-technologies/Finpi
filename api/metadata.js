export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.status(200).json({
    name: "Finpi",
    description: "Finpi — secure Testnet fintech powered by Pi Network.",
    icon: "https://finpi.vercel.app/logo.png",
    permissions: ["username", "payments"]
  });
}
