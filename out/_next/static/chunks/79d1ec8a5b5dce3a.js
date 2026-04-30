(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18539,a=>{"use strict";var e=a.i(43476),i=a.i(71645);let s=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  .ag-body {
    --paper: #e8eaee;
    --ink: #12151c;
    --ink-soft: #2e3340;
    --muted: #7a8294;
    --rule: #c0c6d4;
    --accent: #2e5fa3;
    --accent-warm: #5b8fd4;
    --cream: #dde0e8;
    --dark: #0d1018;
    --dark2: #161b28;

    background: var(--paper);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    line-height: 1.8;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .ag-grain {
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .ag-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    background: linear-gradient(to bottom, #e8eaee 60%, transparent);
  }

  .ag-back {
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
  .ag-back:hover { color: var(--ink); }
  .ag-back::before { content: '←'; font-size: 13px; }

  .ag-hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 130px 48px 0;
  }

  .ag-hero-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 36px;
    opacity: 0;
    animation: agFadeUp 0.7s ease forwards 0.1s;
  }

  .ag-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }
  .ag-tag.accent { border-color: var(--accent); color: var(--accent); }

  .ag-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 5vw, 68px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 20px;
    opacity: 0;
    animation: agFadeUp 0.7s ease forwards 0.2s;
  }
  .ag-hero h1 em { font-style: italic; color: var(--accent); }

  .ag-hero-sub {
    font-family: 'EB Garamond', serif;
    font-size: 19px;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 52px;
    max-width: 600px;
    opacity: 0;
    animation: agFadeUp 0.7s ease forwards 0.3s;
  }

  .ag-hero-body {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 56px;
    align-items: start;
    margin-bottom: 72px;
    opacity: 0;
    animation: agFadeUp 0.7s ease forwards 0.4s;
  }

  .ag-hero-abstract {
    border-left: 2px solid var(--accent);
    padding-left: 28px;
  }

  .ag-hero-abstract .label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-warm);
    margin-bottom: 16px;
  }

  .ag-hero-abstract p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .ag-score-card {
    background: var(--dark2);
    padding: 28px;
    color: var(--paper);
  }

  .ag-score-card .card-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 24px;
  }

  .ag-score-main {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-bottom: 8px;
  }

  .ag-score-num {
    font-family: 'Playfair Display', serif;
    font-size: 64px;
    font-weight: 900;
    font-style: italic;
    color: var(--accent-warm);
    line-height: 1;
  }

  .ag-score-unit {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.1em;
  }

  .ag-score-desc {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.08em;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .ag-score-divider { height: 1px; background: #2a3040; margin-bottom: 20px; }

  .ag-score-facts { display: flex; flex-direction: column; gap: 14px; }

  .ag-score-fact-num {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
    color: var(--paper);
    line-height: 1;
    margin-bottom: 2px;
  }

  .ag-score-fact-desc {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.06em;
    line-height: 1.5;
  }

  .ag-section-rule {
    max-width: 1100px;
    margin: 0 auto 64px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .ag-rule-line { flex: 1; height: 1px; background: var(--rule); }
  .ag-rule-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }

  .ag-debate-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }

  .ag-sec-header {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 36px;
  }
  .ag-sec-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .ag-sec-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--ink);
  }

  .ag-debate-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-bottom: 24px;
  }

  .ag-debate-col { padding: 28px; background: var(--cream); }
  .ag-debate-col.negative { background: #dde0e8; }
  .ag-debate-col.positive { background: #d4dae8; }

  .ag-debate-col-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .ag-debate-col.negative .ag-debate-col-label { color: #a05050; }
  .ag-debate-col.positive .ag-debate-col-label { color: var(--accent); }

  .ag-debate-voices { display: flex; flex-direction: column; gap: 10px; }

  .ag-debate-voice {
    font-family: 'EB Garamond', serif;
    font-size: 15px;
    font-style: italic;
    color: var(--ink-soft);
    line-height: 1.6;
    padding-left: 14px;
    position: relative;
  }
  .ag-debate-voice::before {
    content: '"';
    position: absolute;
    left: 0;
    color: var(--rule);
    font-size: 18px;
    line-height: 1;
  }

  .ag-debate-note {
    background: var(--dark2);
    padding: 20px 24px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.06em;
    color: var(--accent-warm);
    line-height: 1.7;
  }

  .ag-question-section {
    background: var(--dark2);
    padding: 80px 48px;
    margin-bottom: 80px;
  }

  .ag-question-inner { max-width: 1100px; margin: 0 auto; }

  .ag-question-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 40px;
  }

  .ag-question-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  .ag-question-item {
    border-left: 1px solid var(--accent);
    padding-left: 24px;
  }

  .ag-question-item .q-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent-warm);
    margin-bottom: 12px;
  }

  .ag-question-item blockquote {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-style: italic;
    color: var(--paper);
    line-height: 1.65;
  }

  .ag-angle-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
    align-items: start;
  }

  .ag-angle-left .angle-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .ag-angle-left h3 {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
  }

  .ag-angle-right p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
    margin-bottom: 18px;
  }
  .ag-angle-right p:last-of-type { margin-bottom: 0; }

  .ag-angle-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
  }

  .ag-angle-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    padding: 5px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  .ag-page-footer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
  }

  .ag-read-btn {
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
  .ag-read-btn:hover { background: var(--accent); }

  @keyframes agFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ag-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .ag-anim.ag-visible { opacity: 1; transform: none; }

  @media (max-width: 860px) {
    .ag-nav, .ag-hero, .ag-section-rule, .ag-debate-section,
    .ag-angle-section, .ag-page-footer { padding-left: 24px; padding-right: 24px; }
    .ag-hero-body, .ag-debate-grid, .ag-question-grid,
    .ag-angle-section { grid-template-columns: 1fr; }
    .ag-question-section { padding: 48px 24px; }
    .ag-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
  }
`;function t(){return(0,i.useEffect)(()=>{let a=new IntersectionObserver(a=>{a.forEach((a,e)=>{a.isIntersecting&&setTimeout(()=>a.target.classList.add("ag-visible"),60*e)})},{threshold:.08});return document.querySelectorAll(".ag-anim").forEach(e=>a.observe(e)),()=>a.disconnect()},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:s}),(0,e.jsxs)("div",{className:"ag-body",children:[(0,e.jsx)("div",{className:"ag-grain"}),(0,e.jsx)("nav",{className:"ag-nav",children:(0,e.jsx)("a",{href:"#",className:"ag-back",onClick:a=>{a.preventDefault(),window.location.href="/articles"},children:"Article Works"})}),(0,e.jsxs)("header",{className:"ag-hero",children:[(0,e.jsxs)("div",{className:"ag-hero-meta",children:[(0,e.jsx)("span",{className:"ag-tag accent",children:"Film Criticism"}),(0,e.jsx)("span",{className:"ag-tag",children:"Short Essay"}),(0,e.jsx)("span",{className:"ag-tag",children:"Gender Studies"}),(0,e.jsx)("span",{className:"ag-tag",children:"Reception Theory"})]}),(0,e.jsxs)("h1",{children:["工于细腻的",(0,e.jsx)("br",{}),"《",(0,e.jsx)("em",{children:"好东西"}),"》"]}),(0,e.jsx)("p",{className:"ag-hero-sub",children:'社会议题的有机融合与当代叙事的突破——当"好东西"本身成为问题'}),(0,e.jsxs)("div",{className:"ag-hero-body",children:[(0,e.jsxs)("div",{className:"ag-hero-abstract",children:[(0,e.jsx)("div",{className:"label",children:"选题逻辑 · Content Rationale"}),(0,e.jsx)("p",{children:'这篇文章的起点不是"《好东西》好不好"，而是： 为什么一部让人发出"像回到母亲子宫"观影感叹的电影， 同时被人痛斥为"咪蒙化"和"脱口秀专场"？ 两极分化本身就是内容现象——研究这种分裂， 比给电影贴标签更有内容价值。 从选题角度看，争议性内容的传播机制正是内容运营最需要理解的核心命题。'})]}),(0,e.jsxs)("div",{className:"ag-score-card",children:[(0,e.jsx)("div",{className:"card-label",children:"文章背景数据"}),(0,e.jsxs)("div",{className:"ag-score-main",children:[(0,e.jsx)("span",{className:"ag-score-num",children:"9.1"}),(0,e.jsx)("span",{className:"ag-score-unit",children:"/ 10"})]}),(0,e.jsxs)("div",{className:"ag-score-desc",children:["豆瓣开分",(0,e.jsx)("br",{}),"2024华语电影评分最高"]}),(0,e.jsx)("div",{className:"ag-score-divider"}),(0,e.jsxs)("div",{className:"ag-score-facts",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"ag-score-fact-num",children:"7亿+"}),(0,e.jsx)("div",{className:"ag-score-fact-desc",children:"最终票房收官"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"ag-score-fact-num",children:"8.9"}),(0,e.jsxs)("div",{className:"ag-score-fact-desc",children:["2025年回看最终评分",(0,e.jsx)("br",{}),"仍位列年度榜首"]})]})]})]})]})]}),(0,e.jsxs)("div",{className:"ag-section-rule ag-anim",children:[(0,e.jsx)("div",{className:"ag-rule-line"}),(0,e.jsx)("div",{className:"ag-rule-label",children:"舆论场分析 · Reception Analysis"}),(0,e.jsx)("div",{className:"ag-rule-line"})]}),(0,e.jsxs)("section",{className:"ag-debate-section ag-anim",children:[(0,e.jsxs)("div",{className:"ag-sec-header",children:[(0,e.jsx)("span",{className:"ag-sec-label",children:"Research Starting Point"}),(0,e.jsx)("span",{className:"ag-sec-title",children:"两极分化的声音"})]}),(0,e.jsxs)("div",{className:"ag-debate-grid",children:[(0,e.jsxs)("div",{className:"ag-debate-col negative",children:[(0,e.jsx)("div",{className:"ag-debate-col-label",children:"批评声音"}),(0,e.jsx)("div",{className:"ag-debate-voices",children:["小红书金句式表演合集","导演的脱口秀专场","咪蒙化，台词堆砌的标签拼盘","放弃了视听艺术和电影叙事"].map(a=>(0,e.jsx)("div",{className:"ag-debate-voice",children:a},a))})]}),(0,e.jsxs)("div",{className:"ag-debate-col positive",children:[(0,e.jsx)("div",{className:"ag-debate-col-label",children:"共鸣声音"}),(0,e.jsx)("div",{className:"ag-debate-voices",children:["像回到母亲子宫般的观影体验","《好东西》真是好东西","女性主义电影的新维度","信息量巨大，值得反复看"].map(a=>(0,e.jsx)("div",{className:"ag-debate-voice",children:a},a))})]})]}),(0,e.jsx)("div",{className:"ag-debate-note",children:"→ 本文研究起点：两极分化本身即是内容现象，争议性内容如何在分裂的舆论场中维持高热度并跻身年度佳作？"})]}),(0,e.jsx)("section",{className:"ag-question-section",children:(0,e.jsxs)("div",{className:"ag-question-inner",children:[(0,e.jsx)("div",{className:"ag-question-label",children:"核心研究问题 · Core Questions"}),(0,e.jsxs)("div",{className:"ag-question-grid",children:[(0,e.jsxs)("div",{className:"ag-question-item",children:[(0,e.jsx)("div",{className:"q-label",children:"问题一"}),(0,e.jsx)("blockquote",{children:'《好东西》中被称为"好东西"的，仅仅是对当下女性主义浪潮的戏谑式总结，还是以电影艺术的形式创造了真正新的东西？'})]}),(0,e.jsxs)("div",{className:"ag-question-item",children:[(0,e.jsx)("div",{className:"q-label",children:"问题二"}),(0,e.jsx)("blockquote",{children:'"女性主义"的先锋性，是否注定要在电影领域以有别于传统的表达形式出现？这是形式的革新还是艺术的妥协？'})]})]})]})}),(0,e.jsxs)("section",{className:"ag-angle-section ag-anim",children:[(0,e.jsxs)("div",{className:"ag-angle-left",children:[(0,e.jsx)("div",{className:"angle-label",children:"内容运营视角"}),(0,e.jsx)("h3",{children:"争议即传播：爆款内容的舆论生态学"})]}),(0,e.jsxs)("div",{className:"ag-angle-right",children:[(0,e.jsx)("p",{children:'《好东西》是2024年最典型的"争议性爆款"——它同时触发了极度认同与极度反感， 两种情绪都在驱动内容的持续传播。这种现象在内容运营中有明确的规律： 真正高传播的内容往往不是让所有人满意的内容，而是让不同群体都有话说的内容。'}),(0,e.jsx)("p",{children:'这篇文章尝试用电影批评的工具解析这一传播现象的内容逻辑， 追问"为什么两极分化反而促成了影片的目的"——这个问题的答案， 同样适用于理解任何在争议中出圈的内容产品。'}),(0,e.jsx)("div",{className:"ag-angle-tags",children:["争议内容分析","舆论周期研究","女性受众洞察","接受理论","社交媒体传播"].map(a=>(0,e.jsx)("span",{className:"ag-angle-tag",children:a},a))})]})]}),(0,e.jsx)("footer",{className:"ag-page-footer ag-anim",children:(0,e.jsx)("div",{})})]})]})}a.s(["default",()=>t])}]);