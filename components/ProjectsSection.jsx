import ProjectCard from "./ProjectCard";
import { projects } from "../lib/data";

export default function ProjectsSection({ glassStyle }) {
  return (
    <section id="projects" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "600", color: "#2a2727ff" }}>Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1rem", width: "100%" }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} glassStyle={glassStyle} />
        ))}
      </div>
    </section>
  );
}
