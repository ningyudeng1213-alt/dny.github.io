'use client';

/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ArticleDetailHeterotopia() {
  const partsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('ah-visible'), i * 60);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.ah-anim').forEach((el) => observer.observe(el));

    const partsObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.ah-part-card').forEach((card, i) => {
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px)';
              card.style.transition = `opacity 0.4s ease ${i * 90}ms, transform 0.4s ease ${i * 90}ms`;
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'none';
              }, 100 + i * 90);
            });
            partsObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (partsGridRef.current) partsObs.observe(partsGridRef.current);

    return () => {
      observer.disconnect();
      partsObs.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

        .ah-root *, .ah-root *::before, .ah-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ah-root {
          --paper: #e6e8f0;
          --ink: #0e1020;
          --ink-soft: #252840;
          --muted: #7278a0;
          --rule: #bbbfd8;
          --accent: #3a3fa8;
          --accent-light: #6b72d4;
          --cream: #d8dae8;
          --dark: #0a0c1a;
          --dark2: #121428;
          background: var(--paper);
          color: var(--ink);
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 18px;
          line-height: 1.8;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .ah-root::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
        }

        .ah-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 48px;
          background: linear-gradient(to bottom, var(--paper) 60%, transparent);
        }

        .ah-back {
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
        .ah-back:hover { color: var(--ink); }
        .ah-back::before { content: '←'; font-size: 13px; }

        .ah-hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 130px 48px 0;
        }

        .ah-hero-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 36px;
          opacity: 0;
          animation: ah-fadeUp 0.7s ease forwards 0.1s;
        }

        .ah-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 4px 12px;
          border: 1px solid var(--rule);
          color: var(--muted);
        }
        .ah-tag.ah-accent { border-color: var(--accent); color: var(--accent); }

        .ah-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 66px);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 20px;
          opacity: 0;
          animation: ah-fadeUp 0.7s ease forwards 0.2s;
        }
        .ah-hero h1 em { font-style: italic; color: var(--accent); }

        .ah-hero-sub {
          font-family: 'EB Garamond', serif;
          font-size: 19px;
          font-style: italic;
          color: var(--muted);
          margin-bottom: 52px;
          max-width: 640px;
          opacity: 0;
          animation: ah-fadeUp 0.7s ease forwards 0.3s;
        }

        .ah-hero-body {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 56px;
          align-items: start;
          margin-bottom: 72px;
          opacity: 0;
          animation: ah-fadeUp 0.7s ease forwards 0.4s;
        }

        .ah-hero-abstract {
          border-left: 2px solid var(--accent);
          padding-left: 28px;
        }
        .ah-hero-abstract .ah-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent-light);
          margin-bottom: 16px;
        }
        .ah-hero-abstract p {
          font-size: 17px;
          color: var(--ink-soft);
          line-height: 1.9;
        }

        .ah-data-card {
          background: var(--dark2);
          padding: 28px;
        }
        .ah-data-card .ah-card-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 22px;
        }
        .ah-data-items { display: flex; flex-direction: column; gap: 0; }
        .ah-data-item {
          padding: 14px 0;
          border-bottom: 1px solid #1e2240;
        }
        .ah-data-item:last-child { border-bottom: none; }
        .ah-data-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          font-style: italic;
          color: var(--accent-light);
          line-height: 1;
          margin-bottom: 4px;
        }
        .ah-data-desc {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: var(--muted);
          line-height: 1.5;
        }

        .ah-section-rule {
          max-width: 1100px;
          margin: 0 auto 64px;
          padding: 0 48px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .ah-section-rule .ah-rule-line { flex: 1; height: 1px; background: var(--rule); }
        .ah-section-rule .ah-rule-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          white-space: nowrap;
        }

        .ah-concept-section {
          background: var(--dark);
          padding: 80px 48px;
          margin-bottom: 80px;
        }
        .ah-concept-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .ah-concept-left .ah-concept-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .ah-concept-word {
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 7vw, 90px);
          font-weight: 900;
          font-style: italic;
          color: var(--paper);
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .ah-concept-word span { color: var(--accent-light); }
        .ah-concept-en {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--muted);
          text-transform: uppercase;
        }
        .ah-concept-def {
          font-family: 'EB Garamond', serif;
          font-size: 17px;
          font-style: italic;
          color: #b8bcd8;
          line-height: 1.85;
          margin-bottom: 20px;
          border-left: 2px solid var(--accent);
          padding-left: 20px;
        }
        .ah-concept-source {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .ah-parts-section {
          max-width: 1100px;
          margin: 0 auto 80px;
          padding: 0 48px;
        }
        .ah-parts-section .ah-sec-header {
          display: flex;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 36px;
        }
        .ah-sec-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .ah-sec-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--ink);
        }
        .ah-parts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .ah-part-card {
          background: var(--cream);
          padding: 30px 24px;
          transition: background 0.2s;
        }
        .ah-part-card:hover { background: #cdd0e0; }
        .ah-part-num {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          font-weight: 900;
          font-style: italic;
          color: var(--rule);
          line-height: 1;
          margin-bottom: 12px;
          transition: color 0.2s;
        }
        .ah-part-card:hover .ah-part-num { color: var(--accent); }
        .ah-part-title {
          font-family: 'EB Garamond', serif;
          font-size: 17px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.35;
        }
        .ah-part-desc {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.7;
          margin-bottom: 14px;
        }
        .ah-part-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .ah-part-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
          padding: 3px 8px;
          border: 1px solid var(--rule);
          color: var(--muted);
        }

        .ah-quotes-section {
          background: var(--dark2);
          padding: 72px 48px;
          margin-bottom: 80px;
        }
        .ah-quotes-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .ah-quotes-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 40px;
        }
        .ah-quotes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .ah-pull-quote {
          border-left: 1px solid var(--accent);
          padding-left: 24px;
        }
        .ah-pull-quote blockquote {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-style: italic;
          color: var(--paper);
          line-height: 1.7;
          margin-bottom: 14px;
        }
        .ah-pull-quote .ah-attr {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .ah-op-section {
          max-width: 1100px;
          margin: 0 auto 80px;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 56px;
          align-items: start;
        }
        .ah-op-section .ah-op-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .ah-op-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.35;
        }
        .ah-op-right p {
          font-size: 17px;
          color: var(--ink-soft);
          line-height: 1.9;
          margin-bottom: 16px;
        }
        .ah-op-right p:last-of-type { margin-bottom: 0; }
        .ah-op-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }
        .ah-op-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border: 1px solid var(--rule);
          color: var(--muted);
        }

        .ah-page-footer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 48px 64px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          border-top: 1px solid var(--rule);
        }
        .ah-read-btn {
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
        .ah-read-btn:hover { background: var(--accent); }

        @keyframes ah-fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ah-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .ah-anim.ah-visible { opacity: 1; transform: none; }

        @media (max-width: 860px) {
          .ah-nav, .ah-hero, .ah-section-rule, .ah-parts-section, .ah-op-section, .ah-page-footer {
            padding-left: 24px; padding-right: 24px;
          }
          .ah-hero-body, .ah-concept-inner, .ah-quotes-grid, .ah-op-section { grid-template-columns: 1fr; gap: 32px; }
          .ah-parts-grid { grid-template-columns: 1fr; }
          .ah-concept-section, .ah-quotes-section { padding: 48px 24px; }
          .ah-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
      `}</style>

      <div className="ah-root">
        <nav className="ah-nav">
          <a
            href="#"
            className="ah-back"
            onClick={(e) => { e.preventDefault(); const base = process.env.NEXT_PUBLIC_BASE_PATH || ''; window.location.href = base + '/articles'; }}
          >
            Article Works
          </a>
        </nav>

        <header className="ah-hero">
          <div className="ah-hero-meta">
            <span className="ah-tag ah-accent">Academic Writing</span>
            <span className="ah-tag">Internet Literature</span>
            <span className="ah-tag">Heterotopia · 异托邦</span>
            <span className="ah-tag">Foucault</span>
          </div>

          <h1>记忆·现实·游戏<br /><em>异托邦的生生不息</em></h1>
          <p className="ah-hero-sub">评《十日终焉》——以福柯异托邦理论解读终焉之地的空间建构、记忆悖论与游戏化叙事</p>

          <div className="ah-hero-body">
            <div className="ah-hero-abstract">
              <div className="ah-label">选题逻辑 · Content Rationale</div>
              <p>
                《十日终焉》蝉联番茄小说巅峰榜榜首，以近62万读者、9.9高分完成了从网文到实体书、影视、
                衍生周边的全链条IP化。这篇文章试图回答：这部作品的现象级热度从何而来？
                我的判断是，终焉之地的"异托邦"建构是其突破传统爽文框架的核心机制——
                理解这一点，也是理解"为什么有些内容天然具备IP潜力"的关键。
                用理论工具拆解爆款内容的底层逻辑，是我做内容判断的一贯方式。
              </p>
            </div>

            <div className="ah-data-card">
              <div className="ah-card-label">文章背景数据</div>
              <div className="ah-data-items">
                <div className="ah-data-item">
                  <div className="ah-data-num">62万+</div>
                  <div className="ah-data-desc">番茄小说读者数量<br />蝉联巅峰榜榜首</div>
                </div>
                <div className="ah-data-item">
                  <div className="ah-data-num">9.9</div>
                  <div className="ah-data-desc">平台综合评分<br />网文赛道标杆作品</div>
                </div>
                <div className="ah-data-item">
                  <div className="ah-data-num">3</div>
                  <div className="ah-data-desc">论述维度<br />记忆 · 现实 · 游戏</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="ah-section-rule ah-anim">
          <div className="ah-rule-line"></div>
          <div className="ah-rule-label">核心理论框架 · Theoretical Framework</div>
          <div className="ah-rule-line"></div>
        </div>

        <section className="ah-concept-section">
          <div className="ah-concept-inner">
            <div className="ah-concept-left">
              <div className="ah-concept-label">分析工具 · Key Concept</div>
              <div className="ah-concept-word"><span>异</span>托邦</div>
              <div className="ah-concept-en">Heterotopia · Michel Foucault</div>
            </div>
            <div className="ah-concept-right">
              <div className="ah-concept-def">
                与现实世界及其它空间之间存在一定程度偏离的独立空间——
                异托邦对其它空间的呈现往往采取异质化的方式，
                从而对原有空间的事物和秩序提出挑战或颠覆。
              </div>
              <div className="ah-concept-source">福柯 · 《不同空间的正文与上下文》</div>
            </div>
          </div>
        </section>

        <section className="ah-parts-section ah-anim">
          <div className="ah-sec-header">
            <span className="ah-sec-label">Argument Structure</span>
            <span className="ah-sec-title">三维论述</span>
          </div>
          <div className="ah-parts-grid" ref={partsGridRef}>
            <div className="ah-part-card">
              <div className="ah-part-num">一</div>
              <div className="ah-part-title">异托邦的契机：绝望新秩序</div>
              <div className="ah-part-desc">
                分析终焉之地如何以"废墟死城""暗红天空"等抽象简化意象，
                实现对现实世界的颠覆性表征，成为"异托邦之镜"；
                并深入探讨时空重设与记忆悖论——七十年轮回中，
                记忆如何同时成为武器与诅咒。
              </div>
              <div className="ah-part-tags">
                <span className="ah-part-tag">空间建构</span>
                <span className="ah-part-tag">记忆悖论</span>
                <span className="ah-part-tag">忒修斯之船</span>
              </div>
            </div>
            <div className="ah-part-card">
              <div className="ah-part-num">二</div>
              <div className="ah-part-title">异托邦的回响：虚拟的现实</div>
              <div className="ah-part-desc">
                终焉之地与现实世界的相互照映——群像人物小传中内嵌的警匪、港风、
                网络暴力、原生家庭等现实主义单元，如何在超现实叙事流中坚守现实主义底色，
                以及"回响"能力与生前心结的对应关系。
              </div>
              <div className="ah-part-tags">
                <span className="ah-part-tag">群像叙事</span>
                <span className="ah-part-tag">现实映照</span>
                <span className="ah-part-tag">补偿性空间</span>
              </div>
            </div>
            <div className="ah-part-card">
              <div className="ah-part-num">三</div>
              <div className="ah-part-title">异托邦的隐性排斥：游戏化人生</div>
              <div className="ah-part-desc">
                游戏文本如何构建阅读门槛，实现对读者的隐性筛选；
                生肖游戏内嵌的中国传统文化典故；
                以及"生存游戏"题材在全球范围内流行的深层心理机制——
                掌控感缺失唤起的生存焦虑与本我宣泄。
              </div>
              <div className="ah-part-tags">
                <span className="ah-part-tag">游戏化叙事</span>
                <span className="ah-part-tag">读者筛选机制</span>
                <span className="ah-part-tag">生存焦虑</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ah-quotes-section">
          <div className="ah-quotes-inner">
            <div className="ah-quotes-label">核心论点 · Key Arguments</div>
            <div className="ah-quotes-grid">
              <div className="ah-pull-quote">
                <blockquote>
                  终焉之地作为异托邦，与现实世界的相互照映显得惊悚而震撼——
                  出生在重男轻女农村家庭、被至亲之人利用一生的女孩，
                  何尝不是生活在一种"终焉之地"？
                </blockquote>
                <div className="ah-attr">异托邦与现实的镜像关系</div>
              </div>
              <div className="ah-pull-quote">
                <blockquote>
                  优秀的电子游戏越来越趋向于"剧情化"，
                  而优秀的网络小说也越来越"游戏化"——
                  《十日终焉》缺少了爽感，却增强了读者粘性。
                </blockquote>
                <div className="ah-attr">游戏化叙事的IP逻辑 · 引自作者访谈</div>
              </div>
            </div>
          </div>
        </section>

        <section className="ah-op-section ah-anim">
          <div>
            <div className="ah-op-label">内容运营视角</div>
            <h3>IP潜力评估：用理论拆解爆款底层逻辑</h3>
          </div>
          <div className="ah-op-right">
            <p>
              这篇文章写于《十日终焉》IP化加速的节点。我选择异托邦理论作为分析框架，
              不仅是因为它能解释终焉之地的空间设定，更因为它能回答一个内容运营的核心问题：
              这部作品为什么能从62万读者出发，完成向实体书、影视、周边的全链条转化？
            </p>
            <p>
              答案在于：它建构了一个让读者既能代入又无法完全融入的异质空间——
              这种"沉浸但有距离"的体验，正是高粘性内容和高IP转化率的共同底层逻辑。
              能从文本中识别出这种结构，是我做IP评估的方法论基础。
            </p>
            <div className="ah-op-tags">
              <span className="ah-op-tag">IP潜力评估</span>
              <span className="ah-op-tag">网文赛道研究</span>
              <span className="ah-op-tag">受众粘性分析</span>
              <span className="ah-op-tag">游戏化内容趋势</span>
              <span className="ah-op-tag">跨媒介改编判断</span>
            </div>
          </div>
        </section>

        <footer className="ah-page-footer ah-anim">
        </footer>
      </div>
    </>
  );
}
