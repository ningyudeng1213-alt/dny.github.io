(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,o(e));else t.set(r,o(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(i.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),u&&"?"!==u[0]&&(u="?"+u),a=a.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${a}${u}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return b},NormalizeError:function(){return x},PageNotFoundError:function(){return v},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return o},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return p},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return d},stringifyError:function(){return w}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function d(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&p(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class x extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),a=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},useLinkStatus:function(){return v}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(90809),o=e.r(43476),l=i._(e.r(71645)),s=e.r(95057),c=e.r(8372),u=e.r(18581),f=e.r(18967),p=e.r(5550);e.r(33525);let d=e.r(91949),m=e.r(73668),h=e.r(9396);function g(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}function y(t){var r;let n,a,i,[s,y]=(0,l.useOptimistic)(d.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:b,as:j,children:w,prefetch:k=null,passHref:S,replace:N,shallow:P,scroll:E,onClick:C,onMouseEnter:O,onTouchStart:T,legacyBehavior:_=!1,onNavigate:z,ref:I,unstable_dynamicOnHover:A,...L}=t;n=w,_&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let R=l.default.useContext(c.AppRouterContext),M=!1!==k,F=!1!==k?null===(r=k)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:U,as:$}=l.default.useMemo(()=>{let e=g(b);return{href:e,as:j?g(j):e}},[b,j]);if(_){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(n)}let B=_?a&&"object"==typeof a&&a.ref:I,D=l.default.useCallback(e=>(null!==R&&(v.current=(0,d.mountLinkInstance)(e,U,R,F,M,y)),()=>{v.current&&((0,d.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,d.unmountPrefetchableInstance)(e)}),[M,U,R,F,y]),K={ref:(0,u.useMergedRef)(D,B),onClick(t){_||"function"!=typeof C||C(t),_&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!R||t.defaultPrevented||function(t,r,n,a,i,o,s){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);l.default.startTransition(()=>{f(n||r,i?"replace":"push",o??!0,a.current)})}}(t,U,$,v,N,E,z)},onMouseEnter(e){_||"function"!=typeof O||O(e),_&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),R&&M&&(0,d.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){_||"function"!=typeof T||T(e),_&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),R&&M&&(0,d.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,f.isAbsoluteUrl)($)?K.href=$:_&&!S&&("a"!==a.type||"href"in a.props)||(K.href=(0,p.addBasePath)($)),i=_?l.default.cloneElement(a,K):(0,o.jsx)("a",{...L,...K,children:n}),(0,o.jsx)(x.Provider,{value:s,children:i})}e.r(84508);let x=(0,l.createContext)(d.IDLE_LINK_STATUS),v=()=>(0,l.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},63103,e=>{"use strict";var t=e.i(43476);function r({sizing:e="fill",color:r="rgba(128, 128, 128, 1)",noise:n,style:a,className:i,children:o}){return(0,t.jsxs)("div",{className:i,style:{overflow:"hidden",position:"relative",width:"100%",height:"100%",...a},children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0},children:(0,t.jsx)("div",{style:{backgroundColor:r,maskImage:"url('/etheral-mask.webp')",maskSize:"stretch"===e?"100% 100%":"cover",maskRepeat:"no-repeat",maskPosition:"center",width:"100%",height:"100%"}})}),o&&(0,t.jsx)("div",{style:{position:"absolute",inset:0,zIndex:10},children:o}),n&&n.opacity>0&&(0,t.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"url('/etheral-noise.png')",backgroundSize:200*n.scale,backgroundRepeat:"repeat",opacity:n.opacity/2}})]})}e.s(["Component",()=>r])},85219,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(18566),a=e.i(22016),i=e.i(63103);let o=[{title:"性与暴力的合谋",sub:"当代电影中的剩余快感——国产商业电影中白日梦奇观策略研究",href:"/articles/article-detail-gaze",type:"film",tag:"Academic Writing"},{title:"身体、创伤与自我",sub:"电影《热辣滚烫》改编的互文性创新——从身体政治、创伤叙事与自传式电影三维解读",href:"/articles/article-detail-yolo",type:"film",tag:"Film Criticism"},{title:"工于细腻的《好东西》",sub:'社会议题的有机融合与当代叙事的突破——当"好东西"本身成为问题',href:"/articles/article-detail-goodstuff",type:"film",tag:"Film Criticism"},{title:'鹦鹉杀的"爽缩力"',sub:"不谈教育，亵渎爱情？",href:"/articles/article-detail-parrotkill",type:"film",tag:"Film Criticism"},{title:"我只能离开",sub:"《机器人之梦》的现代寓言",href:"/articles/article-detail-robotdreams",type:"film",tag:"Film Criticism"},{title:'2025甜宠剧"金扫帚奖"',sub:"看甜宠剧不如看恐怖片——《难哄》梦游桥段的工业化症结",href:"/articles/article-detail-nanhou",type:"tv-series",tag:"TV Series"},{title:"记忆·现实·游戏·异托邦的生生不息",sub:"评《十日终焉》——以福柯异托邦理论解读终焉之地的空间建构、记忆悖论与游戏化叙事",href:"/articles/article-detail-heterotopia",type:"internet-literature",tag:"Internet Literature"},{title:"末日之境与超越之路",sub:"结合《十日终焉》探讨资本主义现实主义的困境与超越——读马克·费舍《资本主义现实主义》",href:"/articles/article-detail",type:"internet-literature",tag:"Internet Literature"},{title:"同赛道·异策略",sub:"三款水排序游戏的关卡设计拆解——Magicsort / 精明的开局 / 缤纷糖葫芦",href:"/articles/article-detail-games",type:"games",tag:"Games Analysis"},{title:"内容理解分析练习",sub:"微信读书导航标签重构方案 × 男频网文深度对比评析——《十日终焉》& 《道诡异仙》",href:"/articles/article-detail-exam",type:"creative-brief",tag:"Strategy & Analysis"}],l={film:"Film","tv-series":"TV Series","internet-literature":"Internet Literature",games:"Games","creative-brief":"Creative Brief"},s=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  .al-body {
    --paper: #f0ece4;
    --ink: #18150f;
    --ink-soft: #3a342a;
    --muted: #8a8070;
    --rule: #ccc5b8;
    --accent: #8b3a2a;
    --cream: #e8e2d8;
    --dark2: #1e1a14;
    background: transparent;
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .al-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    background: #fafafa;
    pointer-events: none;
  }

  .al-layer {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  .al-grain {
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .al-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgba(250, 250, 250, 0.92) 60%, transparent);
  }
  .al-back {
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
  .al-back:hover { color: var(--ink); }
  .al-back::before { content: '←'; }
  .al-nav-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .al-main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 130px 48px 80px;
  }

  .al-header {
    margin-bottom: 64px;
  }
  .al-overline {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
  }
  .al-type-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 900;
    font-style: italic;
    color: var(--ink);
    line-height: 1;
    margin-bottom: 28px;
    letter-spacing: -0.02em;
  }
  .al-count {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: var(--muted);
    text-transform: uppercase;
  }

  .al-divider {
    height: 1px;
    background: var(--rule);
    margin-bottom: 0;
  }

  .al-list { display: flex; flex-direction: column; }

  .al-row {
    display: grid;
    grid-template-columns: 40px 1fr auto;
    gap: 24px;
    align-items: start;
    padding: 28px 0;
    border-bottom: 1px solid var(--rule);
    text-decoration: none;
    color: inherit;
    transition: background 0.2s;
    cursor: pointer;
  }
  .al-row:hover { background: rgba(139, 58, 42, 0.04); }
  .al-row:hover .al-arrow { opacity: 1; transform: translateX(4px); }
  .al-row:hover .al-title { color: var(--accent); }

  .al-num {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 700;
    color: var(--rule);
    line-height: 1.4;
    padding-top: 2px;
  }

  .al-content { min-width: 0; }
  .al-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 8px;
    transition: color 0.2s;
  }
  .al-sub {
    font-family: 'EB Garamond', serif;
    font-size: 15px;
    font-style: italic;
    color: var(--muted);
    line-height: 1.6;
  }

  .al-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding-top: 4px;
    flex-shrink: 0;
  }
  .al-tag {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    border: 1px solid var(--rule);
    padding: 3px 10px;
    white-space: nowrap;
  }
  .al-arrow {
    font-size: 14px;
    color: var(--accent);
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
  }

  .al-empty {
    padding: 80px 0;
    text-align: center;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    color: var(--muted);
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    .al-nav, .al-main { padding-left: 24px; padding-right: 24px; }
    .al-row { grid-template-columns: 32px 1fr; }
    .al-meta { display: none; }
    .al-type-title { font-size: 36px; }
  }
