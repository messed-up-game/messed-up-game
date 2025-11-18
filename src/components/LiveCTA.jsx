// src/components/LiveCTA.jsx

const SIGNUP_MAILTO = `mailto:tom@messedupgame.com?subject=${encodeURIComponent(
  "Sign me up to play the Messed Up Game"
)}&body=${encodeURIComponent(
  "Hi Tom,\n\nMy name is ____________________\nBest days/times to play: ____________________\nHow I heard about the game: ____________________\n\nThanks!"
)}`;

export default function LiveCTA() {
  return (
    <section style={{ maxWidth: 900, margin: "24px auto 0", textAlign: "center" }}>
      <h3 style={{ marginBottom: 12 }}>Jump in the Next Live Game</h3>
      <p style={{ marginBottom: 20 }}>
        Free to play. 10 seconds per answer. 3 strikes and you’re out!
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
          href="https://streamyard.com/6u894xi3cw"
          target="_blank"
          rel="noopener"
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            background: "#1f6feb",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Join the next live game
        </a>

        <a
          href={SIGNUP_MAILTO}
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            border: "2px solid #1f6feb",
            color: "#1f6feb",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Sign up to play
        </a>
      </div>

      <p style={{ fontSize: 12, color: "#555", marginTop: 12 }}>
        Hosted by <strong>Wildman Tom B</strong>. Ages 12+.
      </p>

      <p style={{ fontSize: 12, color: "#555", marginTop: 4 }}>
        Or email{" "}
        <a
          href={SIGNUP_MAILTO}
          style={{ color: "#1f6feb", textDecoration: "underline" }}
        >
          tom@messedupgame.com
        </a>{" "}
        with the subject “Sign me up to play the Messed Up Game.”
      </p>
    </section>
  );
}
