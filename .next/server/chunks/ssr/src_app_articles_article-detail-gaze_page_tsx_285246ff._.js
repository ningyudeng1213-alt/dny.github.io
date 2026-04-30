module.exports=[11578,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .agz-body {
    --paper: #e8e6e2;
    --ink: #141210;
    --ink-soft: #2c2a26;
    --muted: #807a70;
    --rule: #c4beb4;
    --accent: #2a2a2a;
    --accent-hl: #7a3a2a;
    --cream: #dedad4;
    --dark: #0e0c0a;
    --dark2: #1a1714;
    --dark3: #221e1a;

    background: var(--paper);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    line-height: 1.8;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
  }

  .agz-grain {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .agz-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    background: linear-gradient(to bottom, var(--paper) 60%, transparent);
  }

  .agz-back {
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
  .agz-back:hover { color: var(--ink); }
  .agz-back::before { content: '←'; }

  .agz-hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 130px 48px 0;
  }

  .agz-hero-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 36px;
    opacity: 0;
    animation: agzFadeUp 0.7s ease forwards 0.1s;
  }

  .agz-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 4px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }
  .agz-tag.accent { border-color: var(--accent-hl); color: var(--accent-hl); }

  .agz-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(34px, 4.5vw, 62px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 20px;
    opacity: 0;
    animation: agzFadeUp 0.7s ease forwards 0.2s;
  }
  .agz-hero h1 em { font-style: italic; color: var(--accent-hl); }

  .agz-hero-sub {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 52px;
    max-width: 640px;
    opacity: 0;
    animation: agzFadeUp 0.7s ease forwards 0.3s;
  }

  .agz-hero-body {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 56px;
    align-items: start;
    margin-bottom: 72px;
    opacity: 0;
    animation: agzFadeUp 0.7s ease forwards 0.4s;
  }

  .agz-hero-abstract {
    border-left: 2px solid var(--accent-hl);
    padding-left: 28px;
  }
  .agz-hero-abstract .label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-hl);
    margin-bottom: 14px;
  }
  .agz-hero-abstract p {
    font-size: 16px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .agz-theory-card {
    background: var(--dark2);
    padding: 28px;
  }
  .agz-theory-card .card-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 20px;
  }
  .agz-theory-items { display: flex; flex-direction: column; gap: 0; }
  .agz-theory-item {
    padding: 11px 0;
    border-bottom: 1px solid #2a2620;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .agz-theory-item:last-child { border-bottom: none; }
  .agz-theory-name {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    font-style: italic;
    color: #c8c0b0;
    min-width: 80px;
    line-height: 1.4;
  }
  .agz-theory-concept {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.06em;
    color: var(--muted);
    line-height: 1.6;
    padding-top: 1px;
  }

  .agz-section-rule {
    max-width: 1100px;
    margin: 0 auto 64px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .agz-rule-line { flex: 1; height: 1px; background: var(--rule); }
  .agz-rule-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }

  .agz-chapters-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }
  .agz-sec-header {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 36px;
  }
  .agz-sec-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .agz-sec-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--ink);
  }

  .agz-chapters-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .agz-chapter-card {
    background: var(--cream);
    padding: 30px 24px;
    transition: background 0.2s;
  }
  .agz-chapter-card:hover { background: #d0cbc4; }

  .agz-ch-num {
    font-family: 'Playfair Display', serif;
    font-size: 44px;
    font-weight: 900;
    font-style: italic;
    color: var(--rule);
    line-height: 1;
    margin-bottom: 12px;
    transition: color 0.2s;
  }
  .agz-chapter-card:hover .agz-ch-num { color: var(--accent-hl); }

  .agz-ch-title {
    font-family: 'EB Garamond', serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .agz-ch-desc {
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.7;
    margin-bottom: 14px;
  }

  .agz-ch-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .agz-ch-tag {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    padding: 3px 8px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  .agz-quote-band {
    background: var(--dark);
    padding: 72px 48px;
    margin-bottom: 80px;
  }
  .agz-quote-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .agz-quote-band-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 40px;
  }
  .agz-quotes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }
  .agz-pull-q {
    border-left: 1px solid var(--accent-hl);
    padding-left: 24px;
  }
  .agz-pull-q blockquote {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-style: italic;
    color: #c0b8ac;
    line-height: 1.75;
    margin-bottom: 14px;
  }
  .agz-pull-q .attr {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.12em;
    color: var(--muted);
    text-transform: uppercase;
  }

  .agz-data-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }
  .agz-data-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2px;
  }
  .agz-data-cell {
    background: var(--dark3);
    padding: 28px 24px;
  }
  .agz-data-num {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 900;
    font-style: italic;
    color: var(--accent-hl);
    line-height: 1;
    margin-bottom: 8px;
  }
  .agz-data-desc {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.06em;
    color: var(--muted);
    line-height: 1.6;
  }

  .agz-note-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 48px;
  }
  .agz-note-left .n-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }
  .agz-note-left h3 {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.35;
  }
  .agz-note-right p {
    font-size: 16px;
    color: var(--ink-soft);
    line-height: 1.9;
  }

  .agz-page-footer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
  }
  .agz-footer-info {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
    line-height: 1.9;
  }
  .agz-read-btn {
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
  .agz-read-btn:hover { background: var(--accent-hl); }

  @keyframes agzFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .agz-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .agz-anim.agz-visible { opacity: 1; transform: none; }

  @media (max-width: 860px) {
    .agz-nav, .agz-hero, .agz-section-rule, .agz-chapters-section, .agz-data-section, .agz-note-section, .agz-page-footer {
      padding-left: 24px; padding-right: 24px;
    }
    .agz-hero-body, .agz-note-section { grid-template-columns: 1fr; gap: 32px; }
    .agz-chapters-grid, .agz-data-row, .agz-quotes-grid { grid-template-columns: 1fr; }
    .agz-quote-band { padding: 48px 24px; }
    .agz-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
  }
`;function f(){let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=new IntersectionObserver(a=>{a.forEach((a,b)=>{a.isIntersecting&&setTimeout(()=>a.target.classList.add("agz-visible"),60*b)})},{threshold:.08});document.querySelectorAll(".agz-anim").forEach(a=>b.observe(a));let c=a.current,d=null;return c&&(d=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(a.target.querySelectorAll(".agz-chapter-card").forEach((a,b)=>{a.style.opacity="0",a.style.transform="translateY(12px)",a.style.transition=`opacity 0.4s ease ${80*b}ms, transform 0.4s ease ${80*b}ms`,setTimeout(()=>{a.style.opacity="1",a.style.transform="none"},100+80*b)}),d?.unobserve(a.target))})},{threshold:.1})).observe(c),()=>{b.disconnect(),d?.disconnect()}},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:e}),(0,b.jsxs)("div",{className:"agz-body",children:[(0,b.jsx)("div",{className:"agz-grain"}),(0,b.jsx)("nav",{className:"agz-nav",children:(0,b.jsx)(d.default,{href:"/articles",className:"agz-back",children:"Article Works"})}),(0,b.jsxs)("header",{className:"agz-hero",children:[(0,b.jsxs)("div",{className:"agz-hero-meta",children:[(0,b.jsx)("span",{className:"agz-tag accent",children:"Academic Writing"}),(0,b.jsx)("span",{className:"agz-tag",children:"Film Theory"}),(0,b.jsx)("span",{className:"agz-tag",children:"Feminist Criticism"}),(0,b.jsx)("span",{className:"agz-tag",children:"Psychoanalysis"})]}),(0,b.jsxs)("h1",{children:["性与暴力的",(0,b.jsx)("em",{children:"合谋"})]}),(0,b.jsx)("p",{className:"agz-hero-sub",children:"当代电影中的剩余快感——国产商业电影中白日梦奇观策略研究"}),(0,b.jsxs)("div",{className:"agz-hero-body",children:[(0,b.jsxs)("div",{className:"agz-hero-abstract",children:[(0,b.jsx)("div",{className:"label",children:"摘要"}),(0,b.jsx)("p",{children:'近年来主流院线中以反映社会问题自居的犯罪题材电影， 在审查机制收紧的背景下，以性符号与性隐喻替代大尺度场面， 以女性受害者承担暴力叙事的奇观功能， 形成了"性与暴力合流"的新奇观模式。 本文以穆尔维视觉快感理论为基础，结合齐泽克剩余快感与幻象公式， 探讨这一机制如何在当今国产商业电影中以更隐蔽的方式贯彻父权制逻辑。'})]}),(0,b.jsxs)("div",{className:"agz-theory-card",children:[(0,b.jsx)("div",{className:"card-label",children:"理论框架"}),(0,b.jsxs)("div",{className:"agz-theory-items",children:[(0,b.jsxs)("div",{className:"agz-theory-item",children:[(0,b.jsx)("div",{className:"agz-theory-name",children:"劳拉·穆尔维"}),(0,b.jsxs)("div",{className:"agz-theory-concept",children:["视觉快感与叙事电影",(0,b.jsx)("br",{}),"凝视理论 · 窥淫癖"]})]}),(0,b.jsxs)("div",{className:"agz-theory-item",children:[(0,b.jsx)("div",{className:"agz-theory-name",children:"齐泽克"}),(0,b.jsxs)("div",{className:"agz-theory-concept",children:["剩余快感 · 幻象公式",(0,b.jsx)("br",{}),"穿越幻象"]})]}),(0,b.jsxs)("div",{className:"agz-theory-item",children:[(0,b.jsx)("div",{className:"agz-theory-name",children:"弗洛伊德"}),(0,b.jsxs)("div",{className:"agz-theory-concept",children:["快乐原则 · 阉割威胁",(0,b.jsx)("br",{}),"性本能与压抑"]})]}),(0,b.jsxs)("div",{className:"agz-theory-item",children:[(0,b.jsx)("div",{className:"agz-theory-name",children:"戴锦华"}),(0,b.jsxs)("div",{className:"agz-theory-concept",children:["中国电影中的女性",(0,b.jsx)("br",{}),"历史性倒退警示"]})]})]})]})]})]}),(0,b.jsxs)("div",{className:"agz-section-rule agz-anim",children:[(0,b.jsx)("div",{className:"agz-rule-line"}),(0,b.jsx)("div",{className:"agz-rule-label",children:"论文结构 · Three-Part Argument"}),(0,b.jsx)("div",{className:"agz-rule-line"})]}),(0,b.jsxs)("section",{className:"agz-chapters-section agz-anim",children:[(0,b.jsxs)("div",{className:"agz-sec-header",children:[(0,b.jsx)("span",{className:"agz-sec-label",children:"Argument Structure"}),(0,b.jsx)("span",{className:"agz-sec-title",children:"三章论述"})]}),(0,b.jsxs)("div",{className:"agz-chapters-grid",ref:a,children:[(0,b.jsxs)("div",{className:"agz-chapter-card",children:[(0,b.jsx)("div",{className:"agz-ch-num",children:"一"}),(0,b.jsx)("div",{className:"agz-ch-title",children:"假意消逝的身体奇观化"}),(0,b.jsx)("div",{className:"agz-ch-desc",children:"梳理国产电影从《十面埋伏》《色，戒》到当代的女性身体奇观化演变历程， 指出在审查收紧后，露骨镜头被性符号与性隐喻替代， 但父权凝视的内在逻辑从未消失。"}),(0,b.jsxs)("div",{className:"agz-ch-tags",children:[(0,b.jsx)("span",{className:"agz-ch-tag",children:"身体奇观"}),(0,b.jsx)("span",{className:"agz-ch-tag",children:"性符号化"}),(0,b.jsx)("span",{className:"agz-ch-tag",children:"穆尔维凝视"})]})]}),(0,b.jsxs)("div",{className:"agz-chapter-card",children:[(0,b.jsx)("div",{className:"agz-ch-num",children:"二"}),(0,b.jsx)("div",{className:"agz-ch-title",children:"性与暴力合谋的新策略"}),(0,b.jsx)("div",{className:"agz-ch-desc",children:"聚焦2023年犯罪题材电影中女性受害者的高频出现， 从叙述者立场（男性体验代言）与摄影机位置（以受害者躯体为奇观中心） 两个维度，解析性暴力场景如何成为新的视觉快感来源。"}),(0,b.jsxs)("div",{className:"agz-ch-tags",children:[(0,b.jsx)("span",{className:"agz-ch-tag",children:"性暴力叙事"}),(0,b.jsx)("span",{className:"agz-ch-tag",children:"女性失声"}),(0,b.jsx)("span",{className:"agz-ch-tag",children:"镜头语言"})]})]}),(0,b.jsxs)("div",{className:"agz-chapter-card",children:[(0,b.jsx)("div",{className:"agz-ch-num",children:"三"}),(0,b.jsx)("div",{className:"agz-ch-title",children:"身体与电影幻象的共生"}),(0,b.jsx)("div",{className:"agz-ch-desc",children:'引入齐泽克幻象公式与"剩余快感"概念， 分析被压抑的欲望如何以"白日梦奇观"的形式在意识层面得以实现； 并借穆尔维重读希区柯克，探讨电影媒介自反性召唤平等镜头语言的可能。'}),(0,b.jsxs)("div",{className:"agz-ch-tags",children:[(0,b.jsx)("span",{className:"agz-ch-tag",children:"剩余快感"}),(0,b.jsx)("span",{className:"agz-ch-tag",children:"银幕幻象"}),(0,b.jsx)("span",{className:"agz-ch-tag",children:"穿越幻象"})]})]})]})]}),(0,b.jsx)("section",{className:"agz-data-section agz-anim",children:(0,b.jsxs)("div",{className:"agz-data-row",children:[(0,b.jsxs)("div",{className:"agz-data-cell",children:[(0,b.jsx)("div",{className:"agz-data-num",children:"80%"}),(0,b.jsxs)("div",{className:"agz-data-desc",children:["2023年十部犯罪题材电影中",(0,b.jsx)("br",{}),"女性受害者同时承受性与暴力双重伤害的比例"]})]}),(0,b.jsxs)("div",{className:"agz-data-cell",children:[(0,b.jsx)("div",{className:"agz-data-num",children:"8/10"}),(0,b.jsxs)("div",{className:"agz-data-desc",children:["2023年主流犯罪题材电影中",(0,b.jsx)("br",{}),"以女性受害者开展叙事的数量"]})]}),(0,b.jsxs)("div",{className:"agz-data-cell",children:[(0,b.jsx)("div",{className:"agz-data-num",children:"4"}),(0,b.jsxs)("div",{className:"agz-data-desc",children:["核心理论资源",(0,b.jsx)("br",{}),"穆尔维 · 齐泽克 · 弗洛伊德 · 戴锦华"]})]})]})}),(0,b.jsx)("section",{className:"agz-quote-band",children:(0,b.jsxs)("div",{className:"agz-quote-inner",children:[(0,b.jsx)("div",{className:"agz-quote-band-label",children:"核心引文 · Key Citations"}),(0,b.jsxs)("div",{className:"agz-quotes-grid",children:[(0,b.jsxs)("div",{className:"agz-pull-q",children:[(0,b.jsx)("blockquote",{children:"在世俗神话及大众传播媒介中，形形色色关于女性的侵犯性、歧视性的行为和话语 开始以公然的、或隐晦的形式呈现出来。而可悲的是，这一关于女性的历史性倒退行为， 在相当程度上得到女性的默许、甚或配合。"}),(0,b.jsx)("div",{className:"attr",children:"戴锦华 · 《不可见的女性》· 1994"})]}),(0,b.jsxs)("div",{className:"agz-pull-q",children:[(0,b.jsx)("blockquote",{children:"幻象为欲望固有的僵局提供了合理的解释：它建构出场景，在其中我们被剥夺的快感 集中在他者处，而正是他者偷走了人们的快感。"}),(0,b.jsx)("div",{className:"attr",children:"齐泽克 · The Plague of Fantasies"})]})]})]})}),(0,b.jsxs)("section",{className:"agz-note-section agz-anim",children:[(0,b.jsxs)("div",{className:"agz-note-left",children:[(0,b.jsx)("div",{className:"n-label",children:"关于这篇"}),(0,b.jsx)("h3",{children:"课程论文"})]}),(0,b.jsx)("div",{className:"agz-note-right",children:(0,b.jsx)("p",{children:"女性主义电影理论课程论文，以国产高票房商业电影为文本， 尝试在精神分析框架下解释性暴力场景在当代主流电影中频繁出现的内在机制。"})})]}),(0,b.jsx)("footer",{className:"agz-page-footer agz-anim",children:(0,b.jsxs)("div",{className:"agz-footer-info",children:["邓甯予 · 南开大学文艺学硕士",(0,b.jsx)("br",{}),"研究方向：大众文艺美学（网文、电影方向）",(0,b.jsx)("br",{}),"课程论文 · 女性主义电影理论"]})})]})]})}a.s(["default",()=>f])}];

//# sourceMappingURL=src_app_articles_article-detail-gaze_page_tsx_285246ff._.js.map