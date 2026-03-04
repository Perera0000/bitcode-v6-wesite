import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Objectives from "@/components/Objectives";
import CompetitionFormat from "@/components/CompetitionFormat";
import PrizePools from "@/components/PrizePools";
import Timeline from "@/components/Timeline";
import JudgingCriteria from "@/components/JudgingCriteria";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        background: "#0B0F19",
        backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(106,0,255,0.08) 0%, transparent 60%)",
      }}
    >
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />

        <div
          className="relative"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(11,15,25,0.95) 5%, rgba(11,15,25,0.95) 95%, transparent 100%)",
          }}
        >
          <About />

          <div
            className="h-px mx-auto max-w-5xl"
            style={{ background: "linear-gradient(90deg, transparent, rgba(106,0,255,0.3), rgba(0,229,255,0.3), transparent)" }}
          />

          <Objectives />

          <div
            className="h-px mx-auto max-w-5xl"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), rgba(147,51,234,0.3), transparent)" }}
          />

          <CompetitionFormat />

          <div
            className="h-px mx-auto max-w-5xl"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.2), rgba(106,0,255,0.3), transparent)" }}
          />

          <PrizePools />

          <div
            className="h-px mx-auto max-w-5xl"
            style={{ background: "linear-gradient(90deg, transparent, rgba(106,0,255,0.3), rgba(147,51,234,0.3), transparent)" }}
          />

          <Timeline />

          <div
            className="h-px mx-auto max-w-5xl"
            style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(0,229,255,0.2), transparent)" }}
          />

          <JudgingCriteria />

          <div
            className="h-px mx-auto max-w-5xl"
            style={{ background: "linear-gradient(90deg, transparent, rgba(106,0,255,0.4), rgba(0,229,255,0.4), transparent)" }}
          />

          <Register />
        </div>

        <Footer />
      </div>
    </div>
  );
}
