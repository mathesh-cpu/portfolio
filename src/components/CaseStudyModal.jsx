import React, { useState, useEffect } from 'react';
import {
  CloseIcon,
  GithubIcon,
  ExternalLinkIcon,
  CpuIcon,
  ActivityIcon,
  TerminalIcon,
} from './Icons';

export const MODAL_TABS = [
  {
    index: 0,
    num: '01',
    tabLabel: 'APP_UI',
    title: '01 // CONTAINERIZED APPLICATION STACK',
    description:
      'Deployed a multi-container voting architecture orchestrated with Docker Compose, ensuring clean network isolation and persistent database storage.',
    src: '/assets/app-ui.png',
    fallbackSrc: '/assets/Voting-result.png',
    secondaryFallback: '/assets/Voting-result.jpg',
  },
  {
    index: 1,
    num: '02',
    tabLabel: 'TELEMETRY',
    title: '02 // HOST & CONTAINER TELEMETRY',
    description:
      'Configured Prometheus, cAdvisor, and Node Exporter to stream real-time CPU, memory, and container status directly to Grafana dashboards.',
    src: '/assets/grafana-dashboard.png',
    fallbackSrc: '/assets/grafana-dashboard 2.jpg',
    secondaryFallback: '/Assets/grafana-dashboard.png (Host & Container Telemetry).jpg',
  },
  {
    index: 2,
    num: '03',
    tabLabel: 'IAM_ROLE',
    title: '03 // LEAST-PRIVILEGE IAM SECURITY',
    description:
      'Eliminated static AWS access keys by configuring EC2 IAM Instance Profiles with IMDSv2 token enforcement for secure, programmatic S3 access.',
    src: '/assets/iam-role-ec2.png',
    fallbackSrc: '/Assets/iam-role-ec2.png (Zero-Credential IAM Instance Profile).jpg',
    secondaryFallback: null,
  },
  {
    index: 3,
    num: '04',
    tabLabel: 'S3_VAULT',
    title: '04 // AUTOMATED DATABASE S3 VAULT',
    description:
      'Automated daily pg_dump database snapshots via cron daemons, uploading timestamped and encrypted archives directly to Amazon S3.',
    src: '/assets/s3-backup-vault.png',
    fallbackSrc: '/Assets/s3-backup-vault.png (Cross-Region Automated Backup Vault).jpg',
    secondaryFallback: null,
  },
  {
    index: 4,
    num: '05',
    tabLabel: 'DR_DRILL',
    title: '05 // DISASTER RECOVERY DRILL RESTORATION',
    description:
      'Conducted simulated failure drills by dropping local PostgreSQL tables and successfully restoring full state within minutes to validate 100% data integrity.',
    src: '/assets/dr-restore-success.png',
    fallbackSrc: '/Assets/dr-restore-success.png (Zero-Data-Loss DR Drill).jpg',
    secondaryFallback: null,
  },
];

