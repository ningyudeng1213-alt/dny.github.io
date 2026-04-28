'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
const ACCORDION_IMAGE_OPACITY = 0.76;

const accordionItems = [
  { id: 1, title: 'Film', imageUrl: `${BASE}/accordion1.webp`, type: 'film' },
  { id: 2, title: 'Creative Brief', imageUrl: `${BASE}/accordion2.webp`, type: 'creative-brief' },
  { id: 3, title: 'Internet Literature', imageUrl: `${BASE}/accordion3.webp`, type: 'internet-literature' },
  { id: 4, title: 'Games', imageUrl: `${BASE}/accordion4.webp`, type: 'games' },
  { id: 5, title: 'TV Series', imageUrl: `${BASE}/accordion5.webp`, type: 'tv-series' },
];

export function LandingAccordionItem() {
  const [activeId, setActiveId] = useState<number>(1);
  const router = useRouter();

  return (
    <div
      style={{
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'row',
        height: '450px',
        gap: '5px',
        overflow: 'visible',
        paddingRight: '80px',
        marginLeft: '100px',
        transform: 'perspective(1200px) rotateY(-6deg) rotateX(2deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      {accordionItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => router.push(`/articles?type=${item.type}`)}
            style={{
              width: isActive ? '400px' : '60px',
              flex: '0 0 auto',
              transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.6s ease, filter 0.6s ease',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              pointerEvents: 'auto',
              boxShadow: isActive
                ? '6px 12px 40px rgba(0,0,0,0.38), 2px 4px 10px rgba(0,0,0,0.22), -1px 0 6px rgba(0,0,0,0.1)'
                : '3px 6px 18px rgba(0,0,0,0.25)',
              filter: isActive ? 'none' : 'grayscale(0.55) brightness(0.88)',
            }}
          >
            {/* background image */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: ACCORDION_IMAGE_OPACITY,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isActive ? 'scale(1.06)' : 'scale(1)',
              }}
            />
            {/* dark overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: isActive
                  ? 'linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.0) 55%)'
                  : 'rgba(0,0,0,0.32)',
                transition: 'background 0.6s ease',
              }}
            />
            {/* light leak on active */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at 70% 10%, rgba(255,220,140,0.18) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />
            )}
            {/* title */}
            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                left: 0,
                right: 0,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: isActive ? 'flex-start' : 'center',
                padding: isActive ? '0 14px' : '0',
                transition: 'all 0.4s ease',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                  fontSize: isActive ? '20px' : '10px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.93)',
                  letterSpacing: '0.12em',
                  writingMode: isActive ? 'horizontal-tb' : 'vertical-rl',
                  textOrientation: 'mixed',
                  transition: 'all 0.4s ease',
                  textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                  transform: isActive ? 'none' : 'rotate(180deg)',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
