import Link from "next/link";

const artworks = [
  {
    image: "/art1.jpg",
    title: "Lion Charcoal Artwork",
    description: "Charcoal on paper · 40cm × 30cm",
  },
  {
    image: "/art2.jpg",
    title: "The Prairie Dogs",
    description: "Charcoal study on textured paper",
  },
  {
    image: "/art3.jpg",
    title: "Caesar",
    description: "Portrait study in graphite and charcoal",
  },
];

export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-mini">
              ZIMBABWEAN ARTIST
            </p>

            <h1 className="hero-title">
              Lloyd
              <br />
              Gumbo
            </h1>

            <p className="hero-text">
              A scientist with the soul of an artist.
              Lloyd Gumbo is a medical laboratory scientist whose work explores
              the quiet beauty found in people, wildlife, and the natural world.
              Through charcoal, graphite, paint, and pencil, he captures emotion,
              texture, and presence with striking intimacy.
              His art transforms ordinary moments into timeless visual stories.
            </p>

            <div className="hero-actions">
              <Link href="/gallery" className="primary-btn">
                View Gallery
              </Link>

              <a href="#commission" className="secondary-btn">
                Commission Artwork
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              <img
                src="/art1.jpg"
                alt="Lloyd Gumbo artwork"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="section-label">
            ABOUT THE ARTIST
          </p>

          <h2 className="section-title">
            Art born from observation.
          </h2>

          <p className="section-text">
            Lloyd’s work blends scientific precision with emotional depth.
            Inspired by wildlife, portraiture, and the natural textures of life,
            his pieces focus on capturing the essence beneath the surface.
            Every artwork is approached with patience, craftsmanship, and detail.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="section-label">
            FEATURED WORKS
          </p>

          <h2 className="section-title">
            Selected artworks.
          </h2>

          <div className="works-grid">
            {artworks.map((art, index) => (
              <div className="work-card" key={index}>
                <div className="work-frame">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="work-image"
                  />
                </div>

                <h3 className="work-title">
                  {art.title}
                </h3>

                <p className="work-description">
                  {art.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="commission">
        <div className="section-inner">
          <p className="section-label">
            COMMISSION PROCESS
          </p>

          <h2 className="section-title">
            Bringing your vision to life.
          </h2>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">
                STEP 01
              </div>

              <h3>
                Consultation
              </h3>

              <p>
                Share your idea, reference images, preferred size,
                and artistic direction.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">
                STEP 02
              </div>

              <h3>
                Creation
              </h3>

              <p>
                The artwork is carefully developed using the chosen
                medium with attention to emotion and detail.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">
                STEP 03
              </div>

              <h3>
                Delivery
              </h3>

              <p>
                Completed pieces are professionally packaged
                and prepared for collection or delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-box">
          <h2 className="cta-title">
            Preserve a memory
            through art.
          </h2>

          <p className="cta-text">
            Original works and custom commissions crafted
            with patience, detail, and emotional depth.
          </p>

          <div className="contact">
            <p>
              hello@lloydsartroom.com
            </p>

            <p>
              +263 77 000 0000
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}