import React, { useState } from 'react';

export const TELEMETRY_NODES = [
  {
    id: 'live-app',
    num: '01',
    tabLabel: '[01. LIVE_APP]',
    meta: 'SYS_NODE: aws-ec2-prod | INTEGRITY: 100% | STATUS: OPERATIONAL',
    src: '/assets/app-ui.png',
    fallbackSrc: '/Assets/app-ui.png (Application UI).jpg',
    title: 'Application Voting Interface',
    caption: '// 01 PRODUCTION WORKLOAD: Multi-tier containerized voting frontend on AWS EC2 behind Nginx reverse proxy with bridge networking and zero host port collisions.',
  },
  {
    id: 'grafana',
    num: '02',
    tabLabel: '[02. GRAFANA_TELEMETRY]',
    meta: 'SYS_NODE: telemetry-prometheus | SCRAPING: NodeExporter+cAdvisor | SWAP: 2GB ACTIVE',
    src: '/assets/grafana-dashboard.png',
    fallbackSrc: '/Assets/grafana-dashboard.png (Host & Container Telemetry).jpg',
    title: 'Host & Container Telemetry Dashboard',
    caption: '// 02 OBSERVABILITY TELEMETRY: Prometheus scraping Node Exporter and cAdvisor metrics, monitoring memory headroom (vm.swappiness=10) and CPU throttle rates.',
  },
  {
    id: 'iam-imdsv2',
    num: '03',
    tabLabel: '[03. IAM_IMDSv2]',
    meta: 'SYS_NODE: aws-iam-security | IMDSv2: ENFORCED | STATIC_KEYS: 0',
    src: '/assets/iam-role-ec2.png',
    fallbackSrc: '/Assets/iam-role-ec2.png (Zero-Credential IAM Instance Profile).jpg',
    title: 'Zero-Credential IAM Instance Profile',
    caption: '// 03 LEAST PRIVILEGE: Hardened IAM Instance Profile attached directly to EC2 with IMDSv2 token enforcement, eliminating all hardcoded AWS credentials.',
  },
  {
    id: 's3-vault',
    num: '04',
    tabLabel: '[04. S3_AUTOMATED_VAULT]',
    meta: 'SYS_NODE: aws-s3-vault-prod | ENCRYPTION: AES-256 | VERSIONING: ENABLED',
    src: '/assets/s3-backup-vault.png',
    fallbackSrc: '/Assets/s3-backup-vault.png (Cross-Region Automated Backup Vault).jpg',
    title: 'Automated S3 Disaster Recovery Vault',
    caption: '// 04 AUTOMATED BACKUP: Hourly cron daemon streaming encrypted, compressed database archives to Amazon S3 with cross-region protection and lifecycle versioning.',
  },
  {
    id: 'dr-restore',
    num: '05',
    tabLabel: '[05. DR_DRILL_RESTORE]',
    meta: 'SYS_NODE: dr-validation-engine | RTO: <5min | VERIFICATION: 100% MATCH',
    src: '/assets/dr-restore-success.png',
    fallbackSrc: '/Assets/dr-restore-success.png (Zero-Data-Loss DR Drill).jpg',
    title: 'Disaster Recovery Validation Drill',
    caption: '// 05 ZERO-DATA-LOSS DRILL: Simulated total instance failure validation: automated database reconstruction from S3 snapshot verified 100% data integrity in under 5 minutes.',
  },
];

export default function TelemetryCockpit() {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState(TELEMETRY_NODES.map((n) => n.src));

  const handleImageError = (index) => {
    const updated = [...images];
    if (updated[index] !== TELEMETRY_NODES[index].fallbackSrc) {
      updated[index] = TELEMETRY_NODES[index].fallbackSrc;
      setImages(updated);
    }
  };

  const currentNode = TELEMETRY_NODES[activeTab];

  return (
    <div className="telemetry-cockpit-viewer" aria-label="Telemetry Cockpit Engineering Inspection Viewer">
      {/* Horizontal Monospace Tab Bar (Instant Switching, Zero Sliding Arrows) */}
      <div className="cockpit-tab-bar" role="tablist" aria-label="Inspection Tabs">
        {TELEMETRY_NODES.map((node, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={node.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`cockpit-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span>{node.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Viewport Frame */}
      <div className="cockpit-viewport-frame">
        {/* Top Terminal Bar */}
        <div className="cockpit-terminal-bar">
          <div className="terminal-dots" aria-hidden="true">
            <span className="t-dot red"></span>
            <span className="t-dot yellow"></span>
            <span className="t-dot green"></span>
          </div>
          <span className="cockpit-terminal-meta">{currentNode.meta}</span>
          <span className="cockpit-terminal-counter">[{currentNode.num} / 05]</span>
        </div>

        {/* High-Resolution Screen with Clean Instant Cross-Fade */}
        <div className="cockpit-screen-display">
          <img
            key={currentNode.id}
            src={images[activeTab]}
            alt={currentNode.title}
            className="cockpit-screen-img"
            onError={() => handleImageError(activeTab)}
            loading="lazy"
          />
        </div>

        {/* Monospace Technical Caption */}
        <div className="cockpit-caption-bar">
          <p className="cockpit-caption-mono">{currentNode.caption}</p>
        </div>
      </div>
    </div>
  );
}
