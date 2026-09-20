import React from "react";
import { useSkillAnimation } from "../lib/hooks";

export default function SkillBar({ skill }) {
  const animatedPercent = useSkillAnimation(skill.percent);

  return (
    <div style={{ marginBottom: 24, textAlign: "left" }}>
      {/* text + percent */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontWeight: 500, fontSize: "1rem", color: "#333" }}>{skill.name}</span>
        <span style={{ color: "#666", fontSize: "0.9rem", fontWeight: 500 }}>{animatedPercent}%</span> {/* increase percent smoothly */}
      </div>
      {/* Outer bar */}
      <div style={{ width: "100%", height: 8, backgroundColor: "#f0f0f0", borderRadius: 4, overflow: "hidden", border: "1px solid #e0e0e0" }}>
        {/* Inner bill flls up */}
        <div
          style={{
            width: `${animatedPercent}%`,
            height: "100%",
            background: "linear-gradient(90deg, #0066ff 0%, #0052cc 100%)",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}
