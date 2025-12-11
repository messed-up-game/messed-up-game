// src/components/MessedUpGameSoloVsComputer.jsx

import { useState } from "react";

const CATEGORIES = [
  "Colors",
  "Animals",
  "Fruits",
  "Vegetables",
  "Candy Bars",
  "Ice Cream Flavors",
  "Cartoon Characters",
  "Disney Movies",
  "Things at a Beach",
  "Things in a Kitchen",
  "Sports",
  "School Subjects",
  "US States",
  "Holidays",
  "Cookies",
  "Things in a Bathroom",
  "Famous Athletes",
  "Things that are Hot",
  "Things that are Cold",
  "Things that Fly",
  "Breakfast Foods",
  "Types of Nuts",
  "Weather Types",
  "Zoo Animals",
  "Family Members",
  "Board Games",
  "Christmas Movies",
];

function getRandomCategory(current) {
  if (CATEGORIES.length === 1) return CATEGORIES[0];
  let next = current;
  while (!next || next === current) {
    const idx = Math.floor(Math.random() * CATEGORIES.length);
    next = CATEGORIES[idx];
  }
  return next;
}

export default function MessedUpGameSoloVsComputer() {
  const [category, setCategory] = useState(
    CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
  );
  const [answer, setAnswer] = useState("");
  const [usedAnswers, setUsedAnswers] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(
    "Type something that fits the category and press Enter or Submit."
  );
  const [gameOver, setGameOver] = useState(false);

  const maxStrikes = 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    const trimmed = answer.trim();
    if (!trimmed) {
      setMessage("⚠️ Please type an answer first.");
      return;
    }

    const key = `${category.toLowerCase()}::${trimmed.toLowerCase()}`;

    if (usedAnswers.includes(key)) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      if (newStrikes >= maxStrikes) {
        setGameOver(true);
        setMessage("❌ 3 strikes — game over! Click 'Play Again' to start fresh.");
      } else {
        setMessage(`❌ Already used that answer for this category. Strike ${newStrikes}!`);
      }
    } else {
      setUsedAnswers((prev) => [...prev, key]);
      setScore((prev) => prev + 1);
      setMessage("✅ Nice one! That counts. Try another or change category.");
    }

    setAnswer("");
  };

  const handleNextCategory = () => {
    if (gameOver) return;
    setCategory((current) => getRandomCategory(current));
    setMessage("🔁 New category! Enter a new answer.");
  };

  const handlePlayAgain = () => {
    setCategory(CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]);
    setAnswer("");
    setUsedAnswers([]);
    setStrikes(0);
    setScore(0);
    setMessage("New game! Type an answer that fits the category.");
    setGameOver(false);
  };

  const wrapper = {
    maxWidth: 900,
    margin: "0 auto",
    padding: "1.5rem 1rem 3rem",
  };

  const card = {
    borderRadius: 18,
    padding: "1.5rem 1.5rem 2rem",
    background:
      "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(15,23,42,0.95))",
    border: "1px solid rgba(148,163,184,0.5)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
  };

  const heading = {
    fontSize: "1.8rem",
    fontWeight: 800,
    marginBottom: "0.25rem",
  };

  const subheading = {
    fontSize: "1rem",
    opacity: 0.9,
    marginBottom: "1rem",
  };

  const categoryBox = {
    marginTop: "0.5rem",
    marginBottom: "1rem",
    padding: "0.75rem 1rem",
    borderRadius: 12,
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(148,163,184,0.6)",
    fontSize: "1.3rem",
    fontWeight: 700,
  };

  const statsRow = {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: "1rem",
    fontSize: 14,
  };

  const statPill = {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(15,23,42,0.85)",
    border: "1px solid rgba(148,163,184,0.5)",
  };

  const inputRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: "0.75rem",
  };

  const inputStyle = {
    flex: 1,
    minWidth: 200,
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,0.7)",
    fontSize: 16,
  };

  const primaryBtn = {
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    background: "#38bdf8",
    color: "#0b1120",
    fontWeight: 800,
    fontSize: 15,
    cursor: "pointer",
    minWidth: 110,
  };

  const ghostBtn = {
    padding: "10px 16px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,0.7)",
    background: "transparent",
    color: "#e5e7eb",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    minWidth: 130,
  };

  const messageStyle = {
    marginTop: "0.75rem",
    fontSize: 14,
    opacity: 0.95,
  };

  return (
    <section
      style={{
        padding: "1.5rem 1rem 3rem",
        background:
          "radial-gradient(circle at top, rgba(56,189,248,0.35), transparent 55%), #020617",
        color: "white",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <div style={wrapper}>
        <div style={card}>
          <div style={{ marginBottom: "0.5rem" }}>
            <div style={heading}>Solo Practice Mode</div>
            <div style={subheading}>
              Type answers that fit the category. Don’t repeat yourself. 3 strikes
              and the round is over!
            </div>
          </div>

          <div>
            <div style={{ fontSize: 14, opacity: 0.85 }}>Current category</div>
            <div style={categoryBox}>{category}</div>
          </div>

          <div style={statsRow}>
            <div style={statPill}>✅ Score: {score}</div>
            <div style={statPill}>
              ❌ Strikes: {strikes} / {maxStrikes}
            </div>
            <div style={statPill}>
              🧠 Unique answers: {usedAnswers.length}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label style={{ fontSize: 14, opacity: 0.9 }}>
              Your answer:
              <div style={inputRow}>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  style={inputStyle}
                  placeholder="Type something that fits the category…"
                  disabled={gameOver}
                />
                <button
                  type="submit"
                  style={primaryBtn}
                  disabled={gameOver}
                >
                  Submit
                </button>
                <button
                  type="button"
                  style={ghostBtn}
                  onClick={handleNextCategory}
                  disabled={gameOver}
                >
                  New Category
                </button>
                {gameOver && (
                  <button
                    type="button"
                    style={primaryBtn}
                    onClick={handlePlayAgain}
                  >
                    Play Again
                  </button>
                )}
              </div>
            </label>
          </form>

          <div style={messageStyle}>{message}</div>
        </div>
      </div>
    </section>
  );
}

