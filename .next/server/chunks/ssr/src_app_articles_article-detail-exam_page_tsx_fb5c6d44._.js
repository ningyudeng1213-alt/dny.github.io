module.exports=[48090,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .aex-body {
    --paper: #eceae6;
    --ink: #161412;
    --ink-soft: #2e2c28;
    --muted: #847e74;
    --rule: #cac5bc;
    --accent: #2a2a2a;
    --accent-hl: #c07a30;
    --cream: #e2dfd8;
    --dark: #131210;
    --dark2: #1e1c18;
    --tag-blue: #2a4a7a;
    --tag-green: #2a5a3a;

    background: var(--paper);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    line-height: 1.8;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  .aex-grain {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .aex-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    background: linear-gradient(to bottom, #eceae6 60%, transparent);
  }

  .aex-back {
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
  .aex-back:hover { color: var(--ink); }
  .aex-back::before { content: '←'; }

  .aex-hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 130px 48px 0;
  }

  .aex-hero-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 36px;
    opacity: 0;
    animation: aexFadeUp 0.7s ease forwards 0.1s;
  }

  .aex-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 4px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }
  .aex-tag.aex-accent { border-color: var(--accent-hl); color: var(--accent-hl); }
  .aex-tag.aex-filled { background: var(--accent); color: var(--paper); border-color: var(--accent); }

  .aex-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 5vw, 68px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 18px;
    opacity: 0;
    animation: aexFadeUp 0.7s ease forwards 0.2s;
  }
  .aex-hero h1 em { font-style: italic; color: var(--accent-hl); }

  .aex-hero-sub {
    font-family: 'EB Garamond', serif;
    font-size: 19px;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 52px;
    max-width: 600px;
    opacity: 0;
    animation: aexFadeUp 0.7s ease forwards 0.3s;
  }

  .aex-hero-body {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 56px;
    align-items: start;
    margin-bottom: 80px;
    opacity: 0;
    animation: aexFadeUp 0.7s ease forwards 0.4s;
  }

  .aex-hero-abstract {
    border-left: 2px solid var(--accent-hl);
    padding-left: 28px;
  }
  .aex-hero-abstract .aex-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-hl);
    margin-bottom: 14px;
  }
  .aex-hero-abstract p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .aex-info-card {
    background: var(--dark2);
    padding: 28px;
  }
  .aex-info-card .aex-card-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 20px;
  }
  .aex-info-rows { display: flex; flex-direction: column; gap: 0; }
  .aex-info-row {
    padding: 12px 0;
    border-bottom: 1px solid #2e2a24;
    display: flex;
    gap: 16px;
  }
  .aex-info-row:last-child { border-bottom: none; }
  .aex-info-key {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--muted);
    min-width: 60px;
    padding-top: 2px;
  }
  .aex-info-val {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    color: #c8c0b0;
    line-height: 1.6;
  }
  .aex-info-val.aex-hl { color: var(--accent-hl); }

  .aex-section-rule {
    max-width: 1100px;
    margin: 0 auto 64px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .aex-rule-line { flex: 1; height: 1px; background: var(--rule); }
  .aex-rule-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }

  .aex-product-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }

  .aex-part-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--ink);
  }
  .aex-part-num-large {
    font-family: 'Playfair Display', serif;
    font-size: 56px;
    font-weight: 900;
    font-style: italic;
    color: var(--rule);
    line-height: 1;
  }
  .aex-part-tag {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .aex-part-title-main {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.2;
  }

  .aex-nav-compare {
    display: grid;
    grid-template-columns: 1fr 60px 1fr;
    gap: 0;
    margin-bottom: 40px;
  }

  .aex-nav-col {
    padding: 28px;
    background: var(--cream);
  }
  .aex-nav-col.aex-after {
    background: var(--dark2);
  }
  .aex-nav-col-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .aex-nav-col .aex-nav-col-label { color: var(--muted); }
  .aex-nav-col.aex-after .aex-nav-col-label { color: var(--accent-hl); }

  .aex-nav-tags-before {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .aex-nav-tag-b {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    padding: 4px 10px;
    border: 1px solid var(--rule);
    color: var(--muted);
    background: var(--paper);
  }
  .aex-nav-tag-b.aex-similar {
    border-color: #c07a3060;
    color: var(--accent-hl);
    opacity: 0.6;
  }

  .aex-nav-layer {
    margin-bottom: 20px;
  }
  .aex-nav-layer-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .aex-nav-tags-after {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .aex-nav-tag-a {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    padding: 4px 10px;
    background: #2a3040;
    color: #8898c0;
    letter-spacing: 0.04em;
  }
  .aex-nav-tag-a.aex-exp {
    background: #2a3828;
    color: #70a878;
  }

  .aex-nav-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    color: var(--paper);
    font-family: 'Space Mono', monospace;
    font-size: 18px;
  }

  .aex-rationale-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }

  .aex-rationale-card {
    background: var(--cream);
    padding: 28px;
  }

  .aex-rationale-num {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    font-style: italic;
    color: var(--rule);
    line-height: 1;
    margin-bottom: 12px;
  }

  .aex-rationale-title {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-hl);
    margin-bottom: 12px;
  }

  .aex-rationale-body {
    font-size: 15px;
    color: var(--ink-soft);
    line-height: 1.8;
  }

  .aex-analysis-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }

  .aex-books-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-bottom: 48px;
  }

  .aex-book-card {
    background: var(--cream);
    padding: 32px 28px;
  }
  .aex-book-card.aex-winner {
    background: var(--dark2);
  }

  .aex-book-badge {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: inline-block;
    padding: 3px 10px;
  }
  .aex-book-card .aex-book-badge { color: var(--muted); border: 1px solid var(--rule); }
  .aex-book-card.aex-winner .aex-book-badge { color: var(--accent-hl); border-color: var(--accent-hl); }

  .aex-book-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  .aex-book-card .aex-book-title { color: var(--ink); }
  .aex-book-card.aex-winner .aex-book-title { color: var(--paper); }

  .aex-book-dims { display: flex; flex-direction: column; gap: 12px; }

  .aex-book-dim-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .aex-book-card .aex-book-dim-label { color: var(--muted); }
  .aex-book-card.aex-winner .aex-book-dim-label { color: #6a7a90; }

  .aex-book-dim-val {
    font-size: 14px;
    line-height: 1.65;
  }
  .aex-book-card .aex-book-dim-val { color: var(--ink-soft); }
  .aex-book-card.aex-winner .aex-book-dim-val { color: #b0bac8; }

  .aex-verdict-section {
    background: var(--dark);
    padding: 48px;
    margin-bottom: 48px;
  }
  .aex-verdict-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 28px;
  }
  .aex-verdict-rows { display: flex; flex-direction: column; gap: 0; }
  .aex-verdict-row {
    display: grid;
    grid-template-columns: 160px 1fr 1fr;
    gap: 0;
    border-bottom: 1px solid #222018;
  }
  .aex-verdict-row:first-child {
    border-bottom: 1px solid #333028;
    margin-bottom: 4px;
  }
  .aex-verdict-cell {
    padding: 12px 16px;
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    line-height: 1.6;
  }
  .aex-verdict-row:first-child .aex-verdict-cell {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .aex-verdict-cell:first-child { color: #6a6860; padding-left: 0; }
  .aex-verdict-cell.aex-win { color: #c8b888; }
  .aex-verdict-cell.aex-draw { color: #8a9888; }
  .aex-verdict-cell.aex-lose { color: #6a6068; }

  .aex-conclusion-block {
    border-left: 3px solid var(--accent-hl);
    padding: 24px 32px;
    background: var(--cream);
  }
  .aex-conclusion-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent-hl);
    margin-bottom: 12px;
  }
  .aex-conclusion-text {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    font-style: italic;
    color: var(--ink);
    line-height: 1.8;
  }

  .aex-op-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
  }
  .aex-op-section .aex-op-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }
  .aex-op-section h3 {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
  }
  .aex-op-right p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
    margin-bottom: 16px;
  }
  .aex-op-right p:last-of-type { margin-bottom: 0; }
  .aex-op-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
  }
  .aex-op-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    padding: 5px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  .aex-page-footer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
  }
  .aex-footer-info {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
    line-height: 1.9;
  }
  .aex-read-btn {
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
  .aex-read-btn:hover { background: var(--accent-hl); }

  @keyframes aexFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .aex-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .aex-anim.aex-visible { opacity: 1; transform: none; }

  @media (max-width: 860px) {
    .aex-nav, .aex-hero, .aex-section-rule, .aex-product-section, .aex-analysis-section, .aex-op-section, .aex-page-footer {
      padding-left: 24px; padding-right: 24px;
    }
    .aex-hero-body, .aex-nav-compare, .aex-rationale-grid, .aex-books-grid, .aex-op-section { grid-template-columns: 1fr; }
    .aex-nav-arrow { display: none; }
    .aex-verdict-section { padding: 28px 24px; }
    .aex-verdict-row { grid-template-columns: 100px 1fr 1fr; }
    .aex-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
  }
`;function f(){return(0,c.useEffect)(()=>{let a=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&a.target.classList.add("aex-visible")})},{threshold:.1});return document.querySelectorAll(".aex-anim").forEach(b=>{a.observe(b)}),()=>{a.disconnect()}},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:e}),(0,b.jsxs)("div",{className:"aex-body",children:[(0,b.jsx)("div",{className:"aex-grain"}),(0,b.jsx)("nav",{className:"aex-nav",children:(0,b.jsx)(d.default,{href:"/articles",className:"aex-back",children:"Article Works"})}),(0,b.jsxs)("header",{className:"aex-hero",children:[(0,b.jsxs)("div",{className:"aex-hero-meta",children:[(0,b.jsx)("span",{className:"aex-tag aex-filled",children:"Strategy & Analysis"}),(0,b.jsx)("span",{className:"aex-tag aex-accent",children:"产品设计"}),(0,b.jsx)("span",{className:"aex-tag",children:"内容评估"}),(0,b.jsx)("span",{className:"aex-tag",children:"网文赛道研究"})]}),(0,b.jsxs)("h1",{children:["内容理解",(0,b.jsx)("em",{children:"分析练习"})]}),(0,b.jsx)("p",{className:"aex-hero-sub",children:"微信读书导航标签重构方案 × 男频网文深度对比评析——《十日终焉》&《道诡异仙》"}),(0,b.jsxs)("div",{className:"aex-hero-body",children:[(0,b.jsxs)("div",{className:"aex-hero-abstract",children:[(0,b.jsx)("div",{className:"aex-label",children:"展示说明 · Context"}),(0,b.jsx)("p",{children:'这是我围绕小说内容运营方向主动完成的两项分析练习。 第一部分针对微信读书现有导航标签进行重构， 我提出了"题材大类精简 + 阅读体验多维标签"的两层结构方案； 第二部分对《十日终焉》与《道诡异仙》进行深度对比， 从七个维度完成结构化评析。 两部分展示的是我将内容研究能力转化为可落地判断的实际思维方式。'})]}),(0,b.jsxs)("div",{className:"aex-info-card",children:[(0,b.jsx)("div",{className:"aex-card-label",children:"笔试信息"}),(0,b.jsxs)("div",{className:"aex-info-rows",children:[(0,b.jsxs)("div",{className:"aex-info-row",children:[(0,b.jsx)("div",{className:"aex-info-key",children:"类型"}),(0,b.jsx)("div",{className:"aex-info-val",children:"内容分析练习"})]}),(0,b.jsxs)("div",{className:"aex-info-row",children:[(0,b.jsx)("div",{className:"aex-info-key",children:"方向"}),(0,b.jsxs)("div",{className:"aex-info-val",children:["产品设计思维",(0,b.jsx)("br",{}),"内容评估框架"]})]}),(0,b.jsxs)("div",{className:"aex-info-row",children:[(0,b.jsx)("div",{className:"aex-info-key",children:"赛道"}),(0,b.jsxs)("div",{className:"aex-info-val aex-hl",children:["小说内容运营",(0,b.jsx)("br",{}),"网文平台方向"]})]}),(0,b.jsxs)("div",{className:"aex-info-row",children:[(0,b.jsx)("div",{className:"aex-info-key",children:"选书"}),(0,b.jsxs)("div",{className:"aex-info-val",children:["十日终焉 ×",(0,b.jsx)("br",{}),"道诡异仙（男频）"]})]})]})]})]})]}),(0,b.jsxs)("div",{className:"aex-section-rule aex-anim",children:[(0,b.jsx)("div",{className:"aex-rule-line"}),(0,b.jsx)("div",{className:"aex-rule-label",children:"Part 01 · 产品设计"}),(0,b.jsx)("div",{className:"aex-rule-line"})]}),(0,b.jsxs)("section",{className:"aex-product-section aex-anim",children:[(0,b.jsxs)("div",{className:"aex-part-header",children:[(0,b.jsx)("div",{className:"aex-part-num-large",children:"01"}),(0,b.jsxs)("div",{className:"aex-part-header-text",children:[(0,b.jsx)("div",{className:"aex-part-tag",children:"Product Design"}),(0,b.jsx)("div",{className:"aex-part-title-main",children:"微信读书男生小说导航标签重构方案"})]})]}),(0,b.jsxs)("div",{className:"aex-nav-compare",style:{marginBottom:"32px"},children:[(0,b.jsxs)("div",{className:"aex-nav-col",children:[(0,b.jsx)("div",{className:"aex-nav-col-label",children:"现有标签 · 15个"}),(0,b.jsxs)("div",{className:"aex-nav-tags-before",children:[(0,b.jsx)("span",{className:"aex-nav-tag-b aex-similar",children:"东方玄幻"}),(0,b.jsx)("span",{className:"aex-nav-tag-b aex-similar",children:"玄幻奇幻"}),(0,b.jsx)("span",{className:"aex-nav-tag-b aex-similar",children:"异界大陆"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"都市"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"历史穿越"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"科幻"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"游戏竞技"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"悬疑灵异"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"军事"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"同人二次元"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"修真仙侠"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"养成大佬"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"冒险小说"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"霸总商战"}),(0,b.jsx)("span",{className:"aex-nav-tag-b",children:"竞技电竞"})]}),(0,b.jsx)("div",{style:{marginTop:"14px",fontFamily:"'Space Mono',monospace",fontSize:"10px",color:"#c07a3088"},children:"↑ 橙色标签：用户感知几乎无差别，造成认知冗余"})]}),(0,b.jsx)("div",{className:"aex-nav-arrow",children:"→"}),(0,b.jsxs)("div",{className:"aex-nav-col aex-after",children:[(0,b.jsx)("div",{className:"aex-nav-col-label",children:"重构方案 · 两层结构"}),(0,b.jsxs)("div",{className:"aex-nav-after-structure",children:[(0,b.jsxs)("div",{className:"aex-nav-layer",children:[(0,b.jsx)("div",{className:"aex-nav-layer-label",children:"第一层 · 题材大类（精简为9个）"}),(0,b.jsxs)("div",{className:"aex-nav-tags-after",children:[(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"玄幻"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"仙侠"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"都市"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"历史穿越"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"科幻"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"游戏竞技"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"悬疑灵异"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"军事"}),(0,b.jsx)("span",{className:"aex-nav-tag-a",children:"同人二次元"})]})]}),(0,b.jsxs)("div",{className:"aex-nav-layer",children:[(0,b.jsx)("div",{className:"aex-nav-layer-label",children:"第二层 · 阅读体验标签（可多选）"}),(0,b.jsxs)("div",{className:"aex-nav-tags-after",children:[(0,b.jsx)("span",{className:"aex-nav-tag-a aex-exp",children:"爽感强"}),(0,b.jsx)("span",{className:"aex-nav-tag-a aex-exp",children:"烧脑向"}),(0,b.jsx)("span",{className:"aex-nav-tag-a aex-exp",children:"热血燃"}),(0,b.jsx)("span",{className:"aex-nav-tag-a aex-exp",children:"恐怖感"}),(0,b.jsx)("span",{className:"aex-nav-tag-a aex-exp",children:"情怀向"}),(0,b.jsx)("span",{className:"aex-nav-tag-a aex-exp",children:"治愈系"})]})]})]})]})]}),(0,b.jsxs)("div",{className:"aex-rationale-grid",children:[(0,b.jsxs)("div",{className:"aex-rationale-card",children:[(0,b.jsx)("div",{className:"aex-rationale-num",children:"01"}),(0,b.jsx)("div",{className:"aex-rationale-title",children:"好的导航核心是做减法"}),(0,b.jsx)("div",{className:"aex-rationale-body",children:'现有标签中"东方玄幻""玄幻奇幻""异界大陆"在用户感知上几乎没有区别， 用户快速浏览时还要花时间辨别三者差异，这是额外的认知消耗， 拖慢了从"想读"到"开始读"之间的决策速度。 将15个精简为9个，目标是让用户第一眼看懂、快速做出选择。'})]}),(0,b.jsxs)("div",{className:"aex-rationale-card",children:[(0,b.jsx)("div",{className:"aex-rationale-num",children:"02"}),(0,b.jsx)("div",{className:"aex-rationale-title",children:"题材解决不了找书的核心问题"}),(0,b.jsxs)("div",{className:"aex-rationale-body",children:["使用分类导航找书的用户，往往不是带着具体书名来的， 更多是带着模糊的兴趣或情绪——题材只是入口， 真正帮他做决策的是",(0,b.jsx)("strong",{children:"阅读体验"}),"。 体验标签是描述性的多维标签，一本书可以同时拥有多个， 用户叠加选择两步即可到达真正想看的内容。"]})]})]})]}),(0,b.jsxs)("div",{className:"aex-section-rule aex-anim",children:[(0,b.jsx)("div",{className:"aex-rule-line"}),(0,b.jsx)("div",{className:"aex-rule-label",children:"Part 02 · 内容评估"}),(0,b.jsx)("div",{className:"aex-rule-line"})]}),(0,b.jsxs)("section",{className:"aex-analysis-section aex-anim",children:[(0,b.jsxs)("div",{className:"aex-part-header",children:[(0,b.jsx)("div",{className:"aex-part-num-large",children:"02"}),(0,b.jsxs)("div",{className:"aex-part-header-text",children:[(0,b.jsx)("div",{className:"aex-part-tag",children:"Content Analysis"}),(0,b.jsx)("div",{className:"aex-part-title-main",children:"男频网文深度对比：《十日终焉》vs《道诡异仙》"})]})]}),(0,b.jsxs)("div",{className:"aex-books-grid",children:[(0,b.jsxs)("div",{className:"aex-book-card aex-winner",children:[(0,b.jsx)("span",{className:"aex-book-badge",children:"综合更优 ·  Winner"}),(0,b.jsx)("div",{className:"aex-book-title",children:"十日终焉"}),(0,b.jsxs)("div",{className:"aex-book-dims",children:[(0,b.jsxs)("div",{className:"aex-book-dim",children:[(0,b.jsx)("div",{className:"aex-book-dim-label",children:"叙事结构"}),(0,b.jsx)("div",{className:"aex-book-dim-val",children:"悬念驱动型。信息刻意分批投放，读者与齐夏同步解谜；人物小传在关键节点释放，既填坑又铺垫情感"})]}),(0,b.jsxs)("div",{className:"aex-book-dim",children:[(0,b.jsx)("div",{className:"aex-book-dim-label",children:"核心张力"}),(0,b.jsx)("div",{className:"aex-book-dim-val",children:"伏笔网络——千余章、多视角线索最终归拢于齐夏的一盘大棋，揭晓时兼具智识满足与强烈爽感"})]}),(0,b.jsxs)("div",{className:"aex-book-dim",children:[(0,b.jsx)("div",{className:"aex-book-dim-label",children:"人物关系亮点"}),(0,b.jsx)("div",{className:"aex-book-dim-val",children:'"余念安"并非真实人物，是齐夏虚构的执念具象化——男频以此处理女主角极为罕见'})]})]})]}),(0,b.jsxs)("div",{className:"aex-book-card",children:[(0,b.jsx)("span",{className:"aex-book-badge",children:"风格极致 · Contender"}),(0,b.jsx)("div",{className:"aex-book-title",children:"道诡异仙"}),(0,b.jsxs)("div",{className:"aex-book-dims",children:[(0,b.jsxs)("div",{className:"aex-book-dim",children:[(0,b.jsx)("div",{className:"aex-book-dim-label",children:"叙事结构"}),(0,b.jsx)("div",{className:"aex-book-dim-val",children:"顺叙推进，但叙事可靠性本身构成最大悬念——主角患精神分裂，读者无法判断哪个世界为真"})]}),(0,b.jsxs)("div",{className:"aex-book-dim",children:[(0,b.jsx)("div",{className:"aex-book-dim-label",children:"核心张力"}),(0,b.jsx)("div",{className:"aex-book-dim-val",children:"中式克苏鲁氛围的持续浸染，以恐怖感塑造驱动阅读，是风格型文笔的成功范例"})]}),(0,b.jsxs)("div",{className:"aex-book-dim",children:[(0,b.jsx)("div",{className:"aex-book-dim-label",children:"人物关系亮点"}),(0,b.jsx)("div",{className:"aex-book-dim-val",children:'杨娜随李火旺在大傩世界情感变化而改变映射对象——此设定本身即是"大傩为真实"的叙事证据'})]})]})]})]}),(0,b.jsxs)("div",{className:"aex-verdict-section",children:[(0,b.jsx)("div",{className:"aex-verdict-label",children:"七维度对比评分 · Dimension Analysis"}),(0,b.jsxs)("div",{className:"aex-verdict-rows",children:[(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"维度"}),(0,b.jsx)("div",{className:"aex-verdict-cell",children:"十日终焉"}),(0,b.jsx)("div",{className:"aex-verdict-cell",children:"道诡异仙"})]}),(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"开篇吸引力"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-win",children:"✓ 密室游戏切入，零门槛拉入叙事"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-lose",children:"克苏鲁氛围门槛高，易流失读者"})]}),(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"悬念伏笔"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-win",children:"✓ 伏笔精密，千章后揭晓逻辑严谨"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-lose",children:"悬念感较分散，理解门槛偏高"})]}),(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"叙事节奏"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-win",children:"✓ 张弛有度，博弈与人物小传交替"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-lose",children:"前半部分舒缓，需沉浸式阅读"})]}),(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"人物成长"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-lose",children:'齐夏"多智近妖"，弧线空间受限'}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-win",children:"✓ 李火旺人性腐蚀曲线，三层次递进清晰"})]}),(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"群像塑造"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-win",children:"✓ 共同求生设定天然提供群像土壤"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-lose",children:"孤立多疑设定限制了人物关系网"})]}),(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"文笔风格"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-draw",children:"智识温情并存，克制精准"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-win",children:"✓ 恐怖氛围极致，风格辨识度最高"})]}),(0,b.jsxs)("div",{className:"aex-verdict-row",children:[(0,b.jsx)("div",{className:"aex-verdict-cell",children:"IP潜力"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-win",children:"✓ 跨越类型边界，隐喻当代精神困境"}),(0,b.jsx)("div",{className:"aex-verdict-cell aex-draw",children:"克苏鲁赛道难以复制的成功案例"})]})]})]}),(0,b.jsxs)("div",{className:"aex-conclusion-block",children:[(0,b.jsx)("div",{className:"aex-conclusion-label",children:"综合结论 · Final Verdict"}),(0,b.jsx)("div",{className:"aex-conclusion-text",children:"《十日终焉》不止于类型文学的完成度——它以终焉之地为镜，折射出现代人困守于肃杀秩序中、 无力进入新阶段的普遍精神困境。故事内核触及当下社会处境的深层隐喻， 具备跨越类型边界、被更广泛读者解读与回望的潜质， 是一本有可能在多年后被重新审视、被赋予更深层时代意义的作品。"})]})]}),(0,b.jsxs)("section",{className:"aex-op-section aex-anim",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"aex-op-label",children:"关于这份练习"}),(0,b.jsx)("h3",{children:"产品设计 · 内容评估"})]}),(0,b.jsxs)("div",{className:"aex-op-right",children:[(0,b.jsx)("p",{children:"Part 01 从用户找书的真实路径出发，尝试重新设计导航结构。 Part 02 选取两部我读过的男频网文，按统一维度做对比分析。 两部分都是基于对内容运营方向的持续关注而做的主动练习。"}),(0,b.jsxs)("div",{className:"aex-op-tags",children:[(0,b.jsx)("span",{className:"aex-op-tag",children:"产品方案设计"}),(0,b.jsx)("span",{className:"aex-op-tag",children:"用户体验思维"}),(0,b.jsx)("span",{className:"aex-op-tag",children:"网文赛道判断"}),(0,b.jsx)("span",{className:"aex-op-tag",children:"结构化评估框架"}),(0,b.jsx)("span",{className:"aex-op-tag",children:"IP潜力识别"})]})]})]}),(0,b.jsxs)("footer",{className:"aex-page-footer aex-anim",children:[(0,b.jsxs)("div",{className:"aex-footer-info",children:["邓甯予 · 南开大学文艺学硕士",(0,b.jsx)("br",{}),"小说内容运营方向 · 自选分析练习",(0,b.jsx)("br",{}),"Strategy & Analysis"]}),(0,b.jsx)("a",{href:"#",className:"aex-read-btn",children:"查看完整答案  "})]})]})]})}a.s(["default",()=>f])}];

//# sourceMappingURL=src_app_articles_article-detail-exam_page_tsx_fb5c6d44._.js.map