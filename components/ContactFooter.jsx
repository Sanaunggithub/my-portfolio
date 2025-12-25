export default function ContactFooter() {
  return (
    <section id="contact" style={{ backgroundColor: "#000", color: "#fff", width: "100%", paddingTop: "3rem", paddingBottom: "2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingLeft: "1rem", paddingRight: "1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "600", color: "#fff" }}>Get In Touch</h2>
          <p style={{ color: "#aaa", fontSize: "1.05rem" }}>Feel free to reach out to me via email or connect on social media.</p>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <a href="mailto:usasanaung2000@example.com" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#0362fc", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none", transition: "background 0.2s ease", fontWeight: "500" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#0253d6")} onMouseLeave={(e) => (e.currentTarget.style.background = "#0362fc")}>Email Me</a>

          <a href="https://github.com/Sanaunggithub" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", textDecoration: "none", transition: "all 0.2s ease", fontWeight: "500" }}>GitHub</a>

          <a href="https://www.linkedin.com/in/san-aung-6b150a333/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", textDecoration: "none", transition: "all 0.2s ease", fontWeight: "500" }}>LinkedIn</a>

          <a href="https://www.facebook.com/san.aung.550838/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", textDecoration: "none", transition: "all 0.2s ease", fontWeight: "500" }}>Facebook</a>
        </div>

        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", marginTop: "3rem", color: "#999", textAlign: "center" }}>
          <small>© {new Date().getFullYear()} San Aung. All rights reserved</small>
        </footer>
      </div>
    </section>
  );
}
