// src/App.jsx
import React from "react";

export default function App() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"40px",fontFamily:"system-ui"}}>
      <div style={{maxWidth:880,textAlign:"center"}}>
        <h1 style={{marginBottom:8, fontSize:48, lineHeight:1.1}}>Messed Up Game</h1>
        <p style={{marginTop:0, fontSize:18}}>The fast, funny, “are you smarter than them?” party game.</p>

        {/* Launch CTA */}
        <p style={{margin:"24px 0"}}>
          <a href="/join" style={{display:"inline-block",padding:"12px 20px",borderRadius:12,textDecoration:"none",border:"1px solid #ccc"}}>
            🎥 Join my live taping
          </a>
        </p>

        {/* YouTube embed */}
        <div style={{position:"relative",paddingTop:"56.25%",borderRadius:16,overflow:"hidden",boxShadow:"0 6px 24px rgba(0,0,0,.12)"}}>
          <iframe
            src="https://www.youtube.com/embed/YRVuuAGMHTQ"
            title="Messed Up Game Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{position:"absolute",inset:0,width:"100%",height:"100%"}}
          />
        </div>

        {/* Social proof / bullets */}
        <ul style={{textAlign:"left",margin:"24px auto 0",maxWidth:680,fontSize:16,lineHeight:1.5}}>
          <li>Play live on TikTok/Zoom—10-second lightning rounds ⚡️</li>
          <li>Perfect for families, parties, and “I dare you” showdowns</li>
          <li>Sign up to be an early player—limited spots each stream</li>
        </ul>

        <p style={{marginTop:24,fontSize:14,opacity:.7}}>Questions? <a href="mailto:tom@gotbackuptomb.com">tom@gotbackuptomb.com</a> • (310) 628-7889</p>
      </div>
    </main>
  );
}
