import { useState } from "react";
import LinkGrid from "./components/LinkGrid";
import MessedUpGameSoloVsComputer from "./components/MessedUpGameSoloVsComputer";
import GotBackupBannerAd from "./components/GotBackupBannerAd";

export default function App() {
  // ——— constants ———
  const CHANNEL_URL = "https://www.youtube.com/@Messedupgame";
  const FEATURE_VIDEO_ID = "stZm5AH791I";
  const STREAMYARD_GUEST_LINK = "https://streamyard.com/6u894xi3cw";

  const SIGNUP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfqJPAGUKaNWNvolnoEQFRYGmpu6Y2_UyLkGDzfun3hf2RinQ/viewform?usp=header";

  const CONTACT_EMAIL = "mailto:tombutler@messedupgame.com";

  // "home" | "solo" | "newsletter" | "poster"
  const [mode, setMode] = useState("home");

  const links = [
    { title: "Join Live on StreamYard", href: STREAMYARD_GUEST_LINK, desc: "First 9 get on camera" },
    { title: "Messed Up Game — Sign Up", href: SIGNUP_FORM_URL, desc: "Fill out the form to play" },
    { title: "Got Backup Tom B", href: "https://gotbackuptomb.com", desc: "Cloud backup & storage", affiliate: true },
    { title: "MOSH Brain Bars", href: "https://moshlife.com/", desc: "Brain fuel sponsor 🧠", sponsor: true },
  ];

  // ——— styles ———
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

  // ——— Solo screen ———
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

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={SIGNUP_FORM_URL}
                target="_blank"
                rel="noreferrer"
                style={{ ...ghostButtonStyle, textDecoration: "none" }}
              >
                Sign Up
              </a>
              <a
                href={STREAMYARD_GUEST_LINK}
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonStyle, textDecoration: "none" }}
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

  // ——— Poster screen ———
  if (mode === "poster") {
    return (
      <main style={pageStyle}>
        <div style={containerStyle}>
          <nav
            style={{
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <button style={ghostButtonStyle} onClick={() => setMode("home")}>
              ← Back Home
            </button>

            <a
              href="/posters/hesperia-poster.webp"
              target="_blank"
              rel="noreferrer"
              style={{ ...buttonStyle, textDecoration: "none" }}
            >
              Open Full Size
            </a>
          </nav>

          <h1 style={{ margin: "0 0 10px", fontSize: "2rem", fontWeight: 900 }}>
            Hesperia Senior Home Poster
          </h1>

          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,.12)",
              boxShadow: "0 10px 24px rgba(0,0,0,.35)",
              background: "rgba(255,255,255,.03)",
            }}
          >
            <img
              src="/posters/hesperia-poster.webp"
              alt="The Messed Up Game poster for Hesperia Senior Home"
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </div>

          <p style={{ marginTop: 14, opacity: 0.9 }}>
            Want to sponsor a deck or host a weekly game? Email me at{" "}
            <a href={CONTACT_EMAIL} style={{ color: "#7bdff6", textDecoration: "none" }}>
              tombutler@messedupgame.com
            </a>
            .
          </p>
        </div>
      </main>
    );
  }

  // ——— Newsletter screen ———
  if (mode === "newsletter") {
    return (
      <main style={pageStyle}>
        <div style={containerStyle}>
          <nav style={{ marginBottom: 16, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <button style={ghostButtonStyle} onClick={() => setMode("home")}>
              ← Back Home
            </button>

            <a
              href={SIGNUP_FORM_URL}
              target="_blank"
              rel="noreferrer"
              style={{ ...buttonStyle, textDecoration: "none" }}
            >
              Sign Up
            </a>
          </nav>

          <h1 style={{ margin: "0 0 8px", fontSize: "2rem", fontWeight: 900 }}>
            📰 Newsletter
          </h1>

          <p style={{ opacity: 0.9, maxWidth: 700 }}>
            Read the latest updates and stories. No signup required.
          </p>

          {/* Program Overview */}
          <section
            style={{
              maxWidth: 720,
              margin: "16px auto 16px",
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(255,255,255,.04)",
              boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            }}
          >
            <h2 style={{ margin: "0 0 10px", fontSize: "1.35rem", fontWeight: 900 }}>
              Program Overview
            </h2>

            <p style={{ margin: 0, lineHeight: 1.5, opacity: 0.95 }}>
              The <strong>Messed Up Game</strong> is a live, hosted, brain-engagement group
              activity designed to bring laughter, connection, and cognitive stimulation.
            </p>
          </section>

          {/* Testimonials */}
          <section
            style={{
              maxWidth: 720,
              margin: "0 auto 18px",
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(255,255,255,.06)",
              boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            }}
          >
            <h2 style={{ margin: "0 0 12px", fontSize: "1.35rem", fontWeight: 900 }}>
              What Players Are Saying
            </h2>

            <blockquote
              style={{
                margin: "0 0 14px",
                paddingLeft: 14,
                borderLeft: "4px solid rgba(34,197,94,.6)",
                fontStyle: "italic",
                opacity: 0.95,
              }}
            >
              “After playing the game at Starbucks with a few of my friends and Tom,
              I noticed that I slept better that night.”
              <br />
              <span style={{ fontWeight: 800, fontStyle: "normal" }}>— Bill Gibson</span>
            </blockquote>

            <blockquote
              style={{
                margin: 0,
                paddingLeft: 14,
                borderLeft: "4px solid rgba(34,197,94,.6)",
                fontStyle: "italic",
                opacity: 0.95,
              }}
            >
              “I love this game… it definitely makes my brain do things it’s never done before.”
              <br />
              <span style={{ fontWeight: 800, fontStyle: "normal" }}>— Jim Henderson</span>
            </blockquote>
          </section>

          {/* ✅ Got Backup banner */}
          <GotBackupBannerAd />

          <section
            style={{
              maxWidth: 560,
              margin: "18px auto 0",
              padding: 16,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.03)",
            }}
          >
            <h2 style={{ margin: "0 0 8px", fontSize: "1.2rem", fontWeight: 900 }}>
              📩 Join the Newsletter (Optional)
            </h2>

            <form name="newsletter" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="newsletter" />
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
                <button type="submit" style={buttonStyle}>
                  Join
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    );
  }

  // ——— Home screen (default) ———
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

            <button style={ghostButtonStyle} onClick={() => setMode("newsletter")}>
              📰 Newsletter
            </button>

            <button style={ghostButtonStyle} onClick={() => setMode("poster")}>
              🪧 Hesperia Poster
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

        {/* Poster preview on home */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto 22px",
            padding: 16,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(255,255,255,.03)",
            boxShadow: "0 10px 24px rgba(0,0,0,.25)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 900 }}>
              🪧 Hesperia Senior Home Poster
            </h2>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button style={buttonStyle} onClick={() => setMode("poster")}>
                View Poster
              </button>
              <a
                href="/posters/hesperia-poster.webp"
                target="_blank"
                rel="noreferrer"
                style={{ ...ghostButtonStyle, textDecoration: "none" }}
              >
                Open Full Size
              </a>
            </div>
          </div>

          <button
            onClick={() => setMode("poster")}
            style={{
              marginTop: 14,
              padding: 0,
              width: "100%",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              borderRadius: 16,
              overflow: "hidden",
            }}
            aria-label="View the Hesperia poster"
          >
            <img
              src="/posters/hesperia-poster.webp"
              alt="Hesperia poster preview"
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </button>
        </section>

        {/* Featured video */}
        <section style={{ marginBottom: 22 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
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
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </section>

        {/* Quick links */}
        <section style={{ marginBottom: 22 }}>
          <h2 style={{ margin: "0 0 10px", fontSize: "1.4rem", fontWeight: 900 }}>
            Quick Links
          </h2>
          <LinkGrid links={links} />
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
