import { education } from "../lib/data";

export default function EducationSection() {
  return (
    <section id="education" style={{ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "#fff", color: "#333", width: "100%", margin: "0" }}>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "3rem", fontWeight: "600", color: "#2a2727ff", textAlign: "center" }}>Education</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", width: "100%" }}>
          {education.map((edu) => (
            <div key={edu.id} style={{ background: "#f8f9fa", padding: "2rem", borderRadius: "8px", border: "1px solid #e5e5e5", textAlign: "center", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#0362fc", flexShrink: 0 }}>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: 0, color: "#000" }}>{edu.school}</h3>
              </div>
              <p style={{ fontSize: "1rem", color: "#555", marginBottom: "0.5rem" }}>{edu.major}</p>
              {edu.location && <p style={{ fontSize: "0.9rem", color: "#777", marginBottom: "1rem" }}>{edu.location}</p>}
              <p style={{ fontSize: "0.9rem", color: "#999", fontWeight: 500 }}>{edu.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
