import React from 'react';
import { CloseIcon, FileTextIcon, MailIcon, ExternalLinkIcon, CheckIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Resume Overview Modal"
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: '720px',
          width: '100%',
          margin: 'auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-inset)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <FileTextIcon size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              MATHESHWARAN_N_RESUME.PDF
            </span>
          </div>

          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close Resume Modal"
          >
            <CloseIcon size={16} />
            <span>ESC</span>
          </button>
        </div>

        {/* Modal Body */}
        <div
          style={{
            padding: '2rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '1.35rem',
                color: 'var(--text-primary)',
                fontWeight: 700,
                marginBottom: '0.25rem',
              }}
            >
              Matheshwaran N
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent-cyan)',
              }}
            >
              Aspiring Cloud &amp; Systems Engineer | AWS &amp; GCP, Linux, Docker, Telemetry
            </p>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
              Madurai / Chennai, India &bull; matheshwaran1300@gmail.com &bull; +91 86083 91949 &bull; github.com/mathesh-cpu
            </p>
          </div>

          <hr style={{ borderColor: 'var(--border-subtle)', borderStyle: 'solid' }} />

          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem',
                color: 'var(--accent-amber)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
              }}
            >
              // Core Competencies
            </h4>
            <p>
              Resilient Cloud Infrastructure (AWS EC2, S3, IAM, VPC, GCP), Linux OS Kernel Tuning (Swap, Memory &amp; Process Isolation), Container Orchestration (Docker, Docker Compose), Systemd &amp; Cron Automation, Real-Time Observability (Prometheus, Grafana, Node Exporter, cAdvisor).
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem',
                color: 'var(--accent-amber)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
              }}
            >
              // Production Engineering Case Study
            </h4>
            <p>
              <strong>Resilient Cloud Architecture &amp; Automated Disaster Recovery (AWS EC2):</strong>
              <br />
              &bull; A production-mode lab deploying containerized applications on AWS EC2, tuning Linux virtual memory, enforcing IAM role security, and establishing automated S3 database backup pipelines.
              <br />
              &bull; Configured Linux swap memory to stabilize containerized PostgreSQL on AWS EC2 (zero OOM terminations).
              <br />
              &bull; Secured EC2-to-S3 access exclusively via IAM Instance Profiles and IMDSv2 tokens.
              <br />
              &bull; Verified end-to-end table restoration in &lt; 5 minutes from automated Amazon S3 backup snapshots.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem',
                color: 'var(--accent-amber)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
              }}
            >
              // Education &amp; Certifications
            </h4>
            <p>
              &bull; <strong>Master of Science (M.Sc.) in Data Science</strong> (2024–2026) — Hindustan Institute of Technology and Science, Chennai
              <br />
              &bull; <strong>Bachelor of Vocation (B.Voc.) in Data Science</strong> (2021–2024) — The American College, Madurai
              <br />
              &bull; <strong>Google Cloud Skills Boost</strong> — Associate Cloud Engineer Track &amp; Practical Labs
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-inset)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Matheshwaran_N_Resume.pdf"
            className="direct-email-btn"
            style={{ textDecoration: 'none' }}
          >
            <FileTextIcon size={16} />
            <span>Download PDF File</span>
          </a>

          <button
            type="button"
            onClick={() => window.print()}
            className="copy-email-btn"
          >
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
