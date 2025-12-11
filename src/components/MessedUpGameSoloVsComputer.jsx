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
// Simple word lists so the computer can auto-judge a few categories
const WORD_LISTS = {
  Fruits: [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "blueberry",
    "raspberry",
    "blackberry",
    "watermelon",
    "cantaloupe",
    "honeydew",
    "pear",
    "peach",
    "plum",
    "cherry",
    "pineapple",
    "mango",
    "kiwi",
    "papaya",
    "grapefruit",
    "lemon",
    "lime",
    "apricot",
    "pomegranate",
    "coconut",
  ],
};

function isObviouslyWrong(category, answer) {
  const list = WORD_LISTS[category];
  if (!list) return null; // this category has no dictionary – player self-judges
  const normalized = answer.trim().toLowerCase();
  return !list.includes(normalized);
}

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
    "Type an answer that fits the category. YOU decide if it’s good. 3 strikes and the round is over."
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

  // ❌ strike for repeat answers
  if (usedAnswers.includes(key)) {
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    if (newStrikes >= maxStrikes) {
      setGameOver(true);
      setMessage("❌ 3 strikes — game over! Click 'Play Again' to start fresh.");
    } else {
      setMessage(`❌ Already used that answer. Strike ${newStrikes}!`);
    }
    setAnswer("");
    return;
  }

  // 👀 Check if this is obviously wrong for categories we know (like Fruits)
  const wrongForCategory = isObviouslyWrong(category, trimmed);
  if (wrongForCategory === true) {
    // auto-strike for things like "steak" when the category is Fruits
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    if (newStrikes >= maxStrikes) {
      setGameOver(true);
      setMessage(
        "❌ That doesn’t look like it fits this category. 3 strikes — game over!"
      );
    } else {
      setMessage(
        `❌ "${trimmed}" doesn’t look like it fits "${category}". Strike ${newStrikes}!`
      );
    }
    setAnswer("");
    return;
  }

  // ✅ Otherwise, treat as a good unique answer
  setUsedAnswers((prev) => [...prev, key]);
  setScore((prev) => prev + 1);
  setMessage(
    "✅ Nice one! If it fits the category, keep going. If not, give yourself a strike."
  );
  setAnswer("");
};

    const key = `${category.toLowerCase()}::${trimmed.toLowerCase()}`;

    // ❌ strike for repeat answers
    if (usedAnswers.includes(key)) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      if (newStrikes >= maxStrikes) {
        setGameOver(true);
        setMessage("❌ 3 strikes — game over! Click 'Play Again' to start fresh.");
      } else {
        setMessage(`❌ Already used that answer. Strike ${newStrikes}!`);
      }
      setAnswer("");
      return;
    }

    // ✅ we count every new, unique answer as correct.
    // The player decides in their head if it really fits the category.
    setUsedAnswers((prev) => [...prev, key]);
    setScore((prev) => prev + 1);
    setMessage("✅ Nice one! If it fits the category, keep going. If not, give yourself a strike.");
    setAnswer("");
  };

  const handleNextCategory = () => {
    if (gameOver) return;
    setCategory((current) => getRandomCategory(current));
    setMessage("🔁 New category! Type an answer and then judge yourself fairly.");
  };

  const handlePlayAgain = () => {
    setCategory(CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]);
    setAnswer("");
    setUsedAnswers([]);
    setStrikes(0);
    setScore(0);
    setMessage(
      "New game! Type answers that fit the category. Don’t repeat. 3 strikes and you’re out."
    );
    setGameOver(false);
  };

  const giveYourselfStrike = () => {
    if (gameOver) return;
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    if (newStrikes >= maxStrikes) {
      setGameOver(true);
      setMessage("❌ You gave yourself 3 strikes — game over! Click 'Play Again' to start fresh.");
    } else {
      setMessage(`❌ Strike ${newStrikes}! Be honest with yourself — that’s how your brain grows.`);
    }
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
    alignItems: "center",
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

  const strikeIcons = "❌".repeat(strikes) + "⭘".repeat(maxStrikes - strikes);

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
              Practice your Messed Up Game brain — no host needed. Don’t repeat
              answers. Be honest when you deserve a strike.
            </div>
          </div>

          <div>
            <div style={{ fontSize: 14, opacity: 0.85 }}>Current category</div>
            <div style={categoryBox}>{category}</div>
          </div>

          <div style={statsRow}>
            <div style={statPill}>✅ Score: {score}</div>
            <div style={statPill}>❌ Strikes: {strikes} / {maxStrikes}</div>
            <div style={statPill}>🧠 Unique answers: {usedAnswers.length}</div>
            <div style={{ fontSize: 18 }}>{strikeIcons}</div>
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
                <button
                  type="button"
                  style={ghostBtn}
                  onClick={giveYourselfStrike}
                  disabled={gameOver}
                >
                  Give Myself a Strike
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
