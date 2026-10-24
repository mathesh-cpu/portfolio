import React, { useState } from 'react';
import Typewriter from './Typewriter';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  FileTextIcon,
  ExternalLinkIcon,
  ArrowDownIcon,
} from './Icons';

const FALLBACK_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23121216'/%3E%3Ccircle cx='60' cy='45' r='22' fill='%2338bdf8' opacity='0.8'/%3E%3Cpath d='M25 105c0-19.33 15.67-35 35-35s35 15.67 35 35' fill='%2338bdf8' opacity='0.8'/%3E%3C/svg%3E";

export default function UnifiedSidebar({ isDocked, activeSection, onOpenResume }) {
  const [profileImg, setProfileImg] = useState('/assets/profile.jpg');

  const navItems = [
    { id: 'overview', label: 'OVERVIEW', num: '01' },
    { id: 'stack', label: 'TECH STACK', num: '02' },
    { id: 'projects', label: 'CASE STUDY', num: '03' },
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

  const handleImageError = () => {
    if (profileImg === '/assets/profile.jpg') {
      setProfileImg('/assets/profile.png');
    } else {
      setProfileImg(FALLBACK_AVATAR);
    }
  };

  return (
    <aside
      className={`unified-identity-rail ${isDocked ? 'docked' : 'expansive'}`}
      aria-label="Author Identity and Navigation Rail"
    >
      {/* Editorial Portrait Container */}
      <div className="identity-portrait-wrapper">
        <div className="editorial-portrait-frame">
          <img
            src={profileImg}
            alt="Matheshwaran N — Cloud & Systems Engineer"
            className="editorial-portrait-img"
            onError={handleImageError}
            loading="eager"
          />
          <span className="live-status-dot-pin" title="Available for Opportunities"></span>
        </div>
      </div>

      {/* Identity & Typography Block */}
      <div className="identity-text-block">
        <div className="identity-badge-row">
          <span className="pulsing-status-pill" aria-label="Status: Available for Opportunities">
            <span className="pulsing-dot-wrapper">
              <span className="pulsing-ring"></span>
              <span className="pulsing-dot"></span>
            </span>
            <span className="status-pill-label">Available for Opportunities</span>
          </span>
        </div>

        <h1 className="identity-massive-name">MATHESHWARAN N</h1>

        {/* Dynamic Typewriter Subtitle */}
        <div className="identity-typewriter-row">
          <Typewriter className="identity-typewriter" />
        </div>
      </div>

      {/* Docked Navigation Anchors (Smoothly visible when docked or in flow) */}
      <nav className="identity-nav-anchors" aria-label="Section Navigation">
        <ul>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`identity-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="nav-num">{item.num} //</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions & Social Icons */}
      <div className="identity-bottom-actions">
        <button
          type="button"
          onClick={onOpenResume}
          className="identity-resume-btn"
          aria-label="Download or View Resume"
        >
          <FileTextIcon size={14} />
          <span>Download Resume</span>
          <ExternalLinkIcon size={12} style={{ opacity: 0.6, marginLeft: 'auto' }} />
        </button>

        <div className="identity-social-row">
          <a
            href="https://github.com/mathesh-cpu"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub Profile"
            className="identity-social-btn"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://linkedin.com/in/matheshwaran-n"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
            className="identity-social-btn"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href="mailto:matheshwaran.n@gmail.com"
            title="Direct Email"
            aria-label="Email"
            className="identity-social-btn"
          >
            <MailIcon size={17} />
          </a>
          <a
            href="tel:+919876543210"
            title="Phone / WhatsApp"
            aria-label="Phone"
            className="identity-social-btn"
          >
            <PhoneIcon size={17} />
          </a>
        </div>

        {/* Scroll-Prompt (Expansive view only) */}
        <div
          className="identity-scroll-prompt"
          onClick={(e) => handleNavClick(e, 'overview')}
        >
          <span>Scroll to explore</span>
          <ArrowDownIcon size={13} className="bounce-arrow" />
        </div>
      </div>
    </aside>
  );
}
