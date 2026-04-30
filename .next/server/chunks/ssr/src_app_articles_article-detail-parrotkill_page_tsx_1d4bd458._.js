module.exports=[38220,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d(){return(0,c.useEffect)(()=>{let a=new IntersectionObserver(a=>{a.forEach((a,b)=>{a.isIntersecting&&setTimeout(()=>a.target.classList.add("ap-visible"),70*b)})},{threshold:.08});return document.querySelectorAll(".ap-anim").forEach(b=>a.observe(b)),()=>a.disconnect()},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

        .ap-root *, .ap-root *::before, .ap-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ap-root {
          --paper: #e8ebe6;
          --ink: #141a12;
          --ink-soft: #2e3a2a;
          --muted: #7a8a72;
          --rule: #bdc9b4;
          --accent: #2d5c3a;
          --accent-light: #4e8a5e;
          --cream: #dde4d8;
          --dark: #111a0e;
          --dark2: #192016;
          --fog: #c8d4c2;
          background: var(--paper);
          color: var(--ink);
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 18px;
          line-height: 1.8;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .ap-root::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
        }

        .ap-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 48px;
          background: linear-gradient(to bottom, var(--paper) 60%, transparent);
        }

        .ap-back {
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
        .ap-back:hover { color: var(--ink); }
        .ap-back::before { content: '←'; font-size: 13px; }

        .ap-hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 130px 48px 0;
        }

        .ap-hero-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
          opacity: 0;
          animation: ap-fadeUp 0.7s ease forwards 0.1s;
        }

        .ap-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 4px 12px;
          border: 1px solid var(--rule);
          color: var(--muted);
        }
        .ap-tag.ap-accent { border-color: var(--accent); color: var(--accent); }
        .ap-tag.ap-neo {
          background: var(--accent);
          color: var(--paper);
          border-color: var(--accent);
        }

        .ap-hero-title-block {
          opacity: 0;
          animation: ap-fadeUp 0.7s ease forwards 0.2s;
          margin-bottom: 48px;
        }

        .ap-hero-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .ap-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 6vw, 82px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 16px;
        }
        .ap-hero h1 em { font-style: italic; color: var(--accent); }

        .ap-hero-subtitle {
          font-family: 'EB Garamond', serif;
          font-size: 20px;
          font-style: italic;
          color: var(--muted);
          border-left: 2px solid var(--rule);
          padding-left: 20px;
          max-width: 600px;
        }

        .ap-intro-row {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 56px;
          align-items: start;
          margin-bottom: 80px;
          opacity: 0;
          animation: ap-fadeUp 0.7s ease forwards 0.35s;
        }

        .ap-intro-text .ap-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent-light);
          margin-bottom: 14px;
        }

        .ap-intro-text p {
          font-size: 17px;
          color: var(--ink-soft);
          line-height: 1.9;
        }

        .ap-traits-card {
          background: var(--dark2);
          padding: 28px;
        }

        .ap-traits-card .ap-card-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .ap-trait-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ap-trait-item {
          padding: 12px 0;
          border-bottom: 1px solid #2a3525;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .ap-trait-item:last-child { border-bottom: none; }

        .ap-trait-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-light);
          flex-shrink: 0;
          margin-top: 7px;
        }

        .ap-trait-text {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: #8aaa80;
          line-height: 1.6;
        }

        .ap-section-rule {
          max-width: 1100px;
          margin: 0 auto 64px;
          padding: 0 48px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .ap-section-rule .ap-rule-line { flex: 1; height: 1px; background: var(--rule); }
        .ap-section-rule .ap-rule-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          white-space: nowrap;
        }

        .ap-term-section {
          background: var(--dark);
          padding: 72px 48px;
          margin-bottom: 80px;
        }

        .ap-term-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .ap-term-left .ap-term-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .ap-term-word {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 8vw, 100px);
          font-weight: 900;
          font-style: italic;
          color: var(--paper);
          line-height: 1;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .ap-term-word span { color: var(--accent-light); }

        .ap-term-pinyin {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .ap-term-def {
          font-family: 'EB Garamond', serif;
          font-size: 18px;
          font-style: italic;
          color: #c8d4c0;
          line-height: 1.8;
          margin-bottom: 24px;
          border-left: 2px solid var(--accent);
          padding-left: 20px;
        }

        .ap-term-context {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--muted);
          line-height: 1.7;
        }

        .ap-essay-section {
          max-width: 780px;
          margin: 0 auto 80px;
          padding: 0 48px;
        }

        .ap-essay-section .ap-sec-header {
          display: flex;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 40px;
        }
        .ap-essay-section .ap-sec-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .ap-essay-section .ap-sec-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--ink);
        }

        .ap-excerpt {
          margin-bottom: 48px;
        }

        .ap-excerpt-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-light);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ap-excerpt-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }

        .ap-excerpt-body {
          font-family: 'EB Garamond', serif;
          font-size: 19px;
          color: var(--ink);
          line-height: 1.9;
          position: relative;
        }

        .ap-excerpt-body mark {
          background: none;
          color: var(--accent);
          font-style: italic;
          font-weight: 500;
        }

        .ap-pull-line {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2.5vw, 28px);
          font-style: italic;
          font-weight: 700;
          color: var(--ink);
          border-left: 3px solid var(--accent);
          padding: 16px 0 16px 24px;
          margin: 32px 0;
          line-height: 1.45;
        }

        .ap-barrage-block {
          background: var(--cream);
          padding: 24px 28px;
          margin: 32px 0;
          border-top: 1px solid var(--rule);
        }

        .ap-barrage-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }

        .ap-barrage-quotes {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ap-barrage-q {
          font-family: 'EB Garamond', serif;
          font-size: 16px;
          font-style: italic;
          color: var(--ink-soft);
          padding-left: 16px;
        }

        .ap-op-note {
          max-width: 1100px;
          margin: 0 auto 80px;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 48px;
          align-items: start;
        }

        .ap-op-note .ap-op-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }

        .ap-op-note h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.35;
        }

        .ap-op-note-right p {
          font-size: 17px;
          color: var(--ink-soft);
          line-height: 1.9;
          margin-bottom: 16px;
        }
        .ap-op-note-right p:last-of-type { margin-bottom: 0; }

        .ap-op-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }
        .ap-op-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border: 1px solid var(--rule);
          color: var(--muted);
        }

        .ap-page-footer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 48px 64px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          border-top: 1px solid var(--rule);
        }

        .ap-read-btn {
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
        .ap-read-btn:hover { background: var(--accent); }

        @keyframes ap-fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ap-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .ap-anim.ap-visible { opacity: 1; transform: none; }

        @media (max-width: 860px) {
          .ap-nav, .ap-hero, .ap-section-rule, .ap-essay-section, .ap-op-note, .ap-page-footer {
            padding-left: 24px; padding-right: 24px;
          }
          .ap-intro-row, .ap-term-inner, .ap-op-note { grid-template-columns: 1fr; gap: 32px; }
          .ap-term-section { padding: 48px 24px; }
          .ap-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
          .ap-essay-section { max-width: 100%; }
        }
      `}),(0,b.jsxs)("div",{className:"ap-root",children:[(0,b.jsx)("nav",{className:"ap-nav",children:(0,b.jsx)("a",{href:"#",className:"ap-back",onClick:a=>{a.preventDefault(),window.location.href="/articles"},children:"Article Works"})}),(0,b.jsxs)("header",{className:"ap-hero",children:[(0,b.jsxs)("div",{className:"ap-hero-meta",children:[(0,b.jsx)("span",{className:"ap-tag ap-accent",children:"Film Review"}),(0,b.jsx)("span",{className:"ap-tag ap-neo",children:"自造词 · 爽缩力"}),(0,b.jsx)("span",{className:"ap-tag",children:"个人影评"}),(0,b.jsx)("span",{className:"ap-tag",children:"情感异化"})]}),(0,b.jsxs)("div",{className:"ap-hero-title-block",children:[(0,b.jsx)("div",{className:"ap-hero-eyebrow",children:"Critical Essay · 2024"}),(0,b.jsxs)("h1",{children:["鹦鹉杀的",(0,b.jsx)("br",{}),'"',(0,b.jsx)("em",{children:"爽缩力"}),'"']}),(0,b.jsx)("p",{className:"ap-hero-subtitle",children:"不谈教育，亵渎爱情？"})]}),(0,b.jsxs)("div",{className:"ap-intro-row",children:[(0,b.jsxs)("div",{className:"ap-intro-text",children:[(0,b.jsx)("div",{className:"ap-label",children:"写作说明 · Writer's Note"}),(0,b.jsx)("p",{children:'这篇影评写于《鹦鹉杀》上映后，彼时舆论场将它简单归类为"反诈教育片"或"文艺片"两极。 我想绕开这两种标签，从"爽缩力"这个我自己造的词出发，解释为什么观众在结局时 产生的不是爽感、而是某种说不清的收缩——那背后是对"弱者姿态"的集体拒斥， 也是现代人对真实情感的渴望与恐惧同时存在的矛盾心理。'})]}),(0,b.jsxs)("div",{className:"ap-traits-card",children:[(0,b.jsx)("div",{className:"ap-card-label",children:"文字风格特征"}),(0,b.jsxs)("div",{className:"ap-trait-list",children:[(0,b.jsxs)("div",{className:"ap-trait-item",children:[(0,b.jsx)("div",{className:"ap-trait-dot"}),(0,b.jsxs)("div",{className:"ap-trait-text",children:["自造词汇，概念先行",(0,b.jsx)("br",{}),'"爽缩力"等新词提炼现象']})]}),(0,b.jsxs)("div",{className:"ap-trait-item",children:[(0,b.jsx)("div",{className:"ap-trait-dot"}),(0,b.jsxs)("div",{className:"ap-trait-text",children:["弹幕即田野，社媒即文本",(0,b.jsx)("br",{}),"将网络声音纳入分析素材"]})]}),(0,b.jsxs)("div",{className:"ap-trait-item",children:[(0,b.jsx)("div",{className:"ap-trait-dot"}),(0,b.jsxs)("div",{className:"ap-trait-text",children:["跨文本联想密度高",(0,b.jsx)("br",{}),"LaLa Land · 简嫃 · 工具理性"]})]}),(0,b.jsxs)("div",{className:"ap-trait-item",children:[(0,b.jsx)("div",{className:"ap-trait-dot"}),(0,b.jsxs)("div",{className:"ap-trait-text",children:["情绪与论点并行推进",(0,b.jsx)("br",{}),"感性叙述不失分析锐度"]})]})]})]})]})]}),(0,b.jsx)("section",{className:"ap-term-section",children:(0,b.jsxs)("div",{className:"ap-term-inner",children:[(0,b.jsxs)("div",{className:"ap-term-left",children:[(0,b.jsx)("div",{className:"ap-term-label",children:"自造核心概念 · Coined Term"}),(0,b.jsxs)("div",{className:"ap-term-word",children:[(0,b.jsx)("span",{children:"爽"}),"缩力"]}),(0,b.jsx)("div",{className:"ap-term-pinyin",children:"shuǎng suō lì"})]}),(0,b.jsxs)("div",{className:"ap-term-right",children:[(0,b.jsx)("div",{className:"ap-term-def",children:'一种既无法产生爽感、又令观众内心收缩的特殊情绪体验—— 源于对主角"以身为饵、以爱为营"的认同与拒斥同时发生的矛盾张力。'}),(0,b.jsx)("div",{className:"ap-term-context",children:'道理易懂，高端的猎手往往以猎物的形式出现是剧情片的决胜法宝， 观众真正拒绝的是周冉的一次次以身为饵、以爱为营， 这背后难以忽视的脆弱与孤注一掷成功产生了"爽缩力"， 因为骗子就是骗子，大部分人都不会再赌一次。'})]})]})}),(0,b.jsxs)("div",{className:"ap-section-rule ap-anim",children:[(0,b.jsx)("div",{className:"ap-rule-line"}),(0,b.jsx)("div",{className:"ap-rule-label",children:"原文节选 · Selected Excerpts"}),(0,b.jsx)("div",{className:"ap-rule-line"})]}),(0,b.jsxs)("section",{className:"ap-essay-section",children:[(0,b.jsxs)("div",{className:"ap-sec-header",children:[(0,b.jsx)("span",{className:"ap-sec-label",children:"Original Writing"}),(0,b.jsx)("span",{className:"ap-sec-title",children:"原文赏析"})]}),(0,b.jsxs)("div",{className:"ap-excerpt ap-anim",children:[(0,b.jsx)("div",{className:"ap-excerpt-label",children:"开篇定调"}),(0,b.jsxs)("div",{className:"ap-excerpt-body",children:['《鹦鹉杀》展现的"tainted love"让观众大呼神经，大雾海岛、六角恐龙与永远见不到的菩萨兼具的文艺片性质让它背负的骂名并不算冤。而作为教育片，部分观众对影片中的杀猪盘顿感失真、早已愤然离席，剩下的还沉浸于与《燃冬》比较回味的一头雾水中，',(0,b.jsx)("mark",{children:"周冉就已经完成了自己的复仇。"})]})]}),(0,b.jsxs)("div",{className:"ap-excerpt ap-anim",children:[(0,b.jsx)("div",{className:"ap-excerpt-label",children:"情感异化分析"}),(0,b.jsxs)("div",{className:"ap-excerpt-body",children:['在"只有骗子才会关心和爱你"的社会中，情感的异化是被捕捉到的矛盾。',(0,b.jsxs)("div",{className:"ap-barrage-block",children:[(0,b.jsx)("div",{className:"ap-barrage-label",children:"弹幕实录 · 社媒声音作为研究素材"}),(0,b.jsxs)("div",{className:"ap-barrage-quotes",children:[(0,b.jsx)("div",{className:"ap-barrage-q",children:'"骗我的感情可以，骗我的钱不行"'}),(0,b.jsx)("div",{className:"ap-barrage-q",children:'"难怪我的男友不做这些"'})]})]}),"而周冉静默着，",(0,b.jsx)("mark",{children:"迟钝代替了愤怒，是工具理性时代发出的间或喘息。"}),'借着林致富酒意的冠冕堂皇，导演点出"只要付出爱，就可能被骗"的社会行动箴言。爱是本能，更是武器。']})]}),(0,b.jsxs)("div",{className:"ap-excerpt ap-anim",children:[(0,b.jsx)("div",{className:"ap-excerpt-label",children:"核心论点"}),(0,b.jsxs)("div",{className:"ap-excerpt-body",children:[(0,b.jsx)("span",{className:"ap-pull-line",children:'"恐弱"的深层逻辑是"慕强"，这般"厌女"的背后是"厌己"。'}),"我们难以接受周冉的自杀式赌博，是对弱者和受伤的生命姿态的真正拒斥。在我看来，周冉兜兜转转，却如简嫃所言，",(0,b.jsx)("mark",{children:'"光荣地受伤，然后勇敢地痊愈自己"。'})]})]}),(0,b.jsxs)("div",{className:"ap-excerpt ap-anim",children:[(0,b.jsx)("div",{className:"ap-excerpt-label",children:"结尾"}),(0,b.jsxs)("div",{className:"ap-excerpt-body",children:["林致富在大雾中渎神，下一秒差点摔下山崖，他唱着明白爱情，却又从来不懂。",(0,b.jsx)("mark",{children:"因为只有真正的相信，才有真正的爱在这一刻诞生。"})]})]})]}),(0,b.jsxs)("section",{className:"ap-op-note ap-anim",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"ap-op-label",children:"内容运营视角"}),(0,b.jsx)("h3",{children:"用造词能力定义内容边界"})]}),(0,b.jsxs)("div",{className:"ap-op-note-right",children:[(0,b.jsx)("p",{children:'"爽缩力"不是现成词汇，是我从观影体验出发，试图用一个词精确命名一种集体情绪的尝试。 这种"造词-定义-论证"的写作方式，在内容运营中对应的是： 发现一种尚未被命名的用户情绪，并把它说清楚——这是内容创作中最核心的选题能力之一。'}),(0,b.jsx)("p",{children:"把弹幕作为田野材料，把社媒声音纳入文本分析，是我写评论时的一贯习惯。 它让文章同时具备学术分析的深度和内容运营所需的受众感知—— 知道大家在说什么，才能知道大家真正在意什么。"}),(0,b.jsxs)("div",{className:"ap-op-tags",children:[(0,b.jsx)("span",{className:"ap-op-tag",children:"新词创造"}),(0,b.jsx)("span",{className:"ap-op-tag",children:"情绪命名能力"}),(0,b.jsx)("span",{className:"ap-op-tag",children:"社媒内容分析"}),(0,b.jsx)("span",{className:"ap-op-tag",children:"受众心理洞察"}),(0,b.jsx)("span",{className:"ap-op-tag",children:"跨文本写作"})]})]})]}),(0,b.jsx)("footer",{className:"ap-page-footer ap-anim"})]})]})}a.s(["default",()=>d])}];

//# sourceMappingURL=src_app_articles_article-detail-parrotkill_page_tsx_1d4bd458._.js.map