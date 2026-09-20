import Image from "next/image";

export default function HeroSection({ typedHeading, onNavigate }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
      <section id="home" style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem", width: "100%" }}>
          <div style={{ width: 300, height: 300, borderRadius: "50%", overflow: "hidden" }}>
            <Image src="/avatar-me.png" alt="San Aung" width={300} height={300} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>

          <div style={{ textAlign: "left", maxWidth: 500, width: "100%", padding: "0 1rem" }}>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem", fontWeight: "700", color: "#000", lineHeight: 1.2 }}>
              {typedHeading}
              {/* blink cursor */}
              <span style={{ borderRight: "3px solid #000", animation: "blink 0.7s infinite", marginLeft: "0.2rem" }} />
            </h1>

            <p style={{ fontSize: "1rem", color: "#0b0b0bff", lineHeight: 1.4, marginBottom: "2rem" }}>
              I'm passionate about problem-solving and building websites that deliver clear, meaningful experiences for users.I strive to create scalable and reliable software solutions that solve real-world problems.
            </p>

            <button onClick={() => { const el = document.getElementById("projects"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} style={{ background: "#0362fc", color: "#fff", padding: "0.875rem 2rem", fontSize: "0.95rem", cursor: "pointer", transition: "all 0.2s ease", border: "none", borderRadius: "4px", fontWeight: "500" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#0253d6")} onMouseLeave={(e) => (e.currentTarget.style.background = "#0362fc")}>
              View My Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
