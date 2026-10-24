import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top-btn ${visible ? 'visible' : ''}`}
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUpIcon size={15} />
      <span>TOP</span>
    </button>
  );
}
