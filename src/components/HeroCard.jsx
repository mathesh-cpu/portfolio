import React, { useState } from 'react';
import Typewriter from './Typewriter';

const FALLBACK_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23121216'/%3E%3Ccircle cx='60' cy='45' r='22' fill='%2338bdf8' opacity='0.8'/%3E%3Cpath d='M25 105c0-19.33 15.67-35 35-35s35 15.67 35 35' fill='%2338bdf8' opacity='0.8'/%3E%3C/svg%3E";

export default function HeroCard({ onOpenResume }) {
  const [imgSrc, setImgSrc] = useState('/assets/profile.png');

  const handleImageError = () => {
    if (imgSrc === '/assets/profile.png') {
      setImgSrc('/assets/profile.jpg');
    } else {
      setImgSrc(FALLBACK_AVATAR);
    }
  };

  return (
    <div className="darkmate-hero-card interactive-glow" id="hero">
      {/* Left Side — Sticker Cutout Portrait */}
      <div className="hero-sticker-side">
        <div className="sticker-glow-backdrop"></div>
        <div className="sticker-container">
          <img
            src={imgSrc}
            alt="Matheshwaran N"
            className="sticker-cutout-img"
            onError={handleImageError}
            loading="eager"
          />
        </div>
      </div>

      {/* Right Side — Editorial Intro */}
      <div className="hero-intro-side">
        {/* Monospace Greeting Pill */}
        <div className="greeting-pill-wrap">
          <span className="greeting-pill">
            <span className="greeting-wave" role="img" aria-label="wave">👋</span>
            <span className="greeting-text">Hello I Am</span>
          </span>
        </div>

        {/* Name Heading */}
        <h1 className="hero-author-name">Matheshwaran N</h1>

        {/* Dynamic Typewriter Subtitle */}
        <div className="hero-typewriter-container">
          <Typewriter className="hero-typewriter" />
        </div>

        {/* Short Bio */}
        <p className="hero-short-bio">
          Cloud &amp; Systems Engineer from Tamil Nadu, India, specializing in resilient infrastructure, container orchestration, and observability.
        </p>

        {/* Dual Primary CTAs */}
        <div className="hero-ctas-row">
          <a
            href="mailto:matheshwaran.n@gmail.com?subject=Opportunity%20Inquiry%20-%20Cloud%20%26%20Systems%20Engineer"
            className="hero-primary-cta email-cta interactive-glow"
          >
            <span className="btn-icon">✉️</span>
            <span>EMAIL ME</span>
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="hero-secondary-cta resume-cta interactive-glow"
            aria-label="View or Download Resume"
          >
            <span className="btn-icon">📄</span>
            <span>VIEW RESUME</span>
          </button>
        </div>
      </div>
    </div>
  );
}
