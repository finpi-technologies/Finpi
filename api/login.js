export default function handler(req, res) {
  if (req.method === "POST") {
    const { userId, username } = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, message: "Missing userId" });
    }
    res.status(200).json({
      success: true,
      message: "Login successful ✅",
      user: { userId, username },
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
