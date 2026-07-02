// src/App.jsx
import { useState } from "react";
import SocialBar from "./components/SocialBar";
import LinkGrid from "./components/LinkGrid";
import MessedUpGameSoloVsComputer from "./components/MessedUpGameSoloVsComputer";
import GotBackupBannerAd from "./components/GotBackupBannerAd";
import UtahsAlright from "./components/UtahsAlright";
import WildmanTomSong from "./components/WildmanTomSong";
import PatrickSong from "./components/PatrickSong";
import FeaturedVideos from "./components/FeaturedVideos";

export default function App() {
  const [showVideo, setShowVideo] = useState(false);
  const CHANNEL_URL = "https://www.youtube.com/@utahsalright";
  const FEATURE_VIDEO_ID = "stZm5AH791I";

  const SIGNUP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfqJPAGUKaNWNvolnoEQFRYGmpu6Y2_UyLkGDzfun3hf2RinQ/viewform?usp=header";

  const CONTACT_EMAIL = "mailto:tom@gotbackuptomb.com";

const SOCIAL_LINKS = [
  { label: "YouTube", href: CHANNEL_URL },
  { label: "Instagram", href: "https://www.instagram.com/messed_up_game/" },
  { label: "Facebook", href: "https://www.facebook.com/messedupgametomb/" },
  { label: "X", href: "https://x.com/saveplanetusa" },
  { label: "TikTok", href: "https://www.tiktok.com/@messedupgamelivewildman" },
  { label: "Threads", href: "https://www.threads.net/@messed_up_game" },
  { label: "SoundCloud", href: "https://on.soundcloud.com/r6Jg7Ur7MGpm44giOY" },
];

  const PRAYER_SHORT_URL = "https://www.youtube.com/@utahsalright";
  const PRAYER_SHORT_ID = "tA4mF_4hBJs";

  const BENEFITS_DOC_URL =
    "https://docs.google.com/document/d/1_Ly_ar7Hq-gzW7DM5bHNBv6Pc9TQg5boYjSiB95polk/view";

  const [mode, setMode] = useState("home");
  const MARKO_MAX_VIDEO =
    "https://s3endpoint.markomax.com/markomax/64c42a5f-32e7-41f6-af35-7c792f0d6ab9/8ed4f916-a262-4bd3-aac0-f75777a95747.mp4";
const MarkoMaxSection = () => (
    <section
      style={{
        maxWidth: 900,
        margin: "28px auto 30px",
        padding: "24px 20px",
        borderRadius: 16,
        background: "rgba(15,23,42,0.95)",
        color: "#e5e7eb",
        boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: 30, marginBottom: 12 }}>
        🚀 New GotBackup Marko Max Pro Marketing System
      </h2>

      <p
        style={{
          margin: "0 auto 18px",
          maxWidth: 760,
          fontSize: "1.05rem",
          lineHeight: 1.6,
          opacity: 0.96,
        }}
      >
        Watch Joel Therien explain the opportunity and how the new tools can help
        you grow with done-for-you funnels, automated follow-up, lead generation,
        and a powerful income opportunity.
      </p>

      <video
        controls
        playsInline
        style={{
          width: "100%",
          maxWidth: 520,
          borderRadius: 14,
          marginBottom: 18,
          background: "#000",
        }}
      >
        <source src={MARKO_MAX_VIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          textAlign: "left",
          maxWidth: 560,
          margin: "0 auto 18px",
          lineHeight: 1.9,
        }}
      >
        <p>✅ Done-for-you funnels</p>
        <p>✅ Automated follow-up</p>
        <p>✅ Lead generation tools</p>
        <p>✅ Proven system</p>
        <p>✅ Incredible income opportunity for just $20/month</p>
      </div>

      <p style={{ fontWeight: 800, color: "#facc15", marginBottom: 18 }}>
        🎁 Join our team and get a 2-for-1 custom song for that special person —
        or a roast for your boss!
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
<a
  href="https://willbackyouup.bossstreet.com/get-started-now/"
  target="_blank"
  rel="noreferrer" 
  style={{
            display: "inline-block",
            padding: "14px 22px",
            background: "#facc15",
            color: "#111827",
            fontWeight: 900,
            borderRadius: 12,
            textDecoration: "none",
          }}
        >
          👉 Join Got Backup Tom B
        </a>

        <a
          href="mailto:tom@gotbackuptomb.com?subject=Tell%20me%20more%20about%20Marko%20Max%20Pro"
          style={{
            display: "inline-block",
            padding: "14px 22px",
            background: "#22c55e",
            color: "#052e16",
            fontWeight: 900,
            borderRadius: 12,
            textDecoration: "none",
          }}
        >
          👉 Contact Tom
        </a>
      </div>
    </section>
  );
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
  title: "🚀 Join Got Backup Tom B",
  href: "https://willbackyouup.bossstreet.com/get-started-now/",
  desc: "Watch Joel Therien explain the system and get started",
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
            🇬🇭 Ghana Poster
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
              alt="Ghana Poster"
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </div>
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
<section
  style={{
    maxWidth: 850,
    margin: "0 auto 24px",
    padding: 24,
    borderRadius: 16,
    background: "rgba(34,197,94,.12)",
    border: "2px solid #22c55e",
    boxShadow: "0 10px 24px rgba(0,0,0,.25)",
  }}
