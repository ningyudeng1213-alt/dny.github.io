'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Component } from "@/components/ui/etheral-shadow";
import { WordPullUp } from "@/components/ui/word-pull-up";
import Menu from "@/components/ui/navbar";
import { RevealImageList } from "@/components/ui/reveal-images";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { IntroScreen } from "@/components/ui/intro-screen";
import ImageStackDemo from "@/components/ui/polaroid-flick-through";
import { ContactTicker } from "@/components/ui/contact-ticker";
import { FloatingContactScene } from "@/components/ui/floating-contact-scene";

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
          background: 'rgba(255,255,255,0.45)',
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

const menus = [
  { id: 1, title: 'Home', url: '/', scrollTo: 'section1' },
  {
    id: 2,
    title: 'Works',
    url: '/works',
    dropdown: true,
    items: [
      { id: 21, title: 'Article', url: '/#section3', scrollTo: 'section3' },
      { id: 22, title: 'Demo', url: '/#section4', scrollTo: 'section4' },
    ],
  },
  {
    id: 3,
    title: 'About',
    url: '/about',
    dropdown: true,
    items: [
      { id: 31, title: 'Media', url: '/#section4-blank', scrollTo: 'section4-blank' },
      { id: 32, title: 'Photo', url: '/#section6-floating', scrollTo: 'section6-floating' },
    ],
  },
  { id: 4, title: 'Resume', url: '/resume', scrollTo: 'section-contact' },
];

const cards = [
  { title: "文章作品集", sub: "Academic Writing & Content Creation", href: "/articles", delay: 0, index: 0, sectionId: 'section3', back: 'To be continued...' },
  { title: "项目作品集", sub: "Operation Projects & Case Studies", href: "/projects", delay: 1, index: 1, sectionId: 'section4', back: 'To be continued...' },
  { title: "自媒体经历", sub: "Social Media & Content Strategy", href: "/#section4-blank", delay: 2, index: 2, sectionId: 'section4-blank', back: 'To be continued...' },
];

function Section5() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const clipTop = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const clipBottom = useTransform(scrollYProgress, [0, 1], [70, 100]);
  const clipLeft = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const clipRight = useTransform(scrollYProgress, [0, 1], [65, 100]);

  const clipPath = useTransform(
    [clipTop, clipBottom, clipLeft, clipRight],
    ([t, b, l, r]: number[]) => `inset(${t}% ${100 - r}% ${100 - b}% ${l}%)`
  );

  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1800&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath,
          }}
        />
      </div>
    </div>
  );
}

function Section4Blank() {
  const [allClicked, setAllClicked] = React.useState(false);

  return (
    <div
      className="grid w-full items-center gap-10"
      style={{
        gridTemplateColumns: '320px minmax(0,1fr) 280px',
        paddingLeft: 'calc(10vw + 24px)',
        paddingRight: '4vw',
      }}
    >
      <motion.div
        initial={false}
        animate={allClicked ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ pointerEvents: allClicked ? 'auto' : 'none' }}
      >
        <h3
          className="text-sm font-black uppercase"
          style={{
            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
            color: '#7a7060',
            letterSpacing: '0.12em',
            margin: '0 0 20px',
          }}
        >
          Media
        </h3>
        <p
          style={{
            fontFamily: "Georgia, 'Songti SC', STSong, serif",
            color: '#2a2010',
            fontSize: '16px',
            lineHeight: 1.9,
            margin: 0,
          }}
        >
          小红书自媒体"知识分享"型账号 积累2k+粉丝，擅长用内容打动读者、以情绪洞察为突破引流
        </p>
      </motion.div>

      <div style={{ width: '100%', minWidth: 0, transform: 'translateX(-160px)' }}>
        <ImageStackDemo onAllViewedChange={setAllClicked} />
      </div>

      <div style={{ transform: 'translateX(-160px)' }}>
        <h3
          className="text-sm font-black uppercase"
          style={{
            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
            color: '#7a7060',
            letterSpacing: '0.12em',
            margin: '0 0 20px',
          }}
        >
          Personal Experience
        </h3>
        <p
          style={{
            fontFamily: "Georgia, 'Songti SC', STSong, serif",
            color: '#2a2010',
            fontSize: '16px',
            lineHeight: 1.9,
            margin: 0,
          }}
        >
          本科期间尝试校园「每日鲜花」地推并达周利润 <span style={{ fontFamily: 'Arial, sans-serif', fontVariantNumeric: 'lining-nums' }}>700</span> 元
          <br />
          研究生期间经营文玩自媒体账号并实现零投流GMV达 <span style={{ fontFamily: 'Arial, sans-serif', fontVariantNumeric: 'lining-nums' }}>3</span> 万
        </p>
      </div>
    </div>
  );
}


