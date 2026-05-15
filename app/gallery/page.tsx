import Link from "next/link";

const artworks = [
  {
    title: "Lion Charcoal Artwork",
    description: "Charcoal on paper · 40cm × 30cm",
    image: "/art1.jpg",
  },
  {
    title: "The Prairie Dogs",
    description: "Charcoal study on textured paper",
    image: "/art2.jpg",
  },
  {
    title: "Caesar",
    description: "Portrait study in graphite and charcoal",
    image: "/art3.jpg",
  },
  {
    title: "Bee Eaters",
    description: "Colour pencil illustration",
    image: "/art4.jpg",
  },
];

export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-header">
        <p className="section-label">
          GALLERY
        </p>

        <h1 className="gallery-title">
          Selected Works
        </h1>

        <p className="gallery-copy">
          A curated collection of portrait studies,
          wildlife artworks, and commissioned pieces.
        </p>
      </section>

      <section className="gallery-grid">
        {artworks.map((art, index) => (
          <article key={index} className="gallery-item">
            <div className="gallery-item-image">
              <img
                src={art.image}
                alt={art.title}
              />
            </div>

            <h2>
              {art.title}
            </h2>

            <p>
              {art.description}
            </p>
          </article>
        ))}
      </section>

      <div style={{ marginTop: "100px" }}>
        <Link href="/" className="secondary-btn">
          Back Home
        </Link>
      </div>
    </main>
  );
}