>
  <h2>🎲 Why I Created The Messed Up Game™</h2>

  <p>
    Hi, I'm Tom Butler, also known as Wildman Tom B.
  </p>

  <p>
    I created The Messed Up Game™ because I wanted a simple way to bring
    people together. Too many people spend time looking at screens without
    connecting with each other. I wanted a game that would create laughter,
    challenge the mind, and help people make new friends.
  </p>

  <p>
    The game is easy to learn but surprisingly challenging. Players have only
    10 seconds to answer. Repeat an answer or get stuck and you earn a strike.
    Three strikes and you're out.
  </p>

  <p>
    My dream is to bring The Messed Up Game™ to families, churches, senior
    communities, schools, restaurants, bars, and live online tournaments
    throughout the world.
  </p>

  <p style={{ fontWeight: 800 }}>
    Thank you for being part of the journey.
  </p>

  <p style={{ fontWeight: 900 }}>
    — Wildman Tom B
  </p>
</section>

<section
  style={{
    maxWidth: 700,
    margin: "0 auto 24px",
    padding: 24,
    borderRadius: 16,
    textAlign: "center",
    background: "rgba(250,204,21,.15)",
    border: "2px solid #facc15",
  }}
>
<h2>📰 Join Our Newsletter</h2>

<p>
  Get tournament updates, sports picks, custom songs, faith inspiration,
  and special announcements from Wildman Tom B.
</p>

<form
  name="newsletter"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="newsletter" />
  <input type="hidden" name="bot-field" />

<input
type="email"
name="email"
required
placeholder="Enter your email"
style={{
width: "100%",
maxWidth: "350px",
padding: "12px",
borderRadius: "10px",
marginBottom: "12px",
}}
/>

  <br />

<button
  type="submit"
  style={{
    padding: "12px 24px",
    background: "#22c55e",
    color: "#041b0a",
    border: "none",
    borderRadius: "12px",
    fontWeight: "900",
    cursor: "pointer",
  }}
>
  Join Newsletter
</button>

</form>

</section>

<section
  style={{
    maxWidth: 700,
    margin: "0 auto 24px",
    padding: 24,
    borderRadius: 16,
    textAlign: "center",
    background: "rgba(34,197,94,.12)",
    border: "2px solid #22c55e",
  }}
>
  <h2>🏆 Live Championship Tournament</h2>

  <p style={{ fontWeight: 800 }}>
    🎲 Only 9 Players Compete
  </p>

  <p>
    💵 $10 Entry Fee
    <br />
    🏆 Winner Receives 90% Of The Prize Pool
    <br />
    🎁 First Signup Receives A FREE Signed Deck
  </p>

<a
href="https://buy.stripe.com/cNifZj3xO4Xd4qt26I2Ry01"
target="_blank"
rel="noopener noreferrer"
style={{
display: "inline-block",
padding: "14px 24px",
background: "#22c55e",
color: "#041b0a",
borderRadius: "12px",
fontWeight: "900",
textDecoration: "none",
fontSize: "20px",
}}

>
  🎲 REGISTER NOW
  </a>
  
</section>

