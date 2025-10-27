{/* HERO with collage background */}
<section
  style={{
    position: "relative",
    width: "100%",
    maxWidth: 1400,
    aspectRatio: "16 / 9",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,.12)",
    background: `url('/hero-collage.jpg?v=1') center/cover no-repeat`,
    display: "grid",
    placeItems: "center",
  }}
>
  {/* soft dark overlay for text legibility */}
  <div style={{position:"absolute", inset:0, background:"rgba(0,0,0,.35)"}} />
  <div style={{ position:"relative", textAlign:"center", color:"#fff", padding:"1.25rem" }}>
    <h1 style={{ fontSize:"clamp(1.6rem,3.8vw,2.6rem)", lineHeight:1.2, margin:"0 0 12px" }}>
      Messed Up Game — Live Brain Battles
    </h1>
    <p style={{ fontSize:"clamp(1rem,2.2vw,1.25rem)", margin:"0 0 18px" }}>
      First 5 to sign up play live with Wildman Tom B.
    </p>
    <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
      <a
        href="mailto:tombutlerandassociates@gmail.com?subject=Join%20the%20live%20taping&body=I%20want%20in!"
        style={{ textDecoration:"none", padding:"12px 18px", borderRadius:12, fontWeight:700, background:"#111", color:"#fff", border:"1px solid #111" }}
      >
        🎟️ Sign up to play live
      </a>
      <a
        href="https://www.youtube.com/@Messedupgame/live"
        target="_blank" rel="noreferrer"
        style={{ textDecoration:"none", padding:"12px 18px", borderRadius:12, fontWeight:700, background:"#fff", color:"#e11", border:"1px solid #e11" }}
      >
        ▶️ Watch on YouTube Live
      </a>
    </div>
  </div>
</section>

