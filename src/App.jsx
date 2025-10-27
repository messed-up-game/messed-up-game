export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "3rem 1.25rem",
        background: "#faf8f3",
      }}
    >
      <section style={{ width: "100%", maxWidth: 1040 }}>
        <div style={{ display: "grid", gap: 24 }}>
          {/* Flyer */}
          <img
            src="/og-image.jpg?v=5"
            alt="The Messed Up Game flyer"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
          />

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              lineHeight: 1.25,
              margin: 0,
              textAlign: "center",
            }}
          >
            Messed up Game is the ultimate Brain Game — the first 5 people to
            join via email will get to play live with Wildman Tom B.
          </h1>

          {/* Sign-up (Netlify Forms) */}
          <form
            name="live-signup"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            style={{
              display: "grid",
              gap: 12,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            {/* Required hidden input to make Netlify detect the form */}
            <input type="hidden" name="form-name" value="live-signup" />
            {/* Honeypot (hidden) */}
            <input name="bot-field" style={{ display: "none" }} />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={{
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid #ddd",
                fontSize: 16,
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={{
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid #ddd",
                fontSize: 16,
              }}
            />
            <textarea
              name="note"
              placeholder="Tell me why you want in (optional)"
              rows={3}
              style={{
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid #ddd",
                fontSize: 16,
              }}
            />
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="checkbox" name="consent" required /> I agree to be
              contacted about live tapings.
            </label>

            <button
              type="submit"
              style={{
                cursor: "pointer",
                padding: "12px 18px",
                borderRadius: 12,
                fontWeight: 700,
                border: "1px solid #111",
                background: "#111",
                color: "#fff",
              }}
            >
              🎟️ Sign up to play live
            </button>
          </form>

          {/* Watch on YouTube */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="https://www.youtube.com/@YOURHANDLE/live"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 12,
                fontWeight: 700,
                border: "1px solid #e11",
                background: "#fff",
                color: "#e11",
              }}
            >
              ▶️ Watch on YouTube Live
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
