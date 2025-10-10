import React, { useState, useEffect } from "react";

export default function App() {
  const [gameState, setGameState] = useState("menu");
  const [category, setCategory] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);

  const categories = ["🤯 Emojis", "🙏 Bible", "⚾ Sports", "🍕 Food", "🎶 Music"];

  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameState("finished");
    }
  }, [gameState, timeLeft]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#000428,#004e92)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Poppins',sans-serif",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#00e5ff",
          textShadow: "0 0 15px #00e5ff",
          marginBottom: "1rem",
        }}
      >
        🎮 Messed Up Game Lobby 🎮
      </h1>

      {gameState === "menu" && (
        <>
          <h2>Select a Category</h2>
          <div style={{ margin: "1.5rem 0" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setGameState("playing");
                  setTimeLeft(10);
                }}
                style={{
                  margin: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "10px",
                  border: "none",
                  background: "#00e5ff",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 10px #00e5ff",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </>
      )}

      {gameState === "playing" && (
        <>
          <h2>{category}</h2>
          <h3>⏱ {timeLeft}s</h3>
          <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>
            Think fast, Wildman! Your 10 seconds start now 🔥
          </p>
        </>
      )}

      {gameState === "finished" && (
        <>
          <h2>⏰ Time’s Up!</h2>
          <p>Hope you didn’t Messed Up 😉</p>
          <button
            onClick={() => setGameState("menu")}
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              border: "none",
              background: "#00e5ff",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 10px #00e5ff",
            }}
          >
            🔁 Play Again
          </button>
        </>
      )}

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        © {new Date().getFullYear()} Messed Up Game • Wildman Tom B Production
      </footer>
    </div>
  );
}


