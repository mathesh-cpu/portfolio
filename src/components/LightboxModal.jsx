import React, { useEffect } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, MaximizeIcon } from './Icons';
import { PROJECT_SCREENSHOTS } from './FeaturedProject';

export default function LightboxModal({ activeIndex, onClose, onChangeIndex }) {
  if (activeIndex === null || activeIndex === undefined) return null;

  const currentItem = PROJECT_SCREENSHOTS[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onChangeIndex(activeIndex === 0 ? PROJECT_SCREENSHOTS.length - 1 : activeIndex - 1);
      } else if (e.key === 'ArrowRight') {
        onChangeIndex(activeIndex === PROJECT_SCREENSHOTS.length - 1 ? 0 : activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, onClose, onChangeIndex]);

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot Lightbox Viewer"
      onClick={onClose}
    >
      {/* Lightbox Header */}
      <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-title">
          <span>{currentItem.shortTitle}</span>
          <span style={{ color: 'var(--text-dim)', margin: '0 0.5rem' }}>//</span>
          <span style={{ color: 'var(--accent-cyan)' }}>{currentItem.layer}</span>
        </div>

        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close Lightbox (Esc)"
        >
          <CloseIcon size={16} />
          <span>ESC</span>
        </button>
      </div>

      {/* Content & Navigation */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Previous Button */}
        <button
          type="button"
          className="lightbox-nav-btn prev"
          onClick={() =>
            onChangeIndex(activeIndex === 0 ? PROJECT_SCREENSHOTS.length - 1 : activeIndex - 1)
          }
          aria-label="Previous image"
        >
          <ChevronLeftIcon size={24} />
        </button>

        {/* Current Image */}
        <img
          src={currentItem.src}
          alt={currentItem.tabLabel}
          className="lightbox-img"
        />

        {/* Next Button */}
        <button
          type="button"
          className="lightbox-nav-btn next"
          onClick={() =>
            onChangeIndex(activeIndex === PROJECT_SCREENSHOTS.length - 1 ? 0 : activeIndex + 1)
          }
          aria-label="Next image"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>

      {/* Caption Bar */}
      <div className="lightbox-caption-bar" onClick={(e) => e.stopPropagation()}>
        <span>{currentItem.description}</span>
      </div>
    </div>
  );
}
