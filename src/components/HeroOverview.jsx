import React from 'react';
import { CpuIcon, ActivityIcon, ShieldCheckIcon } from './Icons';

export default function HeroOverview() {
  return (
    <section id="overview" className="editorial-section reveal" aria-labelledby="overview-heading">
      <div className="section-eyebrow reveal-left">// 01 &mdash; FOUNDATIONAL FOCUS</div>
      
      <h2 id="overview-heading" className="editorial-heading reveal-up">
        Building Reliability from the Ground Up: Linux, Containers &amp; Cloud Automation
      </h2>
      
      <div className="editorial-lead-container reveal-up">
        <p className="editorial-lead-paragraph">
          As an aspiring Cloud &amp; Systems Engineer, I prioritize mastering core infrastructure fundamentals before abstracting them. I believe that reliable cloud engineering starts with strong operating system basics: understanding resource allocation, network boundaries, and automated recovery procedures.
        </p>
        <p className="editorial-sub-paragraph">
          Through comprehensive practical projects, I have implemented containerized microservice stacks on AWS and Google Cloud environments, automated PostgreSQL backup pipelines with Bash and Cron, enforced zero-credential security via AWS IAM, and tracked host telemetry using Prometheus and Grafana. I am actively seeking an entry-level opportunity where I can support, automate, and grow production cloud infrastructure.
        </p>
      </div>

      {/* Editorial Hairline Stats / Pillars with Directional Reveal */}
      <div className="editorial-pillars-row stagger-group">
        <div className="editorial-pillar-item reveal-right">
          <div className="pillar-metric-tag">
            <CpuIcon size={14} className="accent-cyan" />
            <span>KERNEL RELIABILITY</span>
          </div>
          <div className="pillar-big-stat">100% Stability</div>
          <p className="pillar-detail">
            Configured Linux swap memory to stabilize containerized PostgreSQL on AWS EC2.
          </p>
        </div>

        <div className="editorial-pillar-item reveal-right">
          <div className="pillar-metric-tag">
            <ActivityIcon size={14} className="accent-green" />
            <span>DISASTER RECOVERY</span>
          </div>
          <div className="pillar-big-stat">&lt; 5m Drill</div>
          <p className="pillar-detail">
            Verified end-to-end table restoration from automated Amazon S3 backup snapshots.
          </p>
        </div>

        <div className="editorial-pillar-item reveal-right">
          <div className="pillar-metric-tag">
            <ShieldCheckIcon size={14} className="accent-amber" />
            <span>CLOUD SECURITY</span>
          </div>
          <div className="pillar-big-stat">Zero Secrets</div>
          <p className="pillar-detail">
            Secured EC2-to-S3 access exclusively via IAM Instance Profiles and IMDSv2 tokens.
          </p>
        </div>
      </div>
    </section>
  );
}
