(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/articles/article-detail-parrotkill/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleDetailParrotkill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable react/no-unescaped-entities */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ArticleDetailParrotkill() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleDetailParrotkill.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ArticleDetailParrotkill.useEffect": (entries)=>{
                    entries.forEach({
                        "ArticleDetailParrotkill.useEffect": (e, i)=>{
                            if (e.isIntersecting) {
                                setTimeout({
                                    "ArticleDetailParrotkill.useEffect": ()=>e.target.classList.add('ap-visible')
                                }["ArticleDetailParrotkill.useEffect"], i * 70);
                            }
                        }
                    }["ArticleDetailParrotkill.useEffect"]);
                }
            }["ArticleDetailParrotkill.useEffect"], {
                threshold: 0.08
            });
            document.querySelectorAll('.ap-anim').forEach({
                "ArticleDetailParrotkill.useEffect": (el)=>observer.observe(el)
            }["ArticleDetailParrotkill.useEffect"]);
            return ({
                "ArticleDetailParrotkill.useEffect": ()=>observer.disconnect()
            })["ArticleDetailParrotkill.useEffect"];
        }
    }["ArticleDetailParrotkill.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ap-root",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "ap-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "ap-back",
                            onClick: (e)=>{
                                e.preventDefault();
                                const base = ("TURBOPACK compile-time value", "/dny.github.io") || '';
                                window.location.href = base + '/articles';
                            },
                            children: "Article Works"
                        }, void 0, false, {
                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "ap-hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-hero-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ap-tag ap-accent",
                                        children: "Film Review"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ap-tag ap-neo",
                                        children: "自造词 · 爽缩力"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ap-tag",
                                        children: "个人影评"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ap-tag",
                                        children: "情感异化"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-hero-title-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-hero-eyebrow",
                                        children: "Critical Essay · 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: [
                                            "鹦鹉杀的",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 21
                                            }, this),
                                            '"',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "爽缩力"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 28
                                            }, this),
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "ap-hero-subtitle",
                                        children: "不谈教育，亵渎爱情？"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-intro-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-intro-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ap-label",
                                                children: "写作说明 · Writer's Note"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 533,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '这篇影评写于《鹦鹉杀》上映后，彼时舆论场将它简单归类为"反诈教育片"或"文艺片"两极。 我想绕开这两种标签，从"爽缩力"这个我自己造的词出发，解释为什么观众在结局时 产生的不是爽感、而是某种说不清的收缩——那背后是对"弱者姿态"的集体拒斥， 也是现代人对真实情感的渴望与恐惧同时存在的矛盾心理。'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-traits-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ap-card-label",
                                                children: "文字风格特征"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ap-trait-list",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ap-trait-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-text",
                                                                children: [
                                                                    "自造词汇，概念先行",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 59
                                                                    }, this),
                                                                    '"爽缩力"等新词提炼现象'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ap-trait-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-text",
                                                                children: [
                                                                    "弹幕即田野，社媒即文本",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                        lineNumber: 551,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    "将网络声音纳入分析素材"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ap-trait-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-text",
                                                                children: [
                                                                    "跨文本联想密度高",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 58
                                                                    }, this),
                                                                    "LaLa Land · 简嫃 · 工具理性"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ap-trait-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 558,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-trait-text",
                                                                children: [
                                                                    "情绪与论点并行推进",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 59
                                                                    }, this),
                                                                    "感性叙述不失分析锐度"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                        lineNumber: 517,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ap-term-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ap-term-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ap-term-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ap-term-label",
                                            children: "自造核心概念 · Coined Term"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                            lineNumber: 569,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ap-term-word",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "爽"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 45
                                                }, this),
                                                "缩力"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                            lineNumber: 570,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ap-term-pinyin",
                                            children: "shuǎng suō lì"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                    lineNumber: 568,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ap-term-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ap-term-def",
                                            children: '一种既无法产生爽感、又令观众内心收缩的特殊情绪体验—— 源于对主角"以身为饵、以爱为营"的认同与拒斥同时发生的矛盾张力。'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ap-term-context",
                                            children: '道理易懂，高端的猎手往往以猎物的形式出现是剧情片的决胜法宝， 观众真正拒绝的是周冉的一次次以身为饵、以爱为营， 这背后难以忽视的脆弱与孤注一掷成功产生了"爽缩力"， 因为骗子就是骗子，大部分人都不会再赌一次。'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                            lineNumber: 567,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ap-section-rule ap-anim",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-rule-line"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-rule-label",
                                children: "原文节选 · Selected Excerpts"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 590,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-rule-line"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 591,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ap-essay-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-sec-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ap-sec-label",
                                        children: "Original Writing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ap-sec-title",
                                        children: "原文赏析"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 597,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-excerpt ap-anim",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-label",
                                        children: "开篇定调"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-body",
                                        children: [
                                            '《鹦鹉杀》展现的"tainted love"让观众大呼神经，大雾海岛、六角恐龙与永远见不到的菩萨兼具的文艺片性质让它背负的骂名并不算冤。而作为教育片，部分观众对影片中的杀猪盘顿感失真、早已愤然离席，剩下的还沉浸于与《燃冬》比较回味的一头雾水中，',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "周冉就已经完成了自己的复仇。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 137
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 602,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-excerpt ap-anim",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-label",
                                        children: "情感异化分析"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 608,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-body",
                                        children: [
                                            '在"只有骗子才会关心和爱你"的社会中，情感的异化是被捕捉到的矛盾。',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ap-barrage-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ap-barrage-label",
                                                        children: "弹幕实录 · 社媒声音作为研究素材"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ap-barrage-quotes",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-barrage-q",
                                                                children: '"骗我的感情可以，骗我的钱不行"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ap-barrage-q",
                                                                children: '"难怪我的男友不做这些"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                                lineNumber: 615,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 15
                                            }, this),
                                            "而周冉静默着，",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "迟钝代替了愤怒，是工具理性时代发出的间或喘息。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 22
                                            }, this),
                                            '借着林致富酒意的冠冕堂皇，导演点出"只要付出爱，就可能被骗"的社会行动箴言。爱是本能，更是武器。'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 609,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-excerpt ap-anim",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-label",
                                        children: "核心论点"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ap-pull-line",
                                                children: '"恐弱"的深层逻辑是"慕强"，这般"厌女"的背后是"厌己"。'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 15
                                            }, this),
                                            "我们难以接受周冉的自杀式赌博，是对弱者和受伤的生命姿态的真正拒斥。在我看来，周冉兜兜转转，却如简嫃所言，",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: '"光荣地受伤，然后勇敢地痊愈自己"。'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 626,
                                                columnNumber: 67
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 624,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-excerpt ap-anim",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-label",
                                        children: "结尾"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-excerpt-body",
                                        children: [
                                            "林致富在大雾中渎神，下一秒差点摔下山崖，他唱着明白爱情，却又从来不懂。",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                                                children: "因为只有真正的相信，才有真正的爱在这一刻诞生。"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 633,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 630,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ap-op-note ap-anim",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-op-label",
                                        children: "内容运营视角"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "用造词能力定义内容边界"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 641,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 639,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ap-op-note-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: '"爽缩力"不是现成词汇，是我从观影体验出发，试图用一个词精确命名一种集体情绪的尝试。 这种"造词-定义-论证"的写作方式，在内容运营中对应的是： 发现一种尚未被命名的用户情绪，并把它说清楚——这是内容创作中最核心的选题能力之一。'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "把弹幕作为田野材料，把社媒声音纳入文本分析，是我写评论时的一贯习惯。 它让文章同时具备学术分析的深度和内容运营所需的受众感知—— 知道大家在说什么，才能知道大家真正在意什么。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ap-op-tags",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ap-op-tag",
                                                children: "新词创造"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ap-op-tag",
                                                children: "情绪命名能力"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 656,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ap-op-tag",
                                                children: "社媒内容分析"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ap-op-tag",
                                                children: "受众心理洞察"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 658,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ap-op-tag",
                                                children: "跨文本写作"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                                lineNumber: 659,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                        lineNumber: 654,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "ap-page-footer ap-anim",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "ap-read-btn",
                            children: "阅读全文  "
                        }, void 0, false, {
                            fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/articles/article-detail-parrotkill/page.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ArticleDetailParrotkill, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ArticleDetailParrotkill;
var _c;
__turbopack_context__.k.register(_c, "ArticleDetailParrotkill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_articles_article-detail-parrotkill_page_tsx_98591b39._.js.map