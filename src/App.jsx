// src/App.jsx
export default function App() {
  const YT_ID = "YRVuuAGMHTQ";
  return (
    <div style={{minHeight:"100vh",background:"#0a0a23",color:"#fff",padding:"2rem",textAlign:"center"}}>
      <h1 style={{marginBottom:"1rem"}}>🔴 Live: Messed Up Game</h1>

      <div style={{position:"relative",paddingTop:"56.25%",maxWidth:900,margin:"0 auto 1rem"}}>
        <iframe
          src={`https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1`}
          title="Messed Up Game Live"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0,borderRadius:12}}
        />
      </div>

      {/* Paste your Netlify signup form JSX here if you want it visible on the page */}
    </div>
  );
}
