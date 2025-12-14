// src/components/MessedUpGameSoloVsComputer.jsx

import { useState } from "react";
// All categories used in solo mode
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

// Optional built-in answer lists (only Fruits for now)
const VALID_ANSWERS = {
    "Ice Cream Flavors": new Set([
    "vanilla",
    "chocolate",
    "strawberry",
    "mint chocolate chip",
    "cookies and cream",
    "cookie dough",
    "chocolate chip",
    "rocky road",
    "butter pecan",
    "pistachio",
    "coffee",
    "mocha",
    "caramel",
    "salted caramel",
    "chocolate fudge",
    "fudge",
    "neapolitan",
    "banana",
    "banana split",
    "mango",
    "coconut",
    "rum raisin",
    "cherry",
    "cherry garcia",
    "birthday cake",
    "cotton candy",
    "bubblegum",
    "peanut butter",
    "s'mores",
    "smores",
    "brownie batter",
    "dulce de leche",
    "raspberry",
    "black raspberry",
    "lemon",
    "orange sherbet",
    "sherbet",
    "sorbet",
  ]),

  Fruits: new Set([
    "apple",
    "banana",
    "orange",
    "pear",
    "grape",
    "grapes",
    "strawberry",
    "strawberries",
    "blueberry",
    "blueberries",
    "raspberry",
    "raspberries",
    "blackberry",
    "blackberries",
    "peach",
    "plum",
    "cherry",
    "cherries",
    "watermelon",
    "cantaloupe",
    "honeydew",
    "mango",
    "pineapple",
    "kiwi",
    "papaya",
    "pomegranate",
    "apricot",
    "nectarine",
    "lime",
    "lemon",
    "grapefruit",
    "tangerine",
    "clementine",
  ]),

  Animals: new Set([
    "dog",
    "cat",
    "horse",
    "cow",
    "pig",
    "sheep",
    "goat",
    "chicken",
    "duck",
    "turkey",
    "lion",
    "tiger",
    "bear",
    "elephant",
    "giraffe",
    "zebra",
  ]),

  "Breakfast Foods": new Set([
    "eggs",
    "bacon",
    "sausage",
    "toast",
    "bagel",
    "pancakes",
    "waffles",
    "cereal",
    "oatmeal",
    "yogurt",
    "hash browns",
    "breakfast burrito",
    "coffee",
    "orange juice",
  ]),

  Cookies: new Set([
    "chocolate chip",
    "oatmeal raisin",
    "peanut butter",
    "sugar cookie",
    "snickerdoodle",
    "gingerbread",
    "shortbread",
    "oreo",
  ]),

  "Board Games": new Set([
    "chess",
    "checkers",
    "monopoly",
    "scrabble",
    "clue",
    "sorry",
    "risk",
    "pictionary",
    "battleship",
    "connect four",
    "yahtzee",
    "catan",
    "ticket to ride",
  ]),
};

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
    "Type an answer that fits the category. Don’t repeat answers. 3 strikes and the round is over."
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
        setMessage(
          "❌ 3 strikes — game over! Click 'Play Again' to start a new round."
        );
      } else {
        setMessage(`❌ Already used that answer. Strike ${newStrikes}!`);
      }
      setAnswer("");
      return;
    }

    // 🔍 auto-check for Fruits
    const validSet = VALID_ANSWERS[category];
    if (validSet && !validSet.has(trimmed.toLowerCase())) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      if (newStrikes >= maxStrikes) {
        setGameOver(true);
        setMessage(
          "❌ That doesn’t look like it fits this category. 3 strikes — game over!"
        );
      } else {
        setMessage(
          `❌ That probably doesn’t fit “${category}”. Strike ${newStrikes}!`
        );
      }
      setAnswer("");
      return;
    }

    // ✅ New, unique, acceptable answer
    setUsedAnswers((prev) => [...prev, key]);
    setScore((prev) => prev + 1);

    if (validSet) {
      setMessage("✅ Nice one! That fits the category — keep going!");
    } else {
      setMessage(
        "✅ Nice one! If it fits the category, keep going. If not, be honest and give yourself a strike."
      );
    }

    setAnswer("");
  };

  const handleNextCategory = () => {
    if (gameOver) return;
    setCategory((current) => getRandomCategory(current));
    setMessage(
      "🔁 New category! Type an answer and then judge yourself fairly."
    );
    setAnswer("");
    setUsedAnswers([]);
  };

  const handleGiveStrike = () => {
    if (gameOver) return;
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    if (newStrikes >= maxStrikes) {
      setGameOver(true);
      setMessage(
        "❌ Honest call! That deserves a strike — and that was your 3rd. Game over!"
      );
    } else {
      setMessage(`⚠️ Honest call. Strike ${newStrikes}. Keep going!`);
    }
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

  // ——— styles ———
  const page = {
    minHeight: "100vh",
    padding: "24px 12px 40px",
    background: "radial-gradient(circle at top, #0f172a, #020617 55%)",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  };

  const card = {
    maxWidth: 900,
    margin: "0 auto",
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: 18,
    padding: "22px 22px 26px",
    boxShadow: "0 18px 40px rgba(0,0,0,.45)",
    border: "1px solid rgba(148, 163, 184, 0.5)",
  };

  const title = { fontSize: 30, fontWeight: 800, marginBottom: 4 };
  const subtitle = { opacity: 0.9, marginBottom: 18, lineHeight: 1.4 };
  const categoryLabel = { fontSize: 16, marginBottom: 6, opacity: 0.9 };
  const categoryBox = {
    padding: "10px 14px",
    borderRadius: 10,
    background: "rgba(15,23,42,.8)",
    border: "1px solid rgba(148,163,184,.5)",
    fontSize: 18,
    fontWeight: 700,
  };

  const statsRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 14,
    marginBottom: 14,
  };

  const statPill = {
    padding: "6px 12px",
    borderRadius: 999,
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(148,163,184,.5)",
  };

  const formRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
  };

  const input = {
    flex: 1,
    minWidth: 220,
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    fontSize: 15,
  };

  const primaryButton = {
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    background: "#0ea5e9",
    color: "#0f172a",
    fontWeight: 800,
    cursor: "pointer",
    minWidth: 110,
  };

  const secondaryButton = {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    fontWeight: 700,
    cursor: "pointer",
    minWidth: 140,
  };

  const messageStyle = {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 1.4,
    opacity: 0.95,
  };

  const backRow = {
    padding: "10px 12px 4px",
    maxWidth: 900,
    margin: "0 auto",
  };

  const backButton = {
    padding: "8px 14px",
    borderRadius: 999,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.95)",
    color: "#e5e7eb",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 14,
  };

  return (
    <section style={page}>
      <div style={backRow}>
        <button
          type="button"
          style={backButton}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ← Back to Home
        </button>
      </div>

      <div style={card}>
        <h1 style={title}>Solo Practice Mode</h1>
        <p style={subtitle}>
          Practice your Messed Up Game brain — no host needed. Don’t repeat
          answers. Be honest when you deserve a strike.
        </p>

        <div>
          <div style={categoryLabel}>Current category</div>
          <div style={categoryBox}>{category}</div>

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
            <label style={{ display: "block", marginTop: 8 }}>
              <span style={{ fontSize: 14, opacity: 0.9 }}>Your answer:</span>
              <div style={formRow}>
                <input
                  style={input}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  disabled={gameOver}
                  placeholder="Type your answer and hit Enter or Submit"
                />

                <button
                  type="submit"
                  style={primaryButton}
                  disabled={gameOver}
                >
                  Submit
                </button>

                <button
                  type="button"
                  style={secondaryButton}
                  onClick={handleNextCategory}
                  disabled={gameOver}
                >
                  New Category
                </button>

                <button
                  type="button"
                  style={secondaryButton}
                  onClick={handleGiveStrike}
                  disabled={gameOver}
                >
                  Give Myself a Strike
                </button>

                {gameOver && (
                  <button
                    type="button"
                    style={{
                      ...primaryButton,
                      background: "#22c55e",
                      color: "#022c22",
                    }}
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
