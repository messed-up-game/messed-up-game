// src/App.jsx — Featured video + Join button + Featured Links + Ghana section + Solo toggle

import { useState } from "react";
import LinkGrid from "./components/LinkGrid";
import MessedUpGameSoloVsComputer from "./components/MessedUpGameSoloVsComputer";

export default function App() {
  // ——— editable constants ———
  const CHANNEL_URL = "https://www.youtube.com/@Messedupgame";
  const FEATURE_VIDEO_ID = "AgnyMhlyxBY"; // featured video
  const STREAMYARD_GUEST_LINK = "https://streamyard.com/6u894xi3cw";

  // New: signup form + contact email
  const SIGNUP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfqJPAGUKaNWNvolnoEQFRYGmpu6Y2_UyLkGDzfun3hf2RinQ/viewform?usp=header";
  const CONTACT_EMAIL = "mailto:tombutler@messedupgame.com";

  // ✅ Solo mode toggle state
  const [mode, setMode] = useState("home");

  // ✅ If Solo mode is active, show the Solo game instead of the homepage
  if (mode === "solo") {
    return (
      <div>
        <div style={{ padding: 12 }}>
          <button
            onClick={() => setMode("home")}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              fontWeight: 700,
              border: "1px solid #ddd",
              background: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,.12)",
            }}
          >
            ← Back to Home
          </button>
        </div>

        <MessedUpGameSoloVsComputer />
      </div>
    );
  }

  const links = [
    {
      title: "Newsletter",
      href: "/newsletter/",
      desc: "Latest stories & show times",
    },
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
  ];

  // ——— simple styles ———
  const hero = {
    minHeight: "60vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    background: "linear-gradient(180deg, #0b0b0b 0%, #111 60%, #181818 100%)",
    color: "white",
    textAlign: "center",
  };
  const h1 = {
    margin: "6px 0 0",
    fontSize: "clamp(28px, 5vw, 44px)",
    fontWeight: 900,
  };
  const p = { opacity: 0.9, marginTop: 6 };
  const btnRow = {
    marginTop: 14,
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  };
  const btn = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: 12,
    background: "#ffffff",
    color: "#111",
    textDecoration: "none",
    fontWeight: 800,
    boxShadow: "0 4px 12px rgba(0,0,0,.25)",
  };
  const btnGhost = {
    ...btn,
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,.5)",
  };
  const videoWrap = {
    width: "min(960px, 92vw)",
    aspectRatio: "16 / 9",
    margin: "16px auto 8px",
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 10px 24px rgba(0,0,0,.35)",
    background: "#000",
  };
  const iframe = { width: "100%", height: "100%", border: 0 };
  const small = { opacity: 0.85, marginTop: 10, fontSize: 14 };

  return (
    <main>
      {/* Optional tiny nav */}
      <nav style={{ maxWidth: 1100, margin: "8px auto 0", padding: "8px 16px" }}>
        <a
          href="/"
          style={{ marginRight: 12, color: "#fff", textDecoration: "none" }}
        >
          Home
        </a>
        <a
          href="/newsletter/"
          style={{ color: "#7bdff6", textDecoration: "none" }}
        >
          Newsletter
        </a>

        {/* ✅ Solo button (toggle approach) */}
        <button
          onClick={() => setMode("solo")}
          style={{
            marginLeft: 12,
            padding: "6px 10px",
            borderRadius: 10,
            fontWeight: 800,
            border: "1px solid rgba(255,255,255,.5)",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
          }}
          title="Play Solo vs Computer"
        >
          Play Solo
        </button>
      </nav>

      {/* HERO: Featured video + CTAs */}
      <section style={hero}>
        <div style={{ width: "100%" }}>
          <h1 style={h1}>messedupgame.com with Wildman Tom B</h1>
          <p style={p}>
            Up to 9 players join on camera. Family-friendly, fast, and hilarious.
          </p>

          <div style={videoWrap}>
            <iframe
              style={iframe}
              src={`https://www.youtube.com/embed/${FEATURE_VIDEO_ID}?rel=0`}
              title="Featured video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div style={btnRow}>
            <a
              href={STREAMYARD_GUEST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={btn}
            >
              Join LIVE (first 9)
            </a>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={btnGhost}
            >
              Watch on YouTube
            </a>
            <a
              href={SIGNUP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={btnGhost}
            >
              Sign up to play
            </a>

            {/* ✅ Optional extra solo CTA in hero row */}
            <button
              onClick={() => setMode("solo")}
              style={btnGhost}
              title="Play Solo vs Computer"
            >
              Play Solo
            </button>
          </div>

          <div style={small}>
            Free to play • 10 seconds per answer • 3 strikes = out • Hosted by
            Wildman Tom B • Ages 12+
          </div>
          <div style={small}>
            Click “Sign up to play” and fill out the short sign-up form with your
            name and best time to play. Tom will email you your private join
            link.
          </div>
          <div style={small}>
            Prefer email? Contact Tom directly at{" "}
            <a
              href={CONTACT_EMAIL}
              style={{ color: "#7bdff6", textDecoration: "underline" }}
            >
              tombutler@messedupgame.com
            </a>
            .
          </div>
        </div>
      </section>

      {/* GHANA SECTION */}
      <section
        id="ghana"
        style={{
          padding: "2.5rem 1rem 3rem",
          backgroundColor: "#020617",
          color: "white",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Banner image */}
          <img
            src="/ghana-income-banner.png"
            alt="Help the people of Ghana multiply their income - Wildman Tom B and The Messed Up Game"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 16,
              marginBottom: "1.75rem",
              display: "block",
            }}
          />

          <h2
            style={{
              fontSize: "1.9rem",
              marginBottom: "1rem",
              fontWeight: 700,
            }}
          >
            🇬🇭 The Ghana Connection — Protect Your Data &amp; Earn Residual
            Income
          </h2>

          <p style={{ marginBottom: "0.75rem" }}>
            Ghana is one of the fastest-growing digital communities in Africa, and
            thousands of students, families, entrepreneurs, creators, and business
            owners rely on their phones every day… but many still lose photos,
            videos, schoolwork, and business files due to phone theft, damage, lost
            devices, or low storage.
          </p>

          <p style={{ marginBottom: "0.75rem" }}>
            That’s exactly why <strong>Got Backup Tom B</strong> is expanding into
            Ghana — to help protect people’s memories AND give them a chance to earn{" "}
            <strong>real residual income</strong> for only{" "}
            <strong>$9.97/month</strong>.
          </p>

          <h3
            style={{
              fontSize: "1.4rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            🚀 What You Get
          </h3>
          <ul style={{ marginLeft: "1.25rem", marginBottom: "0.75rem" }}>
            <li>6TB of cloud storage (split among up to 6 users)</li>
            <li>500GB free to every new customer</li>
            <li>Automatic backups for phones &amp; computers</li>
            <li>24/7 access to all your files</li>
            <li>Earn weekly commissions as an affiliate</li>
            <li>
              Perfect for students (WASSCE), families, businesses &amp; creators
            </li>
          </ul>

          <h3
            style={{
              fontSize: "1.4rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            💡 Why It Matters in Ghana
          </h3>
          <ul style={{ marginLeft: "1.25rem", marginBottom: "0.75rem" }}>
            <li>
              The average income in Ghana is around $500/month, so even a small
              weekly commission makes a huge difference.
            </li>
            <li>
              Many people experience phone theft — automatic backup protects
              everything.
            </li>
            <li>
              Perfect for WASSCE students, teachers, youth groups, ministries, and
              entrepreneurs.
            </li>
          </ul>

          <p style={{ marginTop: "0.75rem" }}>
            🌍{" "}
            <strong>
              Join the Got Backup Ghana team today and protect what matters!
            </strong>
          </p>
          <p style={{ marginBottom: "0.25rem" }}>
            👉{" "}
            <a
              href="https://www.gotbackuptomb.com"
              style={{ color: "#38bdf8", fontWeight: 600 }}
              target="_blank"
              rel="noreferrer"
            >
              www.gotbackuptomb.com
            </a>
          </p>
          <p>
            Contact: <strong>tom@gotbackuptomb.com</strong>
          </p>
        </div>
      </section>

      {/* Featured links grid */}
      <LinkGrid title="Featured Links" items={links} />
    </main>
  );
}
