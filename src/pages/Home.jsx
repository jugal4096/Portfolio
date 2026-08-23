import Background from "../components/Background";
import Hero from "../components/Hero";

import "../components/Hero.css";

export default function Home() {
  return (
    <main className="home-page">

      {/* BACKGROUND LAYER */}
      <Background />

      {/* CONTENT LAYER */}
      <div className="home-content">
        <Hero />
      </div>

    </main>
  );
}