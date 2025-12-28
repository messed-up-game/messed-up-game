
// src/components/GotBackupBannerAd.jsx
import { useEffect, useRef } from "react";

export default function GotBackupBannerAd() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // Create a tiny HTML page inside the iframe and run the banner script there
    doc.open();
    doc.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            body { margin: 0; padding: 0; background: transparent; }
          </style>
        </head>
        <body>
          <script src="https://gotbackup.com/get_banner_script.php?id=1590343&bid=466"></script>
        </body>
      </html>
    `);
    doc.close();
  }, []);

  return (
    <section
      style={{
        maxWidth: 760,
        margin: "22px auto 0",
        padding: 16,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,.14)",
        background: "rgba(255,255,255,.05)",
        boxShadow: "0 10px 24px rgba(0,0,0,.25)",
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 900, marginBottom: 8 }}>
        Partner Resource
      </div>

      <iframe
        ref={iframeRef}
        title="Got Backup Banner"
        style={{
          width: "100%",
          height: 140, // you can tweak this if the banner is taller/shorter
          border: 0,
          borderRadius: 12,
          background: "transparent",
        }}
      />

      <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
        If the banner doesn’t load, visit{" "}
        <a
          href="https://www.gotbackuptomb.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#7bdff6" }}
        >
          GotBackupTomB.com
        </a>{" "}
        (ad blockers may prevent banners).
      </div>
    </section>
  );
}
