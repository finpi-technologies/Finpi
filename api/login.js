export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { user } = req.body || {};
  if (!user) return res.status(400).json({ error: "Missing user" });
  // For demo: return the user info. In production save session + DB.
  return res.status(200).json({ success: true, user: { id: user.id || user.userId, username: user.username || user.name } });
}