`;function c(){let e=(0,n.useSearchParams)().get("type")||"",r=e?o.filter(t=>t.type===e):o,c=e?l[e]??e:"全部文章";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:s}),(0,t.jsxs)("div",{className:"al-body",children:[(0,t.jsx)("div",{className:"al-bg",children:(0,t.jsx)(i.Component,{color:"rgba(128, 128, 128, 1)",animation:{scale:100,speed:90},noise:{opacity:.3,scale:1.2},sizing:"fill",style:{height:"100%"}})}),(0,t.jsx)("div",{className:"al-grain"}),(0,t.jsxs)("div",{className:"al-layer",children:[(0,t.jsxs)("nav",{className:"al-nav",children:[(0,t.jsx)(a.default,{href:"/#section3",className:"al-back",onClick:()=>sessionStorage.setItem("skipIntro","true"),children:"Portfolio"}),(0,t.jsx)("span",{className:"al-nav-label",children:"Article Works"})]}),(0,t.jsxs)("main",{className:"al-main",children:[(0,t.jsxs)("div",{className:"al-header",children:[(0,t.jsx)("div",{className:"al-overline",children:"Article Works · 文章作品集"}),(0,t.jsx)("div",{className:"al-type-title",children:c}),(0,t.jsxs)("div",{className:"al-count",children:[r.length," ",1===r.length?"Article":"Articles"]})]}),(0,t.jsx)("div",{className:"al-divider"}),(0,t.jsx)("div",{className:"al-list",children:0===r.length?(0,t.jsx)("div",{className:"al-empty",children:"No articles found"}):r.map((e,r)=>(0,t.jsxs)(a.default,{href:e.href,className:"al-row",onClick:()=>sessionStorage.setItem("articleFrom","list"),children:[(0,t.jsx)("div",{className:"al-num",children:String(r+1).padStart(2,"0")}),(0,t.jsxs)("div",{className:"al-content",children:[(0,t.jsx)("div",{className:"al-title",children:e.title}),(0,t.jsx)("div",{className:"al-sub",children:e.sub})]}),(0,t.jsxs)("div",{className:"al-meta",children:[(0,t.jsx)("span",{className:"al-tag",children:e.tag}),(0,t.jsx)("span",{className:"al-arrow",children:"→"})]})]},e.href))})]})]})]})]})}function u(){return(0,t.jsxs)("div",{style:{minHeight:"100vh",position:"relative"},children:[(0,t.jsx)("div",{style:{position:"fixed",inset:0,zIndex:0,background:"#fafafa"},children:(0,t.jsx)(i.Component,{color:"rgba(128, 128, 128, 1)",animation:{scale:100,speed:90},noise:{opacity:.3,scale:1.2},sizing:"fill",style:{height:"100%"}})}),(0,t.jsx)("div",{style:{position:"relative",zIndex:1,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)("span",{style:{fontFamily:"monospace",fontSize:"11px",letterSpacing:"0.2em",color:"#8a8070"},children:"LOADING"})})]})}function f(){return(0,t.jsx)(r.Suspense,{fallback:(0,t.jsx)(u,{}),children:(0,t.jsx)(c,{})})}e.s(["default",()=>f])}]);