// Netlify Identity "identity-signup" trigger.
// Netlify calls this function automatically whenever someone submits the
// sign-up form, BEFORE the account is created. Returning a non-200 status
// blocks the signup entirely, so this is what enforces "university email
// addresses only" — the Identity widget itself has no built-in domain check.
//
// No extra configuration is needed for Netlify to find this function: it is
// wired up purely by the file name (identity-signup.js) living in the
// functions directory declared in netlify.toml.

// Edit this list to match every domain your group members sign up with.
const ALLOWED_DOMAINS = ["univie.ac.at"];

exports.handler = async (event) => {
  let payload;
  try {
    payload = JSON.parse(event.body).user;
  } catch (err) {
    return { statusCode: 400, body: "Invalid signup payload" };
  }

  const email = (payload && payload.email || "").toLowerCase().trim();
  const domain = email.split("@")[1] || "";
  const isAllowed = ALLOWED_DOMAINS.some((allowed) => domain === allowed.toLowerCase());

  if (!isAllowed) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        error: "Sign-up is restricted to " + ALLOWED_DOMAINS.join(", ") + " email addresses.",
      }),
    };
  }

  // Allowed: let the signup through, and tag the account with a "member"
  // role so it can be used later for role-based access (e.g. in _redirects
  // rules like "/members-only/* role=member 200").
  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: { roles: ["member"] },
    }),
  };
};
