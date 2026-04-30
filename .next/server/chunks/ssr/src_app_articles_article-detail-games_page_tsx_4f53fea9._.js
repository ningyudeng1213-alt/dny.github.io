module.exports=[43820,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .agm-body {
    --paper: #e8ece8;
    --ink: #101810;
    --ink-soft: #243024;
    --muted: #708070;
    --rule: #b8ccb8;
    --accent: #2a7a3a;
    --accent-light: #4aaa5a;
    --accent2: #c07a20;
    --accent3: #2a6a9a;
    --cream: #d8e4d8;
    --dark: #0a100a;
    --dark2: #121e12;
    --dark3: #1a2a1a;

    background: var(--paper);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    line-height: 1.8;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  .agm-grain {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .agm-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    background: linear-gradient(to bottom, var(--paper) 60%, transparent);
  }

  .agm-back {
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
  .agm-back:hover { color: var(--ink); }
  .agm-back::before { content: '←'; }

  .agm-hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 130px 48px 0;
  }

  .agm-hero-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 36px;
    opacity: 0;
    animation: agmFadeUp 0.7s ease forwards 0.1s;
  }

  .agm-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 4px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }
  .agm-tag.accent { border-color: var(--accent); color: var(--accent); }
  .agm-tag.filled { background: var(--accent); color: var(--paper); border-color: var(--accent); }

  .agm-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 900;
    line-height: 1.06;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 18px;
    opacity: 0;
    animation: agmFadeUp 0.7s ease forwards 0.2s;
  }
  .agm-hero h1 em { font-style: italic; color: var(--accent); }

  .agm-hero-sub {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    font-style: italic;
    color: var(--muted);
    border-left: 2px solid var(--rule);
    padding-left: 20px;
    margin-bottom: 52px;
    max-width: 640px;
    opacity: 0;
    animation: agmFadeUp 0.7s ease forwards 0.3s;
  }

  .agm-hero-body {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 56px;
    align-items: start;
    margin-bottom: 72px;
    opacity: 0;
    animation: agmFadeUp 0.7s ease forwards 0.4s;
  }

  .agm-hero-abstract {
    border-left: 2px solid var(--accent);
    padding-left: 28px;
  }
  .agm-hero-abstract .label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-light);
    margin-bottom: 14px;
  }
  .agm-hero-abstract p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .agm-summary-card {
    background: var(--dark2);
    padding: 28px;
  }
  .agm-summary-card .card-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 20px;
  }
  .agm-summary-items { display: flex; flex-direction: column; gap: 0; }
  .agm-summary-item {
    padding: 11px 0;
    border-bottom: 1px solid #1e2e1e;
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  .agm-summary-item:last-child { border-bottom: none; }
  .agm-s-game {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    color: var(--accent-light);
    min-width: 72px;
    padding-top: 1px;
    line-height: 1.4;
  }
  .agm-s-core {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.05em;
    color: #708870;
    line-height: 1.6;
  }

  .agm-section-rule {
    max-width: 1100px;
    margin: 0 auto 64px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .agm-rule-line { flex: 1; height: 1px; background: var(--rule); }
  .agm-rule-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }

  .agm-games-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }
  .agm-sec-header {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 36px;
  }
  .agm-sec-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .agm-sec-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--ink);
  }

  .agm-games-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .agm-game-card {
    background: var(--cream);
    padding: 30px 24px;
    border-top: 3px solid var(--game-color, var(--rule));
    transition: background 0.2s;
  }
  .agm-game-card:hover { background: #ccd8cc; }

  .agm-game-num {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    font-style: italic;
    color: var(--rule);
    line-height: 1;
    margin-bottom: 10px;
    transition: color 0.2s;
  }
  .agm-game-card:hover .agm-game-num { color: var(--game-color, var(--accent)); }

  .agm-game-name {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--game-color, var(--accent));
    margin-bottom: 14px;
  }

  .agm-game-core {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--rule);
  }

  .agm-game-desc {
    font-size: 15px;
    color: var(--ink-soft);
    line-height: 1.75;
    margin-bottom: 16px;
  }

  .agm-game-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .agm-game-tag {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    padding: 3px 8px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  .agm-dimension-section {
    background: var(--dark);
    padding: 72px 48px;
    margin-bottom: 80px;
  }
  .agm-dim-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .agm-dim-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 32px;
  }
  .agm-dim-table {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .agm-dim-row {
    display: grid;
    grid-template-columns: 130px 1fr 1fr 1fr;
    gap: 0;
    border-bottom: 1px solid #181e18;
  }
  .agm-dim-row.header { border-bottom: 1px solid #283028; margin-bottom: 4px; }
  .agm-dim-cell {
    padding: 14px 16px;
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.05em;
    line-height: 1.6;
    color: #708870;
  }
  .agm-dim-row.header .agm-dim-cell {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .agm-dim-cell:first-child {
    color: #506050;
    border-right: 1px solid #181e18;
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .agm-dim-cell.magic { color: #5aaa6a; }
  .agm-dim-cell.smart { color: #d09040; }
  .agm-dim-cell.candy { color: #6090d0; }
  .agm-dim-row:last-child { border-bottom: none; }

  .agm-insight-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }
  .agm-insight-card {
    background: var(--cream);
    padding: 26px 22px;
  }
  .agm-insight-game {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--game-color, var(--muted));
    margin-bottom: 10px;
  }
  .agm-insight-title {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 10px;
    line-height: 1.35;
  }
  .agm-insight-body {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.7;
  }

  .agm-note-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 48px;
  }
  .agm-note-left .n-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }
  .agm-note-left h3 {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
  }
  .agm-note-right p {
    font-size: 16px;
    color: var(--ink-soft);
    line-height: 1.9;
  }
  .agm-note-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
  }
  .agm-note-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    padding: 5px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  .agm-page-footer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
  }
  .agm-footer-info {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
    line-height: 1.9;
  }
  .agm-read-btn {
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
  .agm-read-btn:hover { background: var(--accent); }

  @keyframes agmFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .agm-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .agm-anim.agm-visible { opacity: 1; transform: none; }

  @media (max-width: 860px) {
    .agm-nav, .agm-hero, .agm-section-rule, .agm-games-section,
    .agm-insight-section, .agm-note-section, .agm-page-footer {
      padding-left: 24px; padding-right: 24px;
    }
    .agm-hero-body, .agm-note-section { grid-template-columns: 1fr; gap: 32px; }
    .agm-games-grid, .agm-insight-section { grid-template-columns: 1fr; }
    .agm-dim-row { grid-template-columns: 80px 1fr 1fr 1fr; }
    .agm-dimension-section { padding: 48px 24px; }
    .agm-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
  }
`;function f(){let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=new IntersectionObserver(a=>{a.forEach((a,b)=>{a.isIntersecting&&setTimeout(()=>a.target.classList.add("agm-visible"),60*b)})},{threshold:.08});document.querySelectorAll(".agm-anim").forEach(a=>b.observe(a));let c=a.current,d=null;return c&&(d=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(a.target.querySelectorAll(".agm-game-card").forEach((a,b)=>{a.style.opacity="0",a.style.transform="translateY(12px)",a.style.transition=`opacity 0.4s ease ${80*b}ms, transform 0.4s ease ${80*b}ms`,setTimeout(()=>{a.style.opacity="1",a.style.transform="none"},100+80*b)}),d?.unobserve(a.target))})},{threshold:.1})).observe(c),()=>{b.disconnect(),d?.disconnect()}},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:e}),(0,b.jsxs)("div",{className:"agm-body",children:[(0,b.jsx)("div",{className:"agm-grain"}),(0,b.jsx)("nav",{className:"agm-nav",children:(0,b.jsx)(d.default,{href:"/articles",className:"agm-back",children:"Article Works"})}),(0,b.jsxs)("header",{className:"agm-hero",children:[(0,b.jsxs)("div",{className:"agm-hero-meta",children:[(0,b.jsx)("span",{className:"agm-tag filled",children:"Games"}),(0,b.jsx)("span",{className:"agm-tag accent",children:"关卡设计分析"}),(0,b.jsx)("span",{className:"agm-tag",children:"休闲游戏"}),(0,b.jsx)("span",{className:"agm-tag",children:"水排序赛道"})]}),(0,b.jsxs)("h1",{children:["同赛道·",(0,b.jsx)("em",{children:"异策略"})]}),(0,b.jsx)("p",{className:"agm-hero-sub",children:"三款水排序游戏的关卡设计拆解——Magicsort / 精明的开局 / 缤纷糖葫芦"}),(0,b.jsxs)("div",{className:"agm-hero-body",children:[(0,b.jsxs)("div",{className:"agm-hero-abstract",children:[(0,b.jsx)("div",{className:"label",children:"分析说明"}),(0,b.jsx)("p",{children:"三款游戏同属水排序赛道，核心玩法相同——把同色液体倒进同一瓶子。 但在关卡设计、美术表现、音效策略和商业化逻辑上走向了完全不同的方向。 这份拆解从留存率、转化率、目标用户群体三个维度出发， 分析同一底层机制如何在不同产品策略下产生截然不同的用户体验。"})]}),(0,b.jsxs)("div",{className:"agm-summary-card",children:[(0,b.jsx)("div",{className:"card-label",children:"三款游戏 · 核心策略"}),(0,b.jsxs)("div",{className:"agm-summary-items",children:[(0,b.jsxs)("div",{className:"agm-summary-item",children:[(0,b.jsx)("div",{className:"agm-s-game",style:{color:"#5aaa6a"},children:"Magicsort"}),(0,b.jsxs)("div",{className:"agm-s-core",children:["稳定难度递增",(0,b.jsx)("br",{}),"注重留存率"]})]}),(0,b.jsxs)("div",{className:"agm-summary-item",children:[(0,b.jsx)("div",{className:"agm-s-game",style:{color:"#d09040"},children:"精明的开局"}),(0,b.jsxs)("div",{className:"agm-s-core",children:["难度陡增+广告",(0,b.jsx)("br",{}),"注重转化率"]})]}),(0,b.jsxs)("div",{className:"agm-summary-item",children:[(0,b.jsx)("div",{className:"agm-s-game",style:{color:"#6090d0"},children:"缤纷糖葫芦"}),(0,b.jsxs)("div",{className:"agm-s-core",children:["治愈萌系+经营",(0,b.jsx)("br",{}),"垂直用户群体"]})]})]})]})]})]}),(0,b.jsxs)("div",{className:"agm-section-rule agm-anim",children:[(0,b.jsx)("div",{className:"agm-rule-line"}),(0,b.jsx)("div",{className:"agm-rule-label",children:"逐款拆解 · Game Analysis"}),(0,b.jsx)("div",{className:"agm-rule-line"})]}),(0,b.jsxs)("section",{className:"agm-games-section agm-anim",children:[(0,b.jsxs)("div",{className:"agm-sec-header",children:[(0,b.jsx)("span",{className:"agm-sec-label",children:"Three Products"}),(0,b.jsx)("span",{className:"agm-sec-title",children:"关卡设计与体验差异"})]}),(0,b.jsxs)("div",{className:"agm-games-grid",ref:a,children:[(0,b.jsxs)("div",{className:"agm-game-card",style:{"--game-color":"#2a7a3a"},children:[(0,b.jsx)("div",{className:"agm-game-num",children:"01"}),(0,b.jsx)("div",{className:"agm-game-name",children:"Magicsort"}),(0,b.jsx)("div",{className:"agm-game-core",children:"解压 · 稳定 · ASMR"}),(0,b.jsx)("div",{className:"agm-game-desc",children:"游戏画面简洁，难度增长稳定，音效精心模拟真实倒水声—— 根据液柱长短模拟液体倒进玻璃瓶时的不同声音， 无BGM，整体效果接近ASMR。 每关结束后不自动进入下一关， 体现出对玩家留存率而非单次时长的重视。"}),(0,b.jsxs)("div",{className:"agm-game-tags",children:[(0,b.jsx)("span",{className:"agm-game-tag",children:"ASMR设计"}),(0,b.jsx)("span",{className:"agm-game-tag",children:"稳定难度曲线"}),(0,b.jsx)("span",{className:"agm-game-tag",children:"精巧休闲"})]})]}),(0,b.jsxs)("div",{className:"agm-game-card",style:{"--game-color":"#c07a20"},children:[(0,b.jsx)("div",{className:"agm-game-num",children:"02"}),(0,b.jsx)("div",{className:"agm-game-name",children:"精明的开局"}),(0,b.jsx)("div",{className:"agm-game-core",children:"快节奏 · 高转化 · 广告植入"}),(0,b.jsx)("div",{className:"agm-game-desc",children:'难度陡增、节奏加快，"奶茶外卖袋"消除区域迎合国人解压需求， 有爆款meme潜力。 自动进入下一关刻意延长游戏时间， 难度攀升推动玩家为道具观看广告， 商业化逻辑清晰。'}),(0,b.jsxs)("div",{className:"agm-game-tags",children:[(0,b.jsx)("span",{className:"agm-game-tag",children:"奶茶外卖袋"}),(0,b.jsx)("span",{className:"agm-game-tag",children:"广告转化"}),(0,b.jsx)("span",{className:"agm-game-tag",children:"本土化设计"})]})]}),(0,b.jsxs)("div",{className:"agm-game-card",style:{"--game-color":"#2a6a9a"},children:[(0,b.jsx)("div",{className:"agm-game-num",children:"03"}),(0,b.jsx)("div",{className:"agm-game-name",children:"缤纷糖葫芦"}),(0,b.jsx)("div",{className:"agm-game-core",children:"治愈 · 萌系 · 模拟经营"}),(0,b.jsx)("div",{className:"agm-game-desc",children:"将液体改为水果，空瓶改为单独放置水果的空位， 浇糖、套袋动画实现解压效果，慢节奏治愈BGM。 引入模拟经营场景——排序完成的糖葫芦可直接上架获得店铺收益， 驱动玩家完成日常打卡。"}),(0,b.jsxs)("div",{className:"agm-game-tags",children:[(0,b.jsx)("span",{className:"agm-game-tag",children:"模拟经营"}),(0,b.jsx)("span",{className:"agm-game-tag",children:"萌系美术"}),(0,b.jsx)("span",{className:"agm-game-tag",children:"情感联结"})]})]})]})]}),(0,b.jsx)("section",{className:"agm-dimension-section",children:(0,b.jsxs)("div",{className:"agm-dim-inner",children:[(0,b.jsx)("div",{className:"agm-dim-label",children:"维度对比 · Dimension Comparison"}),(0,b.jsxs)("div",{className:"agm-dim-table",children:[(0,b.jsxs)("div",{className:"agm-dim-row header",children:[(0,b.jsx)("div",{className:"agm-dim-cell",children:"维度"}),(0,b.jsx)("div",{className:"agm-dim-cell",children:"Magicsort"}),(0,b.jsx)("div",{className:"agm-dim-cell",children:"精明的开局"}),(0,b.jsx)("div",{className:"agm-dim-cell",children:"缤纷糖葫芦"})]}),(0,b.jsxs)("div",{className:"agm-dim-row",children:[(0,b.jsx)("div",{className:"agm-dim-cell",children:"难度曲线"}),(0,b.jsx)("div",{className:"agm-dim-cell magic",children:"稳定递增，可控"}),(0,b.jsx)("div",{className:"agm-dim-cell smart",children:"陡增，每关时长显著增加"}),(0,b.jsx)("div",{className:"agm-dim-cell candy",children:"平均，长短串两种模式"})]}),(0,b.jsxs)("div",{className:"agm-dim-row",children:[(0,b.jsx)("div",{className:"agm-dim-cell",children:"美术风格"}),(0,b.jsx)("div",{className:"agm-dim-cell magic",children:"简洁极简，魔法主题"}),(0,b.jsx)("div",{className:"agm-dim-cell smart",children:"复杂热闹，国潮感"}),(0,b.jsx)("div",{className:"agm-dim-cell candy",children:"甜系可爱，水果清透感"})]}),(0,b.jsxs)("div",{className:"agm-dim-row",children:[(0,b.jsx)("div",{className:"agm-dim-cell",children:"音效/BGM"}),(0,b.jsx)("div",{className:"agm-dim-cell magic",children:"无BGM，精准ASMR音效"}),(0,b.jsx)("div",{className:"agm-dim-cell smart",children:"动感BGM，加快节奏"}),(0,b.jsx)("div",{className:"agm-dim-cell candy",children:"慢节奏治愈BGM+弹性音效"})]}),(0,b.jsxs)("div",{className:"agm-dim-row",children:[(0,b.jsx)("div",{className:"agm-dim-cell",children:"商业化"}),(0,b.jsx)("div",{className:"agm-dim-cell magic",children:"不强迫，留存优先"}),(0,b.jsx)("div",{className:"agm-dim-cell smart",children:"广告植入，转化率优先"}),(0,b.jsx)("div",{className:"agm-dim-cell candy",children:"日常打卡驱动时长"})]}),(0,b.jsxs)("div",{className:"agm-dim-row",children:[(0,b.jsx)("div",{className:"agm-dim-cell",children:"核心目标"}),(0,b.jsx)("div",{className:"agm-dim-cell magic",children:"稳定留存率"}),(0,b.jsx)("div",{className:"agm-dim-cell smart",children:"广告转化率"}),(0,b.jsx)("div",{className:"agm-dim-cell candy",children:"垂直用户粘性"})]})]})]})}),(0,b.jsxs)("section",{className:"agm-insight-section agm-anim",children:[(0,b.jsxs)("div",{className:"agm-insight-card",children:[(0,b.jsx)("div",{className:"agm-insight-game",style:{color:"#2a7a3a"},children:"Magicsort"}),(0,b.jsx)("div",{className:"agm-insight-title",children:"安静解压是稀缺品"}),(0,b.jsx)("div",{className:"agm-insight-body",children:"在追求复杂操作体验的游戏中，Magicsort的极简是逆势之举。 精心设计的ASMR音效让它成为强迫症与安静解压需求者的真正归宿。"})]}),(0,b.jsxs)("div",{className:"agm-insight-card",children:[(0,b.jsx)("div",{className:"agm-insight-game",style:{color:"#c07a20"},children:"精明的开局"}),(0,b.jsx)("div",{className:"agm-insight-title",children:'"奶茶外卖袋"有爆款基因'}),(0,b.jsx)("div",{className:"agm-insight-body",children:'类似"霉豆腐梗"，对现实生活热点的抓取能迅速触发国内玩家共鸣， 形成meme并实现病毒式扩散——这是爆款游戏最需要的冷启动动力。'})]}),(0,b.jsxs)("div",{className:"agm-insight-card",children:[(0,b.jsx)("div",{className:"agm-insight-game",style:{color:"#2a6a9a"},children:"缤纷糖葫芦"}),(0,b.jsx)("div",{className:"agm-insight-title",children:"经营+排序=情感钩子"}),(0,b.jsx)("div",{className:"agm-insight-body",children:"NPC来店挑选糖葫芦的场景让玩家迅速在小游戏中建立情感联结—— 这种轻度叙事是驱动用户上线完成日常任务的最低成本解法。"})]})]}),(0,b.jsxs)("section",{className:"agm-note-section agm-anim",children:[(0,b.jsxs)("div",{className:"agm-note-left",children:[(0,b.jsx)("div",{className:"n-label",children:"关于这篇"}),(0,b.jsx)("h3",{children:"游戏关卡设计分析练习"})]}),(0,b.jsxs)("div",{className:"agm-note-right",children:[(0,b.jsx)("p",{children:"选取同赛道三款产品进行横向对比， 从美术表现、音效策略、难度曲线和商业化逻辑四个维度切入， 分析相同底层玩法如何支撑起差异化的产品定位。"}),(0,b.jsxs)("div",{className:"agm-note-tags",children:[(0,b.jsx)("span",{className:"agm-note-tag",children:"游戏产品分析"}),(0,b.jsx)("span",{className:"agm-note-tag",children:"关卡设计"}),(0,b.jsx)("span",{className:"agm-note-tag",children:"用户留存"}),(0,b.jsx)("span",{className:"agm-note-tag",children:"商业化策略"}),(0,b.jsx)("span",{className:"agm-note-tag",children:"休闲游戏赛道"})]})]})]}),(0,b.jsxs)("footer",{className:"agm-page-footer agm-anim",children:[(0,b.jsxs)("div",{className:"agm-footer-info",children:["邓甯予 · 南开大学文艺学硕士",(0,b.jsx)("br",{}),"Games · 关卡设计分析练习",(0,b.jsx)("br",{}),"Strategy & Analysis"]}),(0,b.jsx)("a",{href:"#",className:"agm-read-btn",children:"查看完整分析  "})]})]})]})}a.s(["default",()=>f])}];

//# sourceMappingURL=src_app_articles_article-detail-games_page_tsx_4f53fea9._.js.map