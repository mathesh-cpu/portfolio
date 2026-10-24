import React from 'react';

export default function Education() {
  const credentials = [
    {
      id: 'msc-ds',
      title: 'Master of Science (M.Sc.) in Data Science',
      institution: 'Hindustan Institute of Technology and Science, Chennai',
      period: '2024 – 2026',
      tag: 'POSTGRADUATE DEGREE',
      summary:
        'Focusing on large-scale distributed data systems, statistical computation, advanced cloud architectures, high-performance computing, and database reliability.',
    },
    {
      id: 'bvoc-ds',
      title: 'Bachelor of Vocation (B.Voc.) in Data Science',
      institution: 'The American College, Madurai',
      period: '2021 – 2024',
      tag: 'UNDERGRADUATE DEGREE',
      summary:
        'Foundational academic engineering covering relational database modeling, Linux systems programming, data structures, applied statistics, and algorithm design.',
    },
    {
      id: 'gcp-ace',
      title: 'Associate Cloud Engineer Track & Practical Labs',
      institution: 'Google Cloud Skills Boost',
      period: 'Practical Learning Track',
      tag: 'CLOUD CERTIFICATION TRACK',
      summary:
        'Hands-on engineering track mastering Google Cloud IAM least-privilege security policies, Virtual Private Cloud (VPC) peering, Compute Engine auto-scaling, and Cloud Storage bucket lifecycles.',
    },
  ];

  return (
    <section id="education" className="editorial-section reveal" aria-labelledby="education-heading">
      <div className="section-eyebrow reveal-left">// 04 &mdash; EDUCATION &amp; CREDENTIALS</div>
      <h2 id="education-heading" className="editorial-heading reveal-up">
        Academic Foundation &amp; Cloud Certifications
      </h2>

      <div className="editorial-credentials-list stagger-group">
        {credentials.map((cred) => (
          <div key={cred.id} className="editorial-credential-row reveal-up">
            <div className="cred-left">
              <span className="cred-tag-mono">{cred.tag}</span>
              <h3 className="cred-title">{cred.title}</h3>
              <p className="cred-institution">{cred.institution}</p>
            </div>
            <div className="cred-right">
              <span className="cred-period-badge">{cred.period}</span>
              <p className="cred-summary">{cred.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
