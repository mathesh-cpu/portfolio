import { useEffect } from 'react';

/**
 * Custom hook to observe elements with .reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-pop, .fade-in, and .reveal-on-scroll
 * attaching sequential stagger delays and triggering .is-revealed / .is-visible / .active when scrolling into viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Automatically apply 100ms stagger delays to children of .stagger-group
    const staggerGroups = document.querySelectorAll('.stagger-group');
    staggerGroups.forEach((group) => {
      const children = group.querySelectorAll(
        '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-pop, .fade-in, .reveal-on-scroll'
      );
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * 100}ms`;
      });
    });

    const selector =
      '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-pop, .fade-in, .reveal-on-scroll';
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible', 'revealed', 'is-revealed', 'active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    // Immediate check in case elements are already inside the viewport on initial load or reload
    const checkInitialVisibility = () => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 20 && rect.bottom > 0) {
          el.classList.add('is-visible', 'revealed', 'is-revealed', 'active');
          observer.unobserve(el);
        }
      });
    };
    checkInitialVisibility();
    const timer = setTimeout(checkInitialVisibility, 150);

    // Passive scroll listener failsafe for robust cross-browser / webview execution
    const handleScrollFailsafe = () => {
      targets.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 20 && rect.bottom > 0) {
            el.classList.add('is-visible', 'revealed', 'is-revealed', 'active');
            observer.unobserve(el);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScrollFailsafe, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollFailsafe);
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
