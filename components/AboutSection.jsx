import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#2a2727ff",
        position: "relative",
        paddingTop: "0",
        paddingBottom: "2rem",
        width: "100%",
      }}
    >
      <svg style={{ display: "block", width: "100%" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1"
          d="M0,64L60,90.7C120,117,240,171,360,192C480,213,600,203,720,170.7C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
        </path>
      </svg>

      <div style={{ paddingTop: "0", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", fontWeight: "600", color: "#fff", textAlign: "center" }}>
          About Me
        </h2>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "3rem", flexWrap: "wrap" }}>
            <div style={{ width: 200, height: 200, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
              <Image src="/myprofile.jpg" alt="San Aung" width={200} height={200} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ lineHeight: 1.8, color: "#fff", fontSize: "1.05rem", margin: 0, marginBottom: "1.5rem" }}>
                Highly motivated Software Engineering student at KMITL with hands-on experience in full-stack web development. Passionate about building practical, user-centered applications and continuously improving through self-learning and real-world projects. Eager to learn, collaborate, and contribute to impactful engineering teams while growing personally and professionally.
              </p>

              <a
                href="/cv.pdf"
                download="San_Aung_CV.pdf"
                className="download-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "#0362fc",
                  padding: "0.75rem 1.5rem",
                  border: "1px solid #0339daff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                }}
              >
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0 }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
