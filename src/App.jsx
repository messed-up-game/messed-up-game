// src/App.jsx
import React from "react";

export default function App() {
  const YT_ID = "YRVuuAGMHTQ";
  const [sent, setSent] = React.useState(false);

  return (
    <div style={{minHeight:"100vh",background:"#0a0a23",color:"#fff",padding:"2rem",textAlign:"center",fontFamily:"system-ui,Segoe UI,Roboto,Poppins,sans-serif"}}>
      <h1 style={{marginBottom:"1rem"}}>🔴 Live: Messed Up Game</h1>

      {/* Video */}
      <div style={{position:"relative",paddingTop:"56.25%",maxWidth:900,margin:"0 auto 1rem"}}>
        <iframe
          src={`https://www.youtube.com/embed/YRVuuAGMHTQ?rel=0&modestbranding=1`}
          title="Messed Up Game Live"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0,borderRadius:12}}
        />
      </div>

      {/* LIVE SIGN-UP (Netlify Forms) */}
      <form
        name="live-signup"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={() => setSent(true)}
        style={{
          maxWidth: 700,
          margin: "2rem auto",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 12,
          padding: "1rem",
          textAlign: "left",
        }}
      >
        <input type="hidden" name="form-name" value="live-signup" />
        <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>

        <h2 style={{ margin: 0, textAlign: "center" }}>🎥 Sign Up To Play Live</h2>
        <p style={{ opacity: 0.9, marginTop: 6, textAlign: "center" }}>
          Drop your info and we’ll invite you to join the next live show.
        </p>

        <label style={{ display:"block", marginBottom:12 }}>
          Your Name
          <input
            type="text"
            name="name"
            required
            placeholder="Wildman Tom B"
            style={{ width:"100%", padding:"0.6rem", borderRadius:8, border:"1px solid #555", marginTop:6 }}
          />
        </label>

        <label style={{ display:"block", marginBottom:12 }}>
          Email (for the invite link)
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            style={{ width:"100%", padding:"0.6rem", borderRadius:8, border:"1px solid #555", marginTop:6 }}
          />
        </label>

        <label style={{ display:"block", marginBottom:12 }}>
          Why you’d be great on the show (optional)
          <textarea
            name="note"
            rows={3}
            placeholder="Speed on emojis, Bible trivia beast, etc."
            style={{ width:"100%", padding:"0.6rem", borderRadius:8, border:"1px solid #555", marginTop:6 }}
          />
        </label>

        <label style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
          <input type="checkbox" name="consent" required /> I agree to appear on stream and recording.
        </label>

        <div style={{ textAlign:"center" }}>
          <button
            type="submit"
            style={{
              background:"#00e5ff",
              color:"#000",
              fontWeight:700,
              border:"none",
              borderRadius:10,
              padding:"0.8rem 1.2rem",
              cursor:"pointer",
              boxShadow:"0 0 10px #00e5ff"
            }}
          >
            🚀 Request to Join Live
          </button>
        </div>

        {sent && (
          <p style={{ marginTop:12, color:"#00e5ff", textAlign:"center" }}>
            ✅ Thanks! We got your request — check your email soon.
          </p>
        )}
      </form>
    </div>
  );
}
