'use client';

/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  .ay-body {
    --paper: #f2ebe0;
    --ink: #1c1410;
    --ink-soft: #3d2e24;
    --muted: #9a8070;
    --rule: #d4bfad;
    --accent: #c44a1e;
    --accent-warm: #e07a3a;
    --cream: #e8ddd0;
    --dark: #1a0f08;

    background: var(--paper);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    line-height: 1.8;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .ay-grain {
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .ay-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    background: linear-gradient(to bottom, #f2ebe0 60%, transparent);
  }

  .ay-back {
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
  .ay-back:hover { color: var(--ink); }
  .ay-back::before { content: '←'; font-size: 13px; }

  .ay-hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 130px 48px 0;
  }

  .ay-hero-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 36px;
    opacity: 0;
    animation: ayFadeUp 0.7s ease forwards 0.1s;
  }

  .ay-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }
  .ay-tag.accent { border-color: var(--accent); color: var(--accent); }

  .ay-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 5vw, 68px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 20px;
    opacity: 0;
    animation: ayFadeUp 0.7s ease forwards 0.2s;
  }
  .ay-hero h1 em { font-style: italic; color: var(--accent); }

  .ay-hero-sub {
    font-family: 'EB Garamond', serif;
    font-size: 19px;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 52px;
    max-width: 640px;
    opacity: 0;
    animation: ayFadeUp 0.7s ease forwards 0.3s;
  }

  .ay-hero-body {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 56px;
    align-items: start;
    margin-bottom: 72px;
    opacity: 0;
    animation: ayFadeUp 0.7s ease forwards 0.4s;
  }

  .ay-hero-abstract {
    border-left: 2px solid var(--accent);
    padding-left: 28px;
  }

  .ay-hero-abstract .label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-warm);
    margin-bottom: 16px;
  }

  .ay-hero-abstract p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .ay-stats-card {
    background: #2a1508;
    padding: 28px;
    color: var(--paper);
  }

  .ay-stats-card .card-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 24px;
  }

  .ay-stat-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .ay-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    font-style: italic;
    color: var(--paper);
    line-height: 1;
    margin-bottom: 4px;
  }

  .ay-stat-desc {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--muted);
    line-height: 1.5;
  }

  .ay-stat-divider { height: 1px; background: #4a2510; }

  .ay-section-rule {
    max-width: 1100px;
    margin: 0 auto 72px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .ay-rule-line { flex: 1; height: 1px; background: var(--rule); }
  .ay-rule-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }

  .ay-three-themes {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }

  .ay-sec-header {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 36px;
  }
  .ay-sec-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .ay-sec-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--ink);
  }

  .ay-theme-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .ay-theme-card {
    background: var(--cream);
    padding: 32px 26px;
    transition: background 0.2s;
  }
  .ay-theme-card:hover { background: #d9d4c9; }

  .ay-theme-icon {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-style: italic;
    font-weight: 900;
    color: var(--rule);
    line-height: 1;
    margin-bottom: 16px;
    transition: color 0.2s;
  }
  .ay-theme-card:hover .ay-theme-icon { color: var(--accent); }

  .ay-theme-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .ay-theme-desc {
    font-size: 15px;
    color: var(--ink-soft);
    line-height: 1.75;
  }

  .ay-theme-theory {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .ay-theory-tag {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    padding: 3px 8px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  .ay-compare-section {
    background: #2a1508;
    padding: 80px 48px;
    margin-bottom: 80px;
  }

  .ay-compare-inner { max-width: 1100px; margin: 0 auto; }

  .ay-compare-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 40px;
  }

  .ay-compare-grid {
    display: grid;
    grid-template-columns: 1fr 60px 1fr;
    gap: 0;
    align-items: start;
  }

  .ay-compare-col {
    padding: 32px;
    background: #361a0a;
  }
  .ay-compare-col.highlight {
    background: #42200d;
    border-top: 2px solid var(--accent);
  }

  .ay-compare-col-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent-warm);
    margin-bottom: 20px;
  }

  .ay-compare-col h4 {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--paper);
    margin-bottom: 20px;
  }

  .ay-compare-points {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ay-compare-points li {
    font-size: 14px;
    color: #b08878;
    line-height: 1.6;
    padding-left: 14px;
    position: relative;
  }
  .ay-compare-points li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--accent);
  }
  .ay-compare-col.highlight .ay-compare-points li { color: #d4b8a8; }

  .ay-compare-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #200e04;
  }

  .ay-compare-vs {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    font-style: italic;
    color: #444;
    writing-mode: vertical-rl;
    letter-spacing: 0.2em;
  }

  .ay-quote-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }

  .ay-big-quote {
    border-left: 3px solid var(--accent);
    padding: 32px 40px;
    background: #ede0d0;
  }

  .ay-big-quote blockquote {
    font-family: 'Playfair Display', serif;
    font-size: clamp(18px, 2.2vw, 26px);
    font-style: italic;
    color: var(--ink);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .ay-big-quote .q-source {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: var(--muted);
    text-transform: uppercase;
  }

  .ay-operator-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
    align-items: start;
  }

  .ay-op-left .op-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .ay-op-left h3 {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
  }

  .ay-op-right p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
    margin-bottom: 18px;
  }
  .ay-op-right p:last-of-type { margin-bottom: 0; }

  .ay-op-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
  }

  .ay-op-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    padding: 5px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  .ay-page-footer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
  }

  .ay-read-btn {
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
  .ay-read-btn:hover { background: var(--accent); }

  @keyframes ayFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ay-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .ay-anim.ay-visible { opacity: 1; transform: none; }

  @media (max-width: 860px) {
    .ay-nav, .ay-hero, .ay-section-rule, .ay-three-themes,
    .ay-quote-section, .ay-operator-section, .ay-page-footer {
      padding-left: 24px; padding-right: 24px;
    }
    .ay-hero-body { grid-template-columns: 1fr; }
    .ay-theme-grid { grid-template-columns: 1fr; }
    .ay-compare-grid { grid-template-columns: 1fr; }
    .ay-compare-divider { display: none; }
    .ay-operator-section { grid-template-columns: 1fr; gap: 28px; }
    .ay-compare-section { padding: 48px 24px; }
    .ay-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
  }
`;

export default function ArticleDetailYoloPage() {
  const themeGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('ay-visible'), i * 60);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.ay-anim').forEach(el => animObserver.observe(el));

    const gridEl = themeGridRef.current;
    let themeObserver: IntersectionObserver | null = null;

    if (gridEl) {
      themeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.ay-theme-card');
            cards.forEach((card, i) => {
              const c = card as HTMLElement;
              c.style.opacity = '0';
              c.style.transform = 'translateY(12px)';
              c.style.transition = `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`;
              setTimeout(() => {
                c.style.opacity = '1';
                c.style.transform = 'none';
              }, 100 + i * 80);
            });
            themeObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      themeObserver.observe(gridEl);
    }

    return () => {
      animObserver.disconnect();
      themeObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="ay-body">
        <div className="ay-grain" />

        <nav className="ay-nav">
          <a
            href="#"
            className="ay-back"
            onClick={(e) => { e.preventDefault(); const base = process.env.NEXT_PUBLIC_BASE_PATH || ''; window.location.href = base + '/articles'; }}
          >
            Article Works
          </a>
        </nav>

        <header className="ay-hero">
          <div className="ay-hero-meta">
            <span className="ay-tag accent">Academic Writing</span>
            <span className="ay-tag">Film Criticism</span>
            <span className="ay-tag">Intertextuality</span>
            <span className="ay-tag">Gender Studies</span>
          </div>

          <h1>身体、创伤<br />与<em>自我</em></h1>
          <p className="ay-hero-sub">电影《热辣滚烫》改编的互文性创新——从身体政治、创伤叙事与自传式电影三维解读</p>

          <div className="ay-hero-body">
            <div className="ay-hero-abstract">
              <div className="label">选题逻辑 · Content Rationale</div>
              <p>
                《热辣滚烫》以破40亿的春节档票房引发了全民讨论，但绝大多数内容停留在"贾玲减肥"的话题层面。
                我选择从互文性、身体政治与创伤叙事三个维度切入，尝试回答一个更本质的内容问题：
                这部电影为什么能在两极分化的口碑中持续占据舆论场？
                这种"溯源性"分析正是内容运营中洞察爆款逻辑、预判内容走向的核心方法——
                理解受众在消费什么情绪，比理解他们在讨论什么话题更重要。
              </p>
            </div>

            <div className="ay-stats-card">
              <div className="card-label">文章概况</div>
              <div className="ay-stat-items">
                <div>
                  <div className="ay-stat-num">40亿+</div>
                  <div className="ay-stat-desc">《热辣滚烫》春节档票房<br />分析背景与选题锚点</div>
                </div>
                <div className="ay-stat-divider" />
                <div>
                  <div className="ay-stat-num">3</div>
                  <div className="ay-stat-desc">核心理论框架<br />巴特勒 · 弗洛伊德 · 克里斯蒂娃</div>
                </div>
                <div className="ay-stat-divider" />
                <div>
                  <div className="ay-stat-num">2</div>
                  <div className="ay-stat-desc">对话文本<br />《热辣滚烫》×《百元之恋》</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="ay-section-rule ay-anim">
          <div className="ay-rule-line" />
          <div className="ay-rule-label">三维论述架构 · Three-Part Analysis</div>
          <div className="ay-rule-line" />
        </div>

        <section className="ay-three-themes ay-anim">
          <div className="ay-sec-header">
            <span className="ay-sec-label">Argument Structure</span>
            <span className="ay-sec-title">三章论述</span>
          </div>
          <div className="ay-theme-grid" ref={themeGridRef}>
            <div className="ay-theme-card">
              <div className="ay-theme-icon">一</div>
              <div className="ay-theme-title">身体的被压抑与被建构</div>
              <div className="ay-theme-desc">从巴特勒的身体政治理论出发，拆解乐莹"超重身体"作为被压抑的女性身体符号的叙事功能，分析电影如何用喜剧外壳包裹对父权规训的批判。</div>
              <div className="ay-theme-theory">
                {['巴特勒', '身体政治', '规训与惩罚'].map(t => <span key={t} className="ay-theory-tag">{t}</span>)}
              </div>
            </div>
            <div className="ay-theme-card">
              <div className="ay-theme-icon">二</div>
              <div className="ay-theme-title">创伤记忆的唤醒与叙事</div>
              <div className="ay-theme-desc">借助弗洛伊德创伤理论，解读电影"先抑后扬"叙事策略背后的心理逻辑——擂台上的一次次击倒，如何成为创伤记忆在身体层面的可视化呈现。</div>
              <div className="ay-theme-theory">
                {['弗洛伊德', '创伤叙事', '压抑与回归'].map(t => <span key={t} className="ay-theory-tag">{t}</span>)}
              </div>
            </div>
            <div className="ay-theme-card">
              <div className="ay-theme-icon">三</div>
              <div className="ay-theme-title">自我叙事的多重互文性</div>
              <div className="ay-theme-desc">将贾玲导演兼主演的双重身份置于互文性框架中，分析自传式电影如何在乐莹/贾玲、虚构/真实、自我/他者之间构建多重意义层。</div>
              <div className="ay-theme-theory">
                {['克里斯蒂娃', '互文性', '自我表征'].map(t => <span key={t} className="ay-theory-tag">{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="ay-compare-section">
          <div className="ay-compare-inner">
            <div className="ay-compare-label">互文对照 · Intertextual Comparison</div>
            <div className="ay-compare-grid">
              <div className="ay-compare-col">
                <div className="ay-compare-col-label">原作</div>
                <h4>《百元之恋》2014</h4>
                <ul className="ay-compare-points">
                  <li>男性导演视角，一子的"废柴"形象以外部凝视呈现</li>
                  <li>身材无超重烦恼，十天训练完成转变</li>
                  <li>含强奸情节，暴力书写更为直白</li>
                  <li>个人叙事，以失败者赞歌收尾</li>
                  <li>与社会现实保持审美距离</li>
                </ul>
              </div>
              <div className="ay-compare-divider">
                <span className="ay-compare-vs">intertextuality</span>
              </div>
              <div className="ay-compare-col highlight">
                <div className="ay-compare-col-label">改编 · 本土化创新</div>
                <h4>《热辣滚烫》2024</h4>
                <ul className="ay-compare-points">
                  <li>女性导演自传式介入，角色与演员本人高度融合</li>
                  <li>百斤减重历程作为身体主权的可视化表达</li>
                  <li>以喜剧化处理替代直白暴力，讽刺更具穿透力</li>
                  <li>公共议题介入：讨好型人格、女性身体凝视</li>
                  <li>自我审视特征突出，引发大规模社会共鸣</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="ay-quote-section ay-anim">
          <div className="ay-big-quote">
            <blockquote>
              乐莹瘦掉了近半个自己，却不是为了变瘦。当初她的生活浑浑噩噩、没有目标，
              是她遭受轻视的原因；她在跌跌撞撞中重新找到那一份执着，
              是他者眼中她"更瘦更美"的原因——却不是这一切的初心。
            </blockquote>
            <div className="q-source">论文核心论点 · 身体叙事的内容逻辑</div>
          </div>
        </section>

        <section className="ay-operator-section ay-anim">
          <div className="ay-op-left">
            <div className="op-label">内容运营视角</div>
            <h3>爆款内容的情绪解剖学</h3>
          </div>
          <div className="ay-op-right">
            <p>
              从内容运营的角度看，《热辣滚烫》是一个值得解剖的爆款案例：它同时触发了
              截然相反的两种受众情绪——共情与反感，并借此在舆论场维持了极长的生命周期。
              这篇文章尝试用理论工具解释这种"两极分化却持续发酵"的内容现象背后的情绪结构。
            </p>
            <p>
              对内容运营者而言，理解"身体叙事为什么击中女性受众"，
              远比知道"这部电影票房多少"更有策略价值。
              这种从文本到受众心理的穿透式分析，是学术训练带给我的内容判断力。
            </p>
            <div className="ay-op-tags">
              {['爆款内容分析', '受众情绪洞察', '女性议题内容策略', '跨媒介文本研究', '舆论周期分析'].map(t => (
                <span key={t} className="ay-op-tag">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <footer className="ay-page-footer ay-anim">
          <div />
        </footer>
      </div>
    </>
  );
}
