module.exports=[58012,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d(){return(0,c.useEffect)(()=>{let a=new IntersectionObserver(a=>{a.forEach((a,b)=>{a.isIntersecting&&setTimeout(()=>a.target.classList.add("ar-visible"),60*b)})},{threshold:.08});return document.querySelectorAll(".ar-anim").forEach(b=>a.observe(b)),()=>a.disconnect()},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("div",{className:"ar-root",children:[(0,b.jsx)("nav",{className:"ar-nav",children:(0,b.jsx)("a",{href:"#",className:"ar-back",onClick:a=>{a.preventDefault(),window.location.href="/articles"},children:"Article Works"})}),(0,b.jsxs)("header",{className:"ar-hero",children:[(0,b.jsxs)("div",{className:"ar-hero-meta",children:[(0,b.jsx)("span",{className:"ar-tag ar-accent",children:"Film Review"}),(0,b.jsx)("span",{className:"ar-tag",children:"短评"}),(0,b.jsx)("span",{className:"ar-tag",children:"Animation"}),(0,b.jsx)("span",{className:"ar-tag",children:"现代寓言"})]}),(0,b.jsx)("div",{className:"ar-hero-eyebrow",children:"Short Essay · 2024"}),(0,b.jsxs)("h1",{children:["我只能",(0,b.jsx)("em",{children:"离开"})]}),(0,b.jsx)("p",{className:"ar-hero-sub",children:"《机器人之梦》的现代寓言"}),(0,b.jsxs)("div",{className:"ar-ref-row",children:[(0,b.jsxs)("div",{className:"ar-ref-item",children:[(0,b.jsx)("div",{className:"ar-ref-film",children:"Her · 2013"}),(0,b.jsx)("div",{className:"ar-ref-link",children:"人工智能与情感的深刻命题"})]}),(0,b.jsxs)("div",{className:"ar-ref-item",children:[(0,b.jsx)("div",{className:"ar-ref-film",children:"La La Land · 2016"}),(0,b.jsx)("div",{className:"ar-ref-link",children:"蒙太奇幻象与错过的余生"})]}),(0,b.jsxs)("div",{className:"ar-ref-item",children:[(0,b.jsx)("div",{className:"ar-ref-film",children:"后来的我们 · 2018"}),(0,b.jsx)("div",{className:"ar-ref-link",children:"烟火与站台书写的离散"})]}),(0,b.jsxs)("div",{className:"ar-ref-item",children:[(0,b.jsx)("div",{className:"ar-ref-film",children:"Robot Dreams · 2023"}),(0,b.jsx)("div",{className:"ar-ref-link",children:"第一次真正选择了分离本身"})]})]})]}),(0,b.jsxs)("section",{className:"ar-essay-section",children:[(0,b.jsx)("div",{className:"ar-essay-label",children:"原文全文"}),(0,b.jsxs)("p",{className:"ar-essay-para",children:['当机器人领啃着微波披萨的狗编织起"人味儿"的情感纽带，恍若《Her》中深刻命题重现； 当机器人在楼顶遥望小狗，蒙太奇的幻象召唤着《爱乐之城》里的塞巴斯汀； 当金属与机油演绎离散，',(0,b.jsx)("mark",{children:"烟火与站台书写着《后来的我们》错过。"})]}),(0,b.jsxs)("p",{className:"ar-essay-para",children:["机器人在锈蚀与重启中参透存在的本质，梦想之城仅对人类有效， 不必被世俗人情推撵的动物世界仍以无言描绘遗憾， 人们方知即使没有梦想与世俗，相遇与离散是如幻梦般超脱。 没有 Deeptalk，没有承诺与争吵，",(0,b.jsx)("mark",{children:"符号的减少抵抗异化，还原了意义的在场"}),"—— 亲密关系以任何形式即刻发生。机器人的重重梦境揭示了亲密关系的本质： 怀疑、占有和陪伴，最后都不及你的存在，在分离时刻彰显我存在澄明。"]}),(0,b.jsx)("div",{className:"ar-key-line",children:'"选择分离"成为一种现代寓言，叩问着个体原子化的社会里， 究竟还有多少空间用来存放温热的感情。'}),(0,b.jsxs)("p",{className:"ar-essay-para",children:['我们曾为无数不得已的 Bad Ending 共情流泪，机器人与小狗跨越了消费社会的需求关系， 却也第一次真正选择了"分离"本身。即使我们拥有的，',(0,b.jsx)("mark",{children:"只是共度一首歌的时间。"})]})]}),(0,b.jsx)("section",{className:"ar-concept-band",children:(0,b.jsxs)("div",{className:"ar-concept-inner",children:[(0,b.jsxs)("div",{className:"ar-concept-left",children:[(0,b.jsx)("div",{className:"ar-c-label",children:"核心命题"}),(0,b.jsxs)("div",{className:"ar-concept-word",children:["选择",(0,b.jsx)("span",{children:"分离"})]})]}),(0,b.jsx)("div",{className:"ar-concept-right",children:(0,b.jsx)("blockquote",{children:'不同于以往所有"不得已的 Bad Ending"——这部电影里， 分离不是命运的捉弄，而是主动的选择。 这个细小的转变，是对个体原子化时代亲密关系的最诚实凝视。'})})]})}),(0,b.jsxs)("section",{className:"ar-traits-section ar-anim",children:[(0,b.jsx)("div",{className:"ar-traits-left",children:(0,b.jsx)("div",{className:"ar-t-label",children:"关于这篇"})}),(0,b.jsx)("div",{className:"ar-traits-right",children:(0,b.jsx)("p",{children:"课程作业，限300字以内。选择短评这个形式，是因为想练习用最少的字同时说清楚情绪和判断。"})})]}),(0,b.jsx)("footer",{className:"ar-page-footer ar-anim",children:(0,b.jsx)("a",{href:"#",className:"ar-read-btn",children:"查看原文  "})})]})]})}a.s(["default",()=>d])}];

//# sourceMappingURL=src_app_articles_article-detail-robotdreams_page_tsx_d71919a2._.js.map