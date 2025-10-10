{/* LIVE SIGN-UP (Netlify Forms) */}
<form
  name="live-signup"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  style={{
    maxWidth: 700,
    margin: "2rem auto",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 12,
    padding: "1rem",
  }}
>
  {/* Netlify needs these hidden inputs at build-time */}
  <input type="hidden" name="form-name" value="live-signup" />
  <p hidden>
    <label>
      Don’t fill this out: <input name="bot-field" />
    </label>
  </p>

  <h2 style={{ marginTop: 0 }}>🎥 Sign Up To Play Live</h2>
  <p style={{ opacity: 0.9, marginTop: 0 }}>
    Drop your info and we’ll invite you to join the next live show.
  </p>

  <div style={{ display: "grid", gap: "0.75rem" }}>
    <label style={{ textAlign: "left" }}>
      Your Name
      <input
        type="text"
        name="name"
        required
        placeholder="Wildman Tom B"
        style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #555" }}
      />
    </label>

    <label style={{ textAlign: "left" }}>
      Email (for the invite link)
      <input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #555" }}
      />
    </label>

    <label style={{ textAlign: "left" }}>
      Why you’d be great on the show (optional)
      <textarea
        name="note"
        rows="3"
        placeholder="Speed on emojis, Bible trivia beast, etc."
        style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #555" }}
      />
    </label>

    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <input type="checkbox" name="consent" required />
      I agree to appear on stream and recording.
    </label>

    <button
      type="submit"
      style={{
        background: "#00e5ff",
        color: "#000",
        fontWeight: 700,
        border: "none",
        borderRadius: 10,
        padding: "0.8rem 1.2rem",
        cursor: "pointer",
        boxShadow: "0 0 10px #00e5ff",
      }}
    >
      🚀 Request to Join Live
    </button>
  </div>
</form>
