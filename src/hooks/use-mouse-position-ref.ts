'use client';

import { RefObject, useEffect, useRef } from 'react';

type MousePosition = {
  x: number;
  y: number;
};

export function useMousePositionRef(containerRef: RefObject<HTMLElement | null>) {
  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mousePositionRef.current = {
        x: event.clientX - centerX,
        y: event.clientY - centerY,
      };
    };

    const resetMouse = () => {
      mousePositionRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', resetMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', resetMouse);
    };
  }, [containerRef]);

  return mousePositionRef;
}

