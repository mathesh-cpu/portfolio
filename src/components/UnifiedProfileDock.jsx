import React, { useState } from 'react';
import Typewriter from './Typewriter';
import {
  FileTextIcon,
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from './Icons';

const FALLBACK_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23121216'/%3E%3Ccircle cx='60' cy='45' r='22' fill='%2338bdf8' opacity='0.8'/%3E%3Cpath d='M25 105c0-19.33 15.67-35 35-35s35 15.67 35 35' fill='%2338bdf8' opacity='0.8'/%3E%3C/svg%3E";

export default function UnifiedProfileDock({
  isDocked,
  scrollY = 0,
  activeSection,
  onOpenResume,
}) {
  const [imgSrc, setImgSrc] = useState('/assets/profile.png');

  const handleImageError = () => {
    if (imgSrc === '/assets/profile.png') {
      setImgSrc('/assets/profile.jpg');
    } else {
      setImgSrc(FALLBACK_AVATAR);
    }
  };

  const navItems = [
    { id: 'overview', label: 'OVERVIEW', num: '01' },
    { id: 'stack', label: 'TECH STACK', num: '02' },
    { id: 'projects', label: 'WORK // CASE STUDY', num: '03' },
    { id: 'education', label: 'EDUCATION', num: '04' },
    { id: 'contact', label: 'CONTACT', num: '05' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On desktop, dynamic translate3d for parallax sync at hero and GPU-accelerated docked transition
  const dynamicTransform = isDocked
    ? 'translate3d(0, 0, 0) scale(1)'
    : `translate3d(-50%, ${-Math.min(scrollY, 120)}px, 0) scale(1)`;

  return (
    <aside
      className={`unified-profile-dock interactive-glow ${isDocked ? 'is-docked' : 'at-hero'}`}
      style={{ transform: dynamicTransform }}
      aria-label="Profile Identity & Navigation"
    >
      {/* 1. Header / Avatar Row (Top) */}
      <div className="dock-identity-header">
        <div className="dock-identity-top-row">
          {/* Clean Cutout Portrait with White Contour Outline */}
          <div className="dock-avatar-stage">
            <div className="dock-avatar-frame">
              <img
                src={imgSrc}
                alt="Matheshwaran N"
                className="dock-sticker-img"
                onError={handleImageError}
                loading="eager"
              />
              <span className="dock-beacon-status" title="Open to Entry-Level & Fresher Roles" />
            </div>
          </div>

          {/* Text Block (Name & Dynamic Subtitle) */}
          <div className="dock-text-block">
            {/* Monospace Greeting Pill (Expansive hero only) */}
            <div className="dock-greeting-pill-wrap">
              <span className="greeting-pill">
                <span className="greeting-wave" role="img" aria-label="wave">👋</span>
                <span className="greeting-text">Hello I Am</span>
              </span>
            </div>

            {/* Name */}
            <h1 className="dock-author-name">Matheshwaran N</h1>

            {/* Dynamic Typewriter Subtitle */}
            <div className="dock-typewriter-row">
              <Typewriter className="dock-typewriter" />
            </div>

            {/* Short Bio (Expansive hero only) */}
            <p className="dock-short-bio">
              {isDocked
                ? 'Aspiring Cloud & Systems Engineer | AWS & GCP, Linux, Docker, Telemetry'
                : 'Entry-level Cloud & Systems Engineer from Madurai / Chennai, India. Strong foundation in Linux administration, Docker container orchestration, AWS core services, and Google Cloud infrastructure through hands-on practical labs in the GCP Associate Cloud Engineer track. Passionate about multi-cloud architecture, automation, and building observable, fault-tolerant systems.'}
            </p>

            {/* Dual Primary CTAs (Expansive hero only) */}
            <div className="dock-ctas-row">
              <a
                href="mailto:matheshwaran1300@gmail.com?subject=Opportunity%20Inquiry%20-%20Cloud%20%26%20Systems%20Engineer"
                className="hero-primary-cta email-cta interactive-glow"
              >
                <span className="btn-icon">✉️</span>
                <span>EMAIL ME</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-secondary-cta resume-cta interactive-glow"
                aria-label="View or Download Resume"
              >
                <span className="btn-icon">📄</span>
                <span>VIEW RESUME</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pulsing Status Pill (Docked State Header) */}
        <div className="dock-status-pill-wrap">
          <span className="dock-status-pill">
            <span className="dock-status-dot" aria-hidden="true" />
            <span>Open to Entry-Level &amp; Fresher Roles</span>
          </span>
        </div>
      </div>

      {/* 2. Middle: High-precision section navigation links (#overview, #stack, #projects, #education, #contact) */}
      <nav className="dock-nav-anchors" aria-label="Section Navigation">
        <ul>
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id ||
              (item.id === 'projects' && (activeSection === 'work' || activeSection === 'projects'));
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`dock-nav-item ${isActive ? 'active' : ''}`}
                >
                  <span className="dock-nav-idx">{item.num} //</span>
                  <span className="dock-nav-text">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 3. Bottom: Download Resume action button + clean social icon links (GitHub, LinkedIn, Email) */}
      <div className="dock-rail-footer">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-resume-btn"
          aria-label="Download Resume"
        >
          <FileTextIcon size={14} />
          <span>Download Resume</span>
          <ExternalLinkIcon size={11} style={{ opacity: 0.6, marginLeft: 'auto' }} />
        </a>

        <div className="dock-social-links" aria-label="Social Links">
          <a
            href="https://github.com/mathesh-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="dock-social-btn"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/mathesh-waran-n-"
            target="_blank"
            rel="noopener noreferrer"
            className="dock-social-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href="mailto:matheshwaran1300@gmail.com"
            className="dock-social-btn"
            title="Email Matheshwaran"
            aria-label="Email Matheshwaran"
          >
            <MailIcon size={15} />
          </a>
        </div>
      </div>
    </aside>
  );
}
