(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/articles/article-detail/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable react/no-unescaped-entities */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  .ad-body {
    --paper: #edeae2;
    --ink: #1a1714;
    --ink-soft: #3d3831;
    --muted: #8a8178;
    --rule: #ccc7bc;
    --accent: #8b3a2a;
    --accent-warm: #b5703a;
    --cream: #e5e0d5;

    background: var(--paper);
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 18px;
    line-height: 1.8;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
  }

  /* Grain overlay */
  .ad-grain {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  /* NAV */
  .ad-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 48px;
    background: linear-gradient(to bottom, #edeae2 60%, transparent);
  }

  .ad-back {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s;
  }
  .ad-back:hover { color: var(--ink); }
  .ad-back::before { content: '←'; font-size: 13px; }

  /* HERO */
  .ad-hero {
    padding: 130px 48px 0;
    max-width: 1100px;
    margin: 0 auto;
  }

  .ad-hero-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 36px;
    opacity: 0;
    animation: adFadeUp 0.7s ease forwards 0.1s;
  }

  .ad-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4px 12px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }
  .ad-tag.accent {
    border-color: var(--accent);
    color: var(--accent);
  }

  .ad-hero-date {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
  }

  .ad-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(42px, 5.5vw, 76px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 20px;
    opacity: 0;
    animation: adFadeUp 0.7s ease forwards 0.2s;
  }

  .ad-hero h1 em {
    font-style: italic;
    color: var(--accent);
  }

  .ad-hero-sub {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--muted);
    margin-bottom: 48px;
    max-width: 680px;
    opacity: 0;
    animation: adFadeUp 0.7s ease forwards 0.3s;
  }

  .ad-hero-body {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 64px;
    align-items: start;
    margin-bottom: 72px;
    opacity: 0;
    animation: adFadeUp 0.7s ease forwards 0.4s;
  }

  .ad-hero-abstract {
    border-left: 2px solid var(--accent);
    padding-left: 28px;
  }

  .ad-hero-abstract .label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-warm);
    margin-bottom: 16px;
  }

  .ad-hero-abstract p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.85;
  }

  .ad-content-angle {
    background: var(--cream);
    padding: 28px;
    border-top: 2px solid var(--ink);
  }

  .ad-content-angle .angle-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 20px;
  }

  .ad-angle-items {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .ad-angle-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 14px;
    color: var(--ink-soft);
    line-height: 1.5;
  }

  .ad-angle-item::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    margin-top: 7px;
  }

  /* DIVIDER */
  .ad-section-rule {
    max-width: 1100px;
    margin: 0 auto 72px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    gap: 20px;
    opacity: 0;
    animation: adFadeUp 0.7s ease forwards 0.5s;
  }

  .ad-rule-line { flex: 1; height: 1px; background: var(--rule); }
  .ad-rule-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    white-space: nowrap;
  }

  /* ARGUMENT STRUCTURE */
  .ad-structure-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
  }

  .ad-sec-header {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-bottom: 40px;
  }

  .ad-sec-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .ad-sec-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: var(--ink);
  }

  .ad-chapters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .ad-chapter-card {
    background: var(--cream);
    padding: 24px 22px;
    position: relative;
    transition: background 0.2s;
    cursor: default;
  }

  .ad-chapter-card:hover { background: #ddd9cf; }

  .ad-chapter-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 900;
    font-style: italic;
    color: var(--rule);
    line-height: 1;
    margin-bottom: 10px;
    transition: color 0.2s;
  }

  .ad-chapter-card:hover .ad-chapter-num { color: var(--accent); }

  .ad-chapter-title {
    font-family: 'EB Garamond', serif;
    font-size: 15px;
    font-weight: 500;
    color: var(--ink);
    line-height: 1.4;
    margin-bottom: 8px;
  }

  .ad-chapter-brief {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--muted);
    line-height: 1.6;
    letter-spacing: 0.02em;
  }

  /* PULL QUOTES */
  .ad-quotes-section {
    background: var(--ink);
    padding: 80px 48px;
    margin: 0 0 80px;
  }

  .ad-quotes-inner { max-width: 1100px; margin: 0 auto; }

  .ad-quotes-header {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 48px;
  }

  .ad-quotes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  .ad-pull-quote {
    border-left: 1px solid var(--accent);
    padding-left: 24px;
  }

  .ad-pull-quote blockquote {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-style: italic;
    color: var(--paper);
    line-height: 1.65;
    margin-bottom: 16px;
  }

  .ad-pull-quote .attribution {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    color: var(--muted);
    text-transform: uppercase;
  }

  /* METHODOLOGY */
  .ad-method-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 48px;
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 64px;
    align-items: start;
  }

  .ad-method-left .method-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
  }

  .ad-method-left h3 {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.3;
  }

  .ad-method-right p {
    font-size: 17px;
    color: var(--ink-soft);
    line-height: 1.9;
    margin-bottom: 20px;
  }

  .ad-method-right p:last-child { margin-bottom: 0; }

  .ad-method-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
  }

  .ad-method-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    padding: 6px 14px;
    border: 1px solid var(--rule);
    color: var(--muted);
  }

  /* FOOTER */
  .ad-page-footer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 48px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
  }

  .ad-footer-info {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
    line-height: 1.8;
  }

  .ad-read-btn {
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

  .ad-read-btn:hover { background: var(--accent); }
  .ad-read-btn::after { content: '→'; }

  /* ANIMATIONS */
  @keyframes adFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ad-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .ad-anim.ad-visible { opacity: 1; transform: none; }

  /* RESPONSIVE */
  @media (max-width: 860px) {
    .ad-nav { padding: 20px 24px; }
    .ad-hero,
    .ad-section-rule,
    .ad-structure-section,
    .ad-method-section,
    .ad-page-footer { padding-left: 24px; padding-right: 24px; }
    .ad-hero-body { grid-template-columns: 1fr; }
    .ad-chapters { grid-template-columns: 1fr 1fr; }
    .ad-quotes-grid { grid-template-columns: 1fr; }
    .ad-method-section { grid-template-columns: 1fr; gap: 32px; }
    .ad-quotes-section { padding: 48px 24px; }
    .ad-page-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
  }

  @media (max-width: 560px) {
    .ad-chapters { grid-template-columns: 1fr; }
  }
`;
function ArticleDetailPage() {
    _s();
    const chaptersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleDetailPage.useEffect": ()=>{
            const animObserver = new IntersectionObserver({
                "ArticleDetailPage.useEffect": (entries)=>{
                    entries.forEach({
                        "ArticleDetailPage.useEffect": (e, i)=>{
                            if (e.isIntersecting) {
                                setTimeout({
                                    "ArticleDetailPage.useEffect": ()=>e.target.classList.add('ad-visible')
                                }["ArticleDetailPage.useEffect"], i * 80);
                            }
                        }
                    }["ArticleDetailPage.useEffect"]);
                }
            }["ArticleDetailPage.useEffect"], {
                threshold: 0.1
            });
            document.querySelectorAll('.ad-anim').forEach({
                "ArticleDetailPage.useEffect": (el)=>animObserver.observe(el)
            }["ArticleDetailPage.useEffect"]);
            const chaptersEl = chaptersRef.current;
            let chapterObserver = null;
            if (chaptersEl) {
                chapterObserver = new IntersectionObserver({
                    "ArticleDetailPage.useEffect": (entries)=>{
                        entries.forEach({
                            "ArticleDetailPage.useEffect": (entry)=>{
                                if (entry.isIntersecting) {
                                    const cards = entry.target.querySelectorAll('.ad-chapter-card');
                                    cards.forEach({
                                        "ArticleDetailPage.useEffect": (card, i)=>{
                                            const c = card;
                                            c.style.opacity = '0';
                                            c.style.transform = 'translateY(12px)';
                                            c.style.transition = `opacity 0.4s ease ${i * 50}ms, transform 0.4s ease ${i * 50}ms`;
                                            setTimeout({
                                                "ArticleDetailPage.useEffect": ()=>{
                                                    c.style.opacity = '1';
                                                    c.style.transform = 'none';
                                                }
                                            }["ArticleDetailPage.useEffect"], 100 + i * 50);
                                        }
                                    }["ArticleDetailPage.useEffect"]);
                                    chapterObserver?.unobserve(entry.target);
                                }
                            }
                        }["ArticleDetailPage.useEffect"]);
                    }
                }["ArticleDetailPage.useEffect"], {
                    threshold: 0.1
                });
                chapterObserver.observe(chaptersEl);
            }
            return ({
                "ArticleDetailPage.useEffect": ()=>{
                    animObserver.disconnect();
                    chapterObserver?.disconnect();
                }
            })["ArticleDetailPage.useEffect"];
        }
    }["ArticleDetailPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: css
            }, void 0, false, {
                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                lineNumber: 516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ad-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ad-grain"
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "ad-nav",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "ad-back",
                            onClick: (e)=>{
                                e.preventDefault();
                                const base = ("TURBOPACK compile-time value", "/dny.github.io") || '';
                                window.location.href = base + '/articles';
                            },
                            children: "Article Works"
                        }, void 0, false, {
                            fileName: "[project]/src/app/articles/article-detail/page.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "ad-hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-hero-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ad-tag accent",
                                        children: "Academic Writing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ad-tag",
                                        children: "Internet Literature"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ad-tag",
                                        children: "Critical Theory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "末日之境",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 19
                                    }, this),
                                    "与",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "超越之路"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ad-hero-sub",
                                children: "结合《十日终焉》探讨资本主义现实主义的困境与超越——读马克·费舍《资本主义现实主义》"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-hero-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ad-hero-abstract",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label",
                                                children: "选题逻辑 · Content Rationale"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '这篇文章起源于一个真实的内容判断困惑：为什么末日题材的网络小说在年轻读者中长期保持高热度？ 从运营视角切入，我选择将马克·费舍的左翼文化理论与头部网文《十日终焉》并置分析， 尝试拆解"末日叙事吸引力"背后的情绪结构与受众心理——这正是内容策划中"读者洞察"的核心方法论。 理论分析与受众研究并非对立，学术写作训练出的结构化思维，是内容运营中最稀缺的判断力来源。'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ad-content-angle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "angle-label",
                                                children: "内容运营视角 · Operator's Lens"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ad-angle-items",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ad-angle-item",
                                                        children: "选题策划：跨圈层内容热点的判断逻辑"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ad-angle-item",
                                                        children: "竞品调研：网文类型赛道的叙事策略分析"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ad-angle-item",
                                                        children: "受众洞察：末日叙事的情绪共鸣结构拆解"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ad-angle-item",
                                                        children: "结构化输出：九章论述，有理有据可复用"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 547,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 534,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ad-section-rule",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-rule-line"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-rule-label",
                                children: "论文结构 · Argument Architecture"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-rule-line"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ad-structure-section ad-anim",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-sec-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ad-sec-label",
                                        children: "Chapter Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ad-sec-title",
                                        children: "九章论述架构"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-chapters",
                                ref: chaptersRef,
                                children: [
                                    {
                                        num: '01',
                                        title: '文化想象的殖民：灾难叙事与抵抗的悖论',
                                        brief: '末日比革命更容易想象 · 文化的货币化'
                                    },
                                    {
                                        num: '02',
                                        title: '交流的陷阱：控制、邀请与犬儒主义的共谋',
                                        brief: '以自由之名的控制 · 信念的实在化'
                                    },
                                    {
                                        num: '03',
                                        title: '现实主义的裂隙：环境、精神与官僚制',
                                        brief: '三重挑战 · 撕开口子的方向'
                                    },
                                    {
                                        num: '04',
                                        title: '规训与控制的合流：教育场域中被切割的主体性',
                                        brief: '注意力缺失的一代 · 《十日终焉》权力形态'
                                    },
                                    {
                                        num: '05',
                                        title: '后福特主义的漂泊：家庭、工作与精神的三重瓦解',
                                        brief: '灵活性的代价 · 家庭的解域化'
                                    },
                                    {
                                        num: '06',
                                        title: '大他者的幽灵：新官僚主义与超真实幻象',
                                        brief: '反生产的行政实践 · 鲍德里亚的超真实'
                                    },
                                    {
                                        num: '07',
                                        title: '记忆的政治：怀旧、遗忘与时间的停滞',
                                        brief: '记忆障碍作为文化焦虑 · 时间的同质化'
                                    },
                                    {
                                        num: '08',
                                        title: '结构的显形：从个体困境到集体责任',
                                        brief: '卡夫卡式的呼叫中心 · 个体化叙事的陷阱'
                                    },
                                    {
                                        num: '09',
                                        title: '走出末日之境：超越资本主义现实主义的可能',
                                        brief: '从零年开始 · 最小事件的力量'
                                    }
                                ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ad-chapter-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ad-chapter-num",
                                                children: card.num
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 582,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ad-chapter-title",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 583,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ad-chapter-brief",
                                                children: card.brief
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, card.num, true, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 581,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 569,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ad-quotes-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ad-quotes-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ad-quotes-header",
                                    children: "核心论点 · Key Arguments"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ad-quotes-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ad-pull-quote",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                    children: '"想象世界末日比想象资本主义末日更容易"——费舍的这句话，也是网络文学末日叙事长期繁荣的内容逻辑：受众在虚构的绝境里，完成了对现实的情感投射。'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "attribution",
                                                    children: "选题判断 · Content Insight"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ad-pull-quote",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                    children: '《十日终焉》中"回响"作为信念产物的设定，恰是资本主义意识形态运作机制的精妙隐喻——理解这一点，是读懂网文为何能持续制造情感钩子的关键。'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "attribution",
                                                    children: "文本分析 · Text Analysis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/articles/article-detail/page.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 590,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "ad-method-section ad-anim",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-method-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "method-label",
                                        children: "写作方法论"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 612,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "跨文本对话：理论框架与网文赛道研究"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-method-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "本文采用跨文本、跨媒介的平行分析框架，以马克·费舍《资本主义现实主义》的九章论述为主线，逐一以《十日终焉》的叙事元素作为对照文本，在理论与文学想象的交织中完成论证。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "这一方法论的内容运营意义在于：将学术工具转化为受众分析工具——用理论概念（犬儒主义、超真实、大他者）解释受众的情绪共鸣机制，从而形成对内容选题的结构化判断框架，而非仅依赖直觉。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ad-method-tags",
                                        children: [
                                            '跨文本分析',
                                            '受众情绪研究',
                                            '网文赛道调研',
                                            '左翼文化理论',
                                            '内容判断力'
                                        ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ad-method-tag",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "ad-page-footer ad-anim",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ad-footer-info"
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "ad-read-btn",
                                children: "阅读全文  "
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/article-detail/page.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/articles/article-detail/page.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ArticleDetailPage, "UkHQIYbiy8r2slHbeOgiUgTCioo=");
_c = ArticleDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ArticleDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_articles_article-detail_page_tsx_7fad41a0._.js.map