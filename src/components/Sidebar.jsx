import React, { useState } from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  FileTextIcon,
  ExternalLinkIcon,
} from './Icons';

const FALLBACK_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23121216'/%3E%3Ccircle cx='60' cy='45' r='22' fill='%2338bdf8' opacity='0.8'/%3E%3Cpath d='M25 105c0-19.33 15.67-35 35-35s35 15.67 35 35' fill='%2338bdf8' opacity='0.8'/%3E%3C/svg%3E";

export default function Sidebar({ activeSection, onOpenResume, isMorphActive }) {
  const [avatarSrc, setAvatarSrc] = useState('/assets/profile.jpg');

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

  const handleAvatarError = () => {
    if (avatarSrc === '/assets/profile.jpg') {
      setAvatarSrc('/assets/profile.png');
    } else {
      setAvatarSrc(FALLBACK_AVATAR);
    }
  };

  return (
    <aside className={`slim-sidebar ${isMorphActive ? 'morph-active' : ''}`}>
      {/* Sidebar Identity & Compact Avatar */}
      <div className="slim-sidebar-header">
        <a href="#hero-landing" className="slim-avatar-link" title="Back to Hero">
          <div className="slim-avatar-frame">
            <img
              src={avatarSrc}
              alt="Matheshwaran N"
              className="slim-avatar-img"
              onError={handleAvatarError}
            />
            <span className="slim-status-dot" title="Available for Opportunities"></span>
          </div>
          <div>
            <span className="slim-author-name">Matheshwaran N</span>
            <span className="slim-author-role">Cloud &amp; Systems</span>
          </div>
        </a>
      </div>

      {/* Nav Anchors */}
      <nav className="slim-sidebar-nav" aria-label="Section Navigation">
        <ul>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`slim-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="slim-nav-num">{item.num}</span>
                  <span className="slim-nav-label">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom CTA & Social Links */}
      <div className="slim-sidebar-footer">
        <button
          type="button"
          onClick={onOpenResume}
          className="slim-resume-btn"
          aria-label="Download Resume"
        >
          <FileTextIcon size={14} />
          <span>Resume</span>
          <ExternalLinkIcon size={12} style={{ opacity: 0.6 }} />
        </button>

        <div className="slim-social-icons">
          <a
            href="https://github.com/mathesh-cpu"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/matheshwaran-n"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:matheshwaran.n@gmail.com"
            title="Email"
            aria-label="Send direct email"
          >
            <MailIcon size={16} />
          </a>
          <a
            href="tel:+919876543210"
            title="Phone / WhatsApp"
            aria-label="Direct Phone Line"
          >
            <PhoneIcon size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
}
