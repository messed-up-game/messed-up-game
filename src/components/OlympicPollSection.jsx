import React from "react";

export default function OlympicPollSection() {
  return (
    <section
      id="olympic-poll"
      style={{
        marginTop: 24,
        padding: 18,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 10px 24px rgba(0,0,0,.35)",
        background: "rgba(255,255,255,.03)",
      }}
    >
      <h2 style={{ margin: "0 0 8px", fontSize: "1.6rem", fontWeight: 900 }}>
        🏔️ Reliving the 2002 Winter Olympics — Vote Your Top 10
      </h2>

      <p style={{ margin: "0 0 12px", opacity: 0.9, lineHeight: 1.6 }}>
        The 2002 Winter Olympics in Salt Lake City were more than medals — they were moments. Families
        gathered, athletes became legends, and Utah welcomed the world.
      </p>

      <p style={{ margin: "0 0 12px", opacity: 0.9, lineHeight: 1.6 }}>
        During that season, my brother and I wrote a song called <strong>“Utah’s Alright.”</strong>{" "}
        With the Olympics happening right now and Utah hosting again in 2034, I wanted to keep that
        spirit alive — and bring fans together.
      </p>

      <div
        style={{
          margin: "12px 0",
          padding: 12,
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,.12)",
          background: "rgba(0,0,0,.18)",
        }}
      >
        <div style={{ fontWeight: 900 }}>
          🗓️ Voting is open until the 2026 Winter Olympics conclude.
        </div>
        <div style={{ marginTop: 6, opacity: 0.9 }}>
          Vote here on the website <strong>and</strong> on my social posts — all votes count.
        </div>
        <div style={{ marginTop: 10, opacity: 0.9 }}>
          ✅ Vote by commenting your Top 10 as numbers (example:{" "}
          <code style={codeStyle}>6, 14, 17, 19…</code>) or event names.
        </div>
      </div>

      <details style={{ margin: "12px 0" }}>
        <summary style={{ cursor: "pointer", fontWeight: 900 }}>
          📋 See the full list of 2002 events (click to expand)
        </summary>

        <div style={{ marginTop: 10, opacity: 0.92, lineHeight: 1.7 }}>
          <h3 style={h3Style}>🎿 Alpine Skiing</h3>
          <ol style={olStyle}>
            <li>Downhill</li>
            <li>Super-G</li>
            <li>Giant Slalom</li>
            <li>Slalom</li>
            <li>Combined</li>
          </ol>

          <h3 style={h3Style}>🏂 Snowboarding</h3>
          <ol style={olStyle} start={6}>
            <li>Halfpipe</li>
            <li>Giant Slalom</li>
            <li>Parallel Giant Slalom</li>
          </ol>

          <h3 style={h3Style}>🎿 Freestyle Skiing</h3>
          <ol style={olStyle} start={9}>
            <li>Moguls</li>
            <li>Aerials</li>
          </ol>

          <h3 style={h3Style}>❄️ Nordic Skiing</h3>
          <ol style={olStyle} start={11}>
            <li>Cross-Country Skiing</li>
            <li>Nordic Combined</li>
            <li>Ski Jumping</li>
          </ol>

          <h3 style={h3Style}>⛸️ Ice Sports</h3>
          <ol style={olStyle} start={14}>
            <li>Figure Skating</li>
            <li>Speed Skating</li>
            <li>Short Track Speed Skating</li>
            <li>Ice Hockey</li>
            <li>Curling</li>
          </ol>

          <h3 style={h3Style}>🛷 Sliding Sports</h3>
          <ol style={olStyle} start={19}>
            <li>Bobsleigh</li>
            <li>Luge</li>
            <li>Skeleton</li>
          </ol>
        </div>
      </details>

      {/* Netlify Form (Website votes/comments) */}
      <h3 style={{ margin: "18px 0 10px", fontSize: "1.25rem", fontWeight: 900 }}>
        💬 Vote + Comment on the Website
      </h3>

      <form
        name="Utah2002Top10Votes"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        style={{ display: "grid", gap: 10, maxWidth: 760 }}
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="Utah2002Top10Votes" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label style={labelStyle}>
          Name
          <input name="name" required style={inputStyle} autoComplete="name" />
        </label>

        <label style={labelStyle}>
          Email (optional)
          <input name="email" type="email" style={inputStyle} autoComplete="email" />
        </label>

        <label style={labelStyle}>
          Your Top 10 (numbers or event names)
          <textarea
            name="top10"
            required
            rows={4}
            placeholder="Example: 6, 14, 17, 19, 9, 16, 1, 18, 10, 21"
            style={textareaStyle}
          />
        </label>

        <label style={labelStyle}>
          Comment (optional — your memory/story!)
          <textarea
            name="comment"
            rows={4}
            placeholder="What moment/event did you love most — and why?"
            style={textareaStyle}
          />
        </label>

        <button type="submit" style={buttonStyle}>
          Submit Vote
        </button>

        <p style={{ margin: "6px 0 0", opacity: 0.75 }}>
          We’ll total website votes + social votes and announce 🥇🥈🥉 when the 2026 Winter Olympics end.
        </p>
      </form>

      {/* Social voting instructions */}
      <div
        style={{
          marginTop: 18,
          padding: 12,
          borderRadius: 14,
          border: "1px solid rgba(123,223,246,.25)",
          background: "rgba(123,223,246,.08)",
        }}
      >
        <strong>📣 Voting on social counts too:</strong>
        <div style={{ marginTop: 6, opacity: 0.9, lineHeight: 1.6 }}>
          Comment your Top 10 on my TikTok / YouTube / X / Facebook posts — I’ll include those votes in the final tally.
        </div>
      </div>

      {/* Past winners links */}
      <hr
        style={{
          margin: "18px 0",
          border: "none",
          borderTop: "1px solid rgba(255,255,255,.12)",
        }}
      />

      <h3 style={{ margin: "0 0 10px", fontSize: "1.25rem", fontWeight: 900 }}>
        🏆 Past Winners & Medal Tables
      </h3>
      <p style={{ margin: "0 0 10px", opacity: 0.9 }}>
        Want the official 2002 results? Here are easy references:
      </p>

      <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9, lineHeight: 1.7 }}>
        <li>
          <a href="https://en.wikipedia.org/wiki/2002_Winter_Olympics_medal_table" target="_blank" rel="noreferrer">
            2002 Winter Olympics Medal Table
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/List_of_2002_Winter_Olympics_medal_winners"
            target="_blank"
            rel="noreferrer"
          >
            List of 2002 Medal Winners (by event)
          </a>
        </li>
      </ul>
    </section>
  );
}

const labelStyle = { fontWeight: 900, opacity: 0.9, display: "grid", gap: 6 };
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(0,0,0,.25)",
  color: "rgba(255,255,255,.92)",
};
const textareaStyle = { ...inputStyle, resize: "vertical" };
const buttonStyle = {
  padding: "11px 14px",
  borderRadius: 14,
  border: "1px solid rgba(123,223,246,.35)",
  background: "rgba(123,223,246,.12)",
  color: "rgba(255,255,255,.92)",
  fontWeight: 900,
  cursor: "pointer",
};
const codeStyle = {
  padding: "2px 6px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(0,0,0,.22)",
};
const h3Style = { margin: "10px 0 6px", fontSize: "1.05rem", fontWeight: 900 };
const olStyle = { margin: "0 0 6px", paddingLeft: 18 };
