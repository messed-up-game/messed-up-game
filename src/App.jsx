// src/App.jsx — Featured video + Join button + Featured Links + Ghana section + Solo mode
import { useState } from "react";
import LinkGrid from "./components/LinkGrid";
import MessedUpGameSoloVsComputer from "./components/MessedUpGameSoloVsComputer";

export default function App() {
  // ——— editable constants ———
  const CHANNEL_URL = "https://www.youtube.com/@Messedupgame";
  const FEATURE_VIDEO_ID = "stZm5AH791I"; // featured video
  const STREAMYARD_GUEST_LINK = "https://streamyard.com/6u894xi3cw";

  // Signup form + contact email
  const SIGNUP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfqJPAGUKaNWNvolnoEQFRYGmpu6Y2_UyLkGDzfun3hf2RinQ/viewform?usp=header";
  const CONTACT_EMAIL = "mailto:tombutler@messedupgame.com";

  // Solo / home toggle
  const [mode, setMode] = useState("home"); // "home" | "solo"

  // ——— Home page data ———
  const links = [
    { title: "Newsletter", href: "/newsletter/", desc: "Latest stories & show times" },
    { title: "Join Live on StreamYard", href: STREAMYARD_GUEST_LINK, desc: "First 9 get on camera" },
    { title: "Messed Up Game — Sign Up", href: SIGNUP_FORM_URL, desc: "Fill out the form to play" },
    { title: "Got Backup Tom B", href: "https://gotbackuptomb.com", desc: "Cloud backup & storage", affiliate: true },
  ];

  // ——— shared styles ———
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#020617",
    color: "white",
    padding: "24px 16px",
  };

  const containerStyle = { maxWidth: 1100, margin: "0 auto" };

  const buttonStyle = {
    background: "#22c55e",
    color: "#041b0a",
    border: "none",
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 800,
    cursor: "pointer",
  };

  const ghostButtonStyle = {
    background: "transparent",
    color: "white",
    border: "1px solid rgba(255,255,255,.2)",
    padding: "10px 14px",
    borderRadius: 12,
    fontWeight: 700,
    cursor: "pointer",
  };

  // ——— Solo mode screen ———
  if (mode === "solo") {
    return (
      <main style={pageStyle}>
        <div style={containerStyle}>
          <nav
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <button style={ghostButtonStyle} onClick={() => setMode("home")}>
              ← Back Home
            </button>

            <div style={{ display: "flex", gap: 10 }}>
              <a
                href={SIGNUP_FORM_URL}
                target="_blank"
                rel="noreferrer"
                style={{ ...ghostButtonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
              >
                Sign Up
              </a>
              <a
                href={STREAMYARD_GUEST_LINK}
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
              >
                Join Live
              </a>
            </div>
          </nav>

          <MessedUpGameSoloVsComputer />
        </div>
      </main>
    );
  }

  // ——— Home screen ———
  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <header style={{ marginBottom: 18 }}>
          <h1 style={{ margin: 0, fontSize: "2.1rem", fontWeight: 900 }}>
            The Messed Up Game
          </h1>
          <p style={{ marginTop: 8, opacity: 0.9 }}>
            Family-friendly, hilarious, and brain-boosting — play live or solo.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
            <a
              href={STREAMYARD_GUEST_LINK}
              target="_blank"
              rel="noreferrer"
              style={{ ...buttonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              Join Live on StreamYard
            </a>

            <button style={ghostButtonStyle} onClick={() => setMode("solo")}>
              Play Solo (vs Computer)
            </button>

            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              style={{ ...ghostButtonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              YouTube Channel
            </a>
          </div>
        </header>
        {/* Big Newsletter button */}
<a
  href="/newsletter/"
  style={{
    display: "block",
    maxWidth: 560,
    margin: "0 auto 22px",
    padding: "18px 22px",
    fontSize: 22,
    fontWeight: 900,
    textAlign: "center",
    borderRadius: 16,
    textDecoration: "none",
    background: "#7bdff6",
    color: "#0b0b0b",
    border: "3px solid rgba(255,255,255,0.35)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
  }}
>
  📩 JOIN THE NEWSLETTER
</a>

{/* Big Join Team button */}
<a
  href="#join-team"
  style={{
    display: "block",
    maxWidth: 560,
    margin: "0 auto 14px",
    padding: "18px 22px",
    fontSize: 22,
    fontWeight: 900,
    textAlign: "center",
    borderRadius: 16,
    textDecoration: "none",
    background: "#22c55e",
    color: "#041b0a",
    border: "3px solid rgba(255,255,255,0.20)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
  }}
>
  🏆 JOIN OUR MESSED UP TEAM
</a>

        {/* Featured video */}
        <section style={{ marginBottom: 22 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <iframe
              title="Featured Video"
              src={`https://www.youtube.com/embed/${FEATURE_VIDEO_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </section>
{/* Join Team signup section */}
<section
  id="join-team"
  style={{
    maxWidth: 560,
    margin: "0 auto 22px",
    padding: 16,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.03)",
  }}
>
  <h2 style={{ margin: "0 0 8px", fontSize: "1.35rem", fontWeight: 900 }}>
    Join our Messed Up Team 🎉
  </h2>

  <p style={{ margin: "0 0 12px", opacity: 0.9, lineHeight: 1.35 }}>
    Sign up with your email address to win free prizes and see our newest videos!
    <br />
    If you join me for a live game, we’ll give you a <b>FREE Deck of MUG Cards</b> 🎁
  </p>

  <form name="live-signup" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="live-signup" />

    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        style={{
          flex: "1 1 260px",
          padding: "12px 14px",
          fontSize: 16,
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,.18)",
          background: "rgba(0,0,0,.25)",
          color: "white",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "12px 16px",
          fontSize: 16,
          fontWeight: 900,
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
          background: "#22c55e",
          color: "#041b0a",
        }}
      >
        Join & Win
      </button>
    </div>
  </form>
</section>

        {/* Links grid */}
        <section style={{ marginBottom: 22 }}>
          <h2 style={{ margin: "0 0 10px", fontSize: "1.4rem", fontWeight: 900 }}>
            Quick Links
          </h2>
          <LinkGrid links={links} />
        </section>

        {/* Ghana section */}
        <section
          style={{
            marginTop: 10,
            padding: 16,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,.1)",
            background: "rgba(255,255,255,.03)",
          }}
        >
          <h2 style={{ margin: "0 0 8px", fontSize: "1.4rem", fontWeight: 900 }}>
            Ghana 🇬🇭
          </h2>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Want to play or host a game in Ghana? Hit me up and I’ll get you the details.
          </p>
          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={SIGNUP_FORM_URL}
              target="_blank"
              rel="noreferrer"
              style={{ ...ghostButtonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              Sign Up to Play
            </a>
            <a
              href={CONTACT_EMAIL}
              style={{ ...ghostButtonStyle, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              Email Me
            </a>
          </div>
        </section>

        <footer style={{ marginTop: 28, opacity: 0.75, fontSize: 12 }}>
          © {new Date().getFullYear()} Messed Up Game • Contact:{" "}
          <a href={CONTACT_EMAIL} style={{ color: "white" }}>
            tombutler@messedupgame.com
          </a>
        </footer>
      </div>
    </main>
  );
}
