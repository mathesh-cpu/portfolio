import React, { useState } from 'react';
import {
  ArrowRightIcon,
  GithubIcon,
  ExternalLinkIcon,
} from './Icons';

export default function FeaturedProject({ onOpenCaseStudy }) {
  const [imgSrc, setImgSrc] = useState('/assets/project-thumb.png');

  const handleImageError = () => {
    if (imgSrc === '/assets/project-thumb.png') {
      setImgSrc('/assets/grafana-dashboard.png');
    }
  };

  const metricBadges = [
    'AWS EC2',
    'Docker Compose',
    'PostgreSQL',
    'Amazon S3',
    'Prometheus / Grafana',
    'Bash Automation',
  ];

  return (
    <section id="projects" className="editorial-section reveal" aria-labelledby="projects-heading">
      <span id="work" className="section-anchor-offset" aria-hidden="true" />
      <div className="section-eyebrow reveal-left">// 03 &mdash; FEATURED CASE STUDY</div>
      <h2 id="projects-heading" className="editorial-heading reveal-up">
        Featured Engineering Architecture
      </h2>

      {/* Premium Single Project Card (Clickable card opening Deep Dive Modal) */}
      <div
        className="editorial-showcase-card single-preview-card reveal-up interactive-glow"
        onClick={onOpenCaseStudy}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenCaseStudy();
          }
        }}
        aria-label="Explore Resilient Cloud Architecture & Disaster Recovery Case Study"
      >
        {/* Cover Thumbnail Frame */}
        <div className="showcase-cover-frame">
          <img
            src={imgSrc}
            alt="Resilient Cloud Infrastructure & Automated Disaster Recovery"
            className="showcase-cover-img"
            onError={handleImageError}
            loading="lazy"
          />
          <div className="showcase-cover-gradient" aria-hidden="true" />
          <div className="showcase-cover-meta">
            <span className="showcase-category-badge">HANDS-ON CLOUD PROJECT</span>
            <span className="showcase-live-tag">VERIFIED ARCHITECTURE</span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="showcase-body">
          <h3 className="showcase-title">
            Resilient Cloud Infrastructure &amp; Automated Disaster Recovery
          </h3>

          <p className="showcase-narrative">
            A production-mode lab deploying containerized applications on AWS EC2, tuning Linux virtual memory, enforcing IAM role security, and establishing automated S3 database backup pipelines.
          </p>

          {/* Engineering Highlights */}
          <div className="showcase-badges-grid">
            {metricBadges.map((badge, idx) => (
              <span key={idx} className="monospace-metric-badge">
                <span className="badge-marker">[</span>
                <span>{badge}</span>
                <span className="badge-marker">]</span>
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="showcase-actions-row">
            <button
              type="button"
              className="showcase-primary-btn"
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy();
              }}
              aria-label="Explore Deep Dive & Telemetry"
            >
              <span>Explore Deep Dive &amp; Telemetry</span>
              <ArrowRightIcon size={16} />
            </button>

            <a
              href="https://github.com/mathesh-cpu/aws-resilient-cloud-architecture.git"
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-ghost-btn"
              onClick={(e) => e.stopPropagation()}
              aria-label="View on GitHub"
            >
              <GithubIcon size={16} />
              <span>GitHub Repo</span>
              <ExternalLinkIcon size={12} style={{ opacity: 0.6 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
