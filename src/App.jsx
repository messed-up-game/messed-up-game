// src/App.jsx
import React from "react";

export default function App() {
  const [sent, setSent] = React.useState(false);

  // Show success if we were redirected with ?success=1
  React.useEffect(() => {
    const ok = new URLSearchParams(window.location.search).get("success");
    if (ok === "1") setSent(true);
  }, []);

  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"system-ui",background:"#0b0d12",color:"#e6e9ef",padding:"40px"}}>
      <div style={{width:"min(960px,100%)"}}>
        {/* HERO */}
        <header style={{textAlign:"center",marginBottom:28}}>
          <h1 style={{fontSize:44,margin:"0 0 8px 0",letterSpacing:.2}}>Messed Up Game</h1>
          <p style={{margin:0,opacity:.85,fontSize:18}}>
            The fast, funny, 10-second brain game. Are you smarter than them? 😈⚡️
          </p>

          {/* Live CTA (uses your /join redirect in netlify.toml) */}
          <p style={{marginTop:16}}>
            <a href="/join" style={{display:"inline-block",padding:"12px 18px",borderRadius:12,background:"#ffffff",color:"#0b0d12",textDecoration:"none",fontWeight:600,boxShadow:"0 6px 20px rgba(0,0,0,.25)"}}>
              🎥 Join the next live taping
            </a>
          </p>
        </header>

        {/* VIDEO */}
        <section style={{display:"grid",gap:20,gridTemplateColumns:"1.2fr .8fr"}}>
          <div style={{position:"relative",paddingTop:"56.25%",borderRadius:16,overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,.35)"}}>
            <iframe
              src="https://www.youtube.com/embed/YRVuuAGMHTQ"
              title="Messed Up Game Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{position:"absolute",inset:0,width:"100%",height:"100%"}}
            />
          </div>

          {/* SIGNUP CARD */}
          <div style={{background:"#121520",border:"1px solid #1d2230",borderRadius:16,padding:18,boxShadow:"0 10px 30px rgba(0,0,0,.25)"}}>
            {!sent ? (
              <>
                <h2 style={{margin:"4px 0 6px 0",fontSize:22}}>Get early access</h2>
                <p style={{margin:"0 0 14px 0",opacity:.8,fontSize:14}}>
                  Be first in line to play live. We’ll email you the link & time.
                </p>

                {/* Netlify Form */}
                <form
                  name="live-signup"
                  method="POST"
                  action="/?success=1"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  style={{display:"grid",gap:10}}
                >
                  {/* Netlify form requirements */}
                  <input type="hidden" name="form-name" value="live-signup" />
                  <p hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <label style={labelStyle}>
                    Name
                    <input name="name" required placeholder="Your name"
                      style={inputStyle}/>
                  </label>

                  <label style={labelStyle}>
                    Email
                    <input name="email" type="email" required placeholder="you@example.com"
                      style={inputStyle}/>
                  </label>

                  <label style={labelStyle}>
                    Note (optional)
                    <textarea name="note" rows="3" placeholder="Tell Tom when you can play"
                      style={{...inputStyle,resize:"vertical"}}/>
                  </label>

                  <label style={{display:"flex",gap:8,alignItems:"center",fontSize:13,opacity:.9}}>
                    <input type="checkbox" name="consent" required/>
                    I agree to be contacted about live games & updates.
                  </label>

                  <button type="submit"
                          style={{padding:"10px 14px",borderRadius:10,border:"1px solid #2a3245",background:"#4ade80",fontWeight:700,cursor:"pointer"}}>
                    Get on the list ✅
                  </button>

                  <p style={{margin:0,opacity:.6,fontSize:12}}>
                    We’ll never sell your info. Unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <div>
                <h2 style={{margin:"4px 0 6px 0"}}>You’re in! 🙌</h2>
                <p style={{margin:0,opacity:.85}}>Check your email soon for the next live round.</p>
              </div>
            )}
          </div>
        </section>

        {/* FEATURES */}
        <section style={{marginTop:26}}>
          <ul style={{display:"grid",gap:10,gridTemplateColumns:"repeat(3, minmax(0,1fr))",listStyle:"none",padding:0,margin:0}}>
            {[
              "Lightning 10-second answers",
              "Family-friendly or savage mode 😅",
              "Live shout-outs & prizes",
            ].map((t)=>(
              <li key={t} style={featureStyle}>✅ {t}</li>
            ))}
          </ul>
        </section>

        {/* FOOTER */}
        <footer style={{marginTop:28,opacity:.6,fontSize:13,textAlign:"center"}}>
          Questions? <a href="mailto:tom@gotbackuptomb.com" style={{color:"#c9e3ff"}}>tom@gotbackuptomb.com</a> • (310) 628-7889
        </footer>
      </div>
    </main>
  );
}

// tiny inline styles to keep it simple
const labelStyle = { display:"grid", gap:6, fontSize:13, opacity:.95 };
const inputStyle = { padding:"10px 12px", borderRadius:8, border:"1px solid #2a3245", background:"#0e1118", color:"#e6e9ef" };
const featureStyle = { padding:"12px 14px", borderRadius:12, background:"#121520", border:"1px solid #1d2230" };

