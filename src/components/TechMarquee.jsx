import React from 'react';

const SKILLS = [
  'AWS EC2',
  'S3 Vault',
  'Linux',
  'Docker',
  'Docker Compose',
  'Prometheus',
  'Grafana',
  'MySQL',
  'Kernel Tuning',
  'Disaster Recovery',
];

export default function TechMarquee() {
  // Duplicate skills list to ensure seamless infinite looping
  const marqueeItems = [...SKILLS, ...SKILLS];

  return (
    <div className="marquee-wrapper" aria-label="Core Engineering Technologies Marquee">
      <div className="marquee-label-bar">
        <span className="marquee-label-mono">// CONTINUOUS SYSTEMS & TOOLING PIPELINE</span>
      </div>
      <div className="marquee-track-container">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div key={`${item}-${index}`} className="marquee-pill">
              <span className="marquee-pill-dot"></span>
              <span className="marquee-pill-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
