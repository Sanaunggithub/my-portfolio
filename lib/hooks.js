import { useState, useEffect } from "react";

export function useTypingEffect(text, speed = 100) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, text, speed]);

  return displayText;
}

export function useSkillAnimation(targetPercent) {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    if (currentPercent < targetPercent) {
      const timeout = setTimeout(() => {
        setCurrentPercent((p) => Math.min(p + 1, targetPercent));
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentPercent, targetPercent]);

  return currentPercent;
}
