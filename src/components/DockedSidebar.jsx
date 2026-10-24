import React, { useState } from 'react';
import {
  FileTextIcon,
  ExternalLinkIcon,
} from './Icons';

export default function DockedSidebar({ isDocked, activeSection, onOpenResume }) {
  const [imgSrc, setImgSrc] = useState('/assets/profile.png');

  const navItems = [
    { id: 'hero', label: 'HERO', num: '00' },
    { id: 'overview', label: 'OVERVIEW', num: '01' },
    { id: 'stack', label: 'STACK', num: '02' },
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

  return (
    <aside
      className={`docked-sidebar-rail ${isDocked ? 'visible' : ''}`}
      aria-label="Docked Navigation Rail"
    >
      <div className="docked-rail-inner">
        {/* Top Mini Identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="docked-brand-block"
          title="Back to Top"
        >
          <div className="docked-avatar-box">
            <img
              src={imgSrc}
              alt="Matheshwaran N"
              className="docked-avatar-img"
              onError={() => setImgSrc('/assets/profile.jpg')}
            />
            <span className="docked-status-dot"></span>
          </div>
          <div className="docked-text-box">
            <span className="docked-name">Matheshwaran N</span>
            <span className="docked-role">Cloud &amp; Systems</span>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav className="docked-nav-links" aria-label="Section Anchors">
          <ul>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`docked-nav-item ${isActive ? 'active' : ''}`}
                  >
                    <span className="docked-nav-idx">{item.num} //</span>
                    <span className="docked-nav-text">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div className="docked-rail-bottom">
          <button
            type="button"
            onClick={onOpenResume}
            className="docked-resume-cta"
            aria-label="Download Resume"
          >
            <FileTextIcon size={14} />
            <span>Resume</span>
            <ExternalLinkIcon size={11} style={{ opacity: 0.6, marginLeft: 'auto' }} />
          </button>
        </div>
      </div>
    </aside>
  );
}
