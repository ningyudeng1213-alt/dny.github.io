'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Component } from "@/components/ui/etheral-shadow";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const BentoItem = ({
  children,
  onClick,
  delay = 0,
  index = 0,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  delay?: number;
  index?: number;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--opacity": "0",
    "--radius": "16px",
    "--easing": "ease",
  } as React.CSSProperties & Record<string, string>;

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  return (
    <motion.div
      style={{ ...containerStyle, perspective: '600px', width: '220px', aspectRatio: '17/21' }}
      className="relative isolate [contain:layout_style] transition-transform will-change-transform"
      ref={refElement}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const position = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        const percentage = { x: (100 / rect.width) * position.x, y: (100 / rect.height) * position.y };
        const delta = { x: percentage.x - 50, y: percentage.y - 50 };
        state.current.background.x = 50 + percentage.x / 4 - 12.5;
        state.current.background.y = 50 + percentage.y / 3 - 16.67;
        state.current.rotate.x = -(delta.x / 3.5) * 0.6;
        state.current.rotate.y = (delta.y / 2) * 0.6;
        state.current.glare.x = percentage.x;
        state.current.glare.y = percentage.y;
        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          refElement.current.style.setProperty("--opacity", "0.6");
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty("--duration", "0s");
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration");
          refElement.current.style.setProperty("--r-x", "0deg");
          refElement.current.style.setProperty("--r-y", "0deg");
          refElement.current.style.setProperty("--opacity", "0");
        }
      }}
      onClick={onClick}
    >
      <div
        className="h-full grid will-change-transform origin-center transition-transform overflow-hidden cursor-pointer"
        style={{
          transform: 'rotateY(var(--r-x)) rotateX(var(--r-y))',
          transitionDuration: 'var(--duration)',
          transitionTimingFunction: 'var(--easing)',
          borderRadius: 'var(--radius)',
          border: '1px solid rgba(255,255,255,0.5)',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8)) drop-shadow(2px 4px 12px rgba(0,0,0,0.08))',
        }}
      >
        <div className="w-full h-full [grid-area:1/1]">
          <div className="h-full w-full flex flex-col items-center justify-center p-6">
            {children}
          </div>
        </div>
        {/* 折射高光层 */}
        <div
          className="w-full h-full [grid-area:1/1] mix-blend-soft-light transition-opacity will-change-[background]"
          style={{
            opacity: 'var(--opacity)',
            transitionDuration: 'var(--duration)',
            borderRadius: 'var(--radius)',
            background: 'radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 90%)',
          }}
        />
      </div>
    </motion.div>
  );
};

const cards = [
  { title: "文章作品集", desc: "学术写作与内容创作", href: "/articles", emoji: "✍️", delay: 0, index: 0 },
  { title: "项目作品集", desc: "运营项目与案例复盘", href: "/projects", emoji: "📁", delay: 1, index: 1 },
  { title: "自媒体经历", desc: "账号运营与内容策略", href: "/social", emoji: "📱", delay: 2, index: 2 },
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glowTexts = document.querySelectorAll('.glow-text');
      glowTexts.forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const elem = el as HTMLElement;
        elem.style.backgroundImage = `radial-gradient(circle 120px at ${x}% ${y}%, #c8a96e 0%, #3d3528 50%, #3d3528 100%)`;
        (elem.style as any).webkitBackgroundClip = 'text';
        (elem.style as any).webkitTextFillColor = 'transparent';
        elem.style.backgroundClip = 'text';
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen bg-neutral-50">
      {/* 按钮液态玻璃 SVG filter */}
      <svg className="hidden">
        <defs>
          <filter id="btn-glass" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.04" numOctaves="1" seed="2" result="turbulence"/>
            <feGaussianBlur in="turbulence" stdDeviation="1.5" result="blurredNoise"/>
            <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="8" xChannelSelector="R" yChannelSelector="B" result="displaced"/>
            <feGaussianBlur in="displaced" stdDeviation="0.8"/>
          </filter>
        </defs>
      </svg>
      <Component
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 0.3, scale: 1.2 }}
        sizing="fill"
        style={{ minHeight: "100vh" }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">

          {/* 欢迎语 */}
          <WordPullUp
            words="WELCOME TO MY PORTFOLIO"
            className="glow-text text-xs tracking-[0.3em] text-gray-500 font-light"
            framerProps={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            style={{ color: 'inherit' }}
          />

          {/* 名字 */}
          <h1
            className="glow-text text-6xl md:text-7xl font-light text-gray-900 mb-7 tracking-widest"
            style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
          >
            邓甯予
          </h1>

          {/* 介绍 */}
          <p
            className="glow-text text-gray-700 text-sm md:text-base leading-8 max-w-xl mb-8"
            style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
          >
            INTJ · 南开大学文艺学硕士，研究网络文学与流行文化美学
            <br />
            长期深耕内容运营与IP方向，寻找内容运营/产品运营方向的工作机会
          </p>

          {/* 三个卡片 */}
          <div className="flex flex-row justify-center items-center gap-8 mb-14 mt-6 flex-wrap">
            {cards.map((card) => (
              <BentoItem
                key={card.href}
                onClick={() => router.push(card.href)}
                delay={card.delay}
                index={card.index}
              >
                <span className="text-2xl">{card.emoji}</span>
                <span
                  className="text-gray-700 text-base font-medium"
                  style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
                >
                  {card.title}
                </span>
                <span className="font-sans text-gray-700 text-xs">{card.desc}</span>
                <span className="font-sans text-gray-700 text-sm mt-0.5 group-hover:text-gray-900 transition-colors">
                  →
                </span>
              </BentoItem>
            ))}
          </div>

          {/* 联系方式 */}
          <div className="flex flex-row gap-4 items-center">
            <ShimmerButton
              background="radial-gradient(ellipse at 50% 0%, rgba(80,75,70,0.95) 0%, rgba(35,33,30,1) 60%)"
              shimmerColor="#c8a96e"
              shimmerDuration="2.5s"
              borderRadius="100px"
              className="px-5 py-2.5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.5),0_2px_12px_rgba(0,0,0,0.25),0_0_0_0.5px_rgba(255,255,255,0.08)]"
            >
              <span className="font-sans text-white/80 text-xs tracking-widest">
                Mail: dny2026@126.com
              </span>
            </ShimmerButton>
            <ShimmerButton
              background="radial-gradient(ellipse at 50% 0%, rgba(80,75,70,0.95) 0%, rgba(35,33,30,1) 60%)"
              shimmerColor="#c8a96e"
              shimmerDuration="2.5s"
              borderRadius="100px"
              className="px-5 py-2.5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.5),0_2px_12px_rgba(0,0,0,0.25),0_0_0_0.5px_rgba(255,255,255,0.08)]"
            >
              <span className="font-sans text-white/80 text-xs tracking-widest">
                Tel: 15173184161
              </span>
            </ShimmerButton>
          </div>

        </div>
      </Component>
    </div>
  );
}
