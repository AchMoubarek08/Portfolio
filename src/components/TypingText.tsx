import React, { useState, useEffect } from "react";

const TypingText = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState(""); // Text displayed so far

  useEffect(() => {
    // const timer = setTimeout(() => {
        
    // }, 1500);
    let currentIndex = 0; // Start typing from the first character
    const typeCharacter = () => {
      if (currentIndex < text.length  - 1) {
        setDisplayedText((prev) => prev + text[currentIndex]); // Add the next character
        currentIndex++;
      } else {
        clearInterval(typingInterval); // Stop typing when complete
      }
    };

    const typingInterval = setInterval(typeCharacter, typingSpeed);

    return () => clearInterval(typingInterval); // Clean up on unmount
  }, [text, typingSpeed]);
  console.log('distext %s', displayedText);
  return <h3>{displayedText}</h3>;
};

export default TypingText;
