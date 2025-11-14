// api/metadata.js
export default function handler(req, res) {
  res.status(200).json({
    name: "Finpi",
    description: "Finpi — secure Testnet fintech powered by Pi Network.",
    icon: "https://finpi.vercel.app/logo.png",
    permissions: ["payments"],
  });
}
