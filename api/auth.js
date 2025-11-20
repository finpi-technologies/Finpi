// api/auth.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = req.body || {};
    // Pi Browser posts an access token; it sometimes uses accessToken or token
    const accessToken = body.accessToken || body.token || body.access_token || (body.auth && body.auth.accessToken);

    if (!accessToken) return res.status(400).json({ error: "Missing accessToken" });

    // Verify access token with Pi platform (user-facing Access Token)
    const meResp = await fetch("https://api.minepi.com/v2/me", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });
    const meJson = await meResp.json();

    if (!meResp.ok) {
      return res.status(400).json({ error: "Token verification failed", detail: meJson });
    }

    // optionally: create session / persist user in DB
    return res.status(200).json({ success: true, user: meJson });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || err });
  }
}
