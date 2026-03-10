import React from "react";

export default function SongsFromTheHeart() {
  return (
    <section style={{padding:"60px 20px", textAlign:"center", background:"#f9f9f9"}}>
      
      <h1 style={{fontSize:"36px", marginBottom:"10px"}}>
        Songs From The Heart ❤️
      </h1>

      <p style={{fontSize:"18px", maxWidth:"700px", margin:"auto"}}>
        Music written by Tom Butler — for family, faith, and fun.
        One of these songs might even go viral!
      </p>

      <div style={{marginTop:"40px"}}>

        <h2>🎂 The Best Birthday Gift Ever?</h2>

        <p>
          I wrote this 22-second song for my son Patrick.
          Now people are asking me to write birthday songs for their families too!
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ho8LV57O-sQ"
          title="Patrick Birthday Song"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <p style={{marginTop:"20px"}}>
          🎁 Personalized Birthday Songs Starting at <strong>$95</strong>
        </p>

        <a
          href="mailto:tom@gotbackuptomb.com"
          style={{
            display:"inline-block",
            padding:"12px 24px",
            background:"#ff5a5f",
            color:"white",
            borderRadius:"6px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Get Your Custom Song
        </a>

      </div>

      <div style={{marginTop:"60px"}}>

        <h2>🎸 Wildman Tom B</h2>

        <p>A fun song about the crazy life of Wildman Tom B!</p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8m1hPXCz414"
          title="Wildman Tom B Song"
          frameBorder="0"
          allowFullScreen
        ></iframe>

      </div>

      <div style={{marginTop:"60px"}}>

        <h2>🏅 Utah's Alright</h2>

        <p>The Olympic anthem Tom Butler helped create for the 2002 Winter Games.</p>

      </div>

    </section>
  );
}
