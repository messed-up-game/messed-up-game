// src/App.jsx 
import { useState } from "react";
import SocialBar from "./components/SocialBar";
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
  
  const CONTACT_EMAIL = "mailto:tom@messedupgame.com";

  const SOCIAL_LINKS = [
    { label: "YouTube", href: "https://www.youtube.com/@Messedupgame" },
    { label: "Instagram", href: "https://www.instagram.com/messed_up_game/" },
    { label: "Facebook", href: "https://www.facebook.com/messedupgametomb/" },
    { label: "X", href: "https://x.com/saveplanetusa" },
    { label: "TikTok", href: "https://www.tiktok.com/@messedupgamelivewildman" },
    { label: "Threads", href: "https://www.threads.net/@messed_up_game" },
  ];

  // Mark Wahlberg prayer short
  const PRAYER_SHORT_URL = "https://youtube.com/shorts/tA4mF_4hBJs";
  const PRAYER_SHORT_ID = "tA4mF_4hBJs";

  // Benefits doc button
  const BENEFITS_DOC_URL =
    "https://docs.google.com/document/d/1_Ly_ar7Hq-gzW7DM5bHNBv6Pc9TQg5boYjSiB95polk/view";

// "home" | "solo" | "newsletter" | "poster" | "sponsors"
const [mode, setMode] = useState("home");

  const links = [
    {
      title: "Join Live on StreamYard",
      href: STREAMYARD_GUEST_LINK,
      desc: "First 9 get on camera",
    },
    {
      title: "Messed Up Game — Sign Up",
      href: SIGNUP_FORM_URL,
      desc: "Fill out the form to play",
    },
    {
      title: "Got Backup Tom B",
      href: "https://gotbackuptomb.com",
      desc: "Cloud backup & storage",
      affiliate: true,
    },
    {
      title: "MOSH Brain Bars",
      href: "https://moshlife.com/",
      desc: "Brain fuel sponsor 🧠",
    },
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
              flexWrap: "wrap",
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

          <SocialBar />

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
            <p style={{ marginTop: 12, opacity: 0.95, lineHeight: 1.5 }}>
              Want this hosted at your senior community or in-home care group?{" "}
              <a
                href={CONTACT_EMAIL}
                style={{
                  color: "#7bdff6",
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                Send us an email
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+13106287889"
                style={{
                  color: "#7bdff6",
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                310-628-7889
              </a>
              .
            </p>

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
            <a
              href={CONTACT_EMAIL}
              style={{ color: "#7bdff6", textDecoration: "none" }}
            >
              {CONTACT_EMAIL.replace("mailto:", "")}
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
          <nav
            style={{
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
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
          
{/* 🌍 Now Hiring (anchor target) */}
  <section
  id="now-hiring"
  style={{
    scrollMarginTop: 90,
    marginBottom: 18,
    padding: "14px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    boxShadow: "0 10px 24px rgba(0,0,0,.25)",
  }}
>
  <h2 style={{ margin: "0 0 8px", fontSize: "1.6rem", fontWeight: 900 }}>
    🌍 Now Hiring – Hosts & Sales Reps Worldwide
  </h2>

  <p style={{ opacity: 0.92, maxWidth: 700, marginTop: 0 }}>
    We’re expanding <b>The Messed Up Game</b>, a fun, family-friendly,
    brain-boosting live game show, and we’re hiring:
  </p>

  <p style={{ marginTop: 8, lineHeight: 1.5 }}>
    🎤 <b>Hosts / Actors / Comedians</b>
    <br />
    💼 <b>Sales Reps (Sponsorships &amp; Bookings)</b>
  </p>

  <p style={{ marginTop: 8, fontWeight: 900 }}>
    Part-time • Contract • Remote + Local Opportunities
  </p>

  <p style={{ marginTop: 8 }}>
    📧 Questions?{" "}
    <a
      href="mailto:tom@messedupgame.com"
      style={{ color: "#7bdff6", textDecoration: "none", fontWeight: 900 }}
    >
      tom@messedupgame.com
    </a>
  </p>
</section>

<h1 style={{ margin: "0 0 8px", fontSize: "2rem", fontWeight: 900 }}>
  📰 Newsletter
</h1>

          <p style={{ opacity: 0.9, maxWidth: 700 }}>
            Read the latest updates and stories. No signup required.
          </p>
<button
  style={{
    ...ghostButtonStyle,
    display: "block",
    maxWidth: 560,
    margin: "6px auto 14px",
    fontWeight: 900,
  }}
  onClick={() => setMode("sponsors")}
>
  ⭐ Our Sponsors & Advertisers
</button>

          {/* 🙏 Mark Wahlberg Prayer Short */}
          <section
            style={{
              maxWidth: 420,
              margin: "16px auto",
              padding: 16,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(255,255,255,.04)",
              boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            }}
          >
            <h2
              style={{ margin: "0 0 10px", fontSize: "1.25rem", fontWeight: 900 }}
            >
              🙏 Prayer for Strength (Mark Wahlberg)
            </h2>

            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "177.78%", // 9:16
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,.10)",
                boxShadow: "0 10px 24px rgba(0,0,0,.35)",
                background: "rgba(0,0,0,.35)",
              }}
            >
              <iframe
                title="Mark Wahlberg Prayer Short"
                src={`https://www.youtube.com/embed/${PRAYER_SHORT_ID}`}
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

            <a
              href={PRAYER_SHORT_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: 12,
                padding: "10px 14px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 900,
                background: "#22c55e",
                color: "#041b0a",
              }}
            >
              Watch on YouTube
            </a>
          </section>

          {/* Latest Update */}
          <section
            style={{
              maxWidth: 720,
              margin: "16px auto 16px",
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(255,255,255,.05)",
              boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 900 }}>
                🧠 What Actually Helps the Brain (The Non-Pill Truth)
              </h2>
              <span style={{ opacity: 0.8, fontWeight: 700 }}>January 2026</span>
            </div>

            <p style={{ margin: "12px 0 12px", lineHeight: 1.55, opacity: 0.95 }}>
              As we age, it’s easy to think supplements are the main answer for
              memory and brain health. While they can help, research and real-world
              experience show that{" "}
              <strong>daily habits matter even more</strong>.
            </p>

            <ul
              style={{
                margin: "0 0 12px",
                paddingLeft: 18,
                lineHeight: 1.6,
                opacity: 0.95,
              }}
            >
              <li>
                🧠 <strong>Cognitive play</strong> – word games, categories, light
                thinking (games like <strong>The Messed Up Game</strong> truly matter)
              </li>
              <li>🚶‍♂️ <strong>Light daily movement</strong> – walking, stretching</li>
              <li>😴 <strong>Sleep consistency</strong> – consistent bedtime/wake</li>
              <li>😄 <strong>Social interaction &amp; laughter</strong> – connection &amp; joy</li>
            </ul>

            <p style={{ margin: "0 0 12px", fontWeight: 800, opacity: 0.98 }}>
              These habits often outperform pills alone.
            </p>

            <a
              href="/What_Actually_Helps_the_Brain_Most_Senior_Handout.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 6,
                padding: "12px 16px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 900,
                background: "#22c55e",
                color: "#041b0a",
                boxShadow: "0 10px 24px rgba(0,0,0,.25)",
              }}
            >
              📄 Download the Free One-Page Handout
            </a>
          </section>

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
              The <strong>Messed Up Game</strong> is a live, hosted, brain-engagement
              group activity designed to bring laughter, connection, and cognitive
              stimulation.
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
              <span style={{ fontWeight: 800, fontStyle: "normal" }}>
                — Bill Gibson
              </span>
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
              “I love this game… it definitely makes my brain do things it’s never
              done before.”
              <br />
              <span style={{ fontWeight: 800, fontStyle: "normal" }}>
                — Jim Henderson
              </span>
            </blockquote>
          </section>

          {/* ✅ Got Backup banner */}
          <GotBackupBannerAd />

          {/* ✅ Newsletter signup */}
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

            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/?newsletter=success"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" />

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
 } // ✅ end Newsletter screen

  // ——— Sponsors screen ———
  if (mode === "sponsors") {
    return (
      <main style={pageStyle}>
        <div style={containerStyle}>
          <nav
            style={{
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <button
              style={ghostButtonStyle}
              onClick={() => setMode("newsletter")}
            >
              ← Back to Newsletter
            </button>

            <button style={ghostButtonStyle} onClick={() => setMode("home")}>
              ← Back Home
            </button>
          </nav>

          <h1 style={{ margin: "0 0 10px", fontSize: "2rem", fontWeight: 900 }}>
            ⭐ Our Sponsors & Advertisers
          </h1>

          <p style={{ opacity: 0.9, maxWidth: 760 }}>
            Thanks to our amazing sponsors who help us bring brain-boosting fun to
            communities everywhere.
          </p>

          {/* MOSH */}
          <section
            style={{
              maxWidth: 760,
              margin: "16px auto",
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(255,255,255,.06)",
              boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            }}
          >
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "1.35rem",
                fontWeight: 900,
              }}
            >
              MOSH Brain Bars 🧠
            </h2>

            <p style={{ margin: "0 0 12px", opacity: 0.95, lineHeight: 1.55 }}>
              Brain fuel sponsor — support the brands that support brain health.
            </p>

            <a
              href="https://moshlife.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 900,
                background: "#facc15",
                color: "#111827",
                boxShadow: "0 10px 24px rgba(0,0,0,.25)",
              }}
            >
              Visit MOSH
            </a>
          </section>

          {/* Joyful Dog Lover */}
          <section
            style={{
              maxWidth: 760,
              margin: "16px auto",
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(255,255,255,.04)",
              boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            }}
          >
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "1.35rem",
                fontWeight: 900,
              }}
            >
              Joyful Dog Lover 🐶
            </h2>

            <a
              href="https://www.joyfuldoglover.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                maxWidth: 640,
                margin: "10px auto 0",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,.10)",
                textDecoration: "none",
              }}
            >
              <img
                src="/joyful-dog-lover-mup.png"
                alt="Joyful Dog Lover sponsor"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  cursor: "pointer",
                }}
                loading="lazy"
              />
            </a>
          </section>

          <SocialBar />
        </div>
      </main>
    );
  } // ✅ end Sponsors screen

