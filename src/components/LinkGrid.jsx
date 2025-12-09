// src/components/LinkGrid.jsx

export default function LinkGrid({ title = "Featured Links", items = [] }) {
  if (!items.length) return null;

  const sectionStyle = {
    padding: "2.5rem 1rem 3rem",
    backgroundColor: "#020617",
    color: "white",
  };

  const wrapperStyle = {
    maxWidth: 1100,
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "1.25rem",
  };

  const cardStyle = {
    borderRadius: 12,
    padding: "12px 14px",
    background:
      "linear-gradient(135deg, rgba(148, 163, 184, 0.25), rgba(15, 23, 42, 0.9))",
    border: "1px solid rgba(148, 163, 184, 0.4)",
  };

  const titleStyle = {
    fontSize: "1.9rem",
    marginBottom: "0.75rem",
    fontWeight: 700,
  };

  const linkStyle = {
    color: "#7bdff6",
    fontWeight: 600,
    textDecoration: "none",
  };

  const descStyle = {
    fontSize: "0.9rem",
    opacity: 0.9,
    marginTop: 4,
  };

  return (
    <section style={sectionStyle}>
      <div style={wrapperStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <div style={gridStyle}>
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              {item.desc && <div style={descStyle}>{item.desc}</div>}
              {item.affiliate && (
                <div style={{ marginTop: 6, fontSize: "0.75rem", opacity: 0.8 }}>
                  Affiliate link
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
