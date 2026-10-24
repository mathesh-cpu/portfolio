import React from 'react';
import TechMarquee from './TechMarquee';
import { CloudIcon, ServerIcon, ActivityIcon, DatabaseIcon } from './Icons';

export default function TechStack() {
  const stackCategories = [
    {
      id: 'cloud',
      category: 'Cloud Platforms (AWS & GCP)',
      icon: <CloudIcon size={16} />,
      items: [
        {
          name: 'Cloud Platforms (AWS & GCP)',
          meta: 'Foundational coursework and lab environments deploying EC2 compute, IAM least-privilege policies, S3 vaults, and GCP Associate Cloud Engineer track modules.',
        },
        {
          name: 'Amazon Web Services (AWS)',
          meta: 'EC2 instances, S3 vaults, VPC security groups, and zero-credential IAM instance profiles.',
        },
        {
          name: 'Google Cloud Platform (GCP)',
          meta: 'Practical labs in the GCP Associate Cloud Engineer track, Compute Engine, and Cloud Storage lifecycles.',
        },
      ],
    },
    {
      id: 'systems',
      category: 'Linux OS & Containerization',
      icon: <ServerIcon size={16} />,
      items: [
        {
          name: 'Linux & Bash',
          meta: 'Hands-on practice configuring Linux environments (Ubuntu), kernel swap allocation, cron automation, and basic shell utilities for system routines.',
        },
        {
          name: 'Docker & Compose',
          meta: 'Practical lab experience containerizing multi-tier web applications, creating declarative docker-compose configurations, and managing isolated networks.',
        },
        {
          name: 'Systems Administration',
          meta: 'Systemd service units, process isolation, host resource tuning, and terminal debugging.',
        },
      ],
    },
    {
      id: 'observability',
      category: 'Telemetry & Observability',
      icon: <ActivityIcon size={16} />,
      items: [
        {
          name: 'Prometheus & Grafana',
          meta: 'Hands-on setup collecting host metrics (Node Exporter) and container stats (cAdvisor) into dashboard visualizations.',
        },
        {
          name: 'Node Exporter & cAdvisor',
          meta: 'Metric exporters streaming real-time CPU saturation, memory headroom, and container state.',
        },
        {
          name: 'Dashboard Telemetry',
          meta: 'Configured visual telemetry dashboards and time-series monitoring for instant issue identification.',
        },
      ],
    },
    {
      id: 'storage',
      category: 'Datastores & Recovery',
      icon: <DatabaseIcon size={16} />,
      items: [
        {
          name: 'PostgreSQL',
          meta: 'Configured local and containerized database instances, structured persistent volume mounts, and practiced automated logical backups with pg_dump.',
        },
        {
          name: 'Disaster Recovery (DR)',
          meta: 'Simulated table drops and verified automated database restoration routines from Amazon S3 snapshots.',
        },
        {
          name: 'Storage & Volume Mounts',
          meta: 'Docker volume binding, persistent storage mounts, and disk saturation monitoring.',
        },
      ],
    },
  ];

  return (
    <section id="stack" className="editorial-section reveal" aria-labelledby="stack-heading">
      <div className="section-eyebrow reveal-left">// 02 &mdash; CORE FOUNDATIONS &amp; HANDS-ON TOOLING</div>
      <h2 id="stack-heading" className="editorial-heading reveal-up">
        Core Foundations &amp; Hands-on Tooling
      </h2>
      <p className="editorial-sub-paragraph reveal-up" style={{ marginTop: '-1.25rem', marginBottom: '2.5rem', fontSize: '1.05rem', color: 'var(--text-body)' }}>
        Practical lab implementations, containerized deployments, and cloud platform fundamentals.
      </p>

      {/* Infinite Loop CSS Marquee */}
      <div className="reveal-up">
        <TechMarquee />
      </div>

      {/* Categorized Technical Breakdown */}
      <div className="editorial-tech-grid stagger-group">
        {stackCategories.map((cat) => (
          <div key={cat.id} className="editorial-tech-card reveal-up">
            <div className="tech-category-header">
              <span className="tech-category-icon">{cat.icon}</span>
              <h3 className="tech-category-title">{cat.category}</h3>
            </div>

            <ul className="tech-item-list">
              {cat.items.map((item) => (
                <li key={item.name} className="tech-list-row">
                  <span className="tech-row-name">{item.name}</span>
                  <span className="tech-row-meta">{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
