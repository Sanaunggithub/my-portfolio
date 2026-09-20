import { useState, useEffect } from "react";

export function useTypingEffect(text, speed = 100) {
  const [displayText, setDisplayText] = useState("");

  // type one character at a time
  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout); // avoids memory leaks
    }
  }, [displayText, text, speed]);

  return displayText;
}

// percent increase animation
export function useSkillAnimation(targetPercent) {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    if (currentPercent < targetPercent) {
      const timeout = setTimeout(() => {
        setCurrentPercent((p) => Math.min(p + 1, targetPercent)); // min is used to cap the value
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentPercent, targetPercent]);

  return currentPercent;
}
