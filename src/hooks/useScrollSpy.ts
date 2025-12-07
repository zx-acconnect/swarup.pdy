import { useEffect, useState } from 'react';

/**
 * A robust scroll spy hook that tracks the active section based on scroll position.
 * Switched from IntersectionObserver to scroll math for better bidirectional accuracy.
 * 
 * @param ids - Array of section IDs to track
 * @param offset - Offset in pixels to trigger activation (accounts for fixed navbar)
 * @returns The id of the currently active section
 */
export function useScrollSpy(
  ids: string[],
  offset: number = 120 // Default matches roughly header height + breathing room
): string {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. Edge Case: Bottom of page
      // If user has scrolled to the very bottom, activate the last section immediately
      if (scrollPosition + windowHeight >= docHeight - 10) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      // 2. Standard Case: Check geometry
      // Find the section that covers the "read line" (screen top + offset)
      let currentSectionId = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - offset;
          const bottom = top + element.offsetHeight;

          // Check if the scroll position is inside this section's vertical bounds
          // We add a small buffer to 'top' to prevent flickering at exact boundaries
          if (scrollPosition >= top && scrollPosition < bottom) {
            currentSectionId = id;
          }
        }
      }

      setActiveId(currentSectionId);
    };

    // Initial check on mount
    handleScroll();

    // Throttled scroll handler using requestAnimationFrame for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return activeId;
}