export default function CaseStudyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tabImages, setTabImages] = useState(MODAL_TABS.map((t) => t.src));

  // Keyboard navigation & ESC close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setActiveTab((prev) => (prev === 0 ? MODAL_TABS.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveTab((prev) => (prev + 1) % MODAL_TABS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Auto-loop smoothly advances to the next tab index every 3.5 seconds when active
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % MODAL_TABS.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isOpen, isPaused]);

  if (!isOpen) return null;

  const currentTab = MODAL_TABS[activeTab];

  const handleImageError = (index) => {
    setTabImages((prev) => {
      const copy = [...prev];
      const tab = MODAL_TABS[index];
      if (copy[index] === tab.src && tab.fallbackSrc) {
        copy[index] = tab.fallbackSrc;
      } else if (copy[index] === tab.fallbackSrc && tab.secondaryFallback) {
        copy[index] = tab.secondaryFallback;
      }
      return copy;
    });
  };

  const handleTabClick = (idx) => {
    setActiveTab(idx);
  };

  return (
    <div
      className="case-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Case Study Deep Dive Modal"
      onClick={onClose}
    >
      <div className="case-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <header className="case-modal-header">
          <div className="case-modal-header-meta">
            <span className="case-eyebrow-tag">PROJECT CASE STUDY // AWS LAB ENVIRONMENT</span>
            <span className="case-tag-divider">//</span>
            <span className="case-tech-label">AWS EC2 &bull; LINUX RELIABILITY &bull; DISASTER RECOVERY</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="case-modal-close-pill"
            aria-label="Close modal (Esc)"
          >
            <span>CLOSE</span>
            <CloseIcon size={14} />
          </button>
        </header>

        {/* Modal Scroll Content */}
        <div className="case-modal-body">
          {/* Headline */}
          <div className="case-hero-heading-block">
            <h2 className="case-modal-title">
              Resilient Cloud Infrastructure &amp; Automated Disaster Recovery
            </h2>
            <p className="case-modal-lead">
              A production-mode lab deploying containerized applications on AWS EC2, tuning Linux virtual memory, enforcing IAM role security, and establishing automated S3 database backup pipelines.
            </p>
          </div>

          {/* 1. Tab Navigation Bar */}
          <div className="modal-tabs-bar">
            <div className="modal-tabs-list" role="tablist" aria-label="Case study telemetry slides">
              {MODAL_TABS.map((tab, idx) => {
                const isActive = idx === activeTab;
                return (
                  <button
                    key={tab.index}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`modal-tab-pill ${isActive ? 'active' : ''}`}
                    onClick={() => handleTabClick(idx)}
                  >
                    <span className="tab-idx">[{tab.num}]</span>
                    <span className="tab-label">{tab.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Auto-loop Status Indicator */}
            <div
              className="modal-autoplay-badge"
              onClick={() => setIsPaused((prev) => !prev)}
              title={isPaused ? 'Click to resume auto-loop (3.5s)' : 'Click to pause auto-loop'}
            >
              <span className={`autoplay-dot ${isPaused ? 'paused' : 'active'}`} />
              <span className="autoplay-text">{isPaused ? 'PAUSED' : 'AUTO-LOOP (3.5s)'}</span>
            </div>
          </div>

          {/* 2. Dedicated High-Impact Image Display Container (Between Tabs & Text) */}
          <div
            className="modal-image-stage"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label={`Active slide display: ${currentTab.title}`}
          >
            <img
              key={activeTab}
              src={tabImages[activeTab]}
              alt={currentTab.title}
              className="modal-stage-active-img"
              onError={() => handleImageError(activeTab)}
              loading="eager"
            />
          </div>

          {/* 3. Deep-Dive Technical Narrative Text Cards */}
          <div className="case-narrative-sections">
            {/* The Challenge */}
            <div className="narrative-block challenge">
              <div className="narrative-label">
                <TerminalIcon size={14} />
                <span>01 // THE CHALLENGE</span>
              </div>
              <h4 className="narrative-heading">Memory Saturation &amp; Secret Exposure</h4>
              <p className="narrative-text">
                Under high-throughput burst traffic on AWS EC2, concurrent write spikes exhausted physical host memory. Because standard cloud instances are provisioned without swap partitions, the Linux kernel Out-Of-Memory (OOM) killer terminated the database container process, risking table corruption and service outages. Concurrently, legacy automated backup scripts relied on hardcoded static AWS credentials embedded in configuration files, creating critical security vulnerabilities.
              </p>
            </div>

            {/* Architecture & Automation */}
            <div className="narrative-block architecture">
              <div className="narrative-label">
                <CpuIcon size={14} />
                <span>02 // ARCHITECTURE &amp; AUTOMATION</span>
              </div>
              <h4 className="narrative-heading">Kernel Swap Optimization &amp; IMDSv2 Profiles</h4>
              <p className="narrative-text">
                To eliminate OOM terminations, configured a 2GB dedicated virtual swap partition with tuned <code>vm.swappiness=10</code>, prioritizing physical RAM for active caches while seamlessly absorbing transactional memory peaks. To enforce zero-trust credentials, attached an IAM Role via EC2 Instance Profiles with strict IMDSv2 session token enforcement, completely eliminating static secrets. Configured an automated cron daemon executing encrypted database dumps streamed directly to an Amazon S3 cross-region backup vault.
              </p>
            </div>

            {/* Verified Metrics */}
            <div className="narrative-block metrics">
              <div className="narrative-label">
                <ActivityIcon size={14} />
                <span>03 // VERIFIED PRODUCTION METRICS</span>
              </div>
              <h4 className="narrative-heading">Simulated Total Wipeout &amp; Drill Validation</h4>
              <div className="metrics-triad">
                <div className="triad-card">
                  <span className="triad-val text-green">100%</span>
                  <span className="triad-label">Data Consistency Verified</span>
                  <p className="triad-sub">Zero table corruption across repeated disaster drills.</p>
                </div>
                <div className="triad-card">
                  <span className="triad-val text-cyan">&lt; 5m</span>
                  <span className="triad-label">Recovery Time Objective (RTO)</span>
                  <p className="triad-sub">Full container stack reconstructed from S3 backup.</p>
                </div>
                <div className="triad-card">
                  <span className="triad-val text-amber">Zero</span>
                  <span className="triad-label">Static Credentials</span>
                  <p className="triad-sub">100% IMDSv2 temporary token authentication.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Link */}
          <div className="case-modal-footer">
            <a
              href="https://github.com/mathesh-cpu/aws-resilient-cloud-architecture.git"
              target="_blank"
              rel="noopener noreferrer"
              className="case-repo-cta-btn"
            >
              <GithubIcon size={18} />
              <span>View Project on GitHub &rarr;</span>
              <ExternalLinkIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
