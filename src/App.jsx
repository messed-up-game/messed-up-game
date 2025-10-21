export default function App() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"system-ui"}}>
      <div style={{textAlign:"center", padding: 24}}>
        <h1 style={{margin:0, fontSize: 44}}>Messed Up Game</h1>
        <p style={{marginTop:8, opacity:.8}}>Fast, funny, 10-second brain battles ⚡️</p>
        <p style={{marginTop:16}}>
          <a href="/join" style={{display:"inline-block",padding:"10px 16px",border:"1px solid #ccc",borderRadius:10,textDecoration:"none"}}>
            🎥 Join the next live taping
          </a>
        </p>
      </div>
    </main>
  );
}
