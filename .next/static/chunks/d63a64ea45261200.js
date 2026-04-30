(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var r in n)Object.defineProperty(t,r,{enumerable:!0,get:n[r]});function o(e){let a={};for(let[t,n]of e.entries()){let e=a[t];void 0===e?a[t]=n:Array.isArray(e)?e.push(n):a[t]=[e,n]}return a}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let a=new URLSearchParams;for(let[t,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)a.append(t,i(e));else a.set(t,i(n));return a}function l(e,...a){for(let t of a){for(let a of t.keys())e.delete(a);for(let[a,n]of t.entries())e.append(a,n)}return e}},95057,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var r in n)Object.defineProperty(t,r,{enumerable:!0,get:n[r]});let o=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:a,hostname:t}=e,n=e.protocol||"",r=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?c=a+e.host:t&&(c=a+(~t.indexOf(":")?`[${t}]`:t),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),r&&"/"!==r[0]&&(r="/"+r)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),r=r.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${r}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18967,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return y},NormalizeError:function(){return v},PageNotFoundError:function(){return b},SP:function(){return u},ST:function(){return x},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return p},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return N}};for(var r in n)Object.defineProperty(t,r,{enumerable:!0,get:n[r]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let a,t=!1;return(...n)=>(t||(t=!0,a=e(...n)),a)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:a,port:t}=window.location;return`${e}//${a}${t?":"+t:""}`}function d(){let{href:e}=window.location,a=c();return e.substring(a.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function f(e){let a=e.split("?");return a[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(a[1]?`?${a.slice(1).join("?")}`:"")}async function m(e,a){let t=a.res||a.ctx&&a.ctx.res;if(!e.getInitialProps)return a.ctx&&a.Component?{pageProps:await m(a.Component,a.ctx)}:{};let n=await e.getInitialProps(a);if(t&&h(t))return n;if(!n)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let u="u">typeof performance,x=u&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class v extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,a){super(),this.message=`Failed to load static file for page: ${e} ${a}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function N(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),r=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let a=(0,n.getLocationOrigin)(),t=new URL(e,a);return t.origin===a&&(0,r.hasBasePath)(t.pathname)}catch(e){return!1}}},84508,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return b}};for(var r in n)Object.defineProperty(t,r,{enumerable:!0,get:n[r]});let o=e.r(90809),i=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),p=e.r(18967),h=e.r(5550);e.r(33525);let f=e.r(91949),m=e.r(73668),u=e.r(9396);function x(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(a){var t;let n,r,o,[l,g]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),b=(0,s.useRef)(null),{href:y,as:j,children:N,prefetch:k=null,passHref:w,replace:E,shallow:S,scroll:P,onClick:T,onMouseEnter:O,onTouchStart:z,legacyBehavior:C=!1,onNavigate:_,ref:M,unstable_dynamicOnHover:R,...U}=a;n=N,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let A=s.default.useContext(c.AppRouterContext),L=!1!==k,I=!1!==k?null===(t=k)||"auto"===t?u.FetchStrategy.PPR:u.FetchStrategy.Full:u.FetchStrategy.PPR,{href:F,as:$}=s.default.useMemo(()=>{let e=x(y);return{href:e,as:j?x(j):e}},[y,j]);if(C){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=s.default.Children.only(n)}let D=C?r&&"object"==typeof r&&r.ref:M,B=s.default.useCallback(e=>(null!==A&&(b.current=(0,f.mountLinkInstance)(e,F,A,I,L,g)),()=>{b.current&&((0,f.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,f.unmountPrefetchableInstance)(e)}),[L,F,A,I,g]),K={ref:(0,d.useMergedRef)(B,D),onClick(a){C||"function"!=typeof T||T(a),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(a),!A||a.defaultPrevented||function(a,t,n,r,o,i,l){if("u">typeof window){let c,{nodeName:d}=a.currentTarget;if("A"===d.toUpperCase()&&((c=a.currentTarget.getAttribute("target"))&&"_self"!==c||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which)||a.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(t)){o&&(a.preventDefault(),location.replace(t));return}if(a.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);s.default.startTransition(()=>{p(n||t,o?"replace":"push",i??!0,r.current)})}}(a,F,$,b,E,P,_)},onMouseEnter(e){C||"function"!=typeof O||O(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){C||"function"!=typeof z||z(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,p.isAbsoluteUrl)($)?K.href=$:C&&!w&&("a"!==r.type||"href"in r.props)||(K.href=(0,h.addBasePath)($)),o=C?s.default.cloneElement(r,K):(0,i.jsx)("a",{...U,...K,children:n}),(0,i.jsx)(v.Provider,{value:l,children:o})}e.r(84508);let v=(0,s.createContext)(f.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(v);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},72804,e=>{"use strict";var a=e.i(43476),t=e.i(71645),n=e.i(22016);let r=`
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
`;function o(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=new IntersectionObserver(e=>{e.forEach((e,a)=>{e.isIntersecting&&setTimeout(()=>e.target.classList.add("anh-visible"),60*a)})},{threshold:.08});document.querySelectorAll(".anh-anim").forEach(e=>a.observe(e));let t=e.current,n=null;return t&&(n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.querySelectorAll(".anh-problem-card").forEach((e,a)=>{e.style.opacity="0",e.style.transform="translateY(12px)",e.style.transition=`opacity 0.4s ease ${80*a}ms, transform 0.4s ease ${80*a}ms`,setTimeout(()=>{e.style.opacity="1",e.style.transform="none"},100+80*a)}),n?.unobserve(e.target))})},{threshold:.1})).observe(t),()=>{a.disconnect(),n?.disconnect()}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:r}),(0,a.jsxs)("div",{className:"anh-body",children:[(0,a.jsx)("div",{className:"anh-grain"}),(0,a.jsx)("nav",{className:"anh-nav",children:(0,a.jsx)(n.default,{href:"/articles",className:"anh-back",children:"Article Works"})}),(0,a.jsxs)("header",{className:"anh-hero",children:[(0,a.jsxs)("div",{className:"anh-hero-meta",children:[(0,a.jsx)("span",{className:"anh-tag filled",children:"锐评"}),(0,a.jsx)("span",{className:"anh-tag accent",children:"TV Series · 拔草"}),(0,a.jsx)("span",{className:"anh-tag",children:"种草/拔草课程作业"}),(0,a.jsx)("span",{className:"anh-tag",children:"甜宠剧批评"})]}),(0,a.jsx)("div",{className:"anh-hero-eyebrow",children:"锐评 · Critical Review · 2025"}),(0,a.jsxs)("h1",{children:["2025甜宠剧",(0,a.jsx)("em",{children:'"金扫帚奖"'})]}),(0,a.jsx)("p",{className:"anh-hero-sub",children:"看甜宠剧不如看恐怖片——《难哄》梦游桥段的工业化症结"}),(0,a.jsxs)("div",{className:"anh-hero-body",children:[(0,a.jsxs)("div",{className:"anh-hero-abstract",children:[(0,a.jsx)("div",{className:"label",children:"写作说明"}),(0,a.jsx)("p",{children:'种草/拔草课程作业，选题《难哄》。 这篇文章的切入点不是"这部剧好不好看"，而是"梦游桥段"作为一种重复叙事模式的症结所在—— 当亲密关系的推进依赖女性的非清醒状态， 折射的是当代工业化言情剧对情感复杂性的集体失语。 前半部分是评论腔调，后半部分做了结构化的形式拆解。'})]}),(0,a.jsxs)("div",{className:"anh-verdict-card",children:[(0,a.jsx)("div",{className:"card-label",children:"热度数据 · 2025开年爆款"}),(0,a.jsx)("div",{className:"anh-verdict-stamp",children:"15.6亿"}),(0,a.jsxs)("div",{className:"anh-verdict-sub",children:["全网累计播放量",(0,a.jsx)("br",{}),"2025年现偶赛道年度第一"]}),(0,a.jsx)("div",{className:"anh-verdict-divider"}),(0,a.jsxs)("div",{className:"anh-verdict-facts",children:[(0,a.jsx)("div",{className:"anh-verdict-fact",children:"优酷热度破10000，创平台最快破万记录"}),(0,a.jsx)("div",{className:"anh-verdict-fact",children:"抖音主话题播放量74.5亿"}),(0,a.jsx)("div",{className:"anh-verdict-fact",children:"集均播放量超4300万，灯塔现偶冠军"}),(0,a.jsx)("div",{className:"anh-verdict-fact",children:"微博热搜744+，主话题阅读6.5亿+"})]})]})]})]}),(0,a.jsxs)("div",{className:"anh-section-rule anh-anim",children:[(0,a.jsx)("div",{className:"anh-rule-line"}),(0,a.jsx)("div",{className:"anh-rule-label",children:"锐评原文 · Critical Writing"}),(0,a.jsx)("div",{className:"anh-rule-line"})]}),(0,a.jsxs)("section",{className:"anh-essay-section",children:[(0,a.jsx)("div",{className:"anh-essay-label",children:"开篇评论"}),(0,a.jsxs)("div",{className:"anh-essay-body",children:['《难哄》将女主"梦游"轻薄男主制造主动暧昧桥段作为重复且早期唯一卖点， 将一夜情、先婚后爱等套路作出性转版的创意性突破，',(0,a.jsx)("mark",{children:"实现了从0至1的飞跃"}),"；叙事模式方面更是由酒后强暴的传统一夜情 转变成女主夜夜梦游对男主欲拒还迎， 其中唯一不变的竟是受众始终都保持着重口味的好记录。",(0,a.jsx)("span",{className:"anh-pull-line",children:"《难哄》以其重口味审美，重新将女强设定的排泄物包裹成糖诱导观众尽数服下。"}),"真正的女性视角叙事不应止步于将传统霸总桥段进行性别倒置， 而需要彻底解构权力关系中的被动预设。与其让女主在梦游中完成情感觉醒， 不如展现她在清醒状态下的欲望认知与边界探索——",(0,a.jsx)("mark",{children:"这才是现代爱情剧应有的精神向度。"})]})]}),(0,a.jsxs)("section",{className:"anh-data-band anh-anim",children:[(0,a.jsxs)("div",{className:"anh-data-cell",children:[(0,a.jsx)("div",{className:"anh-data-num",children:"74.5亿"}),(0,a.jsxs)("div",{className:"anh-data-desc",children:["抖音主话题播放量",(0,a.jsx)("br",{}),"开播首部破3亿最快剧集"]})]}),(0,a.jsxs)("div",{className:"anh-data-cell",children:[(0,a.jsx)("div",{className:"anh-data-num",children:"792万"}),(0,a.jsxs)("div",{className:"anh-data-desc",children:["播前站内预约量",(0,a.jsx)("br",{}),"创优酷现偶预约量历史新高"]})]}),(0,a.jsxs)("div",{className:"anh-data-cell",children:[(0,a.jsx)("div",{className:"anh-data-num",children:"10+国"}),(0,a.jsxs)("div",{className:"anh-data-desc",children:["登陆Netflix Top10榜单",(0,a.jsx)("br",{}),"新加坡·泰国·印度等"]})]})]}),(0,a.jsx)("section",{className:"anh-problems-section",children:(0,a.jsxs)("div",{className:"anh-problems-inner",children:[(0,a.jsx)("div",{className:"anh-problems-label",children:"锐评拆解 · Three Structural Problems"}),(0,a.jsxs)("div",{className:"anh-problems-grid",ref:e,children:[(0,a.jsxs)("div",{className:"anh-problem-card",children:[(0,a.jsx)("div",{className:"anh-problem-num",children:"01"}),(0,a.jsx)("div",{className:"anh-problem-title",children:"去主体化的情感表达"}),(0,a.jsxs)("div",{className:"anh-problem-desc",children:["白天关系毫无进展，晚上依靠非清醒亲密接触完成情感突破， 实质消解了女性在两性关系中的主观能动性。",(0,a.jsx)("mark",{children:'"清醒的男凝视"与"被动的女回应"'}),"， 将浪漫关系异化为单方面的征服游戏。"]})]}),(0,a.jsxs)("div",{className:"anh-problem-card",children:[(0,a.jsx)("div",{className:"anh-problem-num",children:"02"}),(0,a.jsx)("div",{className:"anh-problem-title",children:"伪现实主义的叙事陷阱"}),(0,a.jsxs)("div",{className:"anh-problem-desc",children:['女主的"梦游症"除寄人篱下的处境外， 其余梦游都只为情感发展作铺垫， 刻意淡化了真实病症的痛苦内核。',(0,a.jsx)("mark",{children:"当病理现象被浪漫滤镜包装，本质是对特殊群体的消费。"})]})]}),(0,a.jsxs)("div",{className:"anh-problem-card",children:[(0,a.jsx)("div",{className:"anh-problem-num",children:"03"}),(0,a.jsx)("div",{className:"anh-problem-title",children:"流量密码的机械化复制"}),(0,a.jsxs)("div",{className:"anh-problem-desc",children:["每集0.75次的肢体接触频率、每次5-6秒的特写镜头， 暴露出制作方对大数据时代观众嗨点的精确计算。",(0,a.jsx)("mark",{children:"流水线式的情感刺激正将言情剧推向感官刺激的深渊。"})]})]})]})]})}),(0,a.jsxs)("section",{className:"anh-note-section anh-anim",children:[(0,a.jsxs)("div",{className:"anh-note-left",children:[(0,a.jsx)("div",{className:"n-label",children:"关于这篇"}),(0,a.jsx)("h3",{children:"种草/拔草课程作业"})]}),(0,a.jsx)("div",{className:"anh-note-right",children:(0,a.jsx)("p",{children:'课程要求选一部影视作品写种草或拔草评论。 选择拔草《难哄》，不是因为它不够热——74.5亿抖音播放量、15.6亿全网播放量、Netflix十国上榜，它是2025开年最热的现偶剧。 正因为够热，"梦游桥段"这种叙事模式才更值得认真拆解。'})})]}),(0,a.jsx)("footer",{className:"anh-page-footer anh-anim",children:(0,a.jsxs)("div",{className:"anh-footer-info",children:["邓甯予 · 南开大学文艺学硕士",(0,a.jsx)("br",{}),"研究方向：大众文艺美学（网文、电影方向）",(0,a.jsx)("br",{}),"种草/拔草课程作业 · TV Series 批评"]})})]})]})}e.s(["default",()=>o])}]);