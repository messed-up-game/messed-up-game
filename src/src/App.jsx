import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>✅ Messed Up Game</h1>
      <p>Vite + React + Router is live.</p>
      <p><Link to="/about">Go to About</Link></p>
    </main>
  );
}

function About() {
  return (
    <main style={{ padding: 24 }}>
      <h1>About</h1>
      <p>This route proves the SPA redirect works on Netlify.</p>
      <p><Link to="/">Back home</Link></p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
