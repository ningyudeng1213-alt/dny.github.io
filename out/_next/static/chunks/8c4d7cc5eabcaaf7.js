(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={assign:function(){return c},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return o}};for(var n in r)Object.defineProperty(t,n,{enumerable:!0,get:r[n]});function s(e){let a={};for(let[t,r]of e.entries()){let e=a[t];void 0===e?a[t]=r:Array.isArray(e)?e.push(r):a[t]=[e,r]}return a}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let a=new URLSearchParams;for(let[t,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)a.append(t,i(e));else a.set(t,i(r));return a}function c(e,...a){for(let t of a){for(let a of t.keys())e.delete(a);for(let[a,r]of t.entries())e.append(a,r)}return e}},95057,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={formatUrl:function(){return o},formatWithValidation:function(){return l},urlObjectKeys:function(){return c}};for(var n in r)Object.defineProperty(t,n,{enumerable:!0,get:r[n]});let s=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function o(e){let{auth:a,hostname:t}=e,r=e.protocol||"",n=e.pathname||"",o=e.hash||"",c=e.query||"",l=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?l=a+e.host:t&&(l=a+(~t.indexOf(":")?`[${t}]`:t),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=String(s.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==l?(l="//"+(l||""),n&&"/"!==n[0]&&(n="/"+n)):l||(l=""),o&&"#"!==o[0]&&(o="#"+o),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${l}${n}${d}${o}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return o(e)}},18967,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return v},NormalizeError:function(){return z},PageNotFoundError:function(){return y},SP:function(){return u},ST:function(){return h},WEB_VITALS:function(){return s},execOnce:function(){return i},getDisplayName:function(){return p},getLocationOrigin:function(){return l},getURL:function(){return d},isAbsoluteUrl:function(){return c},isResSent:function(){return g},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return j}};for(var n in r)Object.defineProperty(t,n,{enumerable:!0,get:r[n]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let a,t=!1;return(...r)=>(t||(t=!0,a=e(...r)),a)}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>o.test(e);function l(){let{protocol:e,hostname:a,port:t}=window.location;return`${e}//${a}${t?":"+t:""}`}function d(){let{href:e}=window.location,a=l();return e.substring(a.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function g(e){return e.finished||e.headersSent}function f(e){let a=e.split("?");return a[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(a[1]?`?${a.slice(1).join("?")}`:"")}async function m(e,a){let t=a.res||a.ctx&&a.ctx.res;if(!e.getInitialProps)return a.ctx&&a.Component?{pageProps:await m(a.Component,a.ctx)}:{};let r=await e.getInitialProps(a);if(t&&g(t))return r;if(!r)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let u="u">typeof performance,h=u&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class z extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,a){super(),this.message=`Failed to load static file for page: ${e} ${a}`}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});let r=e.r(18967),n=e.r(52817);function s(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let a=(0,r.getLocationOrigin)(),t=new URL(e,a);return t.origin===a&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},84508,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return y}};for(var n in r)Object.defineProperty(t,n,{enumerable:!0,get:r[n]});let s=e.r(90809),i=e.r(43476),o=s._(e.r(71645)),c=e.r(95057),l=e.r(8372),d=e.r(18581),p=e.r(18967),g=e.r(5550);e.r(33525);let f=e.r(91949),m=e.r(73668),u=e.r(9396);function h(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}function x(a){var t;let r,n,s,[c,x]=(0,o.useOptimistic)(f.IDLE_LINK_STATUS),y=(0,o.useRef)(null),{href:v,as:b,children:j,prefetch:N=null,passHref:w,replace:k,shallow:P,scroll:E,onClick:S,onMouseEnter:T,onTouchStart:O,legacyBehavior:C=!1,onNavigate:_,ref:M,unstable_dynamicOnHover:A,...R}=a;r=j,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let U=o.default.useContext(l.AppRouterContext),q=!1!==N,F=!1!==N?null===(t=N)||"auto"===t?u.FetchStrategy.PPR:u.FetchStrategy.Full:u.FetchStrategy.PPR,{href:L,as:I}=o.default.useMemo(()=>{let e=h(v);return{href:e,as:b?h(b):e}},[v,b]);if(C){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=o.default.Children.only(r)}let $=C?n&&"object"==typeof n&&n.ref:M,D=o.default.useCallback(e=>(null!==U&&(y.current=(0,f.mountLinkInstance)(e,L,U,F,q,x)),()=>{y.current&&((0,f.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,f.unmountPrefetchableInstance)(e)}),[q,L,U,F,x]),B={ref:(0,d.useMergedRef)(D,$),onClick(a){C||"function"!=typeof S||S(a),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(a),!U||a.defaultPrevented||function(a,t,r,n,s,i,c){if("u">typeof window){let l,{nodeName:d}=a.currentTarget;if("A"===d.toUpperCase()&&((l=a.currentTarget.getAttribute("target"))&&"_self"!==l||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which)||a.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(t)){s&&(a.preventDefault(),location.replace(t));return}if(a.preventDefault(),c){let e=!1;if(c({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);o.default.startTransition(()=>{p(r||t,s?"replace":"push",i??!0,n.current)})}}(a,L,I,y,k,E,_)},onMouseEnter(e){C||"function"!=typeof T||T(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&q&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){C||"function"!=typeof O||O(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&q&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,p.isAbsoluteUrl)(I)?B.href=I:C&&!w&&("a"!==n.type||"href"in n.props)||(B.href=(0,g.addBasePath)(I)),s=C?o.default.cloneElement(n,B):(0,i.jsx)("a",{...R,...B,children:r}),(0,i.jsx)(z.Provider,{value:c,children:s})}e.r(84508);let z=(0,o.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,o.useContext)(z);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},49100,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(22016);let n=`
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
`;function s(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=new IntersectionObserver(e=>{e.forEach((e,a)=>{e.isIntersecting&&setTimeout(()=>e.target.classList.add("agz-visible"),60*a)})},{threshold:.08});document.querySelectorAll(".agz-anim").forEach(e=>a.observe(e));let t=e.current,r=null;return t&&(r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.querySelectorAll(".agz-chapter-card").forEach((e,a)=>{e.style.opacity="0",e.style.transform="translateY(12px)",e.style.transition=`opacity 0.4s ease ${80*a}ms, transform 0.4s ease ${80*a}ms`,setTimeout(()=>{e.style.opacity="1",e.style.transform="none"},100+80*a)}),r?.unobserve(e.target))})},{threshold:.1})).observe(t),()=>{a.disconnect(),r?.disconnect()}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:n}),(0,a.jsxs)("div",{className:"agz-body",children:[(0,a.jsx)("div",{className:"agz-grain"}),(0,a.jsx)("nav",{className:"agz-nav",children:(0,a.jsx)(r.default,{href:"/articles",className:"agz-back",children:"Article Works"})}),(0,a.jsxs)("header",{className:"agz-hero",children:[(0,a.jsxs)("div",{className:"agz-hero-meta",children:[(0,a.jsx)("span",{className:"agz-tag accent",children:"Academic Writing"}),(0,a.jsx)("span",{className:"agz-tag",children:"Film Theory"}),(0,a.jsx)("span",{className:"agz-tag",children:"Feminist Criticism"}),(0,a.jsx)("span",{className:"agz-tag",children:"Psychoanalysis"})]}),(0,a.jsxs)("h1",{children:["性与暴力的",(0,a.jsx)("em",{children:"合谋"})]}),(0,a.jsx)("p",{className:"agz-hero-sub",children:"当代电影中的剩余快感——国产商业电影中白日梦奇观策略研究"}),(0,a.jsxs)("div",{className:"agz-hero-body",children:[(0,a.jsxs)("div",{className:"agz-hero-abstract",children:[(0,a.jsx)("div",{className:"label",children:"摘要"}),(0,a.jsx)("p",{children:'近年来主流院线中以反映社会问题自居的犯罪题材电影， 在审查机制收紧的背景下，以性符号与性隐喻替代大尺度场面， 以女性受害者承担暴力叙事的奇观功能， 形成了"性与暴力合流"的新奇观模式。 本文以穆尔维视觉快感理论为基础，结合齐泽克剩余快感与幻象公式， 探讨这一机制如何在当今国产商业电影中以更隐蔽的方式贯彻父权制逻辑。'})]}),(0,a.jsxs)("div",{className:"agz-theory-card",children:[(0,a.jsx)("div",{className:"card-label",children:"理论框架"}),(0,a.jsxs)("div",{className:"agz-theory-items",children:[(0,a.jsxs)("div",{className:"agz-theory-item",children:[(0,a.jsx)("div",{className:"agz-theory-name",children:"劳拉·穆尔维"}),(0,a.jsxs)("div",{className:"agz-theory-concept",children:["视觉快感与叙事电影",(0,a.jsx)("br",{}),"凝视理论 · 窥淫癖"]})]}),(0,a.jsxs)("div",{className:"agz-theory-item",children:[(0,a.jsx)("div",{className:"agz-theory-name",children:"齐泽克"}),(0,a.jsxs)("div",{className:"agz-theory-concept",children:["剩余快感 · 幻象公式",(0,a.jsx)("br",{}),"穿越幻象"]})]}),(0,a.jsxs)("div",{className:"agz-theory-item",children:[(0,a.jsx)("div",{className:"agz-theory-name",children:"弗洛伊德"}),(0,a.jsxs)("div",{className:"agz-theory-concept",children:["快乐原则 · 阉割威胁",(0,a.jsx)("br",{}),"性本能与压抑"]})]}),(0,a.jsxs)("div",{className:"agz-theory-item",children:[(0,a.jsx)("div",{className:"agz-theory-name",children:"戴锦华"}),(0,a.jsxs)("div",{className:"agz-theory-concept",children:["中国电影中的女性",(0,a.jsx)("br",{}),"历史性倒退警示"]})]})]})]})]})]}),(0,a.jsxs)("div",{className:"agz-section-rule agz-anim",children:[(0,a.jsx)("div",{className:"agz-rule-line"}),(0,a.jsx)("div",{className:"agz-rule-label",children:"论文结构 · Three-Part Argument"}),(0,a.jsx)("div",{className:"agz-rule-line"})]}),(0,a.jsxs)("section",{className:"agz-chapters-section agz-anim",children:[(0,a.jsxs)("div",{className:"agz-sec-header",children:[(0,a.jsx)("span",{className:"agz-sec-label",children:"Argument Structure"}),(0,a.jsx)("span",{className:"agz-sec-title",children:"三章论述"})]}),(0,a.jsxs)("div",{className:"agz-chapters-grid",ref:e,children:[(0,a.jsxs)("div",{className:"agz-chapter-card",children:[(0,a.jsx)("div",{className:"agz-ch-num",children:"一"}),(0,a.jsx)("div",{className:"agz-ch-title",children:"假意消逝的身体奇观化"}),(0,a.jsx)("div",{className:"agz-ch-desc",children:"梳理国产电影从《十面埋伏》《色，戒》到当代的女性身体奇观化演变历程， 指出在审查收紧后，露骨镜头被性符号与性隐喻替代， 但父权凝视的内在逻辑从未消失。"}),(0,a.jsxs)("div",{className:"agz-ch-tags",children:[(0,a.jsx)("span",{className:"agz-ch-tag",children:"身体奇观"}),(0,a.jsx)("span",{className:"agz-ch-tag",children:"性符号化"}),(0,a.jsx)("span",{className:"agz-ch-tag",children:"穆尔维凝视"})]})]}),(0,a.jsxs)("div",{className:"agz-chapter-card",children:[(0,a.jsx)("div",{className:"agz-ch-num",children:"二"}),(0,a.jsx)("div",{className:"agz-ch-title",children:"性与暴力合谋的新策略"}),(0,a.jsx)("div",{className:"agz-ch-desc",children:"聚焦2023年犯罪题材电影中女性受害者的高频出现， 从叙述者立场（男性体验代言）与摄影机位置（以受害者躯体为奇观中心） 两个维度，解析性暴力场景如何成为新的视觉快感来源。"}),(0,a.jsxs)("div",{className:"agz-ch-tags",children:[(0,a.jsx)("span",{className:"agz-ch-tag",children:"性暴力叙事"}),(0,a.jsx)("span",{className:"agz-ch-tag",children:"女性失声"}),(0,a.jsx)("span",{className:"agz-ch-tag",children:"镜头语言"})]})]}),(0,a.jsxs)("div",{className:"agz-chapter-card",children:[(0,a.jsx)("div",{className:"agz-ch-num",children:"三"}),(0,a.jsx)("div",{className:"agz-ch-title",children:"身体与电影幻象的共生"}),(0,a.jsx)("div",{className:"agz-ch-desc",children:'引入齐泽克幻象公式与"剩余快感"概念， 分析被压抑的欲望如何以"白日梦奇观"的形式在意识层面得以实现； 并借穆尔维重读希区柯克，探讨电影媒介自反性召唤平等镜头语言的可能。'}),(0,a.jsxs)("div",{className:"agz-ch-tags",children:[(0,a.jsx)("span",{className:"agz-ch-tag",children:"剩余快感"}),(0,a.jsx)("span",{className:"agz-ch-tag",children:"银幕幻象"}),(0,a.jsx)("span",{className:"agz-ch-tag",children:"穿越幻象"})]})]})]})]}),(0,a.jsx)("section",{className:"agz-data-section agz-anim",children:(0,a.jsxs)("div",{className:"agz-data-row",children:[(0,a.jsxs)("div",{className:"agz-data-cell",children:[(0,a.jsx)("div",{className:"agz-data-num",children:"80%"}),(0,a.jsxs)("div",{className:"agz-data-desc",children:["2023年十部犯罪题材电影中",(0,a.jsx)("br",{}),"女性受害者同时承受性与暴力双重伤害的比例"]})]}),(0,a.jsxs)("div",{className:"agz-data-cell",children:[(0,a.jsx)("div",{className:"agz-data-num",children:"8/10"}),(0,a.jsxs)("div",{className:"agz-data-desc",children:["2023年主流犯罪题材电影中",(0,a.jsx)("br",{}),"以女性受害者开展叙事的数量"]})]}),(0,a.jsxs)("div",{className:"agz-data-cell",children:[(0,a.jsx)("div",{className:"agz-data-num",children:"4"}),(0,a.jsxs)("div",{className:"agz-data-desc",children:["核心理论资源",(0,a.jsx)("br",{}),"穆尔维 · 齐泽克 · 弗洛伊德 · 戴锦华"]})]})]})}),(0,a.jsx)("section",{className:"agz-quote-band",children:(0,a.jsxs)("div",{className:"agz-quote-inner",children:[(0,a.jsx)("div",{className:"agz-quote-band-label",children:"核心引文 · Key Citations"}),(0,a.jsxs)("div",{className:"agz-quotes-grid",children:[(0,a.jsxs)("div",{className:"agz-pull-q",children:[(0,a.jsx)("blockquote",{children:"在世俗神话及大众传播媒介中，形形色色关于女性的侵犯性、歧视性的行为和话语 开始以公然的、或隐晦的形式呈现出来。而可悲的是，这一关于女性的历史性倒退行为， 在相当程度上得到女性的默许、甚或配合。"}),(0,a.jsx)("div",{className:"attr",children:"戴锦华 · 《不可见的女性》· 1994"})]}),(0,a.jsxs)("div",{className:"agz-pull-q",children:[(0,a.jsx)("blockquote",{children:"幻象为欲望固有的僵局提供了合理的解释：它建构出场景，在其中我们被剥夺的快感 集中在他者处，而正是他者偷走了人们的快感。"}),(0,a.jsx)("div",{className:"attr",children:"齐泽克 · The Plague of Fantasies"})]})]})]})}),(0,a.jsxs)("section",{className:"agz-note-section agz-anim",children:[(0,a.jsxs)("div",{className:"agz-note-left",children:[(0,a.jsx)("div",{className:"n-label",children:"关于这篇"}),(0,a.jsx)("h3",{children:"课程论文"})]}),(0,a.jsx)("div",{className:"agz-note-right",children:(0,a.jsx)("p",{children:"女性主义电影理论课程论文，以国产高票房商业电影为文本， 尝试在精神分析框架下解释性暴力场景在当代主流电影中频繁出现的内在机制。"})})]}),(0,a.jsx)("footer",{className:"agz-page-footer agz-anim",children:(0,a.jsxs)("div",{className:"agz-footer-info",children:["邓甯予 · 南开大学文艺学硕士",(0,a.jsx)("br",{}),"研究方向：大众文艺美学（网文、电影方向）",(0,a.jsx)("br",{}),"课程论文 · 女性主义电影理论"]})})]})]})}e.s(["default",()=>s])}]);