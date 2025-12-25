import SkillBar from "./SkillBar";
import { skillCategories } from "../lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: "600", color: "#2a2727ff" }}>Skills</h2>
      <div id="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", maxWidth: 1000, margin: "0 auto", padding: "0 1rem" }}>
        {skillCategories.map((category) => (
          <div
            key={category.category}
            style={{
              background: "#fff",
              padding: "1.5rem",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0,0,0,0.08)";
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#0362fc", marginBottom: "1.5rem" }}>
              {category.category}
            </h3>
            <div>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
