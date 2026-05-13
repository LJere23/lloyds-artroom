"use client";

const artStories = [
  {
    image: "/art1.jpg",
    title: "Lion Charcoal Artwork",
    text:
      "Charcoals on paper 40cmx30cm"
  },
  {
    image: "/art2.jpg",
    title: "The Priary Dogs",
    text:
      "Charcoals on paper 40cmx30cm"
  },
  {
    image: "/art3.jpg",
    title: "Caesar",
    text:
      "Charcoals on paper 40cmx30cm"
  },
  {
    image: "/art4.jpg",
    title: "Bee Eaters",
    text:
      "Charcoals on paper 40cmx30cm"
  },
];

export default function Home() {
  return (
    <main className="main">

      {/* ORBS */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* HERO */}
      <section className="intro">

        <div className="heroGlow"></div>

        <p className="mini">
          ARTISTRY IN PORTRAITURE
        </p>

        <h1>
          Lloyd's
          <br />
          Art Room
        </h1>

        <p className="heroText">
          Custom portraits and cinematic visual storytelling.
          Every portrait tells a story worth preserving.
        </p>

        <div className="scroll">
          SCROLL TO EXPLORE
        </div>

      </section>

      {/* STORY */}
      {artStories.map((story, i) => (
        <section
          key={i}
          className={`scene ${i % 2 === 0 ? "" : "reverse"}`}
        >

          <div className="imageWrap">
            <img src={story.image} alt={story.title} />
          </div>

          <div className="textWrap">

            {/* LIQUID EDGE LIGHT */}
            <div className="glassEdge"></div>

            <p className="chapter">
              CHAPTER {String(i + 1).padStart(2, "0")}
            </p>

            <h2>
              {story.title}
            </h2>

            <div className="line"></div>

            <p className="storyText">
              {story.text}
            </p>

          </div>

        </section>
      ))}

      {/* FINAL CTA */}

      <section className="finale">

        <div className="finalGlass">

          <p className="finalMini">
            COMMISSION YOUR PORTRAIT
          </p>

          <h3>
            Preserve your story
            through art.
          </h3>

          <p className="finalText">
            Lloyd's Art Room transforms personal narratives into
            premium custom portrait experiences designed to last.
          </p>

          <div className="contact">
            <p>
              hello@lloydsartroom.com
            </p>

            <span></span>

            <p>
              +1 (555) 123-4567
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
