import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a23, #1e1e60)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#00e5ff",
          textShadow: "0 0 15px #00e5ff, 0 0 30px #0088aa",
          marginBottom: "1rem",
        }}
      >
        🎮 Messed Up Game 🎮
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "600px",
          lineHeight: 1.6,
          marginBottom: "2rem",
        }}
      >
        The incredible brain game that tests how fast you can think under
        pressure. Can you beat your friends before the timer runs out?
      </p>

      <button
        style={{
          background: "#00e5ff",
          color: "#0a0a23",
          border: "none",
          borderRadius: "12px",
          padding: "1rem 2rem",
          fontSize: "1.25rem",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 0 10px #00e5ff",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.boxShadow = "0 0 30px #00e5ff")}
        onMouseOut={(e) => (e.target.style.boxShadow = "0 0 10px #00e5ff")}
        onClick={() => alert("Coming soon: Live Play Mode!")}
      >
        🚀 Play Now
      </button>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.8 }}>
        © {new Date().getFullYear()} Messed Up Game • Created by Wildman Tom B
      </footer>
    </div>
  );
}

