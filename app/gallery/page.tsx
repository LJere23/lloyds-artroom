import Link from "next/link";

const artworks = [
  {
    title: "Lion Charcoal Artwork",
    description: "Custom charcoal portrait with deep contrast",
    image: "/art1.jpg",
  },
  {
    title: "The Priary Dogs",
    description: "Charcoals on Paper",
    image: "/art2.jpg",
  },
  {
    title: "Caesar",
    description: "Charcoals on paper size 40cmx30cm",
    image: "/art3.jpg",
  },
  {
    title: "Bee Eaters",
    description: "Color Pencil",
    image: "/art4.jpg",
  },
];

export default function Gallery() {
  return (
    <main className="page-shell gallery-shell">
      <section className="gallery-header">
        <div>
          <h1 className="page-title">Gallery</h1>
          <p className="page-copy">Selected works & custom portrait showcase</p>
        </div>
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
      </section>

      <section className="gallery-grid">
        {artworks.map((art, index) => (
          <article key={index} className="gallery-card">
            <div className="image-wrapper">
              <img src={art.image} alt={art.title} className="art-image" />
            </div>
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
