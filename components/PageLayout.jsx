import Head from "next/head";
import { useState } from "react";

export default function PageLayout({ children }) {
  const [activeNav, setActiveNav] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div style={{ background: "#ffffff", color: "#333", minHeight: "100vh" }}>
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            background: "#fff",
            borderBottom: "1px solid #e5e5e5",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                color: "#0362fc",
                letterSpacing: "0.5px",
              }}
            >
              San Aung
            </div>

            <div className="desktop-nav" style={{ display: "none", gap: "1.8rem" }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    scrollToSection(item.id);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: activeNav === item.id ? "#0362fc" : "#555",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: activeNav === item.id ? 600 : 400,
                    transition: "color 0.2s ease",
                    padding: "0.4rem 0",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#0362fc")}
                  onMouseLeave={(e) => {
                    if (activeNav !== item.id) e.target.style.color = "#555";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "block",
                fontSize: "1.5rem",
                color: "#0362fc",
              }}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div
              style={{
                display: "none",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "1rem",
                padding: "1rem 0",
                borderTop: "1px solid #e5e5e5",
              }}
              className="mobile-menu"
            >
              {navItems.map((item) => {
                const icons = {
                  home: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  ),
                  about: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  ),
                  projects: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  ),
                  skills: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  ),
                  education: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  ),
                };

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      background: activeNav === item.id ? "#f0f7ff" : "transparent",
                      border: "none",
                      color: activeNav === item.id ? "#0362fc" : "#555",
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: activeNav === item.id ? 600 : 400,
                      padding: "0.75rem 1rem",
                      borderRadius: "4px",
                      transition: "all 0.2s ease",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    {icons[item.id]}
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </nav>

        {children}

        <style jsx global>{`
          @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
          .download-btn:hover { background: #0339daff !important; color: #fff !important; border-color: #0339daff !important; }
          .download-btn svg { stroke: currentColor; }
          .download-btn:hover svg { stroke: #fff !important; }

          .desktop-nav { display: flex !important; }
          .mobile-menu { display: none !important; }
          .hamburger-btn { display: none !important; }

          @media (max-width: 900px) { #skills-grid { grid-template-columns: 1fr !important; padding: 0 1rem !important; } }

          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .hamburger-btn { display: block !important; }
            .mobile-menu { display: flex !important; }
            #skills-grid { grid-template-columns: 1fr !important; padding: 0 0.5rem !important; }
            .about-container { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 2rem !important; }
            .about-container > div:last-child { text-align: left !important; }
            .about-container p { text-align: left !important; }
            .about-container a { margin: 0 auto !important; }
          }

          @media (max-width: 480px) {
            #skills-grid { gap: 1rem !important; }
            .about-container { gap: 1.5rem !important; }
          }
        `}</style>
      </div>
    </>
  );
}
