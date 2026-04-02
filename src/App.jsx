// src/App.jsx
import { useState } from "react";
import SocialBar from "./components/SocialBar";
import LinkGrid from "./components/LinkGrid";
import MessedUpGameSoloVsComputer from "./components/MessedUpGameSoloVsComputer";
import GotBackupBannerAd from "./components/GotBackupBannerAd";
import UtahsAlright from "./components/UtahsAlright";
import WildmanTomSong from "./components/WildmanTomSong";
import PatrickSong from "./components/PatrickSong";

export default function App() {
  const CHANNEL_URL = "https://www.youtube.com/@Messedupgame";
  const FEATURE_VIDEO_ID = "stZm5AH791I";

  const SIGNUP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfqJPAGUKaNWNvolnoEQFRYGmpu6Y2_UyLkGDzfun3hf2RinQ/viewform?usp=header";

  const CONTACT_EMAIL = "mailto:tombutler@messedupgame.com";

  const SOCIAL_LINKS = [
    { label: "YouTube", href: "https://www.youtube.com/@Messedupgame" },
    { label: "Instagram", href: "https://www.instagram.com/messed_up_game/" },
    { label: "Facebook", href: "https://www.facebook.com/messedupgametomb/" },
    { label: "X", href: "https://x.com/saveplanetusa" },
    { label: "TikTok", href: "https://www.tiktok.com/@messedupgamelivewildman" },
    { label: "Threads", href: "https://www.threads.net/@messed_up_game" },
    { label: "SoundCloud", href: "https://on.soundcloud.com/r6Jg7Ur7MGpm44giOY" },
  ];

  const PRAYER_SHORT_URL = "https://youtube.com/shorts/tA4mF_4hBJs";
  const PRAYER_SHORT_ID = "tA4mF_4hBJs";

  const BENEFITS_DOC_URL =
    "https://docs.google.com/document/d/1_Ly_ar7Hq-gzW7DM5bHNBv6Pc9TQg5boYjSiB95polk/view";

  const [mode, setMode] = useState("home");

  const links = [
    {
      title: "🎲 Sign Up to Play Live",
      href: SIGNUP_FORM_URL,
      desc: "We’ll send your private StreamYard link before we go live (first 9 on camera)",
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
      title: "⚾ Dodgers Meal Deal + Bonus",
      href: "#",
      desc: "See the $7 Panda deal, custom songs, game night, and Got Backup bonus",
      onClick: () => setMode("dodgers"),
},
{
      title: "MOSH Brain Bars",
      href: "https://moshlife.com/",
      desc: "Brain fuel sponsor 🧠",
    },
  ];

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

  const goToGhanaOpportunity = () => {
    setMode("newsletter");
    setTimeout(() => {
      document
        .getElementById("got-backup-ghana")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // Dodgers page
  if (mode === "dodgers") {
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
            Dodgers home win? Time to celebrate with food, fun, music, and memory protection.
          </p>

          <button style={ghostButtonStyle} onClick={() => setMode("home")}>
            ← Back Home
          </button>
        </nav>

        <h1 style={{ margin: "0 0 10px", fontSize: "2rem", fontWeight: 900 }}>
          ⚾ Dodgers Win? You Win.
        </h1>

        <p style={{ marginTop: 0, opacity: 0.9, fontSize: "1.1rem", lineHeight: 1.6 }}>
          $7 Panda Deal + 30% OFF Custom Songs + Play The Messed Up Game + Got Backup Bonus
        </p>

        <section
          style={{
            maxWidth: 900,
            margin: "30px auto 24px",
            padding: "24px 20px",
            borderRadius: 16,
            background: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>
            🍊 Dodgers Meal Deal
          </h2>

          <p style={{ textAlign: "center", marginBottom: 16, opacity: 0.95 }}>
            Every time the Dodgers win at home, fans can grab a $7 Panda Plate the next day.
          </p>

          <p style={{ textAlign: "center", lineHeight: 1.7 }}>
            Order through the Panda app or online, pay in the app, and skip the line.
          </p>
        </section>

        <section
          style={{
            maxWidth: 900,
            margin: "0 auto 24px",
            padding: "24px 20px",
            borderRadius: 16,
            background: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>
            🎤 Turn a Win Into a Memory
          </h2>

          <p style={{ textAlign: "center", lineHeight: 1.7 }}>
            Get 30% OFF a custom song for birthdays, anniversaries, office fun, victories, or just because.
            Use code <strong>DODGERS WIN</strong>.
          </p>
        </section>

        <section
          style={{
            maxWidth: 900,
            margin: "0 auto 24px",
            padding: "24px 20px",
            borderRadius: 16,
            background: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>
            🎮 Play The Messed Up Game™
          </h2>

          <p style={{ textAlign: "center", lineHeight: 1.7 }}>
            Play live online, at home, at work, or at any special event.
            Fun, hilarious, and brain-boosting.
          </p>
        </section>

        <section
          style={{
            maxWidth: 900,
            margin: "0 auto 24px",
            padding: "24px 20px",
            borderRadius: 16,
            background: "rgba(15,23,42,0.9)",
            color: "#e5e7eb",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ fontSize: 28, marginBottom: 12, textAlign: "center" }}>
            ☁️ Got Backup Bonus
          </h2>

          <p style={{ textAlign: "center", lineHeight: 1.7 }}>
            Protect your photos, videos, and memories with secure cloud backup and storage.
            Ask Tom about how Got Backup can help keep your best moments safe.
          </p>
        </section>
      </div>
    </main>
  );
}

// Ghana Poster screen
if (mode === "ghanaPoster") {
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
              Want this hosted or sponsored?{" "}
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
              or call{" "}
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
              href="/posters/ghana-poster.jpg"
              target="_blank"
              rel="noreferrer"
              style={{ ...buttonStyle, textDecoration: "none" }}
            >
              Open Full Size
            </a>
          </nav>

          <h1 style={{ margin: "0 0 10px", fontSize: "2rem", fontWeight: 900 }}>
            🇬🇭 Ghana Edition Poster
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
              src="/posters/ghana-poster.jpg"
              alt="The Messed Up Game Ghana edition poster"
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </div>

          <p style={{ marginTop: 14, opacity: 0.9 }}>
            Questions? Email me at{" "}
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

  // Solo screen
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
                href={SIGNUP_FORM_URL}
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonStyle, textDecoration: "none" }}
              >
                🎲 Sign Up to Play Live
              </a>
            </div>
          </nav>

          <SocialBar />
          <MessedUpGameSoloVsComputer />
        </div>
      </main>
    );
  }

  // Poster screen
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

  // Newsletter screen
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
<div style={{ textAlign: "center", margin: "20px 0 30px" }}>
  <img
    src="/posters/dodgers-poster.jpg"
    alt="Dodgers $7 Panda Deal"
    onClick={() => setMode("dodgers")}
    style={{
      width: "100%",
      maxWidth: 520,
      borderRadius: 16,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0,0,0,.4)",
    }}
  />

  <div style={{ marginTop: 12 }}>
    <button
      onClick={() => setMode("dodgers")}
      style={{
        background: "#1d4ed8",
        color: "white",
        fontSize: "18px",
        padding: "12px 20px",
        borderRadius: "10px",
        border: "none",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      ⚾ Dodgers Meal Deal + Custom Songs
    </button>
  </div>
</div>
          <UtahsAlright />

          <section
            id="newsletter"
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,.12)",
              boxShadow: "0 10px 24px rgba(0,0,0,.35)",
              background: "rgba(255,255,255,.03)",
              padding: 18,
            }}
          >
            <div
              id="got-backup-ghana"
              aria-hidden="true"
              style={{ scrollMarginTop: 90 }}
            />

            <h1 style={{ margin: "0 0 6px", fontSize: "1.9rem", fontWeight: 900 }}>
              A Global Mission: Protecting Memories, Building Opportunity 🌍💾
            </h1>

            <p style={{ margin: "0 0 14px", opacity: 0.9 }}>
              A message from Got Backup President <strong>Joel Therien</strong> after
              an incredible event in Accra, Ghana — and how it connects to our
              mission with <strong>The Messed Up Game™</strong>.
            </p>

            <h2 style={{ margin: "16px 0 8px", fontSize: "1.25rem", fontWeight: 900 }}>
              A Message from Our President
            </h2>

            <p style={{ margin: "0 0 12px", lineHeight: 1.6, opacity: 0.95 }}>
              To our leadership family in Accra, Ghana — thank you from the bottom
              of our hearts. We came to meet colleagues, and we left with a new
              family. ❤️ Nearly <strong>800 people</strong> packed the room — and one
              truth was clear: <strong>everyone has a phone… and everyone cares about
              what’s on it.</strong>
            </p>

            <ul style={{ margin: "0 0 12px 18px", lineHeight: 1.6, opacity: 0.95 }}>
              <li>Photos &amp; videos</li>
              <li>WhatsApp messages</li>
              <li>Business files &amp; documents</li>
              <li>Banking apps</li>
            </ul>

            <p style={{ margin: "0 0 12px", lineHeight: 1.6, opacity: 0.95 }}>
              People immediately asked:{" "}
              <strong>
                “If I lose my phone or my computer crashes… my files are still safe?”
              </strong>{" "}
              That’s when it clicked —{" "}
              <strong>devices can be replaced, memories and data can’t.</strong>
            </p>

            <h2 style={{ margin: "16px 0 8px", fontSize: "1.25rem", fontWeight: 900 }}>
              Why Got Backup Works Anywhere
            </h2>

            <ul style={{ margin: "0 0 12px 18px", lineHeight: 1.6, opacity: 0.95 }}>
              <li>🌍 Works worldwide — if people use phones or computers, they need Got Backup</li>
              <li>📱💻 Protects Android, iPhone, Windows, and Mac</li>
              <li>💬 Simple message: “Lose the device, keep your photos and files.”</li>
              <li>🚫 No shipping, no borders — 100% digital and instantly delivered</li>
            </ul>

            <h2 style={{ margin: "16px 0 8px", fontSize: "1.25rem", fontWeight: 900 }}>
              How This Connects to The Messed Up Game™ 🧠😂
            </h2>

            <p style={{ margin: "0 0 12px", lineHeight: 1.6, opacity: 0.95 }}>
              Our mission is also about protecting what matters — including the
              memories we create together. <strong>The Messed Up Game™</strong>{" "}
              wakes people up with laughter and helps improve cognitive function
              because players have to remember what others said.
            </p>

            <p style={{ margin: "0 0 12px", lineHeight: 1.6, opacity: 0.95 }}>
              Learn more and play live:{" "}
              <a
                href="https://www.messedupgame.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#7bdff6", textDecoration: "none" }}
              >
                www.messedupgame.com
              </a>
            </p>

            <h2 style={{ margin: "16px 0 8px", fontSize: "1.25rem", fontWeight: 900 }}>
              The Opportunity (Simple &amp; Powerful)
            </h2>

            <ul style={{ margin: "0 0 12px 18px", lineHeight: 1.6, opacity: 0.95 }}>
              <li><strong>$20</strong> one-time yearly affiliate fee</li>
              <li><strong>$9.97/month</strong></li>
              <li><strong>6 TB</strong> total storage (split with 5 others = 500+ GB each)</li>
              <li>
                Gift protection to families (including in Ghana) so they never worry
                about losing photos, videos, or documents
              </li>
            </ul>

            <h2 style={{ margin: "16px 0 8px", fontSize: "1.25rem", fontWeight: 900 }}>
              Your Next Steps
            </h2>

            <ol style={{ margin: "0 0 12px 18px", lineHeight: 1.6, opacity: 0.95 }}>
              <li>Share the story from Ghana — people instantly understood Got Backup.</li>
              <li>
                Ask: <strong>“If your phone or computer died today… what would you lose?”</strong>
              </li>
              <li>Think global — anywhere there’s a device, there’s a Got Backup customer.</li>
            </ol>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
              <a
                href="https://willbackyouup.gotbackuptour.com"
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonStyle, textDecoration: "none" }}
              >
                Get Your Affiliate Link
              </a>

              <a
                href="#top"
                style={{ ...ghostButtonStyle, textDecoration: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Back to Top ↑
              </a>
            </div>

            <p style={{ marginTop: 14, opacity: 0.9 }}>
              Questions? Email me at{" "}
              <a
                href={CONTACT_EMAIL}
                style={{ color: "#7bdff6", textDecoration: "none" }}
              >
                {CONTACT_EMAIL.replace("mailto:", "")}
              </a>
              .
            </p>
          </section>

          <section
            id="now-hiring"
            style={{
              scrollMarginTop: 90,
              marginTop: 18,
              marginBottom: 18,
              padding: "14px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.06)",
              boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            }}
          >
            <h2 style={{ margin: "0 0 8px", fontSize: "1.6rem", fontWeight: 900 }}>
              🌍 Now Hiring – Hosts &amp; Sales Reps Worldwide
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
            ⭐ Our Sponsors &amp; Advertisers
          </button>

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
            <h2 style={{ margin: "0 0 10px", fontSize: "1.25rem", fontWeight: 900 }}>
              🙏 Prayer for Strength (Mark Wahlberg)
            </h2>

            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "177.78%",
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

          <section
            style={{
              maxWidth: 720,
              margin: "16px auto",
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

            <p style={{ margin: "12px 0", lineHeight: 1.55, opacity: 0.95 }}>
              As we age, it’s easy to think supplements are the main answer for
              memory and brain health. While they can help, research and real-world
              experience show that <strong>daily habits matter even more</strong>.
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

          <section
            style={{
              maxWidth: 720,
              margin: "16px auto",
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
  }

  // Community Centers screen
  if (mode === "communityCenters") {
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
              href={CONTACT_EMAIL}
              style={{ ...buttonStyle, textDecoration: "none" }}
            >
              Contact Tom
            </a>
          </nav>

          <section
            style={{
              textAlign: "center",
              padding: "28px 20px",
              borderRadius: 22,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 10px 30px rgba(0,0,0,.25)",
              marginBottom: 24,
            }}
          >
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.1rem)", marginBottom: 14 }}>
              🏘️ Bring The Messed Up Game to Your Community Center
            </h1>

            <p
              style={{
                maxWidth: 820,
                margin: "0 auto",
                lineHeight: 1.7,
                opacity: 0.94,
                fontSize: "1.05rem",
              }}
            >
              Looking for a fun, memorable, family-friendly event that gets people
              laughing, thinking, singing, and connecting? The Messed Up Game Live
              with Wildman Tom B brings music, audience participation, special
              shout-outs, and a one-of-a-kind live game experience to your
              community center.
            </p>
          </section>

          <section
            style={{
              marginBottom: 24,
              padding: 22,
              borderRadius: 18,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 style={{ marginBottom: 12 }}>🎬 Built for Shareable Moments</h2>

            <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
              One exciting part of the experience is the potential for short,
              high-energy video moments — including Tom’s 14.8-second promo style
              content and quick custom songs that people love to share. If one of
              those songs or clips goes viral, your community center could receive
              exposure and be seen as the place where the fun happened.
            </p>
          </section>

          <section
            style={{
              marginBottom: 24,
              padding: 22,
              borderRadius: 18,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 style={{ marginBottom: 14 }}>🎤 What the Event Can Include</h2>

            <div style={{ display: "grid", gap: 14 }}>
              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>Host Opening the Night</h3>
                <p style={{ marginBottom: 0, lineHeight: 1.65, opacity: 0.92 }}>
                  Wildman Tom B kicks off the event as host, welcomes the crowd,
                  and brings energy to the room right from the start.
                </p>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>Special Occasion Recognition</h3>
                <p style={{ marginBottom: 0, lineHeight: 1.65, opacity: 0.92 }}>
                  Birthdays, anniversaries, and special milestones can be
                  recognized at the beginning of the night to help people feel
                  celebrated.
                </p>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>2 to 4 Warm-Up Songs</h3>
                <p style={{ marginBottom: 0, lineHeight: 1.65, opacity: 0.92 }}>
                  Tom can sing 2 to 4 songs to warm up the crowd, get smiles on
                  faces, and create a fun atmosphere before the game begins.
                </p>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>The Messed Up Game Live</h3>
                <p style={{ marginBottom: 0, lineHeight: 1.65, opacity: 0.92 }}>
                  Then the fun really begins with a lively, interactive game
                  experience designed to get people laughing, thinking,
                  remembering, and connecting.
                </p>
              </div>
            </div>
          </section>

          <section
            style={{
              marginBottom: 24,
              padding: 22,
              borderRadius: 18,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 style={{ marginBottom: 14 }}>✨ Why Community Centers Love It</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: 14,
              }}
            >
              {[
                "Family-friendly entertainment",
                "Laughter and community bonding",
                "Interactive, brain-boosting fun",
                "Special attention for birthdays and milestones",
                "Memorable moments people talk about later",
                "Great atmosphere for photos and short videos",
                "Positive local buzz and exposure",
                "A unique event that stands out from the usual programming",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: 16,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              padding: 26,
              borderRadius: 20,
              textAlign: "center",
              background: "rgba(255,213,74,0.12)",
              border: "1px solid rgba(255,213,74,0.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,.2)",
            }}
          >
            <h2 style={{ marginBottom: 12 }}>
              Ready to Create a Memorable Community Event?
            </h2>

            <p
              style={{
                maxWidth: 760,
                margin: "0 auto",
                lineHeight: 1.7,
                opacity: 0.94,
              }}
            >
              Let’s bring music, laughter, recognition, and The Messed Up Game to
              your community center.
            </p>

            <div style={{ marginTop: 20 }}>
              <a
                href={CONTACT_EMAIL}
                style={{
                  display: "inline-block",
                  padding: "13px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 800,
                  background: "#ffd54a",
                  color: "#111",
                }}
              >
                Contact Tom About Booking
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }

  // Sponsors screen
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
            ⭐ Our Sponsors &amp; Advertisers
          </h1>

          <p style={{ opacity: 0.9, maxWidth: 760 }}>
            Thanks to our amazing sponsors who help us bring brain-boosting fun to
            communities everywhere.
          </p>

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
              MOSH is a brain-fuel snack brand with a mission to support brain
              health and help fund Alzheimer’s research initiatives.
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
              Visit MOSH (Official Site)
            </a>

            <div
              style={{
                marginTop: 14,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 12,
              }}
            >
              {[
                { src: "/mosh/pat-maria-mission.webp", alt: "MOSH mission graphic" },
                {
                  src: "/mosh/tom-patrick-schwarzenegger.jpg",
                  alt: "Tom with Patrick holding MOSH",
                },
                { src: "/mosh/mosh-box.jpg", alt: "MOSH bars and box", fit: "contain" },
                { src: "/mosh/ralphs.jpg", alt: "MOSH at Ralphs" },
              ].map((img) => (
                <a
                  key={img.src}
                  href="https://moshlife.com/"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit MOSH (Official Site)"
                  style={{
                    display: "block",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(0,0,0,.25)",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: 220,
                      objectFit: img.fit === "contain" ? "contain" : "cover",
                      background: "rgba(0,0,0,.35)",
                      display: "block",
                    }}
                  />
                </a>
              ))}
            </div>

            <p style={{ marginTop: 12, opacity: 0.9, lineHeight: 1.5 }}>
              Tap any photo to learn more and shop on the official MOSH website.
            </p>
          </section>

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
  }

  // Home screen
  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <header style={{ marginBottom: 18 }}>
          <h1 style={{ margin: 0, fontSize: "2.1rem", fontWeight: 900 }}>
            The Messed Up Game™
          </h1>

          <p style={{ marginTop: 8, opacity: 0.9 }}>
            Family-friendly, hilarious, and brain-boosting — play live or solo.
          </p>

          <p style={{ marginTop: 6, opacity: 0.95 }}>
            The Messed Up Game™ is a live hosted social party game created by Tom Butler.
          </p>
        </header>

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
          🌍 Now Hiring – Hosts &amp; Sales Reps (Click)
        </div>

        <section style={{ margin: "28px 0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 18,
              alignItems: "start",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2 style={{ marginBottom: 10 }}>🎂 The Best Birthday Gift Ever?</h2>

              <p style={{ opacity: 0.9 }}>
                A 15-second birthday song from Dad.
              </p>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "177.78%",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                  border: "1px solid rgba(255,255,255,.12)",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/mLwoEIiM6XM"
                  title="Patrick's Birthday Song Promo"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <h2 style={{ marginBottom: 10 }}>🎉 Orson Wins The Messed Up Game!</h2>

              <p style={{ opacity: 0.9 }}>
                Grandpa sings a 16-second victory song.
              </p>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "177.78%",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                  border: "1px solid rgba(255,255,255,.12)",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/ZDxGMx3tGDk"
                  title="Orson Wins The Messed Up Game"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p style={{ marginTop: 10, fontStyle: "italic", opacity: 0.8 }}>
                Orson Ralph Butler — great-grandson of WWII B-17 tail gunner Ralph
                Stanford Butler.
              </p>
            </div>
          </div>
        </section>

        <div
          style={{
            marginTop: 16,
            padding: 14,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.12)",
            textAlign: "center",
          }}
        >
          <p style={{ marginBottom: 8 }}>
            🎶 Want a personalized birthday or victory song for someone special?
          </p>

          <a
            href="mailto:tom@gotbackuptomb.com"
            style={{
              display: "inline-block",
              padding: "10px 18px",
              background: "#22c55e",
              color: "#041b0a",
              fontWeight: 800,
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            </a>
</div>

{/* 🎶 Custom Song CTA Upgrade */}
<div
  style={{
    marginTop: 16,
    padding: 18,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.12)",
    textAlign: "center",
    boxShadow: "0 10px 24px rgba(0,0,0,.25)",
  }}
>
  <p style={{ marginBottom: 10, fontSize: "1.05rem", fontWeight: 800 }}>
    🎶 Want a personalized song for someone you love?
  </p>

  <p style={{ marginBottom: 14, opacity: 0.9 }}>
    Birthdays • Anniversaries • Victory Songs • Tributes
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: 10,
      flexWrap: "wrap",
    }}
  >
    <a
      href="mailto:tom@gotbackuptomb.com?subject=Custom%20Song%20Request"
      style={{
        padding: "12px 18px",
        background: "#22c55e",
        color: "#041b0a",
        fontWeight: 900,
        borderRadius: 12,
        textDecoration: "none",
      }}
    >
      🎤 Request Your Song
    </a>

    <a
      href="https://on.soundcloud.com/r6Jg7Ur7MGpm44giOY"
      target="_blank"
      rel="noreferrer"
      style={{
        padding: "12px 18px",
        background: "#f97316",
        color: "white",
        fontWeight: 900,
        borderRadius: 12,
        textDecoration: "none",
      }}
    >
      🎧 Hear Example
    </a>
  </div>
</div>
{/* 🎵 MUSIC SECTION */}
<div
  style={{
    margin: "30px 0",
    padding: "28px 18px",
    borderRadius: 18,
    background: "linear-gradient(135deg, #111, #1e1e1e)",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,.28)",
  }}
>
  <h2
    style={{
      margin: "0 0 10px",
      fontSize: "2rem",
      fontWeight: 900,
      color: "#facc15",
    }}
  >
    🎵 Music by Wildman Tom B
  </h2>

  <p
    style={{
      maxWidth: 760,
      margin: "0 auto 18px",
      lineHeight: 1.6,
      opacity: 0.95,
    }}
  >
    Custom birthday songs, victory songs, and music made to celebrate the people you love.
    No signup needed — just press play.
  </p>

  {/* 🔘 Buttons */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 12,
      marginTop: 16,
      marginBottom: 24,
    }}
  >
    <a
      href="mailto:tom@gotbackuptomb.com?subject=Custom Song Request"
      style={{
        padding: "12px 18px",
        background: "#eab308",
        color: "#111",
        fontWeight: 900,
        borderRadius: 12,
        textDecoration: "none",
      }}
    >
      🎤 Request Your Song
    </a>

    <a
      href="https://on.soundcloud.com/r6Jg7Ur7MGpm44giOY"
      target="_blank"
      rel="noreferrer"
      style={{
        padding: "12px 18px",
        background: "#f97316",
        color: "white",
        fontWeight: 900,
        borderRadius: 12,
        textDecoration: "none",
      }}
    >
      🎧 Hear Example
    </a>
  </div>

  {/* 🎵 Featured Song */}
  <div style={{ maxWidth: 700, margin: "0 auto" }}>
    <h3 style={{ marginBottom: 10 }}>🎂 Patrick’s Birthday Song</h3>
    <PatrickSong />
  </div>
</div>
        <section style={{ margin: "30px 0", textAlign: "center" }}>
          <h2 style={{ marginBottom: 10 }}>🎵 Patrick’s Birthday Song (Full Version)</h2>
          <PatrickSong />
        </section>

        <div style={{ marginTop: 30 }}>
          <UtahsAlright />
        </div>

        <section style={{ margin: "22px 0" }}>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "1.5rem",
              fontWeight: 900,
            }}
          >
            What Is The Messed Up Game?
          </h2>

          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
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

        <section style={{ margin: "30px 0", textAlign: "center" }}>
          <h2>🎸 Wildman Tom B</h2>
          <WildmanTomSong />
        </section>
<section
  style={{
    margin: "30px 0",
    textAlign: "center",
    padding: 18,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.04)",
    boxShadow: "0 10px 24px rgba(0,0,0,.25)",
  }}
>
  <h2 style={{ marginBottom: 10 }}>
    🎧 Hear What a $95 Custom Song Sounds Like
  </h2>

  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/wildman-tom-b/lucky-to-have-you&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
    style={{
      borderRadius: 12,
      marginTop: 10,
    }}
  />

  <p style={{ marginTop: 10, opacity: 0.8 }}>
    🎶 Custom songs for the people you love ❤️
  </p>
</section>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 12,
          }}
        >
          <button style={ghostButtonStyle} onClick={goToGhanaOpportunity}>
            🇬🇭 Got Backup + Ghana Opportunity
          </button>

          <button
            style={ghostButtonStyle}
            onClick={() => setMode("communityCenters")}
          >
            🏘️ Community Centers
          </button>

          <button
            style={ghostButtonStyle}
            onClick={() => setMode("ghanaPoster")}
          >
            🇬🇭 Ghana Poster
          </button>

          <a
            href={SIGNUP_FORM_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              ...buttonStyle,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            🎲 Sign Up to Play Live
          </a>

          <button style={ghostButtonStyle} onClick={() => setMode("solo")}>
            Play Solo (vs Computer)
          </button>

          <button
            style={ghostButtonStyle}
            onClick={() => setMode("newsletter")}
          >
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

        <section
          style={{
            maxWidth: 900,
            margin: "22px auto",
            padding: 18,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,.14)",
            background: "rgba(255,255,255,.05)",
            boxShadow: "0 10px 24px rgba(0,0,0,.25)",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: "0 0 10px", fontSize: "1.5rem", fontWeight: 900 }}>
            🏘️ Bring The Messed Up Game to Your Community Center
          </h2>

          <p style={{ maxWidth: 700, margin: "0 auto 14px", opacity: 0.95 }}>
            Looking for a fun, brain-boosting event for your community center?
            Wildman Tom B hosts an unforgettable night of music, laughter, and
            The Messed Up Game.
          </p>

          <button
            style={buttonStyle}
            onClick={() => setMode("communityCenters")}
          >
            Learn More
          </button>
        </section>

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

      ⚾ Dodgers Meal Deal + Custom Songs
    </button>
