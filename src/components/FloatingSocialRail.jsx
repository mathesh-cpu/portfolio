import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';

export default function FloatingSocialRail() {
  const socialLinks = [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/mathesh-cpu',
      icon: <GithubIcon size={18} />,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mathesh-waran-n-',
      icon: <LinkedinIcon size={18} />,
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:matheshwaran1300@gmail.com',
      icon: <MailIcon size={18} />,
    },
    {
      id: 'phone',
      label: 'Phone / WhatsApp',
      href: 'tel:+918608391949',
      icon: <PhoneIcon size={18} />,
    },
  ];

  return (
    <aside className="floating-social-rail" aria-label="Social and Contact Links">
      <div className="social-rail-inner">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="social-rail-btn"
            title={item.label}
            aria-label={item.label}
          >
            {item.icon}
            <span className="social-rail-tooltip">{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
