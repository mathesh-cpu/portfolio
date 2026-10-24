import React, { useState } from 'react';
import { MailIcon, PhoneIcon, CopyIcon, CheckIcon, ExternalLinkIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'matheshwaran1300@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <section id="contact" className="editorial-section section-contact reveal" aria-labelledby="contact-heading">
      <div className="section-eyebrow reveal-left">// 05 &mdash; INITIATE CONTACT</div>
      <h2 id="contact-heading" className="editorial-heading reveal-up">
        Let’s Build Resilient Infrastructure Together
      </h2>

      <p className="contact-editorial-intro reveal-up">
        Open to entry-level and fresher Cloud &amp; Systems Engineering roles, multi-cloud infrastructure automation, and Linux reliability initiatives. Feel free to reach out directly via email, phone, or WhatsApp.
      </p>

      {/* Editorial Contact Row (Hairline Divider System) */}
      <div className="editorial-contact-grid stagger-group">
        <div className="contact-editorial-col reveal-up">
          <span className="contact-meta-label">DIRECT EMAIL</span>
          <a href={`mailto:${email}`} className="contact-primary-link">
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="contact-copy-inline-btn"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <CheckIcon size={14} className="accent-green" />
                <span className="accent-green">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <CopyIcon size={14} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <div className="contact-editorial-col reveal-up">
          <span className="contact-meta-label">PHONE / WHATSAPP</span>
          <a href="tel:+918608391949" className="contact-primary-link">
            +91 86083 91949
          </a>
          <span className="contact-availability-tag">Active on WhatsApp &bull; IST Timezone</span>
        </div>

        <div className="contact-editorial-col reveal-up">
          <span className="contact-meta-label">LOCATION &amp; WORK MODE</span>
          <span className="contact-info-text">Madurai / Chennai, India</span>
          <span className="contact-availability-tag">Available for Remote &bull; Hybrid &bull; Relocation</span>
        </div>

        <div className="contact-editorial-col reveal-up">
          <span className="contact-meta-label">RESPONSE SLA</span>
          <span className="contact-info-text">&lt; 24 Hours</span>
          <span className="contact-availability-tag">High Priority Dispatch</span>
        </div>
      </div>

      {/* Action Button Row */}
      <div className="contact-action-row reveal-up">
        <a
          href={`mailto:${email}?subject=Cloud%20%26%20Systems%20Engineering%20Inquiry%20-%20Matheshwaran%20N`}
          className="contact-dispatch-btn"
        >
          <MailIcon size={16} />
          <span>Send Direct Email</span>
          <ExternalLinkIcon size={14} />
        </a>

        <a
          href="https://wa.me/918608391949"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-whatsapp-btn"
        >
          <PhoneIcon size={16} />
          <span>Message on WhatsApp</span>
        </a>
      </div>

      {/* Editorial System Footer */}
      <footer className="editorial-footer reveal-up">
        <div className="footer-left">
          <span>SYSTEM_STATUS: </span>
          <span className="status-online">100% OPERATIONAL</span>
          <span className="footer-pipe">|</span>
          <span>LATENCY: &lt;1ms</span>
        </div>
        <div className="footer-right">
          MATHESHWARAN N &bull; {new Date().getFullYear()} &bull; RESILIENT CLOUD ARCHITECTURE
        </div>
      </footer>
    </section>
  );
}
