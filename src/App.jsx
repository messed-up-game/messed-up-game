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
      <section
        style={{
          width: "100%",
          maxWidth: 1400,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,.12)",
          background: "#111",
        }}
      >
        {/* HERO image */}
        <img
          src="/hero-collage.jpg?v=2"
          alt="Messed Up Game collage"
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {/* Overlay content */}
        <div style={{ padding: "18px 16px", background: "#00000099", color: "#fff" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(1.4rem,3.5vw,2.3rem)", lineHeight: 1.2 }}>
            Messed Up Game — Live Brain Battles
          </h1>
          <p style={{ margin: "8px 0 14px", fontSize: "clamp(1rem,2.2vw,1.2rem)" }}>
            First 5 to sign up play live with Wildman Tom B.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href="mailto:tombutlerandassociates@gmail.com?subject=Join%20the%20live%20taping&body=I%20want%20in!"
              aria-label="Sign up to play live by email"
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 12,
                fontWeight: 700,
                background: "#fff",
                color: "#111",
                border: "1px solid #111",
              }}
            >
              🎟️ Sign up to play live
            </a>

            <a
              href="https://www.youtube.com/@Messedupgame/live"
              target="_blank"
              rel="noreferrer"
              aria-label="Watch Messed Up Game on YouTube Live"
              style={{
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 12,
                fontWeight: 700,
                background: "#fff",
                color: "#e11",
                border: "1px solid #e11",
              }}
            >
              ▶️ Watch on YouTube Live
            </a>
          </div>
        </div>
      </section>

      {/* Netlify form (optional) */}
      <form
        name="live-signup"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        style={{ display: "grid", gap: 12, maxWidth: 520, marginTop: 24 }}
      >
        <input type="hidden" name="form-name" value="live-signup" />
        <input name="bot-field" style={{ display: "none" }} />
        <input type="text" name="name" placeholder="Your name" required style={{ padding: 12, borderRadius: 12, border: "1px solid #ddd" }} />
        <input type="email" name="email" placeholder="Your email" required style={{ padding: 12, borderRadius: 12, border: "1px solid #ddd" }} />
        <textarea name="note" placeholder="Tell me why you want in (optional)" rows={3} style={{ padding: 12, borderRadius: 12, border: "1px solid #ddd" }} />
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input type="checkbox" name="consent" required /> I agree to be contacted about live tapings.
        </label>
        <button type="submit" style={{ padding: "12px 18px", borderRadius: 12, fontWeight: 700, border: "1px solid #111", background: "#111", color: "#fff" }}>
          ✅ Submit
        </button>
      </form>
    </main>
  );
}

