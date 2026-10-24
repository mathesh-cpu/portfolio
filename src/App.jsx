import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
import NavbarMobile from './components/NavbarMobile';
import TopHudBar from './components/TopHudBar';
import UnifiedProfileDock from './components/UnifiedProfileDock';
import TechMarquee from './components/TechMarquee';
import StatsStrip from './components/StatsStrip';
import FloatingSocialRail from './components/FloatingSocialRail';
import HeroOverview from './components/HeroOverview';
import TechStack from './components/TechStack';
import FeaturedProject from './components/FeaturedProject';
import Education from './components/Education';
import Contact from './components/Contact';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useMouseGlow } from './hooks/useMouseGlow';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDocked, setIsDocked] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Initialize directional scroll-reveal IntersectionObserver
  useScrollReveal();

  // Initialize interactive mouse cursor glow tracker
  useMouseGlow();

  // Monitor scroll for Hero Docking into Left Sticky Rail (smooth threshold between 85px and 150px)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrollY(y);
          if (y > 150) {
            setIsDocked(true);
          } else if (y < 85) {
            setIsDocked(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'overview', 'stack', 'projects', 'education', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* 2px Fixed Top Neon Progress Bar */}
      <ProgressBar />

      {/* Floating Vertical Social Rail on Right Edge */}
      <FloatingSocialRail />

      {/* Mobile Top Navigation Header (<1024px) */}
      <NavbarMobile
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <div className="darkmate-layout-wrapper">
        {/* Top HUD Bar: Status Beacon & IST Dynamic Clock */}
        <header className="darkmate-top-hud-bar" id="hero">
          <div className="darkmate-top-hud-container">
            <TopHudBar />
          </div>
        </header>

        {/* Hero Morph Slot: Holds vertical space so profile card has its expansive hero canvas */}
        <div className="hero-morph-slot">
          {/* Single Unified Morphing Profile Identity (Docks into 250px left vertical rail) */}
          <UnifiedProfileDock
            isDocked={isDocked}
            scrollY={scrollY}
            activeSection={activeSection}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </div>

        {/* Dedicated Main Scrolling Feed Container with explicit left offset when docked */}
        <div className={`main-scrolling-container ${isDocked ? 'is-docked' : ''}`}>
          <div className="main-scrolling-feed-inner">
            {/* Continuous Marquee (10 tags) & 4-Column Glowing Stats Bar */}
            <div className="hero-metrics-strip-wrap reveal-up">
              <TechMarquee />
              <StatsStrip />
            </div>

            {/* Main Editorial Feed */}
            <main className="editorial-main-feed">
              {/* 1. Architectural Overview & Reliability Principles */}
              <HeroOverview />

              {/* 2. Core Systems Toolchain & Categorized Tech Stack */}
              <TechStack />

              {/* 3. Featured Engineering Case Study (Single Preview Card) */}
              <FeaturedProject
                onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
              />

              {/* 4. Academic Background & Certifications */}
              <Education />

              {/* 5. Initiate Contact & Editorial Footer */}
              <Contact />
            </main>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button (After 300px scroll) */}
      <BackToTop />

      {/* Deep-Dive Case Study Modal with Infinite Auto-Slider */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

      {/* Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
