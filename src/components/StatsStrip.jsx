import React from 'react';

export default function StatsStrip() {
  const stats = [
    {
      value: '100%',
      label: 'Hands-on Implementation',
      desc: 'Configured Linux swap memory to stabilize containerized PostgreSQL on AWS EC2.',
      glowClass: 'glow-cyan',
    },
    {
      value: '< 5m',
      label: 'Disaster Recovery Drill',
      desc: 'Verified end-to-end table restoration from automated Amazon S3 backup snapshots.',
      glowClass: 'glow-green',
    },
    {
      value: 'Zero',
      label: 'Hardcoded Secrets',
      desc: 'Secured EC2-to-S3 access exclusively via IAM Instance Profiles and IMDSv2 tokens.',
      glowClass: 'glow-amber',
    },
    {
      value: 'Multi-Tier',
      label: 'Docker Orchestration',
      desc: 'Declarative container deployment monitored via Prometheus & Grafana telemetry.',
      glowClass: 'glow-cyan',
    },
  ];

  return (
    <div className="stats-strip-container reveal-right" aria-label="Key Production Telemetry Stats">
      <div className="stats-strip-grid stagger-group">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-strip-card interactive-glow reveal-right" style={{ '--stagger-index': idx }}>
            <div className={`stat-number-glow ${stat.glowClass}`}>
              {stat.value}
            </div>
            <div className="stat-label-wrap">
              <span className="stat-main-label">{stat.label}</span>
              <span className="stat-sub-desc">{stat.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
