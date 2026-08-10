// src/components/MessedUpGameSoloVsComputer.jsx

import { useEffect, useMemo, useState } from "react";

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
  "Animals A-to-Z",
];

const LEVELS = [
  { level: 1, name: "Easy", target: 5, seconds: 10 },
  { level: 2, name: "Warm-Up", target: 5, seconds: 10 },
  { level: 3, name: "Getting Tougher", target: 5, seconds: 10 },
  { level: 4, name: "Brain Burner", target: 5, seconds: 10 },
  { level: 5, name: "Champion", target: 5, seconds: 10 },
];

const OBVIOUS_WRONG = new Set([
  "steak",
  "pork",
  "beef",
  "chicken",
  "california",
  "texas",
]);

const VALID_ANSWERS = {
  "Ice Cream Flavors": new Set([
    "vanilla",
    "chocolate",
    "strawberry",
    "mint chocolate chip",
    "rocky road",
    "cookies and cream",
    "cookie dough",
    "butter pecan",
    "neapolitan",
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

  "Books of the New Testament": new Set([
    "matthew",
    "mark",
    "luke",
    "john",
    "acts",
    "romans",
    "1 corinthians",
    "2 corinthians",
    "galatians",
    "ephesians",
    "philippians",
    "colossians",
    "1 thessalonians",
    "2 thessalonians",
    "1 timothy",
    "2 timothy",
    "titus",
    "philemon",
    "hebrews",
    "james",
    "1 peter",
    "2 peter",
    "1 john",
    "2 john",
    "3 john",
    "jude",
    "revelation",
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
    "monkey",
    "ape",
    "gorilla",
    "wolf",
    "fox",
    "deer",
    "rabbit",
    "mouse",
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
    next = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  }
  return next;
}

function normalize(text) {
  return text.trim().toLowerCase();
}

export default function MessedUpGameSoloVsComputer() {
  const [category, setCategory] = useState("Animals");
  const [answer, setAnswer] = useState("");
  const [usedAnswers, setUsedAnswers] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const [score, setScore] = useState(0);

  const [level, setLevel] = useState(() => {
    const saved = Number(localStorage.getItem("mug-solo-level"));
    return saved >= 1 && saved <= 5 ? saved : 1;
  });

  const [levelCorrect, setLevelCorrect] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [champion, setChampion] = useState(false);
  const [message, setMessage] = useState(
    "Press START GAME when you’re ready. Level 1 begins with Animals."
  );

  const levelInfo = useMemo(
    () => LEVELS.find((item) => item.level === level) || LEVELS[0],
    [level]
  );

  const [timeLeft, setTimeLeft] = useState(levelInfo.seconds);

  const maxStrikes = 3;

  useEffect(() => {
    localStorage.setItem("mug-solo-level", String(level));
  }, [level]);

  useEffect(() => {
    setTimeLeft(levelInfo.seconds);
  }, [category, level, levelInfo.seconds]);

  useEffect(() => {
    if (!gameStarted || gameOver || champion) return;

    if (timeLeft <= 0) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      setAnswer("");

      if (newStrikes >= maxStrikes) {
        setGameOver(true);
        setMessage("⏰ Time ran out. That was strike 3 — game over!");
      } else {
        setMessage(`⏰ Time ran out. Strike ${newStrikes}! Try the next one.`);
        setTimeLeft(levelInfo.seconds);
      }
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [
    timeLeft,
    gameStarted,
    gameOver,
    champion,
    strikes,
    levelInfo.seconds,
  ]);

  const registerStrike = (text) => {
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    setAnswer("");

    if (newStrikes >= maxStrikes) {
      setGameOver(true);
      setMessage(`${text} Strike 3 — game over!`);
    } else {
      setMessage(`${text} Strike ${newStrikes}!`);
      setTimeLeft(levelInfo.seconds);
    }
  };

  const registerCorrect = (key) => {
    const newLevelCorrect = levelCorrect + 1;

    setUsedAnswers((prev) => [...prev, key]);
    setScore((prev) => prev + 1);
    setAnswer("");

    if (newLevelCorrect >= levelInfo.target) {
      if (level >= LEVELS.length) {
        setLevelCorrect(levelInfo.target);
        setChampion(true);
        setMessage(
          "🏆 CHAMPION! You completed Level 5 of The Messed Up Game!"
        );
      } else {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setLevelCorrect(0);
        setCategory((current) => getRandomCategory(current));
        setUsedAnswers([]);
        setMessage(
          `🎉 LEVEL UP! Welcome to Level ${nextLevel}: ${LEVELS[nextLevel - 1].name}!`
        );
      }
    } else {
      setLevelCorrect(newLevelCorrect);
      setMessage(
        `✅ Correct! ${newLevelCorrect} of ${levelInfo.target} toward Level ${
          level >= LEVELS.length ? "Champion" : level + 1
        }.`
      );
    }

    setTimeLeft(levelInfo.seconds);
  };

  const handleStartGame = () => {
    setCategory("Animals");
    setGameStarted(true);
    setGameOver(false);
    setChampion(false);
    setStrikes(0);
    setScore(0);
    setLevel(1);
    setLevelCorrect(0);
    setUsedAnswers([]);
    setAnswer("");
    setTimeLeft(LEVELS[0].seconds);
    setMessage("🐶 Level 1: Animals! Name an animal before the timer hits zero.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gameStarted || gameOver || champion) return;

    const trimmed = answer.trim();
    if (!trimmed) {
      setMessage("⚠️ Please type an answer first.");
      return;
    }

    const normalized = normalize(trimmed);
    const key = `${category.toLowerCase()}::${normalized}`;

    if (usedAnswers.includes(key)) {
      registerStrike("❌ You already used that answer.");
      return;
    }

    const validSet = VALID_ANSWERS[category];

    if (!validSet && OBVIOUS_WRONG.has(normalized)) {
      registerStrike(`❌ That clearly doesn’t fit “${category}”.`);
      return;
    }

    if (validSet && !validSet.has(normalized)) {
      registerStrike(`❌ That doesn’t look like it fits “${category}”.`);
      return;
    }

    registerCorrect(key);
  };

  const handleNextCategory = () => {
    if (!gameStarted || gameOver || champion) return;
    setCategory((current) => getRandomCategory(current));
    setUsedAnswers([]);
    setAnswer("");
    setMessage("🔁 New category! Your level progress stays with you.");
    setTimeLeft(levelInfo.seconds);
  };

  const handleGiveStrike = () => {
    if (!gameStarted || gameOver || champion) return;
    registerStrike("⚠️ Honest call.");
  };

  const handlePlayAgain = () => {
    setCategory("Animals");
    setAnswer("");
    setUsedAnswers([]);
    setStrikes(0);
    setScore(0);
    setLevelCorrect(0);
    setLevel(1);
    setGameStarted(false);
    setGameOver(false);
    setChampion(false);
    setTimeLeft(LEVELS[0].seconds);
    setMessage(
      "Press START GAME when you’re ready. Level 1 begins with Animals."
    );
  };

  const progressDots = Array.from(
    { length: levelInfo.target },
    (_, index) => (index < levelCorrect ? "⭐" : "○")
  ).join(" ");

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

  const title = { fontSize: 30, fontWeight: 900, marginBottom: 4 };
  const subtitle = { opacity: 0.9, marginBottom: 18, lineHeight: 1.4 };

  const categoryBox = {
    padding: "14px 16px",
    borderRadius: 12,
    background: "rgba(2,132,199,.12)",
    border: "1px solid rgba(56,189,248,.55)",
    fontSize: 22,
    fontWeight: 900,
    textAlign: "center",
  };

  const levelBox = {
    marginBottom: 16,
    padding: 16,
    borderRadius: 14,
    background: "rgba(250,204,21,.10)",
    border: "1px solid rgba(250,204,21,.45)",
    textAlign: "center",
  };

  const statsRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 14,
    marginBottom: 14,
  };

  const statPill = {
    padding: "7px 12px",
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
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    fontSize: 16,
  };

  const primaryButton = {
    padding: "11px 16px",
    borderRadius: 10,
    border: "none",
    background: "#0ea5e9",
    color: "#0f172a",
    fontWeight: 900,
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

  const backButton = {
    padding: "8px 14px",
    borderRadius: 999,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.95)",
    color: "#e5e7eb",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 14,
  };

  return (
    <section style={page}>
      <div style={{ padding: "10px 12px 4px", maxWidth: 900, margin: "0 auto" }}>
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
        <h1 style={title}>🎲 The Messed Up Game — Level Challenge</h1>
        <p style={subtitle}>
          Level 1 starts with Animals. Press START GAME when you’re ready.
          Then you have 10 seconds for each answer. Get 5 correct to level up.
          Don’t repeat. 3 strikes and you’re out.
        </p>

        <div style={levelBox}>
          <div style={{ fontSize: 14, fontWeight: 800, opacity: 0.9 }}>
            LEVEL {level}
          </div>
          <div style={{ fontSize: 28, fontWeight: 950 }}>
            {levelInfo.name}
          </div>
          <div style={{ fontSize: 26, marginTop: 8 }}>{progressDots}</div>
          <div style={{ marginTop: 6, fontWeight: 800 }}>
            {levelCorrect} of {levelInfo.target} correct
          </div>
        </div>

        <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 6 }}>
          Current category
        </div>
        <div style={categoryBox}>{category}</div>

        <div style={statsRow}>
          <div style={statPill}>
            ⏱️ Time: {gameStarted ? `${timeLeft}s` : "READY"}
          </div>
          <div style={statPill}>✅ Total Score: {score}</div>
          <div style={statPill}>
            ❌ Strikes: {strikes} / {maxStrikes}
          </div>
          <div style={statPill}>🧠 Unique: {usedAnswers.length}</div>
        </div>

        {!gameStarted && !gameOver && !champion && (
          <button
            type="button"
            style={{
              ...primaryButton,
              width: "100%",
              marginTop: 6,
              padding: "16px 20px",
              fontSize: 20,
              background: "#22c55e",
              color: "#052e16",
            }}
            onClick={handleStartGame}
          >
            ▶ START GAME
          </button>
        )}

        {gameStarted && !champion && (
          <form onSubmit={handleSubmit}>
            <div style={formRow}>
              <input
                style={input}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={gameOver}
                autoFocus
                placeholder="Type your answer..."
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
            </div>
          </form>
        )}

        {(gameOver || champion) && (
          <button
            type="button"
            style={{
              ...primaryButton,
              marginTop: 14,
              background: "#22c55e",
              color: "#022c22",
            }}
            onClick={handlePlayAgain}
          >
            Reset to Level 1
          </button>
        )}

        <div
          style={{
            marginTop: 16,
            padding: "12px 14px",
            borderRadius: 12,
            background: champion
              ? "rgba(250,204,21,.14)"
              : "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.10)",
            lineHeight: 1.5,
            fontWeight: champion ? 900 : 700,
          }}
        >
          {message}
        </div>

        <p style={{ marginTop: 14, fontSize: 13, opacity: 0.72 }}>
          Some categories are automatically checked. For open-ended categories,
          use the honor system and give yourself a strike if an answer does not
          truly fit.
        </p>
      </div>
    </section>
  );
}
