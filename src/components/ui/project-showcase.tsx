'use client';

import { useState, useEffect } from 'react';

const ITEM_AUTO_ROTATE_MS = 7000;
const FORTUNE_IMAGE_FINE_TUNE_SCALE = 0.94;

const items = [
  {
    title: "Tickets Diary",
    description: "数字化票根墙：一款电子票根应用",
    images: [
      { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/tickets-diary.png`, alt: "Tickets Diary" },
    ],
  },
  {
    title: "Fortune Trinkets",
    description: "本命手串推荐：一款结合五行命理与好运祝福的趣味测试",
    images: [
      { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Fortune-Trinkets.png`, alt: "Fortune Trinkets" },
    ],
  },
  {
    title: "Coming Soon",
    description: "敬请期待",
    images: [
      { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/strategy1.jpg`, alt: "Coming Soon" },
    ],
  },
];

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto-advance through items
  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, ITEM_AUTO_ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="w-full"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '80px',
        paddingLeft: '10vw',
        boxSizing: 'border-box',
      }}
    >
      {/* Left: label + item list */}
      <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column' }}>
        <h3
          className="text-sm font-black uppercase"
          style={{
            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
            color: '#7a7060',
            letterSpacing: '0.12em',
            margin: '0 0 28px',
          }}
        >
          Demo
        </h3>

        {items.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            style={{
              cursor: 'pointer',
              paddingBottom: '24px',
              marginBottom: i < items.length - 1 ? '8px' : '0',
              borderBottom: i < items.length - 1 ? '1px solid rgba(42,32,16,0.08)' : 'none',
            }}
          >
            <h2
              style={{
                fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                fontSize: '36px',
                fontWeight: 900,
                color: activeIndex === i ? '#2a2010' : '#7a7060',
                margin: 0,
                transition: 'color 0.4s ease',
                lineHeight: 1.1,
              }}
            >
              {item.title}
            </h2>
            <div
              style={{
                maxHeight: activeIndex === i ? '32px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}
            >
              <p
                style={{
                  fontFamily: "Georgia, 'Songti SC', STSong, serif",
                  fontSize: '13px',
                  color: '#2a2010',
                  margin: '6px 0 0',
                  letterSpacing: '0.06em',
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: auto-rotating image */}
      <div style={{ flex: '1 1 0', position: 'relative' }}>

        {/* Tickets Diary: in-flow, auto height, transparent */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
        <div
          style={{
            opacity: activeIndex === 0 ? 1 : 0,
            transition: 'opacity 0.9s ease',
            pointerEvents: activeIndex === 0 ? 'auto' : 'none',
            width: '720px',
            animation: 'float 5s ease-in-out infinite',
            filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.28)) drop-shadow(0 8px 24px rgba(0,0,0,0.18)) drop-shadow(0 2px 6px rgba(0,0,0,0.10))',
          }}
        >
          <a
            href="https://ticketsdiary-dny-portfo.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              position: 'relative',
              transition: 'opacity 0.9s ease',
            }}
          >
            <img
              src={items[0].images[0].src}
              alt={items[0].images[0].alt}
              style={{
                display: 'block',
                width: '720px',
                height: 'auto',
                objectFit: 'contain',
                cursor: 'pointer',
              }}
            />
          </a>
        </div>

        {/* Fortune Trinkets & Coming Soon: back to original positioning, without frame */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '720px',
            opacity: activeIndex === 0 ? 0 : 1,
            transition: 'opacity 0.9s ease',
            pointerEvents: activeIndex === 0 ? 'none' : 'auto',
          }}
        >
          {items.slice(1).map((item, i) => (
            <img
              key={`${i + 1}-0`}
              src={item.images[0].src}
              alt={item.images[0].alt}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '720px',
                height: 'auto',
                objectFit: 'contain',
                transform: item.title === 'Fortune Trinkets' ? `scale(${FORTUNE_IMAGE_FINE_TUNE_SCALE})` : 'scale(1)',
                transformOrigin: 'top left',
                opacity: activeIndex === i + 1 ? 1 : 0,
                transition: 'opacity 0.9s ease, transform 0.9s ease',
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
