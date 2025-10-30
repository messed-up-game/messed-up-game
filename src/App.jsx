

// src/App.jsx — single-file version with YouTube Live + signup form 
export default function App() {
  const CHANNEL_ID = "UC5NKMIYPLcdvwzPF5ragDKw"; // your channel

  const heroStyles = {
    minHeight: "60vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    background: "linear-gradient(180deg, #0b0b0b 0%, #111 60%, #181818 100%)",
    color: "white",
    textAlign: "center",
  };

  const button = {
    display: "inline-block",
    margin: "12px 8px",
    padding: "14px 20px",
    borderRadius: 12,
    border: "0",
    fontSize: 18,
    cursor: "pointer",
  };

  return (
    <>
      {/* HERO */}
      <header style={heroStyles}>
        <div style={{ maxWidth: 900 }}>
          <h1 style={{ lineHeight: 1.2, marginBottom: 12 }}>
            Messed up Game is the ultimate Brain Game — the first 5 people to join by email will get
            to play live with Wildman Tom B.
          </h1>
          <p style={{ opacity: 0.9, marginBottom: 24 }}>Fast, funny, 10-second brain battles ⚡️</p>

          {/* Buttons */}
          <div>
            <a
              href="https://www.youtube.com/@Messedupgame/live"
              target="_blank"
              rel="noreferrer"
              style={{ ...button, background: "#e11", color: "white" }}
            >
              ▶️ Watch on YouTube
            </a>
            <a href="#signup" style={{ ...button, background: "white", color: "#111" }}>
              ✍️ Join the Game
            </a>
          </div>
        </div>
      </header>

      {/* YOUTUBE LIVE EMBED */}
      <section style={{ maxWidth: 1200, margin: "40px auto", padding: "0 16px" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>Watch the Live Show</h2>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#000" }}>
          <iframe
            title="Messed Up Game — Live"
            src={`https://www.youtube-nocookie.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1&mute=1&modestbranding=1&rel=0`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        </div>
      </section>

      {/* SIMPLE SIGNUP (Netlify Forms) */}
      <section id="signup" style={{ maxWidth: 700, margin: "40px auto 80px", padding: "0 16px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 12 }}>Sign up to play</h2>
        <p style={{ textAlign: "center", marginBottom: 20 }}>
          First 5 to sign up play live! Winner gets a deck of the Messed Up Game cards 🎉
        </p>

        <form
          name="live-signup"
          method="POST"
          data-netlify="true"
          style={{
            display: "grid",
            gap: 12,
            background: "#f7f7f7",
            padding: 20,
            borderRadius: 12,
            border: "1px solid #e5e5e5",
          }}
        >
          <input type="hidden" name="form-name" value="live-signup" />

          <label>
            Name
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
            />
          </label>

          <label>
            Note (optional)
            <textarea
              name="note"
              placeholder="Anything we should know?"
              rows={4}
              style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
            />
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="checkbox" name="consent" required /> I agree to be contacted about the live
            show.
          </label>

          <button
            type="submit"
            style={{ ...button, background: "#111", color: "white", width: "100%", margin: "8px 0 0" }}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}