const UnfoldButton = ({ onUnfold }: { onUnfold: () => void }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onClick={onUnfold}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginTop: '32px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 700,
        color: hovered ? '#c9a84c' : '#2a2010',
        fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
        letterSpacing: '0.25em',
        borderBottom: `2px solid ${hovered ? '#c9a84c' : '#2a2010'}`,
        paddingBottom: '4px',
        textShadow: hovered ? '0 0 20px rgba(201,168,76,0.6)' : 'none',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'color 0.4s ease, text-shadow 0.4s ease, border-color 0.4s ease, transform 0.2s',
      }}
    >
      Unfold →
    </button>
  );
};

export default function Home() {
  const [showIntro, setShowIntro] = React.useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('skipIntro')) {
      sessionStorage.removeItem('skipIntro');
      // Keep existing skip-intro behavior; this state sync is intentional on first mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowIntro(false);
      const hash = window.location.hash;
      if (hash) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'instant' });
          });
        });
      }
    }
  }, []);
  const [isUnfolding, setIsUnfolding] = React.useState(false);
  const [clickedCard, setClickedCard] = React.useState<string | null>(null);
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [cardsVisible, setCardsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const [section3Visible, setSection3Visible] = React.useState(false);
  const [section4Visible, setSection4Visible] = React.useState(false);
  const [section4BlankVisible, setSection4BlankVisible] = React.useState(false);
  const [section5Visible, setSection5Visible] = React.useState(false);
  const [section6Visible, setSection6Visible] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);
  const [contactTitleHovered, setContactTitleHovered] = React.useState(false);
  const contactItems = React.useMemo(
    () => [
      { label: 'EMAIL', value: 'dny2026@126.com', href: 'mailto:dny2026@126.com' },
      { label: 'TEL', value: '15173184161', href: 'tel:15173184161' },
      { label: 'Wechat', value: 'Anyd_1213', copyable: true },
      { label: 'EMAIL', value: 'dny2026@126.com', href: 'mailto:dny2026@126.com' },
      { label: 'TEL', value: '15173184161', href: 'tel:15173184161' },
      { label: 'Wechat', value: 'Anyd_1213', copyable: true },
    ],
    []
  );


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setStartAnimation(true), 300);
        } else {
          setStartAnimation(false);
        }
      },
      { threshold: 0.8 }
    );
    const section = document.getElementById('section2');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (card: typeof cards[0]) => {
    if (clickedCard) return;
    setClickedCard(card.href);
    setTimeout(() => {
      document.getElementById(card.sectionId)?.scrollIntoView({ behavior: 'smooth' });
      setClickedCard(null);
    }, 400);
  };

  const handleUnfold = () => {
    setIsUnfolding(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setCardsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.95 }
    );
    const section = document.getElementById('section2');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsUnfolding(false);
        }
      },
      { threshold: 0.3 }
    );
    const section1 = document.getElementById('section1');
    if (section1) observer.observe(section1);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { setSection3Visible(entries[0].isIntersecting); },
      { threshold: 0.3 }
    );
    const el = document.getElementById('section3');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { setSection4Visible(entries[0].isIntersecting); },
      { threshold: 0.3 }
    );
    const el = document.getElementById('section4');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { setSection5Visible(entries[0].isIntersecting); },
      { threshold: 0.3 }
    );
    const el = document.getElementById('section5');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { setSection4BlankVisible(entries[0].isIntersecting); },
      { threshold: 0.25 }
    );
    const el = document.getElementById('section4-blank');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { setSection6Visible(entries[0].isIntersecting); },
      { threshold: 0.25 }
    );
    const el = document.getElementById('section6-floating');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { setContactVisible(entries[0].isIntersecting); },
      { threshold: 0.3 }
    );
    const el = document.getElementById('section-contact');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glowTexts = document.querySelectorAll('.glow-text');
      glowTexts.forEach(el => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const elem = el as HTMLElement;
        elem.style.backgroundImage = `radial-gradient(circle 120px at ${x}% ${y}%, #c8a96e 0%, #3d3528 50%, #3d3528 100%)`;
        elem.style.setProperty('-webkit-background-clip', 'text');
        elem.style.setProperty('-webkit-text-fill-color', 'transparent');
        elem.style.backgroundClip = 'text';
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {showIntro && (
        <IntroScreen
          onEnter={() => {
            history.replaceState(null, '', '/');
            setShowIntro(false);
          }}
        />
      )}
      <div style={{ pointerEvents: showIntro ? 'none' : 'auto' }}>
      <div className="w-full">
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

      {/* 背景：fixed 固定在视口，z-index:0，不干扰滚动 */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: '#fafafa' }}>
        <Component
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.3, scale: 1.2 }}
          sizing="fill"
          style={{ height: '100%' }}
        />
      </div>

      {/* 导航栏：fixed 固定顶部，始终可见，背景透明 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '18px 24px',
        }}
      >
        <div className="w-full" style={{ paddingLeft: '10vw' }}>
          <Menu list={menus} />
        </div>
      </div>

      {/* 可滚动内容：z-index:1，正常流，无 overflow 限制 */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* 第一屏：欢迎语 + 姓名 + 介绍 */}
        <section id="section1" className="flex flex-col items-center justify-center min-h-screen px-6" style={{ paddingBottom: '60px', position: 'relative' }}>
          {/* 插图：高度撑满第一屏，宽度自适应，完整显示 */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/illustration.webp`}
            alt=""
            style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              transform: 'translateX(-42%)',
              height: '100%',
              width: 'auto',
              zIndex: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              mixBlendMode: 'multiply',
            }}
          />
          {/* 内容块：退场/复现动画受 isUnfolding 控制 */}
          <motion.div
            className="w-full text-left"
            style={{ paddingTop: '60px', paddingLeft: '10vw', position: 'relative', zIndex: 2 }}
            variants={{
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
              hide: { opacity: 0, y: -40, transition: { duration: 0.8, ease: 'easeInOut' } },
            }}
            animate={isUnfolding ? 'hide' : 'show'}
          >
            {/* 主标题：WELCOME TO MY PORTFOLIO，分两行，左对齐 */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <WordPullUp
                words="WELCOME TO MY"
                className="glow-text font-bold text-gray-300 text-left leading-tight tracking-[0.15em]"
                framerProps={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                style={{ color: 'inherit', fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif", fontSize: '28px', wordSpacing: '1.2em' }}
              />
              <WordPullUp
                words="PORTFOLIO"
                className="glow-text font-bold text-gray-300 text-left leading-tight tracking-[0.15em]"
                framerProps={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.15 } }
                }}
                style={{ color: 'inherit', fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif", fontSize: '40px', wordSpacing: '1.2em' }}
              />
            </div>
            {/* 副标题：邓甯予 */}
            <h1
              className="glow-text text-5xl md:text-6xl font-light text-gray-900 mt-10 mb-5 tracking-widest"
              style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
            >
              邓甯予
            </h1>
            {/* 正文介绍 */}
            <p
              className="glow-text text-gray-700 text-sm md:text-base leading-8"
              style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
            >
              南开大学文学硕士 · 26年应届毕业生
              <br />
              对运营与商业化感兴趣 · 现实习于新浪微博
              <br />
              <span style={{ fontSize: '0.85em' }}>「用研究网文与流行文化的眼光做内容，用数据验证每一个判断」</span>
            </p>

            {/* Unfold 跳转按钮 */}
            <UnfoldButton onUnfold={handleUnfold} />
          </motion.div>
        </section>

        {/* 第二屏：引导文字 + 三个卡片 */}
        <section id="section2" className="flex flex-col items-center justify-center min-h-screen px-6 gap-10">
          {/* 引导文字 + 卡片整体容器，左对齐与卡片左边缘一致 */}
          <div className="flex flex-col gap-6" style={{ alignItems: 'flex-start' }}>
            {/* 引导文字：第二屏登场动画，延迟 0.4s；隐藏时立即消失 */}
            <motion.div
              initial="hide"
              variants={{
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } },
                hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn', delay: 0 } },
              }}
              animate={cardsVisible ? 'show' : 'hide'}
              style={{ margin: 0, marginBottom: '56px' }}
            >
              {startAnimation && (
                <GradualSpacing
                  key="play"
                  text="Start where you're curious."
                  className="text-left font-bold glow-text"
                  style={{
                    fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                    fontSize: '32px',
                    color: '#2a2010',
                    letterSpacing: '0.12em',
                  }}
                />
              )}
            </motion.div>

            {/* 三个卡片：依次错落出现，每张延迟 0.15s */}
            <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
              {cards.map((card, i) => (
                /* 外层：浮现动画（不变） */
                <motion.div
                  key={card.href}
                  initial="hide"
                  variants={{
                    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 + 0.15 * (i + 1) } },
                    hide: { opacity: 0, y: 40, filter: 'blur(6px)', transition: { duration: 0.25, ease: 'easeIn', delay: 0 } },
                  }}
                  animate={cardsVisible ? 'show' : 'hide'}
                >
                  <motion.div
                    animate={clickedCard === card.href
                      ? { scale: 1.05, opacity: 0 }
                      : { scale: 1, opacity: 1 }
                    }
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <BentoItem delay={card.delay} index={card.index} onClick={() => handleCardClick(card)}>
                      <span
                        className="text-gray-700 text-base font-medium"
                        style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif", textAlign: 'center', display: 'block', width: '100%' }}
                      >
                        {card.title}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          width: '100%',
                          fontSize: '12px',
                          color: '#5a5040',
                          fontWeight: 600,
                          fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                          letterSpacing: '0.08em',
                          textAlign: 'center',
                        }}
                      >
                        {card.sub}
                      </span>
                    </BentoItem>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 第三屏：文章作品集 */}
        <section id="section3" className="flex items-center justify-center min-h-screen px-6" style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', width: '100%' }}>
            <motion.div
              initial="hide"
              animate={section3Visible ? 'show' : 'hide'}
              variants={{
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut', delay: 0 } },
                hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn' } },
              }}
              style={{ flex: '0 0 auto' }}
            >
              <RevealImageList />
            </motion.div>
            <motion.div
              initial="hide"
              animate={section3Visible ? 'show' : 'hide'}
              variants={{
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 } },
                hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn' } },
              }}
              style={{ flex: '1 1 0', minWidth: 0, display: 'flex', justifyContent: 'flex-start', paddingRight: '80px' }}
            >
              <LandingAccordionItem />
            </motion.div>
          </div>
        </section>

        {/* 第四屏：项目作品集 */}
        <section id="section4" className="flex flex-col items-center justify-center min-h-screen px-6">
          <motion.div
            initial="hide"
            animate={section4Visible ? 'show' : 'hide'}
            variants={{
              show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
              hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn' } },
            }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
          >
            <ProjectShowcase />
          </motion.div>
        </section>

        {/* 第四屏下新增屏：中央展示 Polaroid Flick Through 组件，沿用全站背景 */}
        <section id="section4-blank" className="flex min-h-screen items-center justify-start overflow-hidden">
          <motion.div
            initial="hide"
            animate={section4BlankVisible ? 'show' : 'hide'}
            variants={{
              show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
              hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn' } },
            }}
            style={{ width: '100%' }}
          >
            <Section4Blank />
          </motion.div>
        </section>

        {/* 第五屏前新增：浮动联系方式屏 */}
        <section id="section6-floating" className="flex min-h-screen items-center justify-center px-6 py-14">
          <motion.div
            initial="hide"
            animate={section6Visible ? 'show' : 'hide'}
            variants={{
              show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
              hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn' } },
            }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <FloatingContactScene />
          </motion.div>
        </section>

        {/* 第五屏：自媒体经历 */}
        <section id="section5" className="relative w-full">
          <motion.div
            initial="hide"
            animate={section5Visible ? 'show' : 'hide'}
            variants={{
              show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
              hide: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
            }}
          >
            <Section5 />
          </motion.div>
        </section>

        {/* 最末屏：联系方式 */}
        <section id="section-contact" className="flex flex-col items-center justify-center min-h-screen px-6 gap-8">
          <motion.a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`}
            download
            initial="hide"
            animate={contactVisible ? 'show' : 'hide'}
            variants={{
              show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut', delay: 0 } },
              hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn' } },
            }}
            className="glow-text"
            onMouseEnter={() => setContactTitleHovered(true)}
            onMouseLeave={() => setContactTitleHovered(false)}
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#7a7060',
              fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
              letterSpacing: '0.12em',
              textShadow: contactTitleHovered ? '0 0 18px rgba(201,168,76,0.65)' : 'none',
              transition: 'text-shadow 0.25s ease',
              margin: 0,
              textDecoration: 'underline',
              textUnderlineOffset: '5px',
              cursor: 'pointer',
            }}
          >
            Get in touch.
          </motion.a>
          <motion.div
            initial="hide"
            animate={contactVisible ? 'show' : 'hide'}
            variants={{
              show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 } },
              hide: { opacity: 0, y: 30, filter: 'blur(8px)', transition: { duration: 0.25, ease: 'easeIn' } },
            }}
            className="w-full max-w-5xl"
          >
            <ContactTicker items={contactItems} />
          </motion.div>
        </section>
      </div>

    </div>
      </div>
    </>
  );
}
