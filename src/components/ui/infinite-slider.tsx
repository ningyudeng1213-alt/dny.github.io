'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type InfiniteSliderProps = React.ComponentProps<'div'> & {
  gap?: number;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
};

export function InfiniteSlider({
  className,
  children,
  gap = 24,
  reverse = false,
  speed = 80,
  speedOnHover,
  ...props
}: InfiniteSliderProps) {
  const groupRef = React.useRef<HTMLDivElement>(null);
  const [groupWidth, setGroupWidth] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    const measure = () => {
      if (!groupRef.current) return;
      setGroupWidth(groupRef.current.getBoundingClientRect().width);
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const currentSpeed = hovered && speedOnHover ? speedOnHover : speed;
  const duration = groupWidth > 0 ? groupWidth / Math.max(currentSpeed, 1) : 20;

  return (
    <div
      {...props}
      className={cn('relative w-full overflow-hidden', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex w-max will-change-transform"
        style={{
          gap: `${gap}px`,
          animationName: 'infinite-slider-marquee',
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div ref={groupRef} className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
      <style jsx>{`
        @keyframes infinite-slider-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