<div style={{ textAlign: "center", margin: "20px 0 30px" }}>
  <img
    src="/posters/dodgers-poster.jpg"
    alt="Dodgers $7 Panda Deal"
    onClick={() => setMode("dodgers")}
    style={{
      width: "100%",
      maxWidth: 520,
      borderRadius: 16,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0,0,0,.4)",
    }}
  />
</div>
    <a
      href="mailto:tombutler@messedupgame.com?subject=Custom Song Request"
      style={{
        background: "#22c55e",
        color: "#041b0a",
        fontSize: "18px",
        padding: "12px 20px",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: 800,
      }}
    >
      🎤 Request a Custom Song
    </a>
  </div>
</section>
      ⚾ Dodgers Meal Deal + Custom Songs
    </button>

    <a
      href="mailto:tombutler@messedupgame.com?subject=Custom Song Request"
      style={{
        background: "#22c55e",
        color: "#041b0a",
        fontSize: "18px",
        padding: "12px 20px",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: 800,
      }}
    >
      🎤 Request a Custom Song
    </a>
  </div>
</section>
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
                <li>Up to <strong>40 residents</strong> can play in the room at once.</li>
                <li>Up to <strong>9 players</strong> live online with Wildman Tom B.</li>
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
                <li>Includes <strong>Books of the New Testament</strong> as a category.</li>
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
<section
  style={{
    maxWidth: 900,
    margin: "20px auto 30px",
    textAlign: "center",
    padding: "18px",
    borderRadius: 18,
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 10px 24px rgba(0,0,0,.25)",
  }}
>
  <img
    src="/posters/dodgers-poster.jpg"
    alt="Dodgers $7 Panda Deal"
    onClick={() => setMode("dodgers")}
    style={{
      width: "100%",
      maxWidth: 520,
      height: "auto",
      borderRadius: 16,
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0,0,0,.35)",
    }}
  />

        <footer style={{ marginTop: 28, opacity: 0.75, fontSize: 12 }}>
          © {new Date().getFullYear()} Messed Up Game • Contact:{" "}
          <a href={CONTACT_EMAIL} style={{ color: "white" }}>
            {CONTACT_EMAIL.replace("mailto:", "")}
          </a>
        </footer>
      </div>
    </main>
  );
}
