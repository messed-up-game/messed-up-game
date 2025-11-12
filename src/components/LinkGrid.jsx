export default function LinkGrid({ items = [], title = "Featured Links" }) {
  const grid = { maxWidth:1100, margin:"24px auto", padding:16 };
  const cards = { display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))" };
  const card = {
    display:"block", background:"#fff", color:"#111", borderRadius:12, padding:14,
    textDecoration:"none", border:"1px solid rgba(0,0,0,.08)", boxShadow:"0 4px 12px rgba(0,0,0,.08)"
  };
  const desc = { fontSize:14, opacity:.8, marginTop:6 };

  return (
    <section style={grid}>
      <h2 style={{margin:"0 0 12px"}}>{title}</h2>
      <div style={cards}>
        {items.map((it, i) => (
          <a key={i} href={it.href} target="_blank"
             rel={`noopener ${it.affiliate ? "nofollow sponsored" : "nofollow"}`}
             style={card}>
            <strong>{it.title}</strong>
            {it.desc && <div style={desc}>{it.desc}</div>}
          </a>
        ))}
      </div>
    </section>
  );
}
