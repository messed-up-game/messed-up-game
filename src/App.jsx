export default function App() {
  const YT_ID = "YRVuuAGMHTQ"; // from your link

  return (
    <div style={{minHeight:"100vh",background:"#0a0a23",color:"#fff",padding:"2rem",fontFamily:"Poppins, sans-serif"}}>
      <h1 style={{textAlign:"center", marginBottom:"1rem"}}>🔴 Live: Messed Up Game</h1>

      {/* Responsive 16:9 YouTube embed */}
      <div style={{position:"relative", paddingTop:"56.25%", maxWidth: 900, margin:"0 auto 1rem"}}>
        <iframe
          src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1`}
          title="Messed Up Game Live"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{position:"absolute", inset:0, width:"100%", height:"100%", border:0, borderRadius:12}}
        />
      </div>

      <p style={{textAlign:"center"}}>
        If the player doesn’t load, watch on{" "}
        <a
          href={`https://youtu.be/${YT_ID}?si=HX8085Xh7YFaGnGv`}
          target="_blank"
          rel="noreferrer"
          style={{color:"#00e5ff"}}
        >
          YouTube
        </a>.
      </p>
    </div>
  );
}
