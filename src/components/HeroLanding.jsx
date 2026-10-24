import React, { useState } from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  ArrowDownIcon,
  FileTextIcon,
} from './Icons';

const FALLBACK_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23121216'/%3E%3Ccircle cx='60' cy='45' r='22' fill='%2338bdf8' opacity='0.8'/%3E%3Cpath d='M25 105c0-19.33 15.67-35 35-35s35 15.67 35 35' fill='%2338bdf8' opacity='0.8'/%3E%3C/svg%3E";

export default function HeroLanding({ onOpenResume }) {
  const [imgSrc, setImgSrc] = useState('/assets/profile.jpg');

  const handleImageError = () => {
    if (imgSrc === '/assets/profile.jpg') {
      setImgSrc('/assets/profile.png');
    } else {
      setImgSrc(FALLBACK_AVATAR);
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-landing" className="hero-landing-section">
      <div className="hero-editorial-container">
        {/* Pulsing Status Pill */}
        <div className="hero-status-row">
          <div className="status-badge pulse-badge" aria-label="Status: Available for Opportunities">
            <span className="pulsing-dot-wrapper">
              <span className="pulsing-ring"></span>
              <span className="pulsing-dot"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>
        </div>

        {/* Profile Portrait with Radial Backlight */}
        <div className="hero-portrait-stage">
          <div className="hero-backlight-radial"></div>
          <div className="hero-portrait-frame">
            <img
              src={imgSrc}
              alt="Matheshwaran N — Cloud & Systems Engineer"
              className="hero-portrait-img"
              onError={handleImageError}
              loading="eager"
            />
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="hero-typography-block">
          <h1 className="hero-massive-name">MATHESHWARAN N</h1>
          <p className="hero-editorial-subtitle">
            Cloud &amp; Systems Engineer &mdash; <span className="subtitle-highlight">Resilient Infrastructure, Linux Reliability &amp; Observability</span>
          </p>
        </div>

        {/* Action / Social Bar */}
        <div className="hero-social-action-bar">
          <a
            href="https://github.com/mathesh-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon-btn"
            title="GitHub (mathesh-cpu)"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={20} />
            <span className="social-btn-label">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/matheshwaran-n"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
            <span className="social-btn-label">LinkedIn</span>
          </a>

          <a
            href="mailto:matheshwaran.n@gmail.com"
            className="hero-social-icon-btn"
            title="Email (matheshwaran.n@gmail.com)"
            aria-label="Send direct email"
          >
            <MailIcon size={20} />
            <span className="social-btn-label">Email</span>
          </a>

          <a
            href="tel:+919876543210"
            className="hero-social-icon-btn"
            title="Phone / WhatsApp Contact"
            aria-label="Direct Phone or WhatsApp"
          >
            <PhoneIcon size={20} />
            <span className="social-btn-label">Direct Line</span>
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="hero-resume-action-btn"
            aria-label="Download or View Resume"
          >
            <FileTextIcon size={17} />
            <span>Resume</span>
          </button>
        </div>

        {/* Animated Scroll Prompt */}
        <button
          type="button"
          onClick={handleScrollDown}
          className="hero-scroll-prompt"
          aria-label="Scroll to explore portfolio"
        >
          <span>Scroll to explore</span>
          <ArrowDownIcon size={14} className="bounce-arrow" />
        </button>
      </div>
    </section>
  );
}
