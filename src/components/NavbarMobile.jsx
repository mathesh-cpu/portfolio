import React, { useState, useEffect } from 'react';
import {
  MenuIcon,
  CloseIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  FileTextIcon,
} from './Icons';

export default function NavbarMobile({ activeSection, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', num: '00' },
    { id: 'overview', label: 'Overview', num: '01' },
    { id: 'stack', label: 'Tech Stack', num: '02' },
    { id: 'projects', label: 'Case Study', num: '03' },
    { id: 'education', label: 'Education', num: '04' },
    { id: 'contact', label: 'Contact', num: '05' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="mobile-sticky-header">
      <div className="mobile-header-inner">
        <a
          href="#hero"
          className="mobile-brand-link"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          <span className="mobile-brand-title">MATHESHWARAN N</span>
          <span className="mobile-brand-status-dot" title="Open to Entry-Level & Fresher Roles"></span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-hamburger-btn"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Slide-down Drawer */}
      {isOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-status-pill">
              <span className="pulsing-dot-wrapper">
                <span className="pulsing-ring"></span>
                <span className="pulsing-dot"></span>
              </span>
              <span>Open to Entry-Level &amp; Fresher Roles</span>
            </div>

            <nav className="mobile-drawer-links" aria-label="Mobile Navigation">
              <ul>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                      >
                        <span className="mobile-drawer-num">{item.num} //</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mobile-drawer-cta-group">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mobile-resume-cta"
              >
                <FileTextIcon size={16} />
                <span>Download Resume</span>
              </a>

              <div className="mobile-social-row">
                <a
                  href="https://github.com/mathesh-cpu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mathesh-waran-n-"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>
                <a href="mailto:matheshwaran1300@gmail.com" aria-label="Email">
                  <MailIcon size={19} />
                </a>
                <a href="tel:+918608391949" aria-label="Phone">
                  <PhoneIcon size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
