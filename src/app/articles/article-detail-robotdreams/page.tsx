'use client';

/* eslint-disable react/no-unescaped-entities */

import { useEffect } from 'react';
import Link from 'next/link';

export default function ArticleDetailRobotDreams() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('ar-visible'), i * 60);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.ar-anim').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

        .ar-root *, .ar-root *::before, .ar-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ar-root {
          --paper: #e6eaef;
          --ink: #101418;
          --ink-soft: #252c34;
          --muted: #7280a0;
          --rule: #b8c4d4;
          --accent: #3a6a9a;
          --accent-light: #6a9ac8;
          --cream: #d8e0ea;
          --dark: #0a0e14;
          --dark2: #121828;
          background: var(--paper);
          color: var(--ink);
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 18px;
          line-height: 1.8;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .ar-root::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
        }

        .ar-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 48px;
          background: linear-gradient(to bottom, var(--paper) 60%, transparent);
        }

        .ar-back {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--muted);
          text-decoration: none;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
        }
        .ar-back:hover { color: var(--ink); }
        .ar-back::before { content: '←'; }

        .ar-hero {
          max-width: 860px;
          margin: 0 auto;
          padding: 130px 48px 0;
        }

        .ar-hero-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
          opacity: 0;
          animation: ar-fadeUp 0.7s ease forwards 0.1s;
        }

        .ar-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 4px 12px;
          border: 1px solid var(--rule);
          color: var(--muted);
        }
        .ar-tag.ar-accent { border-color: var(--accent); color: var(--accent); }

        .ar-hero-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 14px;
          opacity: 0;
          animation: ar-fadeUp 0.7s ease forwards 0.15s;
        }

        .ar-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5.5vw, 70px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 24px;
          opacity: 0;
          animation: ar-fadeUp 0.7s ease forwards 0.2s;
        }
        .ar-hero h1 em { font-style: italic; color: var(--accent); }

        .ar-hero-sub {
          font-family: 'EB Garamond', serif;
          font-size: 19px;
          font-style: italic;
          color: var(--muted);
          border-left: 2px solid var(--rule);
          padding-left: 20px;
          margin-bottom: 64px;
          opacity: 0;
          animation: ar-fadeUp 0.7s ease forwards 0.3s;
        }

        .ar-ref-row {
          display: flex;
          gap: 2px;
          margin-bottom: 72px;
          opacity: 0;
          animation: ar-fadeUp 0.7s ease forwards 0.4s;
        }

        .ar-ref-item {
          flex: 1;
          padding: 20px 18px;
          background: var(--cream);
          transition: background 0.2s;
        }
        .ar-ref-item:hover { background: #cdd4de; }

        .ar-ref-film {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 6px;
        }

        .ar-ref-link {
          font-family: 'EB Garamond', serif;
          font-size: 14px;
          font-style: italic;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        .ar-essay-section {
          max-width: 680px;
          margin: 0 auto 80px;
          padding: 0 48px;
        }

        .ar-essay-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .ar-essay-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }

        .ar-essay-para {
          font-family: 'EB Garamond', serif;
          font-size: 20px;
          color: var(--ink);
          line-height: 1.9;
          margin-bottom: 36px;
        }
        .ar-essay-para:last-of-type { margin-bottom: 0; }

        .ar-essay-para mark {
          background: none;
          color: var(--accent);
          font-style: italic;
        }

        .ar-key-line {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px, 2.5vw, 26px);
          font-style: italic;
          font-weight: 700;
          color: var(--ink);
          border-left: 3px solid var(--accent);
          padding: 20px 0 20px 28px;
          margin: 40px 0;
          line-height: 1.5;
        }

        .ar-concept-band {
          background: var(--dark2);
          padding: 64px 48px;
          margin: 0 0 80px;
        }
        .ar-concept-inner {
          max-width: 860px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .ar-concept-left .ar-c-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }
        .ar-concept-word {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 900;
          font-style: italic;
          color: var(--paper);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ar-concept-word span { color: var(--accent-light); }

        .ar-concept-right blockquote {
          font-family: 'EB Garamond', serif;
          font-size: 17px;
          font-style: italic;
          color: #a8b8cc;
          line-height: 1.85;
          border-left: 1px solid var(--accent);
          padding-left: 20px;
        }

        .ar-traits-section {
          max-width: 860px;
          margin: 0 auto 80px;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 48px;
          align-items: start;
        }
        .ar-traits-left .ar-t-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .ar-traits-right p {
          font-size: 16px;
          color: var(--ink-soft);
          line-height: 1.9;
        }

        .ar-page-footer {
          max-width: 860px;
          margin: 0 auto;
          padding: 40px 48px 64px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          border-top: 1px solid var(--rule);
        }

        .ar-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--paper);
          background: var(--ink);
          padding: 14px 28px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .ar-read-btn:hover { background: var(--accent); }

        @keyframes ar-fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ar-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .ar-anim.ar-visible { opacity: 1; transform: none; }

        @media (max-width: 760px) {
          .ar-nav, .ar-hero, .ar-essay-section, .ar-traits-section, .ar-page-footer { padding-left: 24px; padding-right: 24px; }
          .ar-ref-row { flex-direction: column; }
          .ar-concept-inner, .ar-traits-section { grid-template-columns: 1fr; gap: 28px; }
          .ar-concept-band { padding: 48px 24px; }
          .ar-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
      `}</style>

      <div className="ar-root">
        <nav className="ar-nav">
          <a
            href="#"
            className="ar-back"
            onClick={(e) => { e.preventDefault(); const base = process.env.NEXT_PUBLIC_BASE_PATH || ''; window.location.href = base + '/articles'; }}
          >
            Article Works
          </a>
        </nav>

        <header className="ar-hero">
          <div className="ar-hero-meta">
            <span className="ar-tag ar-accent">Film Review</span>
            <span className="ar-tag">短评</span>
            <span className="ar-tag">Animation</span>
            <span className="ar-tag">现代寓言</span>
          </div>

          <div className="ar-hero-eyebrow">Short Essay · 2024</div>

          <h1>我只能<em>离开</em></h1>
          <p className="ar-hero-sub">《机器人之梦》的现代寓言</p>

          <div className="ar-ref-row">
            <div className="ar-ref-item">
              <div className="ar-ref-film">Her · 2013</div>
              <div className="ar-ref-link">人工智能与情感的深刻命题</div>
            </div>
            <div className="ar-ref-item">
              <div className="ar-ref-film">La La Land · 2016</div>
              <div className="ar-ref-link">蒙太奇幻象与错过的余生</div>
            </div>
            <div className="ar-ref-item">
              <div className="ar-ref-film">后来的我们 · 2018</div>
              <div className="ar-ref-link">烟火与站台书写的离散</div>
            </div>
            <div className="ar-ref-item">
              <div className="ar-ref-film">Robot Dreams · 2023</div>
              <div className="ar-ref-link">第一次真正选择了分离本身</div>
            </div>
          </div>
        </header>

        <section className="ar-essay-section">
          <div className="ar-essay-label">原文全文</div>

          <p className="ar-essay-para">
            当机器人领啃着微波披萨的狗编织起"人味儿"的情感纽带，恍若《Her》中深刻命题重现；
            当机器人在楼顶遥望小狗，蒙太奇的幻象召唤着《爱乐之城》里的塞巴斯汀；
            当金属与机油演绎离散，<mark>烟火与站台书写着《后来的我们》错过。</mark>
          </p>

          <p className="ar-essay-para">
            机器人在锈蚀与重启中参透存在的本质，梦想之城仅对人类有效，
            不必被世俗人情推撵的动物世界仍以无言描绘遗憾，
            人们方知即使没有梦想与世俗，相遇与离散是如幻梦般超脱。
            没有 Deeptalk，没有承诺与争吵，<mark>符号的减少抵抗异化，还原了意义的在场</mark>——
            亲密关系以任何形式即刻发生。机器人的重重梦境揭示了亲密关系的本质：
            怀疑、占有和陪伴，最后都不及你的存在，在分离时刻彰显我存在澄明。
          </p>

          <div className="ar-key-line">
            "选择分离"成为一种现代寓言，叩问着个体原子化的社会里，
            究竟还有多少空间用来存放温热的感情。
          </div>

          <p className="ar-essay-para">
            我们曾为无数不得已的 Bad Ending 共情流泪，机器人与小狗跨越了消费社会的需求关系，
            却也第一次真正选择了"分离"本身。即使我们拥有的，<mark>只是共度一首歌的时间。</mark>
          </p>
        </section>

        <section className="ar-concept-band">
          <div className="ar-concept-inner">
            <div className="ar-concept-left">
              <div className="ar-c-label">核心命题</div>
              <div className="ar-concept-word">选择<span>分离</span></div>
            </div>
            <div className="ar-concept-right">
              <blockquote>
                不同于以往所有"不得已的 Bad Ending"——这部电影里，
                分离不是命运的捉弄，而是主动的选择。
                这个细小的转变，是对个体原子化时代亲密关系的最诚实凝视。
              </blockquote>
            </div>
          </div>
        </section>

        <section className="ar-traits-section ar-anim">
          <div className="ar-traits-left">
            <div className="ar-t-label">关于这篇</div>
          </div>
          <div className="ar-traits-right">
            <p>
              课程作业，限300字以内。选择短评这个形式，是因为想练习用最少的字同时说清楚情绪和判断。
            </p>
          </div>
        </section>

        <footer className="ar-page-footer ar-anim">
          <a href="#" className="ar-read-btn">查看原文 &nbsp;</a>
        </footer>
      </div>
    </>
  );
}