<p style={{ opacity: 0.9, maxWidth: 700 }}>
  Read the latest updates, tournament announcements, and stories from Wildman Tom B.
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
        <section
          style={{
            padding: "22px 0 12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 6px",
                color: "#facc15",
                fontWeight: 900,
                letterSpacing: 1.2,
                textTransform: "uppercase",
              }}
            >
              Wildman Tom B Productions
            </p>
            <h1 style={{ margin: 0, fontSize: "clamp(2.4rem, 8vw, 5.6rem)", lineHeight: 0.95, fontWeight: 950 }}>
              Games. Music. Comedy. Faith.
            </h1>
          </div>

          <button style={ghostButtonStyle} onClick={() => setMode("newsletter")}>
            📰 Join Newsletter
          </button>
        </section>

        <section
          style={{
            margin: "10px 0 28px",
            padding: "28px 20px",
            borderRadius: 28,
            background:
              "radial-gradient(circle at top left, rgba(250,204,21,.24), transparent 34%), radial-gradient(circle at bottom right, rgba(34,197,94,.22), transparent 34%), rgba(255,255,255,.055)",
            border: "1px solid rgba(255,255,255,.14)",
            boxShadow: "0 24px 70px rgba(0,0,0,.38)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  display: "inline-block",
                  margin: "0 0 14px",
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "rgba(34,197,94,.16)",
                  border: "1px solid rgba(34,197,94,.38)",
                  color: "#bbf7d0",
                  fontWeight: 900,
                }}
              >
                🎲 The World's Most Entertaining 10 Seconds
              </p>

              <h2 style={{ margin: "0 0 14px", fontSize: "clamp(2rem, 6vw, 4.4rem)", lineHeight: 1, fontWeight: 950 }}>
                Play live. Laugh hard. Win cash.
              </h2>

              <p style={{ margin: "0 0 18px", fontSize: "1.15rem", lineHeight: 1.65, opacity: 0.94, maxWidth: 660 }}>
                Welcome to the home of <strong>The Messed Up Game™</strong>, original songs,
                custom music gifts, comedy videos, Christian inspiration, and live entertainment
                hosted by Wildman Tom B.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                <a
                  href="https://buy.stripe.com/cNifZj3xO4Xd4qt26I2Ry01"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...buttonStyle, padding: "15px 20px", fontSize: 18, textDecoration: "none" }}
                >
                  🎲 Play Live — $10 Entry
                </a>

                <a
                  href="https://youtube.com/@messedupgame"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...ghostButtonStyle,
                    padding: "15px 20px",
                    fontSize: 18,
                    textDecoration: "none",
                    borderColor: "rgba(248,113,113,.5)",
                    background: "rgba(220,38,38,.22)",
                  }}
                >
                  📺 Watch Free
                </a>

                <a
                  href="mailto:tom@gotbackuptomb.com?subject=Custom%20Song%20Request"
                  style={{ ...ghostButtonStyle, padding: "15px 20px", fontSize: 18, textDecoration: "none" }}
                >
                  🎤 Order a Custom Song
                </a>
              </div>

              <p style={{ marginTop: 16, color: "#facc15", fontWeight: 900 }}>
                🏆 Only 9 players compete. Winner receives 90% of the prize pool.
              </p>
            </div>

            <div
              style={{
                padding: 14,
                borderRadius: 24,
                background: "rgba(0,0,0,.25)",
                border: "1px solid rgba(255,255,255,.12)",
                boxShadow: "0 18px 40px rgba(0,0,0,.35)",
              }}
            >
              <h3 style={{ margin: "4px 0 12px", textAlign: "center", fontSize: "1.35rem" }}>
                🎲 Learn the Game in 30 Seconds
              </h3>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "177.78%",
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#000",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/ljT9CSzHVvU"
                  title="How To Play The Messed Up Game"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 16,
            margin: "0 0 28px",
          }}
        >
          {[
            {
              icon: "🎲",
              title: "The Messed Up Game",
              text: "Fast, funny, live tournaments for families, churches, seniors, companies, restaurants, and online players.",
              action: "Play Solo",
              onClick: () => setMode("solo"),
            },
            {
              icon: "🎵",
              title: "Custom Songs",
              text: "Birthdays, anniversaries, victory songs, tributes, roasts, and one-of-a-kind musical gifts.",
              action: "Request a Song",
              href: "mailto:tom@gotbackuptomb.com?subject=Custom%20Song%20Request",
            },
            {
              icon: "🎤",
              title: "Live Events",
              text: "Book Wildman Tom B for corporate events, community centers, churches, fundraisers, sports teams, and parties.",
              action: "Book Tom",
              href: CONTACT_EMAIL,
            },
            {
              icon: "🙏",
              title: "Faith & Inspiration",
              text: "Original Christian music, encouraging videos, and uplifting messages about hope, grace, and never giving up.",
              action: "Watch Videos",
              href: CHANNEL_URL,
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                padding: 20,
                borderRadius: 18,
                background: "rgba(255,255,255,.055)",
                border: "1px solid rgba(255,255,255,.12)",
                boxShadow: "0 12px 28px rgba(0,0,0,.25)",
              }}
            >
              <div style={{ fontSize: 34, marginBottom: 8 }}>{card.icon}</div>
              <h3 style={{ margin: "0 0 8px", fontSize: "1.25rem" }}>{card.title}</h3>
              <p style={{ margin: "0 0 16px", opacity: 0.9, lineHeight: 1.55 }}>{card.text}</p>
              {card.onClick ? (
                <button style={ghostButtonStyle} onClick={card.onClick}>{card.action}</button>
              ) : (
                <a href={card.href} target={card.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ ...ghostButtonStyle, textDecoration: "none", display: "inline-block" }}>
                  {card.action}
                </a>
              )}
            </div>
          ))}
        </section>

        <FeaturedVideos />

        <section
          style={{
            margin: "34px 0",
            padding: "24px 18px",
            borderRadius: 22,
            background: "rgba(250,204,21,.11)",
            border: "1px solid rgba(250,204,21,.35)",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: "0 0 10px", fontSize: "2rem", color: "#facc15" }}>
            🏆 Live Championship Tournament
          </h2>
          <p style={{ maxWidth: 760, margin: "0 auto 18px", lineHeight: 1.65, opacity: 0.95 }}>
            9 players. 10 seconds to answer. Three strikes and you're out. Last player standing wins
            90% of the prize pool. Are you the Smartest Stranger in America?
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://buy.stripe.com/cNifZj3xO4Xd4qt26I2Ry01"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...buttonStyle, textDecoration: "none", padding: "15px 22px", fontSize: 18 }}
            >
              🎲 Register Now
            </a>
            <button style={{ ...ghostButtonStyle, padding: "15px 22px", fontSize: 18 }} onClick={() => setMode("solo")}>
              Practice Solo
            </button>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
            alignItems: "start",
            margin: "30px 0",
          }}
        >
          <div style={{ padding: 18, borderRadius: 18, background: "rgba(255,255,255,.045)", border: "1px solid rgba(255,255,255,.12)", textAlign: "center" }}>
            <h2 style={{ marginTop: 0 }}>🎂 Custom Songs That People Remember</h2>
            <p style={{ opacity: 0.92, lineHeight: 1.55 }}>
              A personalized song can turn a birthday, anniversary, wedding, retirement, or victory into a memory people keep forever.
            </p>
            <div style={{ position: "relative", width: "100%", paddingTop: "177.78%", borderRadius: 16, overflow: "hidden", background: "#000" }}>
              <iframe
                src="https://www.youtube.com/embed/mLwoEIiM6XM"
                title="Patrick's Birthday Song Promo"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              href="mailto:tom@gotbackuptomb.com?subject=Custom%20Song%20Request"
              style={{ ...buttonStyle, display: "inline-block", marginTop: 14, textDecoration: "none" }}
            >
              🎤 Request Your Song
            </a>
          </div>

          <div style={{ padding: 18, borderRadius: 18, background: "rgba(255,255,255,.045)", border: "1px solid rgba(255,255,255,.12)", textAlign: "center" }}>
            <h2 style={{ marginTop: 0 }}>🎧 Hear a Custom Song Example</h2>
            <p style={{ opacity: 0.92, lineHeight: 1.55 }}>
              Listen to the style, heart, and personality that goes into a Wildman Tom B custom song.
            </p>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/wildman-tom-b/lucky-to-have-you&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
              style={{ borderRadius: 12, marginTop: 10 }}
            />
            <div style={{ marginTop: 16 }}>
              <a
                href="https://on.soundcloud.com/r6Jg7Ur7MGpm44giOY"
                target="_blank"
                rel="noreferrer"
                style={{ ...ghostButtonStyle, textDecoration: "none", display: "inline-block" }}
              >
                🎧 More on SoundCloud
              </a>
            </div>
          </div>
        </section>

        <section style={{ margin: "30px 0", textAlign: "center" }}>
          <h2 style={{ marginBottom: 10 }}>🎵 Patrick’s Birthday Song — Full Version</h2>
          <PatrickSong />
        </section>

        <section style={{ margin: "30px 0", textAlign: "center" }}>
          <h2>🎸 Wildman Tom B</h2>
          <WildmanTomSong />
        </section>

        <div style={{ marginTop: 30 }}>
          <UtahsAlright />
        </div>

        <section style={{ margin: "30px 0", textAlign: "center" }}>
          <h2>💪 Chuck Norris Strength — God Changes Lives!</h2>
          <p style={{ fontSize: 18, fontWeight: 700 }}>
            Wildman Tom B’s original song tribute to Chuck Norris, faith, and the power of God.
          </p>
          <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/bxBZ5UZvSek"
            title="Chuck Norris Strength"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </section>

        <section
          style={{
            margin: "34px 0",
            padding: "24px 18px",
            borderRadius: 22,
            background: "rgba(34,197,94,.10)",
            border: "1px solid rgba(34,197,94,.32)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginTop: 0 }}>🏘️ Bring The Messed Up Game to Your Community</h2>
          <p style={{ maxWidth: 760, margin: "0 auto 18px", opacity: 0.94, lineHeight: 1.65 }}>
            A fun, brain-boosting, family-friendly live event for senior homes, churches, schools,
            corporate teams, restaurants, bars, and fundraisers.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <button style={buttonStyle} onClick={() => setMode("communityCenters")}>Learn More</button>
            <a href={BENEFITS_DOC_URL} target="_blank" rel="noreferrer" style={{ ...ghostButtonStyle, textDecoration: "none", display: "inline-block" }}>
              Benefits for Seniors, Churches & More
            </a>
          </div>
        </section>

        <MarkoMaxSection />

        <section
          style={{
            margin: "28px 0",
            padding: 20,
            borderRadius: 18,
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.12)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Quick Links</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            <button style={ghostButtonStyle} onClick={() => setMode("newsletter")}>📰 Newsletter</button>
            <button style={ghostButtonStyle} onClick={() => setMode("sponsors")}>⭐ Sponsors</button>
            <button style={ghostButtonStyle} onClick={() => setMode("poster")}>🪧 Hesperia Poster</button>
            <button style={ghostButtonStyle} onClick={() => setMode("ghanaPoster")}>🇬🇭 Ghana Poster</button>
            <button style={ghostButtonStyle} onClick={goToGhanaOpportunity}>🇬🇭 Got Backup + Ghana</button>
            <button style={ghostButtonStyle} onClick={() => setMode("dodgers")}>⚾ Dodgers Deal</button>
          </div>
        </section>

        <div style={{ marginTop: 14, textAlign: "center" }}>
          <p style={{ margin: "10px 0 8px", fontWeight: 900 }}>Follow The Messed Up Game</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
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

        <footer style={{ marginTop: 34, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.12)", opacity: 0.78, fontSize: 13, textAlign: "center" }}>
          © {new Date().getFullYear()} Wildman Tom B Productions • The Messed Up Game™ • Contact:{" "}
          <a href={CONTACT_EMAIL} style={{ color: "white" }}>
            {CONTACT_EMAIL.replace("mailto:", "")}
          </a>
        </footer>

        {showVideo && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99999,
              padding: 20,
            }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: 420, background: "#000", borderRadius: 12, overflow: "hidden" }}>
              <button
                onClick={() => setShowVideo(false)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 100000,
                  background: "rgba(0,0,0,0.7)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 10px",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
              <iframe
                width="100%"
                height="700"
                src="https://www.youtube.com/embed/L6BqH4LOGog"
                title="How to Redeem the $7 Panda Deal"
                frameBorder="0"
                allowFullScreen
                style={{ width: "100%", height: "700px", border: 0 }}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
