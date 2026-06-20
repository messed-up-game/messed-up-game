export default function FeaturedVideos() {
  const videos = [
    {
  title: "🌿 The Woods Dispensary Song",
  id: "gmiwPLcU2oo",
},
{
      title: "😂 Elon Musk Roast",
      id: "ySkcD4M-QTw",
    },
    {
    title: "💪 Chuck Norris Strength — God Changes Lives",
    id: "bxBZ5UZvSek",
  },
  {
      title: "🎂 Patrick Birthday Song",
      id: "mLwoEIiM6XM",
  },
  {
      title: "🎉 Orson Wins The Messed Up Game",
      id: "ZDxGMx3tGDk",
    },
  ];

  return (
    <section style={{ margin: "30px 0" }}>
      <h2 style={{ textAlign: "center" }}>
        🎬 Featured Videos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20,
        }}
      >
        {videos.map((video) => (
          <div key={video.id}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allowFullScreen
              style={{
                width: "100%",
                height: "500px",
                border: 0,
              }}
            />
            <p style={{ textAlign: "center" }}>
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
