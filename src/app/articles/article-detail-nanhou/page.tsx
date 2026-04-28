'use client';

/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  .anh-body {
    --paper: #f0e8e8;
    --ink: #180c0c;
    --ink-soft: #381818;
    --muted: #9a7878;
    --rule: #d4b8b8;
    --accent: #a82840;
    --accent-light: #d45070;
    --cream: #e8d8d8;
    --dark: #120808;
    --dark2: #1e1010;
    --dark3: #2a1414;

    background: var(--paper);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    line-height: 1.8;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .anh-grain {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .anh-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    background: linear-gradient(to bottom, #f0e8e8 60%, transparent);
  }

  .anh-back {
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
  .anh-back:hover { color: var(--ink); }
  .anh-back::before { content: '←'; }

  .anh-hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 130px 48px 0;
  }

  .anh-hero-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 36px;
    opacity: 0;
    animation: anhFadeUp 0.7s ease forwards 0.1s;
  }

  .anh-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }
  .anh-tag.accent { border-color: var(--accent); color: var(--accent); }
  .anh-tag.filled { background: var(--accent); color: var(--paper); border-color: var(--accent); }

  .anh-hero-eyebrow {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 14px;
    opacity: 0;
    animation: anhFadeUp 0.7s ease forwards 0.15s;
  }

  .anh-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 66px);
    font-weight: 900;
    line-height: 1.06;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 16px;
    opacity: 0;
    animation: anhFadeUp 0.7s ease forwards 0.2s;
  }
  .anh-hero h1 em { font-style: italic; color: var(--accent); }

  .anh-hero-sub {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    font-style: italic;
    color: var(--muted);
    border-left: 2px solid var(--rule);
    padding-left: 20px;
    margin-bottom: 52px;
    max-width: 680px;
    opacity: 0;
    animation: anhFadeUp 0.7s ease forwards 0.3s;
  }

  .anh-hero-body {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 56px;
    align-items: start;
    margin-bottom: 72px;
    opacity: 0;
    animation: anhFadeUp 0.7s ease forwards 0.4s;
  }

  .anh-hero-abstract {
    border-left: 2px solid var(--accent);
    padding-left: 28px;
  }
  .anh-hero-abstract .label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-light);
    margin-bottom: 14px;
  }
  .anh-hero-abstract p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .anh-verdict-card {
    background: var(--dark2);
    padding: 28px;
  }
  .anh-verdict-card .card-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 20px;
  }
  .anh-verdict-stamp {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: 900;
    font-style: italic;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 10px;
    letter-spacing: -0.02em;
  }
  .anh-verdict-sub {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--muted);
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .anh-verdict-divider { height: 1px; background: #2e1818; margin-bottom: 18px; }
  .anh-verdict-facts { display: flex; flex-direction: column; gap: 10px; }
  .anh-verdict-fact {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    color: #806060;
    line-height: 1.5;
    display: flex;
    gap: 10px;
  }
  .anh-verdict-fact::before {
    content: '—';
    color: var(--accent);
    flex-shrink: 0;
  }

  .anh-section-rule {
    max-width: 1100px;
    margin: 0 auto 64px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .anh-rule-line { flex: 1; height: 1px; background: var(--rule); }
  .anh-rule-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }

  .anh-essay-section {
    max-width: 720px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }
  .anh-essay-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .anh-essay-label::after { content: ''; flex: 1; height: 1px; background: var(--rule); }

  .anh-essay-body {
    font-family: 'EB Garamond', serif;
    font-size: 19px;
    color: var(--ink);
    line-height: 1.9;
  }
  .anh-essay-body mark {
    background: none;
    color: var(--accent);
    font-style: italic;
  }

  .anh-pull-line {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: clamp(17px, 2.2vw, 24px);
    font-style: italic;
    font-weight: 700;
    color: var(--ink);
    border-left: 3px solid var(--accent);
    padding: 18px 0 18px 24px;
    margin: 36px 0;
    line-height: 1.5;
  }

  .anh-problems-section {
    background: var(--dark);
    padding: 72px 48px;
    margin-bottom: 80px;
  }
  .anh-problems-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .anh-problems-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 40px;
  }
  .anh-problems-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }
  .anh-problem-card {
    background: var(--dark3);
    padding: 28px 24px;
    transition: background 0.2s;
  }
  .anh-problem-card:hover { background: #321818; }
  .anh-problem-num {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    font-style: italic;
    color: #3a2020;
    line-height: 1;
    margin-bottom: 12px;
    transition: color 0.2s;
  }
  .anh-problem-card:hover .anh-problem-num { color: var(--accent); }
  .anh-problem-title {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-light);
    margin-bottom: 12px;
    line-height: 1.4;
  }
  .anh-problem-desc {
    font-size: 15px;
    color: #a08080;
    line-height: 1.75;
  }
  .anh-problem-desc mark {
    background: none;
    color: #d49090;
    font-style: italic;
  }

  .anh-data-band {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
  }
  .anh-data-cell {
    background: var(--cream);
    padding: 24px 22px;
  }
  .anh-data-num {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    font-style: italic;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 6px;
  }
  .anh-data-desc {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    color: var(--muted);
    line-height: 1.6;
  }

  .anh-note-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 48px;
  }
  .anh-note-left .n-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }
  .anh-note-left h3 {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
  }
  .anh-note-right p {
    font-size: 16px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .anh-page-footer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
  }
  .anh-footer-info {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
    line-height: 1.9;
  }
  .anh-read-btn {
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
  .anh-read-btn:hover { background: var(--accent); }

  @keyframes anhFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .anh-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .anh-anim.anh-visible { opacity: 1; transform: none; }

  @media (max-width: 860px) {
    .anh-nav, .anh-hero, .anh-section-rule, .anh-essay-section, .anh-data-band, .anh-note-section, .anh-page-footer {
      padding-left: 24px; padding-right: 24px;
    }
    .anh-hero-body, .anh-note-section { grid-template-columns: 1fr; gap: 32px; }
    .anh-problems-grid, .anh-data-band { grid-template-columns: 1fr; }
    .anh-problems-section { padding: 48px 24px; }
    .anh-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
    .anh-essay-section { max-width: 100%; }
  }
`;

export default function ArticleDetailNanhouPage() {
  const problemsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('anh-visible'), i * 60);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.anh-anim').forEach(el => animObserver.observe(el));

    const gridEl = problemsGridRef.current;
    let problemsObserver: IntersectionObserver | null = null;

    if (gridEl) {
      problemsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.anh-problem-card');
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
            problemsObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      problemsObserver.observe(gridEl);
    }

    return () => {
      animObserver.disconnect();
      problemsObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="anh-body">
        <div className="anh-grain" />

        <nav className="anh-nav">
          <Link href="/articles" className="anh-back">Article Works</Link>
        </nav>

        <header className="anh-hero">
          <div className="anh-hero-meta">
            <span className="anh-tag filled">锐评</span>
            <span className="anh-tag accent">TV Series · 拔草</span>
            <span className="anh-tag">种草/拔草课程作业</span>
            <span className="anh-tag">甜宠剧批评</span>
          </div>

          <div className="anh-hero-eyebrow">锐评 · Critical Review · 2025</div>

          <h1>2025甜宠剧<em>"金扫帚奖"</em></h1>
          <p className="anh-hero-sub">看甜宠剧不如看恐怖片——《难哄》梦游桥段的工业化症结</p>

          <div className="anh-hero-body">
            <div className="anh-hero-abstract">
              <div className="label">写作说明</div>
              <p>
                种草/拔草课程作业，选题《难哄》。
                这篇文章的切入点不是"这部剧好不好看"，而是"梦游桥段"作为一种重复叙事模式的症结所在——
                当亲密关系的推进依赖女性的非清醒状态，
                折射的是当代工业化言情剧对情感复杂性的集体失语。
                前半部分是评论腔调，后半部分做了结构化的形式拆解。
              </p>
            </div>

            <div className="anh-verdict-card">
              <div className="card-label">热度数据 · 2025开年爆款</div>
              <div className="anh-verdict-stamp">15.6亿</div>
              <div className="anh-verdict-sub">全网累计播放量<br />2025年现偶赛道年度第一</div>
              <div className="anh-verdict-divider"></div>
              <div className="anh-verdict-facts">
                <div className="anh-verdict-fact">优酷热度破10000，创平台最快破万记录</div>
                <div className="anh-verdict-fact">抖音主话题播放量74.5亿</div>
                <div className="anh-verdict-fact">集均播放量超4300万，灯塔现偶冠军</div>
                <div className="anh-verdict-fact">微博热搜744+，主话题阅读6.5亿+</div>
              </div>
            </div>
          </div>
        </header>

        <div className="anh-section-rule anh-anim">
          <div className="anh-rule-line"></div>
          <div className="anh-rule-label">锐评原文 · Critical Writing</div>
          <div className="anh-rule-line"></div>
        </div>

        <section className="anh-essay-section">
          <div className="anh-essay-label">开篇评论</div>

          <div className="anh-essay-body">
            《难哄》将女主"梦游"轻薄男主制造主动暧昧桥段作为重复且早期唯一卖点，
            将一夜情、先婚后爱等套路作出性转版的创意性突破，
            <mark>实现了从0至1的飞跃</mark>；叙事模式方面更是由酒后强暴的传统一夜情
            转变成女主夜夜梦游对男主欲拒还迎，
            其中唯一不变的竟是受众始终都保持着重口味的好记录。

            <span className="anh-pull-line">
              《难哄》以其重口味审美，重新将女强设定的排泄物包裹成糖诱导观众尽数服下。
            </span>

            真正的女性视角叙事不应止步于将传统霸总桥段进行性别倒置，
            而需要彻底解构权力关系中的被动预设。与其让女主在梦游中完成情感觉醒，
            不如展现她在清醒状态下的欲望认知与边界探索——
            <mark>这才是现代爱情剧应有的精神向度。</mark>
          </div>
        </section>

        <section className="anh-data-band anh-anim">
          <div className="anh-data-cell">
            <div className="anh-data-num">74.5亿</div>
            <div className="anh-data-desc">抖音主话题播放量<br />开播首部破3亿最快剧集</div>
          </div>
          <div className="anh-data-cell">
            <div className="anh-data-num">792万</div>
            <div className="anh-data-desc">播前站内预约量<br />创优酷现偶预约量历史新高</div>
          </div>
          <div className="anh-data-cell">
            <div className="anh-data-num">10+国</div>
            <div className="anh-data-desc">登陆Netflix Top10榜单<br />新加坡·泰国·印度等</div>
          </div>
        </section>

        <section className="anh-problems-section">
          <div className="anh-problems-inner">
            <div className="anh-problems-label">锐评拆解 · Three Structural Problems</div>
            <div className="anh-problems-grid" ref={problemsGridRef}>
              <div className="anh-problem-card">
                <div className="anh-problem-num">01</div>
                <div className="anh-problem-title">去主体化的情感表达</div>
                <div className="anh-problem-desc">
                  白天关系毫无进展，晚上依靠非清醒亲密接触完成情感突破，
                  实质消解了女性在两性关系中的主观能动性。
                  <mark>"清醒的男凝视"与"被动的女回应"</mark>，
                  将浪漫关系异化为单方面的征服游戏。
                </div>
              </div>
              <div className="anh-problem-card">
                <div className="anh-problem-num">02</div>
                <div className="anh-problem-title">伪现实主义的叙事陷阱</div>
                <div className="anh-problem-desc">
                  女主的"梦游症"除寄人篱下的处境外，
                  其余梦游都只为情感发展作铺垫，
                  刻意淡化了真实病症的痛苦内核。
                  <mark>当病理现象被浪漫滤镜包装，本质是对特殊群体的消费。</mark>
                </div>
              </div>
              <div className="anh-problem-card">
                <div className="anh-problem-num">03</div>
                <div className="anh-problem-title">流量密码的机械化复制</div>
                <div className="anh-problem-desc">
                  每集0.75次的肢体接触频率、每次5-6秒的特写镜头，
                  暴露出制作方对大数据时代观众嗨点的精确计算。
                  <mark>流水线式的情感刺激正将言情剧推向感官刺激的深渊。</mark>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="anh-note-section anh-anim">
          <div className="anh-note-left">
            <div className="n-label">关于这篇</div>
            <h3>种草/拔草课程作业</h3>
          </div>
          <div className="anh-note-right">
            <p>
              课程要求选一部影视作品写种草或拔草评论。
              选择拔草《难哄》，不是因为它不够热——74.5亿抖音播放量、15.6亿全网播放量、Netflix十国上榜，它是2025开年最热的现偶剧。
              正因为够热，"梦游桥段"这种叙事模式才更值得认真拆解。
            </p>
          </div>
        </section>

        <footer className="anh-page-footer anh-anim">
          <div className="anh-footer-info">
            邓甯予 · 南开大学文艺学硕士<br />
            研究方向：大众文艺美学（网文、电影方向）<br />
            种草/拔草课程作业 · TV Series 批评
          </div>
        </footer>
      </div>
    </>
  );
}
