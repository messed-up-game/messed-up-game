import { useState } from "react";
import OlympicPollSection from "./OlympicPollSection";

export default function UtahsAlright({ defaultOpen = false }) {
  const [showPoll, setShowPoll] = useState(defaultOpen);

  return (
    <section
      style={{
        maxWidth: 960,
        margin: "18px auto 22px",
        textAlign: "center",
        padding: 20,
        background: "rgba(255,255,255,.04)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,.35)",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: 10 }}>🎿 Utah’s Alright!</h2>

      <p style={{ opacity: 0.9, marginBottom: 20 }}>
        Written & performed by <strong>Tim & Tom Butler</strong>
        <br />
        Created during the <strong>2002 Winter Olympics</strong> in Salt Lake City
      </p>

      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src="https://www.youtube.com/embed/ViynMf6lFRg"
          title="Utah’s Alright!"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 12,
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* ✅ Collapsible Poll */}
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <button
          type="button"
          onClick={() => setShowPoll((v) => !v)}
          style={{
            background: showPoll ? "rgba(255,255,255,.08)" : "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,.22)",
            padding: "10px 14px",
            borderRadius: 12,
            fontWeight: 900,
            cursor: "pointer",
          }}
          aria-expanded={showPoll}
          aria-controls="olympic-poll"
        >
          {showPoll ? "▲ Hide Olympic Poll" : "▼ Show Olympic Poll"}
        </button>

        <div
          id="olympic-poll"
          style={{
            marginTop: 12,
            textAlign: "left",
            overflow: "hidden",
            maxHeight: showPoll ? 1400 : 0,
            opacity: showPoll ? 1 : 0,
            transition: "max-height 300ms ease, opacity 250ms ease",
            borderRadius: 14,
          }}
        >
          <div
            style={{
              padding: showPoll ? 14 : 0,
              border: showPoll ? "1px solid rgba(255,255,255,.12)" : "none",
              background: showPoll ? "rgba(0,0,0,.18)" : "transparent",
              borderRadius: 14,
            }}
          >
            <OlympicPollSection />
          </div>
        </div>
      </div>
    </section>
  );
}
