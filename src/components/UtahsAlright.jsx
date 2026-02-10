export default function UtahsAlright() {
  return (
    <section
      style={{
        maxWidth: 960,
        margin: "60px auto",
        textAlign: "center",
        padding: 20,
        background: "rgba(255,255,255,.04)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,.35)",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: 10 }}>
        🎿 Utah’s Alright!
      </h2>

      <p style={{ opacity: 0.9, marginBottom: 20 }}>
        Written & performed by <strong>Tim & Tom Butler</strong><br />
        Created during the <strong>2002 Winter Olympics</strong> in Salt Lake City
      </p>

      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src="https://www.youtube.com/embed/ViynMf6lFRg"
          title="Utah’s Alright!"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 12,
          }}
          allowFullScreen
        />
      </div>
    </section>
  );
}
