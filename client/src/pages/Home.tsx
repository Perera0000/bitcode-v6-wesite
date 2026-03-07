import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import FloatingVideo from "@/components/FloatingVideo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Objectives from "@/components/Objectives";
import CompetitionFormat from "@/components/CompetitionFormat";
import PrizePools from "@/components/PrizePools";
import Timeline from "@/components/Timeline";
import PastEvent from "@/components/PastEvent";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Divider = ({ from, to }: { from: string; to: string }) => (
  <div
    className="h-px mx-auto max-w-5xl"
    style={{ background: `linear-gradient(90deg, transparent, ${from}, ${to}, transparent)` }}
  />
);

export default function Home() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        background: "#0B0F19",
        backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(106,0,255,0.08) 0%, transparent 60%)",
      }}
    >
      <CustomCursor />
      <ParticleBackground />
      <FloatingVideo />
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
          <Divider from="rgba(106,0,255,0.3)" to="rgba(0,229,255,0.3)" />

          <Objectives />
          <Divider from="rgba(0,229,255,0.3)" to="rgba(147,51,234,0.3)" />

          <CompetitionFormat />
          <Divider from="rgba(255,215,0,0.2)" to="rgba(106,0,255,0.3)" />

          <PrizePools />
          <Divider from="rgba(106,0,255,0.3)" to="rgba(147,51,234,0.3)" />

          <Timeline />
          <Divider from="rgba(0,229,255,0.3)" to="rgba(147,51,234,0.3)" />

          <PastEvent />
          <Divider from="rgba(147,51,234,0.3)" to="rgba(106,0,255,0.3)" />

          <Contact />
          <Divider from="rgba(147,51,234,0.3)" to="rgba(0,229,255,0.2)" />

          <FAQ />
          <Divider from="rgba(106,0,255,0.4)" to="rgba(0,229,255,0.4)" />

          <Register />
        </div>

        <Footer />
      </div>
    </div>
  );
}
