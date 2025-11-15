import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project, glassStyle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        height: "320px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={`${project.image}?t=${Date.now()}`}
          alt={project.title}
          fill
          priority
          unoptimized
          style={{
            objectFit: "cover",
            transition: "filter 0.3s ease",
            filter: isHovered ? "brightness(0.5)" : "brightness(1)",
          }}
        />
      </div>

      {/* Overlay Content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.7)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#fff", marginBottom: "0.5rem" }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#ddd", lineHeight: 1.5 }}>
            {project.description}
          </p>
        </div>

        {/* GitHub Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#0362fc",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "background 0.2s ease",
            width: "fit-content",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#0253d6")}
          onMouseLeave={(e) => (e.target.style.background = "#0362fc")}
        >
          View on GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
