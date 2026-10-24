import React, { useState, useEffect } from 'react';

const PHRASES = [
  'Aspiring Cloud & DevOps Engineer',
  'AWS & Google Cloud Core Infrastructure',
  'GCP Associate Cloud Engineer Track',
  'Linux Systems & Docker Containerization',
  'Hands-on Observability (Prometheus & Grafana)',
];

export default function Typewriter({ className = '' }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = PHRASES[phraseIndex];
    let timer;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 50);
      } else {
        // Pause at completion
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting backwards
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 28);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <span className={`typewriter-container ${className}`}>
      <span className="typewriter-text">{currentText}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
}
