import { useEffect } from 'react';

/**
 * Tracks mouse cursor position across cards, buttons, and tech pills
 * setting --mouse-x and --mouse-y CSS variables for dynamic radial glow.
 */
export function useMouseGlow() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glowElements = document.querySelectorAll('.interactive-glow');
      glowElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--mouse-x', `${x}px`);
        el.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
}