// ——— Home screen (default) ———
return (
  <main style={pageStyle}>
    <div style={containerStyle}>
      {/* 🌍 Hiring Banner */}
      <div
        style={{
          marginBottom: 16,
          padding: "10px 14px",
          borderRadius: 12,
          textAlign: "center",
          fontWeight: 900,
          fontSize: 16,
          background: "linear-gradient(90deg, #22c55e, #16a34a)",
          color: "#041b0a",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
        onClick={() => setMode("newsletter")}
      >
        🌍 Now Hiring – Hosts & Sales Reps (Click)
      </div>

      <header style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0, fontSize: "2.1rem", fontWeight: 900 }}>
          The Messed Up Game
        </h1>

        <p style={{ marginTop: 8, opacity: 0.9 }}>
          Family-friendly, hilarious, and brain-boosting — play live or solo.
        </p>

        {/* 🎥 What is The Messed Up Game? */}
        <section style={{ margin: "22px 0" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: "1.5rem", fontWeight: 900 }}>
            What Is The Messed Up Game?
          </h2>

          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          >
            <iframe
              title="What Is The Messed Up Game"
              src="https://www.youtube.com/embed/ju6fYT3K9tQ"
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

          <p style={{ marginTop: 12, opacity: 0.9 }}>
            A simple, hilarious party game you can play anywhere — no cards required.
          </p>
        </section>

        {/* ✅ Home buttons row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 12,
          }}
        >
          <a
            href={STREAMYARD_GUEST_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              ...buttonStyle,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
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
            href={PRAYER_SHORT_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ghostButtonStyle,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            🙏 Mark Wahlberg Prayer
          </a>

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ghostButtonStyle,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            YouTube Channel
          </a>
        </div>
                {/* 🇬🇭 Ghana Pilot link (Home) */}
        <div style={{ marginTop: 12 }}>
          <a
            href="https://docs.google.com/document/d/1yvYkjTuWzVMmb6W9V4j6mNO88rYbE45FI0LY8dq3jr4/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              ...ghostButtonStyle,
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            🇬🇭 Weekly Play at Royal Olive Court (Ghana)
          </a>

          <p style={{ marginTop: 8, opacity: 0.85, fontSize: 14 }}>
            Local printing • Weekly play • Community sponsors
          </p>
        </div>

        {/* Social links (Home page) */}
        <div style={{ marginTop: 14, textAlign: "center" }}>
          <p style={{ margin: "10px 0 8px", fontWeight: 800 }}>
            Follow The Messed Up Game
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {(SOCIAL_LINKS || []).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 800,
                  border: "2px solid rgba(255,255,255,0.25)",
                  background: "rgba(0,0,0,0.25)",
                  color: "white",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </header>

           <footer style={{ marginTop: 28, opacity: 0.75, fontSize: 12 }}>
        © {new Date().getFullYear()} Messed Up Game • Contact:{" "}
        <a href={CONTACT_EMAIL} style={{ color: "white" }}>
          {CONTACT_EMAIL.replace("mailto:", "")}
        </a>
      </footer>
      

    </div>
  </main>
);

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

          {/* Clickable poster image preview */}
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
  

{/* Button under Hesperia poster on home */}
<div style={{ textAlign: "center", margin: "8px 0 0" }}>
  <a
    href={BENEFITS_DOC_URL}
    target="_blank"
    rel="noreferrer"
    style={{
      display: "inline-block",
      padding: "12px 24px",
      borderRadius: 999,
      fontWeight: 700,
      fontSize: 18,
      textDecoration: "none",
      background: "#facc15",
      color: "#111827",
      boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
    }}
  >
            Benefits for Seniors, Churches &amp; More
          </a>
        </div>

        {/* Benefits section on home (keep it) */}
        <section
          id="benefits"
          style={{
            maxWidth: 900,
            margin: "40px auto 60px",
            padding: "24px 20px",
            borderRadius: 16,
            background: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>
            How The Messed Up Game Helps Your Community
          </h2>
          <p style={{ textAlign: "center", marginBottom: 20, opacity: 0.9 }}>
            Fun, fast, and brain-boosting for seniors, churches, schools, bars
            &amp; more.
          </p>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                Senior Homes &amp; Communities
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Weekly 60–90 minute brain-boost game hour.</li>
                <li>
                  Up to <strong>40 residents</strong> can play in the room at once.
                </li>
                <li>
                  Up to <strong>9 players</strong> live online with Wildman Tom B.
                </li>
                <li>
                  Host uses a big whiteboard to track names &amp; strikes (3 strikes
                  and you’re out, but you can stay and watch).
                </li>
                <li>
                  Solo players just click the link – no code needed. Reach{" "}
                  <strong>50 points</strong> and earn a free deck!
                </li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                Churches &amp; Faith Groups
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Family-friendly and faith-friendly fun.</li>
                <li>
                  Includes <strong>Books of the New Testament</strong> as a category.
                </li>
                <li>Great for seniors, youth nights, small groups &amp; game nights.</li>
                <li>Builds fellowship while waking up the amazing brain God gave us.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                Schools &amp; Youth Programs
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Supports memory, vocabulary, and quick thinking.</li>
                <li>Works for classrooms, after-school programs, and clubs.</li>
                <li>Kids love the speed; teachers love the engagement.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: 20, marginBottom: 6 }}>
                Bars, Cafés &amp; Social Venues
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>A fresh spin on traditional trivia night.</li>
                <li>Keeps guests hanging out longer and talking to each other.</li>
                <li>Easy to run with a host, a whiteboard, and prizes.</li>
                <li>Perfect for theme nights, tournaments, or sponsor tie-ins.</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: 24, textAlign: "center" }}>
            Want to see how this could work in your place? Email{" "}
            <a
              href="mailto:tom@messedupgame.com"
              style={{ color: "#facc15", fontWeight: 600 }}
            >
              tom@messedupgame.com
            </a>{" "}
            to schedule a quick demo.
          </p>
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
  {CONTACT_EMAIL.replace("mailto:", "")}
</a>

          </a>
        </footer>
      </div>
    </main>
  );
}
