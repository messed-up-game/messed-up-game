import { useEffect, useRef } from "react";

export default function GotBackupBannerAd() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous injected scripts (prevents duplicates if user navigates back)
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://gotbackup.com/get_banner_script.php?id=1590343&bid=466";
    script.async = true;

    containerRef.current.appendChild(script);

    // Optional cleanup (keeps things tidy)
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <section style={{ maxWidth: 1100, margin: "20px auto 0", padding: "0 16px" }}>
      <div
        style={{
          borderRadius: 18,
          padding: 16,
          background: "rgba(255,255,255,0.06)",
          border: "2px solid rgba(255,255,255,0.14)",
          boxShadow: "0 10px 26px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 900, marginBottom: 10 }}>
          Partner Resource
        </div>

        {/* Banner loads here */}
        <div ref={containerRef} />

        {/* Safe fallback link (good in case scripts are blocked) */}
        <div style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>
          If the banner doesn’t load, visit:{" "}
          <a
            href="https://www.gotbackuptomb.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7bdff6" }}
          >
            GotBackupTomB.com
          </a>
        </div>
      </div>
    </section>
  );
}
