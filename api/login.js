// api/login.js

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user } = req.body || {};

  if (!user) {
    return res.status(400).json({ error: "Missing user" });
  }

  // Example: return user data (you can store in DB later)
  return res.status(200).json({
    success: true,
    user: {
      id: user.uid || user.id || user.userId,
      username: user.username,
    },
  });
}
