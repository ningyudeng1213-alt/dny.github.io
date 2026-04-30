(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/etheral-shadow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component",
    ()=>Component
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}
const useInstanceId = ()=>{
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const cleanId = id.replace(/:/g, "");
    const instanceId = `shadowoverlay-${cleanId}`;
    return instanceId;
};
_s(useInstanceId, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
function Component({ sizing = 'fill', color = 'rgba(128, 128, 128, 1)', animation, noise, style, className, children }) {
    _s1();
    const id = useInstanceId();
    const animationEnabled = animation && animation.scale > 0;
    const feColorMatrixRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hueRotateMotionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(180);
    const hueRotateAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const displacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const animationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Component.useEffect": ()=>{
            if (feColorMatrixRef.current && animationEnabled) {
                if (hueRotateAnimation.current) {
                    hueRotateAnimation.current.stop();
                }
                hueRotateMotionValue.set(0);
                hueRotateAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(hueRotateMotionValue, 360, {
                    duration: animationDuration / 25,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                    ease: "linear",
                    delay: 0,
                    onUpdate: {
                        "Component.useEffect": (value)=>{
                            if (feColorMatrixRef.current) {
                                feColorMatrixRef.current.setAttribute("values", String(value));
                            }
                        }
                    }["Component.useEffect"]
                });
                return ({
                    "Component.useEffect": ()=>{
                        if (hueRotateAnimation.current) {
                            hueRotateAnimation.current.stop();
                        }
                    }
                })["Component.useEffect"];
            }
        }
    }["Component.useEffect"], [
        animationEnabled,
        animationDuration,
        hueRotateMotionValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: "100%",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: -displacementScale,
                    filter: animationEnabled ? `url(#${id}) blur(4px)` : "none"
                },
                children: [
                    animationEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        style: {
                            position: "absolute"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: id,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                        result: "undulation",
                                        numOctaves: "2",
                                        baseFrequency: `${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`,
                                        seed: "0",
                                        type: "turbulence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                        ref: feColorMatrixRef,
                                        in: "undulation",
                                        type: "hueRotate",
                                        values: "180"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                                        lineNumber: 133,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                        in: "dist",
                                        result: "circulation",
                                        type: "matrix",
                                        values: "4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                                        lineNumber: 139,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                        in: "SourceGraphic",
                                        in2: "circulation",
                                        scale: displacementScale,
                                        result: "dist"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                                        lineNumber: 145,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                        in: "dist",
                                        in2: "undulation",
                                        scale: displacementScale,
                                        result: "output"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: color,
                            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                            maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                            width: "100%",
                            height: "100%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 10
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                lineNumber: 175,
                columnNumber: 17
            }, this),
            noise && noise.opacity > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                    backgroundSize: noise.scale * 200,
                    backgroundRepeat: "repeat",
                    opacity: noise.opacity / 2
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/etheral-shadow.tsx",
                lineNumber: 181,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/etheral-shadow.tsx",
        lineNumber: 105,
        columnNumber: 9
    }, this);
}
_s1(Component, "m1skgjVRtASffuNdxXljjHdkeFo=", false, function() {
    return [
        useInstanceId,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = Component;
var _c;
__turbopack_context__.k.register(_c, "Component");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/word-pull-up.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WordPullUp",
    ()=>WordPullUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function WordPullUp({ words, wrapperFramerProps = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}, framerProps = {
    hidden: {
        y: 20,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1
    }
}, className, style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
        variants: wrapperFramerProps,
        initial: "hidden",
        animate: "show",
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm", className),
        children: words.split(" ").map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                variants: framerProps,
                style: {
                    display: "inline-block",
                    paddingRight: "8px"
                },
                children: word === "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: " "
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/word-pull-up.tsx",
                    lineNumber: 45,
                    columnNumber: 26
                }, this) : word
            }, i, false, {
                fileName: "[project]/src/components/ui/word-pull-up.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/word-pull-up.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = WordPullUp;
;
var _c;
__turbopack_context__.k.register(_c, "WordPullUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const NavItem = ({ item })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkHovered, setLinkHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScrollTo = (e)=>{
        if (item.scrollTo) {
            e.preventDefault();
            document.getElementById(item.scrollTo)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "relative",
        onMouseEnter: ()=>setOpen(true),
        onMouseLeave: ()=>{
            setOpen(false);
            setLinkHovered(false);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.url,
                className: "relative text-sm py-2 flex items-center gap-1",
                style: {
                    fontFamily: "'Adobe Song Std', serif",
                    letterSpacing: '0.15em',
                    color: linkHovered ? '#4a4035' : '#7a7060',
                    fontWeight: 600,
                    transition: 'color 0.2s'
                },
                onClick: item.scrollTo ? handleScrollTo : undefined,
                onMouseEnter: ()=>setLinkHovered(true),
                onMouseLeave: ()=>setLinkHovered(false),
                children: [
                    item.title,
                    item.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        animate: {
                            rotate: open ? 180 : 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        style: {
                            display: 'inline-block',
                            fontSize: '10px',
                            opacity: 0.6,
                            marginTop: '1px'
                        },
                        children: "▾"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/navbar.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    linkHovered && !item.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layoutId: "underline",
                        className: "absolute bottom-0 h-px w-full",
                        style: {
                            background: '#7a7060'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/navbar.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/navbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: item.dropdown && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
                    initial: {
                        opacity: 0,
                        y: -6
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -6
                    },
                    transition: {
                        duration: 0.18,
                        ease: 'easeOut'
                    },
                    style: {
                        position: 'absolute',
                        top: 'calc(100% + 4px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        minWidth: '120px',
                        background: 'rgba(250,250,248,0.82)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)',
                        padding: '6px 0',
                        zIndex: 200,
                        listStyle: 'none',
                        margin: 0
                    },
                    children: item.items?.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownItem, {
                            item: sub
                        }, sub.id, false, {
                            fileName: "[project]/src/components/ui/navbar.tsx",
                            lineNumber: 88,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/navbar.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/navbar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/navbar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NavItem, "NeLdxg+CbFark53OPx+Bcs5o2Qw=");
_c = NavItem;
const DropdownItem = ({ item })=>{
    _s1();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScrollTo = (e)=>{
        if (item.scrollTo) {
            const target = document.getElementById(item.scrollTo);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.url,
            className: "block px-5 py-2 text-xs",
            style: {
                fontFamily: "'Adobe Song Std', serif",
                letterSpacing: '0.12em',
                color: '#4a4035',
                fontWeight: 600,
                transition: 'color 0.2s',
                background: hovered ? 'rgba(0,0,0,0.04)' : 'transparent'
            },
            onClick: item.scrollTo ? handleScrollTo : undefined,
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            children: item.title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/navbar.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navbar.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DropdownItem, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = DropdownItem;
const Menu = ({ list })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
        transition: {
            bounce: 0,
            type: 'tween'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex items-center gap-8",
                style: {
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                },
                children: list.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        item: item
                    }, item.id, false, {
                        fileName: "[project]/src/components/ui/navbar.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/navbar.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/navbar.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navbar.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "DropdownItem");
__turbopack_context__.k.register(_c2, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/reveal-images.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DemoList",
    ()=>DemoList,
    "RevealImageList",
    ()=>RevealImageList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function RevealImageListItem({ text, images, href, href2 }) {
    const container = "absolute right-8 -top-1 z-40 h-20 w-16";
    const effect = "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative h-fit w-fit overflow-visible py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-black transition-all duration-500 group-hover:opacity-40",
                style: {
                    fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                    color: '#2a2010'
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui/reveal-images.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: effect,
                    children: href2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href2,
                        className: "block h-full w-full",
                        onClick: ()=>sessionStorage.setItem('articleFrom', 'home'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: images[1].alt,
                            src: images[1].src,
                            className: "h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/reveal-images.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/reveal-images.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: images[1].alt,
                        src: images[1].src,
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/reveal-images.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/reveal-images.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/reveal-images.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(container, "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(effect, "duration-200"),
                    children: href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: "block h-full w-full",
                        onClick: ()=>sessionStorage.setItem('articleFrom', 'home'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: images[0].alt,
                            src: images[0].src,
                            className: "h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/reveal-images.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/reveal-images.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: images[0].alt,
                        src: images[0].src,
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/reveal-images.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/reveal-images.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/reveal-images.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/reveal-images.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = RevealImageListItem;
function RevealImageList() {
    const items = [
        {
            text: "Academic Writing",
            href: "/articles/article-detail",
            href2: "/articles/article-detail-yolo",
            images: [
                {
                    src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/article1.jpg`,
                    alt: "Academic Writing 1"
                },
                {
                    src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/article2.jpg`,
                    alt: "Academic Writing 2"
                }
            ]
        },
        {
            text: "Critical Essays",
            href: "/articles/article-detail-goodstuff",
            href2: "/articles/article-detail-heterotopia",
            images: [
                {
                    src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/essay1.jpg`,
                    alt: "Critical Essays 1"
                },
                {
                    src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/essay2.jpg`,
                    alt: "Critical Essays 2"
                }
            ]
        },
        {
            text: "Strategy & Analysis",
            href: "/articles/article-detail-parrotkill",
            href2: "/articles/article-detail-robotdreams",
            images: [
                {
                    src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/strategy1.jpg`,
                    alt: "Strategy 1"
                },
                {
                    src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/strategy2.jpg`,
                    alt: "Strategy 2"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1 rounded-sm bg-transparent py-4",
        style: {
            paddingLeft: '10vw'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-black uppercase",
                style: {
                    color: '#7a7060',
                    letterSpacing: '0.12em',
                    fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif"
                },
                children: "Article Works"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/reveal-images.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealImageListItem, {
                    text: item.text,
                    images: item.images,
                    href: item.href,
                    href2: item.href2
                }, index, false, {
                    fileName: "[project]/src/components/ui/reveal-images.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/reveal-images.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c1 = RevealImageList;
function DemoList() {
    const items = [
        {
            text: "Tickets Diary",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&auto=format&fit=crop&q=60",
                    alt: "Tickets 1"
                },
                {
                    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=200&auto=format&fit=crop&q=60",
                    alt: "Tickets 2"
                }
            ]
        },
        {
            text: "Fortune Trinkets",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&auto=format&fit=crop&q=60",
                    alt: "Fortune 1"
                },
                {
                    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&auto=format&fit=crop&q=60",
                    alt: "Fortune 2"
                }
            ]
        },
        {
            text: "Coming Soon",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=60",
                    alt: "Soon 1"
                },
                {
                    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop&q=60",
                    alt: "Soon 2"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1 rounded-sm bg-transparent px-8 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-black uppercase",
                style: {
                    color: '#7a7060',
                    fontFamily: "'Adobe Song Std', serif",
                    letterSpacing: '0.15em'
                },
                children: "Demo"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/reveal-images.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealImageListItem, {
                    text: item.text,
                    images: item.images
                }, index, false, {
                    fileName: "[project]/src/components/ui/reveal-images.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/reveal-images.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c2 = DemoList;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RevealImageListItem");
__turbopack_context__.k.register(_c1, "RevealImageList");
__turbopack_context__.k.register(_c2, "DemoList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/project-showcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectShowcase",
    ()=>ProjectShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ITEM_AUTO_ROTATE_MS = 7000;
const SECONDARY_IMAGE_FINE_TUNE_SCALE = 0.94;
const SHOWCASE_FRAME_WIDTH = 720;
const SHOWCASE_FRAME_HEIGHT = 412;
const SHOWCASE_GROUP_SHIFT_X = -24;
const SHOWCASE_GROUP_SHIFT_Y = 24;
const items = [
    {
        title: "Tickets Diary",
        description: "数字化票根墙：一款电子票根应用",
        images: [
            {
                src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/tickets-diary.png`,
                alt: "Tickets Diary"
            }
        ]
    },
    {
        title: "Fortune Trinkets",
        description: "本命手串推荐：一款结合五行命理与好运祝福的趣味测试",
        images: [
            {
                src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/Fortune-Trinkets.png`,
                alt: "Fortune Trinkets"
            }
        ]
    },
    {
        title: "Coming Soon",
        description: "敬请期待",
        images: [
            {
                src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/Coming%20soon.jpg`,
                alt: "Coming Soon"
            }
        ]
    }
];
function ProjectShowcase() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // auto-advance through items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectShowcase.useEffect": ()=>{
            const t = setInterval({
                "ProjectShowcase.useEffect.t": ()=>{
                    setActiveIndex({
                        "ProjectShowcase.useEffect.t": (prev)=>(prev + 1) % items.length
                    }["ProjectShowcase.useEffect.t"]);
                }
            }["ProjectShowcase.useEffect.t"], ITEM_AUTO_ROTATE_MS);
            return ({
                "ProjectShowcase.useEffect": ()=>clearInterval(t)
            })["ProjectShowcase.useEffect"];
        }
    }["ProjectShowcase.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '80px',
            paddingLeft: '10vw',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: '0 0 auto',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-black uppercase",
                        style: {
                            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                            color: '#7a7060',
                            letterSpacing: '0.12em',
                            margin: '0 0 28px'
                        },
                        children: "Demo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseEnter: ()=>setActiveIndex(i),
                            style: {
                                cursor: 'pointer',
                                paddingBottom: '24px',
                                marginBottom: i < items.length - 1 ? '8px' : '0',
                                borderBottom: i < items.length - 1 ? '1px solid rgba(42,32,16,0.08)' : 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                        fontSize: '36px',
                                        fontWeight: 900,
                                        color: activeIndex === i ? '#2a2010' : '#7a7060',
                                        margin: 0,
                                        transition: 'color 0.4s ease',
                                        lineHeight: 1.1
                                    },
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/project-showcase.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxHeight: activeIndex === i ? '32px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.4s ease'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "Georgia, 'Songti SC', STSong, serif",
                                            fontSize: '13px',
                                            color: '#2a2010',
                                            margin: '6px 0 0',
                                            letterSpacing: '0.06em'
                                        },
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/project-showcase.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/ui/project-showcase.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/project-showcase.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: '1 1 0',
                    position: 'relative',
                    transform: `translate(${SHOWCASE_GROUP_SHIFT_X}px, ${SHOWCASE_GROUP_SHIFT_Y}px)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: activeIndex === 0 ? 1 : 0,
                            transition: 'opacity 0.9s ease',
                            pointerEvents: activeIndex === 0 ? 'auto' : 'none',
                            width: `${SHOWCASE_FRAME_WIDTH}px`,
                            height: `${SHOWCASE_FRAME_HEIGHT}px`,
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            animation: 'float 5s ease-in-out infinite',
                            filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.28)) drop-shadow(0 8px 24px rgba(0,0,0,0.18)) drop-shadow(0 2px 6px rgba(0,0,0,0.10))'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://ticketsdiary-dny-portfo.netlify.app",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                display: 'block',
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                transition: 'opacity 0.9s ease'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: items[0].images[0].src,
                                alt: items[0].images[0].alt,
                                style: {
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'left top',
                                    cursor: 'pointer'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/project-showcase.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/project-showcase.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: `${SHOWCASE_FRAME_WIDTH}px`,
                            height: `${SHOWCASE_FRAME_HEIGHT}px`,
                            opacity: activeIndex === 0 ? 0 : 1,
                            transition: 'opacity 0.9s ease',
                            pointerEvents: activeIndex === 0 ? 'none' : 'auto'
                        },
                        children: items.slice(1).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.images[0].src,
                                alt: item.images[0].alt,
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: item.title === 'Fortune Trinkets' ? 'left top' : 'center top',
                                    transform: `scale(${SECONDARY_IMAGE_FINE_TUNE_SCALE})`,
                                    transformOrigin: item.title === 'Fortune Trinkets' ? 'left top' : 'center top',
                                    opacity: activeIndex === i + 1 ? 1 : 0,
                                    transition: 'opacity 0.9s ease, transform 0.9s ease'
                                }
                            }, `${i + 1}-0`, false, {
                                fileName: "[project]/src/components/ui/project-showcase.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/project-showcase.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/project-showcase.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/project-showcase.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ProjectShowcase, "16En7kR7TbAJMjBrm+xutVNIc5Q=");
_c = ProjectShowcase;
var _c;
__turbopack_context__.k.register(_c, "ProjectShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/interactive-image-accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingAccordionItem",
    ()=>LandingAccordionItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const BASE = ("TURBOPACK compile-time value", "/dny.github.io") || '';
const ACCORDION_IMAGE_OPACITY = 0.76;
const accordionItems = [
    {
        id: 1,
        title: 'Film',
        imageUrl: `${BASE}/accordion1.jpg`,
        type: 'film'
    },
    {
        id: 2,
        title: 'Creative Brief',
        imageUrl: `${BASE}/accordion2.jpg`,
        type: 'creative-brief'
    },
    {
        id: 3,
        title: 'Internet Literature',
        imageUrl: `${BASE}/accordion3.jpg`,
        type: 'internet-literature'
    },
    {
        id: 4,
        title: 'Games',
        imageUrl: `${BASE}/accordion4.jpg`,
        type: 'games'
    },
    {
        id: 5,
        title: 'TV Series',
        imageUrl: `${BASE}/accordion5.jpg`,
        type: 'tv-series'
    }
];
function LandingAccordionItem() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'row',
            height: '450px',
            gap: '5px',
            overflow: 'visible',
            paddingRight: '80px',
            marginLeft: '100px',
            transform: 'perspective(1200px) rotateY(-6deg) rotateX(2deg)',
            transformStyle: 'preserve-3d'
        },
        children: accordionItems.map((item)=>{
            const isActive = activeId === item.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: ()=>setActiveId(item.id),
                onClick: ()=>router.push(`/articles?type=${item.type}`),
                style: {
                    width: isActive ? '400px' : '60px',
                    flex: '0 0 auto',
                    transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.6s ease, filter 0.6s ease',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    pointerEvents: 'auto',
                    boxShadow: isActive ? '6px 12px 40px rgba(0,0,0,0.38), 2px 4px 10px rgba(0,0,0,0.22), -1px 0 6px rgba(0,0,0,0.1)' : '3px 6px 18px rgba(0,0,0,0.25)',
                    filter: isActive ? 'none' : 'grayscale(0.55) brightness(0.88)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${item.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: ACCORDION_IMAGE_OPACITY,
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: isActive ? 'scale(1.06)' : 'scale(1)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/interactive-image-accordion.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: isActive ? 'linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.0) 55%)' : 'rgba(0,0,0,0.32)',
                            transition: 'background 0.6s ease'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/interactive-image-accordion.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse at 70% 10%, rgba(255,220,140,0.18) 0%, transparent 60%)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/interactive-image-accordion.tsx",
                        lineNumber: 84,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '14px',
                            left: 0,
                            right: 0,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: isActive ? 'flex-start' : 'center',
                            padding: isActive ? '0 14px' : '0',
                            transition: 'all 0.4s ease',
                            overflow: 'hidden'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                fontSize: isActive ? '20px' : '10px',
                                fontWeight: 700,
                                color: 'rgba(255,255,255,0.93)',
                                letterSpacing: '0.12em',
                                writingMode: isActive ? 'horizontal-tb' : 'vertical-rl',
                                textOrientation: 'mixed',
                                transition: 'all 0.4s ease',
                                textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                                transform: isActive ? 'none' : 'rotate(180deg)',
                                whiteSpace: 'nowrap'
                            },
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/interactive-image-accordion.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/interactive-image-accordion.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/src/components/ui/interactive-image-accordion.tsx",
                lineNumber: 39,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/interactive-image-accordion.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(LandingAccordionItem, "3ZF9VxJrrxhp8A1RJ+g07OW1EtQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LandingAccordionItem;
var _c;
__turbopack_context__.k.register(_c, "LandingAccordionItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/gradual-spacing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradualSpacing",
    ()=>GradualSpacing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function GradualSpacing({ text, duration = 0.5, delayMultiple = 0.04, framerProps = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0
    }
}, className, style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-start space-x-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: text.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    variants: framerProps,
                    transition: {
                        duration,
                        delay: i * delayMultiple
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("drop-shadow-sm", className),
                    style: style,
                    children: char === " " ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: " "
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/gradual-spacing.tsx",
                        lineNumber: 40,
                        columnNumber: 29
                    }, this) : char
                }, i, false, {
                    fileName: "[project]/src/components/ui/gradual-spacing.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/gradual-spacing.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/gradual-spacing.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = GradualSpacing;
;
var _c;
__turbopack_context__.k.register(_c, "GradualSpacing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/intro-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntroScreen",
    ()=>IntroScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$etheral$2d$shadow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/etheral-shadow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// 行遮罩：加大 padding/margin 给 skewX + rotateZ 留空间，防止字母被裁边
const lineStyle = {
    overflow: 'hidden',
    display: 'block',
    paddingTop: '15px',
    paddingBottom: '15px',
    marginTop: '-15px',
    marginBottom: '-15px',
    paddingRight: '30px',
    marginRight: '-30px'
};
function IntroScreen({ onEnter }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centerBlockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null) // 画中画内容容器（替代 video）
    ;
    const displacementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const enterBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftSquareRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightSquareRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loaderStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loaderCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loadNumRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTransitioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroScreen.useEffect": ()=>{
            // 动态加载字体
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Space+Mono&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
            // enterBtn 由 GSAP xPercent/yPercent 负责居中
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(enterBtnRef.current, {
                xPercent: -50,
                yPercent: -50
            });
            // 画中画：居中 + 略微放大（防止视差时穿帮），GSAP 管理 transform
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(innerContentRef.current, {
                xPercent: -50,
                yPercent: -50,
                scale: 1.15,
                z: -20
            });
            // --- 字符级拆分（Strict Mode 安全） ---
            const container = containerRef.current;
            container.querySelectorAll('.intro-word').forEach({
                "IntroScreen.useEffect": (wordEl)=>{
                    if (wordEl.querySelector('.intro-char')) return;
                    const text = wordEl.textContent ?? '';
                    wordEl.innerHTML = '';
                    text.split('').forEach({
                        "IntroScreen.useEffect": (ch)=>{
                            const span = document.createElement('span');
                            span.className = 'intro-char';
                            span.style.display = 'inline-block';
                            span.textContent = ch === ' ' ? '\u00A0' : ch;
                            wordEl.appendChild(span);
                        }
                    }["IntroScreen.useEffect"]);
                }
            }["IntroScreen.useEffect"]);
            const chars = container.querySelectorAll('.intro-char');
            // --- 阶梯式初始位置 ---
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(leftTextRef.current, {
                left: '35%',
                top: '40%',
                xPercent: -50,
                yPercent: -50
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(rightTextRef.current, {
                left: '60%',
                top: '65%',
                xPercent: -50,
                yPercent: -50
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(centerBlockRef.current, {
                left: '50%',
                top: '50%',
                xPercent: -50,
                yPercent: -50,
                scale: 0,
                opacity: 0
            });
            // 字符初始状态：灰色 + 偏下 + 复合形变（overflow:hidden 遮住，恢复容器可见）
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(chars, {
                y: '120%',
                skewY: 10,
                skewX: -5,
                rotateZ: 3,
                color: '#c4c4c4'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                leftTextRef.current,
                rightTextRef.current
            ], {
                opacity: 1
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
            const counterObj = {
                val: 0
            };
            // --- 阶段一：三轨道严格同步 ---
            tl.addLabel('loadPhase').to(counterObj, {
                val: 100,
                duration: 2.5,
                ease: 'power2.inOut',
                roundProps: 'val',
                onUpdate () {
                    if (loadNumRef.current) loadNumRef.current.textContent = String(counterObj.val);
                }
            }, 'loadPhase').to(chars, {
                y: '0%',
                skewY: 0,
                skewX: 0,
                rotateZ: 0,
                duration: 1.4,
                stagger: 0.02,
                ease: 'expo.out'
            }, 'loadPhase').to(chars, {
                color: '#0d0d0d',
                duration: 2.5,
                ease: 'power2.inOut'
            }, 'loadPhase')// --- 阶段二：角落提示淡出 ---
            .to([
                loaderStatusRef.current,
                loaderCounterRef.current
            ], {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out'
            })// --- 阶段三：帷幕拉开 + 画中画窗口破土 ---
            .to(leftTextRef.current, {
                left: '8vw',
                top: '50%',
                xPercent: 0,
                yPercent: -50,
                duration: 1.8,
                ease: 'expo.inOut'
            }, '+=0.2').to(rightTextRef.current, {
                left: 'calc(100% - 8vw)',
                top: '50%',
                xPercent: -100,
                yPercent: -50,
                duration: 1.8,
                ease: 'expo.inOut'
            }, '<').to(centerBlockRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.8,
                ease: 'expo.inOut'
            }, '<');
            // --- 交互：mouseenter / mouseleave ---
            const centerBlock = centerBlockRef.current;
            if (!centerBlock) return;
            const handleMouseEnter = {
                "IntroScreen.useEffect.handleMouseEnter": ()=>{
                    if (isTransitioning.current) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(displacementRef.current, {
                        attr: {
                            scale: 60
                        },
                        duration: 1.2,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(leftSquareRef.current, {
                        x: 10,
                        duration: 0.6,
                        ease: 'power2.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(rightSquareRef.current, {
                        x: -10,
                        duration: 0.6,
                        ease: 'power2.out'
                    });
                }
            }["IntroScreen.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "IntroScreen.useEffect.handleMouseLeave": ()=>{
                    if (isTransitioning.current) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(displacementRef.current, {
                        attr: {
                            scale: 0
                        },
                        duration: 1.2,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(mediaContainerRef.current, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    // 画中画归位（x/y 是视差偏移量，归零即回到 xPercent/yPercent 中心）
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(innerContentRef.current, {
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(enterBtnRef.current, {
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(leftSquareRef.current, {
                        x: 0,
                        duration: 0.6,
                        ease: 'power2.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(rightSquareRef.current, {
                        x: 0,
                        duration: 0.6,
                        ease: 'power2.out'
                    });
                }
            }["IntroScreen.useEffect.handleMouseLeave"];
            // --- 交互：全局 mousemove 视差 + 3D 倾斜 ---
            const handleGlobalMouseMove = {
                "IntroScreen.useEffect.handleGlobalMouseMove": (e)=>{
                    if (isTransitioning.current) return;
                    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
                    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(leftTextRef.current, {
                        x: mouseX * -25,
                        y: mouseY * -25,
                        duration: 2,
                        ease: 'power2.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(rightTextRef.current, {
                        x: mouseX * 25,
                        y: mouseY * 25,
                        duration: 2,
                        ease: 'power2.out'
                    });
                    const rect = centerBlock.getBoundingClientRect();
                    const isOver = e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom;
                    if (isOver) {
                        const bx = (e.clientX - rect.left) / rect.width - 0.5;
                        const by = (e.clientY - rect.top) / rect.height - 0.5;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(mediaContainerRef.current, {
                            rotateY: bx * 15,
                            rotateX: -by * 15,
                            duration: 0.5,
                            ease: 'power2.out',
                            transformPerspective: 1000
                        });
                        // 画中画反向视差（x/y 叠加在 xPercent/yPercent 中心之上）
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(innerContentRef.current, {
                            x: -bx * 20,
                            y: -by * 20,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(enterBtnRef.current, {
                            x: bx * 16,
                            y: by * 16,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    }
                }
            }["IntroScreen.useEffect.handleGlobalMouseMove"];
            // --- 点击：Portal 全屏展开转场 ---
            const handleClick = {
                "IntroScreen.useEffect.handleClick": ()=>{
                    if (isTransitioning.current) return;
                    isTransitioning.current = true;
                    const expandTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
                    // 1. 周围元素退场 + 清除液态扭曲
                    expandTl.to([
                        leftTextRef.current,
                        rightTextRef.current,
                        enterBtnRef.current,
                        loaderStatusRef.current,
                        loaderCounterRef.current
                    ], {
                        opacity: 0,
                        y: -30,
                        duration: 0.8,
                        ease: 'power3.inOut',
                        stagger: 0.05
                    }, 0).to(displacementRef.current, {
                        attr: {
                            scale: 0
                        },
                        duration: 0.8,
                        ease: 'power3.inOut'
                    }, 0)// 2. 抹平 3D 倾斜
                    .to(mediaContainerRef.current, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 0.8,
                        ease: 'power3.inOut'
                    }, 0)// 3. 画中画归位并恢复原始比例
                    .to(innerContentRef.current, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        z: 0,
                        duration: 1.5,
                        ease: 'expo.inOut'
                    }, 0.2)// 4. 遮罩窗口突破限制，撑满全屏
                    .to(centerBlockRef.current, {
                        left: 0,
                        top: 0,
                        xPercent: 0,
                        yPercent: 0,
                        width: '100vw',
                        height: '100vh',
                        maxWidth: '100vw',
                        maxHeight: '100vh',
                        duration: 1.5,
                        ease: 'expo.inOut',
                        onComplete: onEnter
                    }, 0.2);
                }
            }["IntroScreen.useEffect.handleClick"];
            centerBlock.addEventListener('mouseenter', handleMouseEnter);
            centerBlock.addEventListener('mouseleave', handleMouseLeave);
            centerBlock.addEventListener('click', handleClick);
            window.addEventListener('mousemove', handleGlobalMouseMove);
            return ({
                "IntroScreen.useEffect": ()=>{
                    tl.kill();
                    centerBlock.removeEventListener('mouseenter', handleMouseEnter);
                    centerBlock.removeEventListener('mouseleave', handleMouseLeave);
                    centerBlock.removeEventListener('click', handleClick);
                    window.removeEventListener('mousemove', handleGlobalMouseMove);
                    if (document.head.contains(link)) document.head.removeChild(link);
                }
            })["IntroScreen.useEffect"];
        }
    }["IntroScreen.useEffect"], [
        onEnter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#f4f4f4',
            overflow: 'hidden',
            fontFamily: "'Oswald', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                style: {
                    display: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "liquid-distortion",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                type: "fractalNoise",
                                baseFrequency: "0.015",
                                numOctaves: 3,
                                result: "noise"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                ref: displacementRef,
                                in: "SourceGraphic",
                                in2: "noise",
                                scale: 0,
                                xChannelSelector: "R",
                                yChannelSelector: "G"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/intro-screen.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loaderStatusRef,
                style: {
                    position: 'absolute',
                    top: '60px',
                    right: '8vw',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                    color: '#0d0d0d',
                    zIndex: 20
                },
                children: [
                    "LOADING",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 246,
                        columnNumber: 16
                    }, this),
                    "ASSETS",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'block',
                            width: '3px',
                            height: '3px',
                            backgroundColor: '#0d0d0d',
                            marginTop: '6px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/intro-screen.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loaderCounterRef,
                style: {
                    position: 'absolute',
                    bottom: '60px',
                    left: '8vw',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                    color: '#0d0d0d',
                    zIndex: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: loadNumRef,
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 258,
                        columnNumber: 40
                    }, this),
                    "/100",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'block',
                            width: '3px',
                            height: '3px',
                            backgroundColor: '#0d0d0d',
                            marginTop: '6px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/intro-screen.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: leftTextRef,
                        style: {
                            position: 'absolute',
                            fontSize: 'clamp(36px, 6.5vw, 100px)',
                            lineHeight: 0.85,
                            fontStyle: 'italic',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            color: '#0d0d0d',
                            display: 'flex',
                            flexDirection: 'column',
                            fontFamily: "'Oswald', sans-serif",
                            whiteSpace: 'nowrap',
                            willChange: 'transform',
                            opacity: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: lineStyle,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "intro-word",
                                    style: {
                                        display: 'inline-block'
                                    },
                                    children: "DENG"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...lineStyle,
                                    paddingLeft: '1.5vw'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "intro-word",
                                    style: {
                                        display: 'inline-block'
                                    },
                                    children: "NINGYU"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: centerBlockRef,
                        style: {
                            position: 'absolute',
                            width: '22vw',
                            height: '40vw',
                            maxWidth: '400px',
                            maxHeight: '720px',
                            minWidth: '240px',
                            minHeight: '430px',
                            cursor: 'pointer',
                            zIndex: 5,
                            transformStyle: 'preserve-3d',
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: mediaContainerRef,
                            style: {
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#fafafa',
                                overflow: 'hidden',
                                position: 'relative',
                                transformStyle: 'preserve-3d'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: innerContentRef,
                                    style: {
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '100vw',
                                        height: '100vh',
                                        filter: 'url(#liquid-distortion)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            backgroundColor: '#fafafa'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    zIndex: 0
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$etheral$2d$shadow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"], {
                                                    color: "rgba(128, 128, 128, 1)",
                                                    animation: {
                                                        scale: 100,
                                                        speed: 90
                                                    },
                                                    noise: {
                                                        opacity: 0.3,
                                                        scale: 1.2
                                                    },
                                                    sizing: "fill",
                                                    style: {
                                                        height: '100%'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/illustration.png`,
                                                alt: "",
                                                style: {
                                                    position: 'absolute',
                                                    left: '50%',
                                                    top: '0',
                                                    transform: 'translateX(-42%)',
                                                    height: '100%',
                                                    width: 'auto',
                                                    zIndex: 1,
                                                    pointerEvents: 'none',
                                                    userSelect: 'none',
                                                    mixBlendMode: 'multiply'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center min-h-screen px-6",
                                                style: {
                                                    paddingBottom: '60px',
                                                    position: 'relative',
                                                    zIndex: 2
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full text-left",
                                                    style: {
                                                        paddingTop: '60px',
                                                        paddingLeft: '10vw'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                lineHeight: 1.1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "font-light text-gray-900 text-left leading-tight tracking-[0.15em]",
                                                                    style: {
                                                                        fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                                        fontSize: '28px',
                                                                        wordSpacing: '1.2em',
                                                                        fontWeight: 300,
                                                                        margin: 0
                                                                    },
                                                                    children: [
                                                                        'WELCOME',
                                                                        'TO',
                                                                        'MY'
                                                                    ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                display: 'inline-block',
                                                                                paddingRight: '8px'
                                                                            },
                                                                            children: w
                                                                        }, w, false, {
                                                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "font-light text-gray-900 text-left leading-tight tracking-[0.15em]",
                                                                    style: {
                                                                        fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                                        fontSize: '40px',
                                                                        wordSpacing: '1.2em',
                                                                        fontWeight: 300,
                                                                        margin: 0
                                                                    },
                                                                    children: [
                                                                        'PORTFOLIO'
                                                                    ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                display: 'inline-block',
                                                                                paddingRight: '8px'
                                                                            },
                                                                            children: w
                                                                        }, w, false, {
                                                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                                            lineNumber: 368,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-5xl md:text-6xl font-light text-gray-900 mt-10 mb-5 tracking-widest",
                                                            style: {
                                                                fontFamily: "Georgia, 'Songti SC', STSong, serif"
                                                            },
                                                            children: "邓甯予"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 text-sm md:text-base leading-8",
                                                            style: {
                                                                fontFamily: "Georgia, 'Songti SC', STSong, serif"
                                                            },
                                                            children: [
                                                                "南开大学文学硕士",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "对运营与商业化感兴趣 · 现实习于新浪微博",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.85em'
                                                                    },
                                                                    children: "「用研究网文与流行文化的眼光做内容，用数据验证每一个判断」"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '32px',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '12px',
                                                                fontSize: '15px',
                                                                fontWeight: 700,
                                                                color: '#2a2010',
                                                                fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                                letterSpacing: '0.25em',
                                                                borderBottom: '2px solid #2a2010',
                                                                paddingBottom: '4px'
                                                            },
                                                            children: "Unfold →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: enterBtnRef,
                                    style: {
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        color: '#ffffff',
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: '12px',
                                        letterSpacing: '0.15em',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        zIndex: 10,
                                        pointerEvents: 'none',
                                        textShadow: '0 4px 10px rgba(0,0,0,0.5)',
                                        whiteSpace: 'nowrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            ref: leftSquareRef,
                                            style: {
                                                width: '4px',
                                                height: '4px',
                                                backgroundColor: '#ffffff',
                                                display: 'block',
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this),
                                        "ENTER",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            ref: rightSquareRef,
                                            style: {
                                                width: '4px',
                                                height: '4px',
                                                backgroundColor: '#ffffff',
                                                display: 'block',
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/intro-screen.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rightTextRef,
                        style: {
                            position: 'absolute',
                            fontSize: 'clamp(28px, 4.5vw, 72px)',
                            lineHeight: 0.85,
                            fontStyle: 'italic',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            color: '#0d0d0d',
                            display: 'flex',
                            flexDirection: 'column',
                            fontFamily: "'Oswald', sans-serif",
                            whiteSpace: 'nowrap',
                            willChange: 'transform',
                            opacity: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: lineStyle,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "intro-word",
                                    style: {
                                        display: 'inline-block'
                                    },
                                    children: "CREATIVE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...lineStyle,
                                    paddingLeft: '1.5vw'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "intro-word",
                                    style: {
                                        display: 'inline-block'
                                    },
                                    children: "STORYTELLER"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/intro-screen.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/intro-screen.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/intro-screen.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/intro-screen.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/intro-screen.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_s(IntroScreen, "AcFTFmDaMG0gwQsALDlqYN7c3cw=");
_c = IntroScreen;
var _c;
__turbopack_context__.k.register(_c, "IntroScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/polaroid-flick-through.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const BASE = ("TURBOPACK compile-time value", "/dny.github.io") || "";
const POLAROID_MAX_IMAGE_HEIGHT = 580;
const VIEW_PANEL_X = 100;
// NOTE: The following is a placeholder for the original Button component.
// In a real app, you would use your existing UI library.
const Button = ({ className, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ${className || ""}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Button;
// Seeded pseudo-random number generator
class SeededRandom {
    seed;
    constructor(seed){
        this.seed = seed;
    }
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    range(min, max) {
        return min + this.next() * (max - min);
    }
}
const ImageStack = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_s(({ images = [
    {
        id: "1",
        src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE1.jpg`,
        alt: "我的图1",
        caption: "毕业致谢",
        width: 1278,
        height: 2500
    },
    {
        id: "2",
        src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE2.jpg`,
        alt: "我的图2",
        caption: "经验分享",
        width: 1280,
        height: 2600
    },
    {
        id: "3",
        src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE3.jpg`,
        alt: "我的图3",
        caption: "经验分享",
        width: 1280,
        height: 2619
    },
    {
        id: "4",
        src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE4.jpg`,
        alt: "我的图4",
        caption: "知识分享",
        width: 1274,
        height: 2625
    },
    {
        id: "5",
        src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE5.jpg`,
        alt: "我的图5",
        caption: "生活感悟",
        width: 1277,
        height: 2619
    }
], maxRotation = 15, scatterRadius = 40, seed = 12345, className = "", onReshuffle, onAllViewedChange }, ref)=>{
    _s();
    const [imagesLoaded, setImagesLoaded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [scatterPositions, setScatterPositions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [currentSeed, setCurrentSeed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](seed);
    const [rightStackIds, setRightStackIds] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [viewedIds, setViewedIds] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Set());
    const [, setLoadedImages] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Set());
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Generate scatter positions to the left of the center
    const generateScatterPositions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ImageStack.useCallback[generateScatterPositions]": (seedValue)=>{
            const rng = new SeededRandom(seedValue);
            return images.map({
                "ImageStack.useCallback[generateScatterPositions]": ()=>({
                        x: rng.range(-280, -240),
                        y: rng.range(-scatterRadius, scatterRadius),
                        rotation: rng.range(-maxRotation, maxRotation),
                        scale: rng.range(0.95, 1.05)
                    })
            }["ImageStack.useCallback[generateScatterPositions]"]);
        }
    }["ImageStack.useCallback[generateScatterPositions]"], [
        images,
        scatterRadius,
        maxRotation
    ]);
    // Preload images
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ImageStack.useEffect": ()=>{
            const preloadImages = {
                "ImageStack.useEffect.preloadImages": async ()=>{
                    const loadPromises = images.map({
                        "ImageStack.useEffect.preloadImages.loadPromises": (image)=>{
                            return new Promise({
                                "ImageStack.useEffect.preloadImages.loadPromises": (resolve, reject)=>{
                                    const img = new Image();
                                    img.onload = ({
                                        "ImageStack.useEffect.preloadImages.loadPromises": ()=>{
                                            setLoadedImages({
                                                "ImageStack.useEffect.preloadImages.loadPromises": (prev)=>new Set(prev).add(image.id)
                                            }["ImageStack.useEffect.preloadImages.loadPromises"]);
                                            resolve(image.id);
                                        }
                                    })["ImageStack.useEffect.preloadImages.loadPromises"];
                                    img.onerror = ({
                                        "ImageStack.useEffect.preloadImages.loadPromises": ()=>{
                                            console.warn(`Failed to load image: ${image.id}`);
                                            reject(new Error(`Failed to load image: ${image.id}`));
                                        }
                                    })["ImageStack.useEffect.preloadImages.loadPromises"];
                                    img.src = image.src;
                                }
                            }["ImageStack.useEffect.preloadImages.loadPromises"]);
                        }
                    }["ImageStack.useEffect.preloadImages.loadPromises"]);
                    try {
                        await Promise.all(loadPromises);
                        setImagesLoaded(true);
                    } catch (error) {
                        console.error("Error preloading images:", error);
                        setImagesLoaded(true);
                    }
                }
            }["ImageStack.useEffect.preloadImages"];
            preloadImages();
        }
    }["ImageStack.useEffect"], [
        images
    ]);
    // Generate initial positions
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ImageStack.useEffect": ()=>{
            setScatterPositions(generateScatterPositions(currentSeed));
        }
    }["ImageStack.useEffect"], [
        currentSeed,
        generateScatterPositions
    ]);
    const allViewed = images.length > 0 && viewedIds.size === images.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ImageStack.useEffect": ()=>{
            onAllViewedChange?.(allViewed);
        }
    }["ImageStack.useEffect"], [
        allViewed,
        onAllViewedChange
    ]);
    // Reshuffle function
    const reshuffle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ImageStack.useCallback[reshuffle]": ()=>{
            const newSeed = Math.floor(Math.random() * 1000000);
            setCurrentSeed(newSeed);
            setRightStackIds([]);
            onReshuffle?.();
        }
    }["ImageStack.useCallback[reshuffle]"], [
        onReshuffle
    ]);
    const handleImageClick = (id)=>{
        setRightStackIds((prev)=>{
            if (prev.includes(id)) return prev;
            return [
                ...prev,
                id
            ];
        });
        setViewedIds((prev)=>{
            if (prev.has(id)) return prev;
            const next = new Set(prev);
            next.add(id);
            return next;
        });
    };
    // Expose reshuffle via ref
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "ImageStack.useImperativeHandle": ()=>({
                reshuffle
            })
    }["ImageStack.useImperativeHandle"], [
        reshuffle
    ]);
    const springConfig = prefersReducedMotion ? {
        type: "tween",
        duration: 0.3
    } : {
        type: "spring",
        stiffness: 100,
        damping: 20
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-[900px] flex items-center justify-center overflow-visible ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: containerRef,
            className: "relative w-full h-full min-w-[1400px]",
            style: {
                perspective: "1000px"
            },
            children: [
                !imagesLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500",
                        children: "Loading images..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                        lineNumber: 239,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                    lineNumber: 238,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                images.map((image, index)=>{
                    const position = scatterPositions[index];
                    if (!position) return null;
                    const rightStackIndex = rightStackIds.indexOf(image.id);
                    const isRightStacked = rightStackIndex !== -1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute",
                        initial: false,
                        animate: isRightStacked ? {
                            x: VIEW_PANEL_X,
                            y: 0,
                            rotate: 0,
                            scale: 1.04,
                            zIndex: images.length + 20 + rightStackIndex,
                            transition: springConfig
                        } : {
                            x: position.x,
                            y: position.y,
                            rotate: position.rotation,
                            scale: position.scale,
                            zIndex: images.length - index,
                            transition: springConfig
                        },
                        style: {
                            left: "50%",
                            top: "50%"
                        },
                        onClick: ()=>handleImageClick(image.id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: "translate(-50%, -50%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 shadow-xl border rounded-sm inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: image.src,
                                        alt: image.alt,
                                        width: image.width,
                                        height: image.height,
                                        className: "block h-auto w-auto rounded-sm object-contain cursor-pointer",
                                        style: {
                                            maxHeight: `${POLAROID_MAX_IMAGE_HEIGHT}px`
                                        },
                                        loading: "lazy",
                                        onError: (e)=>{
                                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='384'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EImage not found%3C/text%3E%3C/svg%3E";
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                                        lineNumber: 281,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-base text-gray-600 text-center font-medium",
                                        style: {
                                            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                            letterSpacing: '0.08em'
                                        },
                                        children: image.caption ?? image.alt
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                                        lineNumber: 294,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                                lineNumber: 280,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                            lineNumber: 279,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, `${image.id}-${currentSeed}`, false, {
                        fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                        lineNumber: 250,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
            lineNumber: 232,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
        lineNumber: 229,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "wT34YYF87lgwKLvwNa6HHDek1Wk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
}));
_c1 = ImageStack;
ImageStack.displayName = "ImageStack";
const ImageStackDemo = ({ onAllViewedChange })=>{
    _s1();
    const sampleImages = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ImageStackDemo.useMemo[sampleImages]": ()=>[
                {
                    id: "mountain",
                    src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE1.jpg`,
                    alt: "我的图1",
                    caption: "毕业致谢",
                    width: 1278,
                    height: 2500
                },
                {
                    id: "forest",
                    src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE2.jpg`,
                    alt: "我的图2",
                    caption: "经验分享",
                    width: 1280,
                    height: 2600
                },
                {
                    id: "ocean",
                    src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE3.jpg`,
                    alt: "我的图3",
                    caption: "经验分享",
                    width: 1280,
                    height: 2619
                },
                {
                    id: "desert",
                    src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE4.jpg`,
                    alt: "我的图4",
                    caption: "知识分享",
                    width: 1274,
                    height: 2625
                },
                {
                    id: "city",
                    src: `${BASE}/polaroid/%E6%88%91%E7%9A%84%E5%9B%BE5.jpg`,
                    alt: "我的图5",
                    caption: "生活感悟",
                    width: 1277,
                    height: 2619
                }
            ]
    }["ImageStackDemo.useMemo[sampleImages]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full items-center justify-center py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageStack, {
                images: sampleImages,
                onAllViewedChange: onAllViewedChange
            }, void 0, false, {
                fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
            lineNumber: 365,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/polaroid-flick-through.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ImageStackDemo, "J6NjeD/d3a6JwV2vR6w2ryUwJak=");
_c2 = ImageStackDemo;
// Keep these references to avoid removing placeholder code used in shared snippets.
void Button;
void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"];
const __TURBOPACK__default__export__ = ImageStackDemo;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "ImageStack");
__turbopack_context__.k.register(_c2, "ImageStackDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/infinite-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteSlider",
    ()=>InfiniteSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function InfiniteSlider({ className, children, gap = 24, reverse = false, speed = 80, speedOnHover, ...props }) {
    _s();
    const groupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [groupWidth, setGroupWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InfiniteSlider.useEffect": ()=>{
            const measure = {
                "InfiniteSlider.useEffect.measure": ()=>{
                    if (!groupRef.current) return;
                    setGroupWidth(groupRef.current.getBoundingClientRect().width);
                }
            }["InfiniteSlider.useEffect.measure"];
            measure();
            const observer = new ResizeObserver({
                "InfiniteSlider.useEffect": ()=>measure()
            }["InfiniteSlider.useEffect"]);
            if (groupRef.current) {
                observer.observe(groupRef.current);
            }
            window.addEventListener('resize', measure);
            return ({
                "InfiniteSlider.useEffect": ()=>{
                    observer.disconnect();
                    window.removeEventListener('resize', measure);
                }
            })["InfiniteSlider.useEffect"];
        }
    }["InfiniteSlider.useEffect"], []);
    const currentSpeed = hovered && speedOnHover ? speedOnHover : speed;
    const duration = groupWidth > 0 ? groupWidth / Math.max(currentSpeed, 1) : 20;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        className: "jsx-9cd454e7ab8a2cfa" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative w-full overflow-hidden', className) || ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    gap: `${gap}px`,
                    animationName: 'infinite-slider-marquee',
                    animationDuration: `${duration}s`,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationDirection: reverse ? 'reverse' : 'normal'
                },
                className: "jsx-9cd454e7ab8a2cfa" + " " + "flex w-max will-change-transform",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: groupRef,
                        style: {
                            gap: `${gap}px`
                        },
                        className: "jsx-9cd454e7ab8a2cfa" + " " + "flex shrink-0 items-center",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/infinite-slider.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        style: {
                            gap: `${gap}px`
                        },
                        className: "jsx-9cd454e7ab8a2cfa" + " " + "flex shrink-0 items-center",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/infinite-slider.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/infinite-slider.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "9cd454e7ab8a2cfa",
                children: "@keyframes infinite-slider-marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/infinite-slider.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(InfiniteSlider, "rydoW5H3NY2FNj36JpKiyHQr7Y0=");
_c = InfiniteSlider;
var _c;
__turbopack_context__.k.register(_c, "InfiniteSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/contact-ticker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactTicker",
    ()=>ContactTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$infinite$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/infinite-slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function ContactTicker({ className, items, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$infinite$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfiniteSlider"], {
            gap: 14,
            reverse: true,
            speed: 72,
            speedOnHover: 24,
            children: items.map((item, idx)=>{
                const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center rounded-full border border-[#b8ab97]/70 bg-[rgba(255,255,255,0.55)] px-5 py-2.5 text-sm font-bold tracking-[0.12em] text-[#4a4035] shadow-[0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-[2px] transition-colors md:text-base",
                    style: {
                        fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif"
                    },
                    children: [
                        item.label,
                        ": ",
                        item.value
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/contact-ticker.tsx",
                    lineNumber: 29,
                    columnNumber: 13
                }, this);
                if (!item.href) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: content
                    }, `${item.label}-${item.value}-${idx}`, false, {
                        fileName: "[project]/src/components/ui/contact-ticker.tsx",
                        lineNumber: 38,
                        columnNumber: 20
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: item.href,
                    className: "rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7f6f]/60",
                    "aria-label": `${item.label} ${item.value}`,
                    children: content
                }, `${item.label}-${item.value}-${idx}`, false, {
                    fileName: "[project]/src/components/ui/contact-ticker.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ui/contact-ticker.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/contact-ticker.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ContactTicker;
var _c;
__turbopack_context__.k.register(_c, "ContactTicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$etheral$2d$shadow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/etheral-shadow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$word$2d$pull$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/word-pull-up.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$reveal$2d$images$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/reveal-images.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$project$2d$showcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/project-showcase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$image$2d$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/interactive-image-accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$gradual$2d$spacing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/gradual-spacing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$intro$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/intro-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$polaroid$2d$flick$2d$through$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/polaroid-flick-through.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$contact$2d$ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/contact-ticker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const BentoItem = ({ children, onClick, delay = 0, index = 0 })=>{
    _s();
    const isPointerInside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        glare: {
            x: 50,
            y: 50
        },
        background: {
            x: 50,
            y: 50
        },
        rotate: {
            x: 0,
            y: 0
        }
    });
    const containerStyle = {
        "--m-x": "50%",
        "--m-y": "50%",
        "--r-x": "0deg",
        "--r-y": "0deg",
        "--bg-x": "50%",
        "--bg-y": "50%",
        "--duration": "300ms",
        "--opacity": "0",
        "--radius": "16px",
        "--easing": "ease"
    };
    const updateStyles = ()=>{
        if (refElement.current) {
            const { background, rotate, glare } = state.current;
            refElement.current.style.setProperty("--m-x", `${glare.x}%`);
            refElement.current.style.setProperty("--m-y", `${glare.y}%`);
            refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
            refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
            refElement.current.style.setProperty("--bg-x", `${background.x}%`);
            refElement.current.style.setProperty("--bg-y", `${background.y}%`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            ...containerStyle,
            perspective: '600px',
            width: '220px',
            aspectRatio: '17/21'
        },
        className: "relative isolate [contain:layout_style] transition-transform will-change-transform",
        ref: refElement,
        animate: {
            y: [
                0,
                -8,
                0
            ]
        },
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay
        },
        onPointerMove: (e)=>{
            const rect = e.currentTarget.getBoundingClientRect();
            const position = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            const percentage = {
                x: 100 / rect.width * position.x,
                y: 100 / rect.height * position.y
            };
            const delta = {
                x: percentage.x - 50,
                y: percentage.y - 50
            };
            state.current.background.x = 50 + percentage.x / 4 - 12.5;
            state.current.background.y = 50 + percentage.y / 3 - 16.67;
            state.current.rotate.x = -(delta.x / 3.5) * 0.6;
            state.current.rotate.y = delta.y / 2 * 0.6;
            state.current.glare.x = percentage.x;
            state.current.glare.y = percentage.y;
            updateStyles();
        },
        onPointerEnter: ()=>{
            isPointerInside.current = true;
            if (refElement.current) {
                refElement.current.style.setProperty("--opacity", "0.6");
                setTimeout(()=>{
                    if (isPointerInside.current) {
                        refElement.current?.style.setProperty("--duration", "0s");
                    }
                }, 300);
            }
        },
        onPointerLeave: ()=>{
            isPointerInside.current = false;
            if (refElement.current) {
                refElement.current.style.removeProperty("--duration");
                refElement.current.style.setProperty("--r-x", "0deg");
                refElement.current.style.setProperty("--r-y", "0deg");
                refElement.current.style.setProperty("--opacity", "0");
            }
        },
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full grid will-change-transform origin-center transition-transform overflow-hidden cursor-pointer",
            style: {
                transform: 'rotateY(var(--r-x)) rotateX(var(--r-y))',
                transitionDuration: 'var(--duration)',
                transitionTimingFunction: 'var(--easing)',
                borderRadius: 'var(--radius)',
                border: '1px solid rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.45)',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
                filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.8)) drop-shadow(2px 4px 12px rgba(0,0,0,0.08))'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full [grid-area:1/1]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full w-full flex flex-col items-center justify-center p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full [grid-area:1/1] mix-blend-soft-light transition-opacity will-change-[background]",
                    style: {
                        opacity: 'var(--opacity)',
                        transitionDuration: 'var(--duration)',
                        borderRadius: 'var(--radius)',
                        background: 'radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.65) 20%, rgba(255,255,255,0) 90%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BentoItem, "3vHafWM472o/OuO47BkKjOQc/Wg=");
_c = BentoItem;
const menus = [
    {
        id: 1,
        title: 'Home',
        url: '/',
        scrollTo: 'section1'
    },
    {
        id: 2,
        title: 'Works',
        url: '/works',
        dropdown: true,
        items: [
            {
                id: 21,
                title: 'Article',
                url: '/#section3',
                scrollTo: 'section3'
            },
            {
                id: 22,
                title: 'Demo',
                url: '/#section4',
                scrollTo: 'section4'
            }
        ]
    },
    {
        id: 3,
        title: 'About',
        url: '/about',
        dropdown: true,
        items: [
            {
                id: 31,
                title: 'Media',
                url: '/#section4-blank',
                scrollTo: 'section4-blank'
            },
            {
                id: 32,
                title: 'Photo',
                url: '/about/photo'
            }
        ]
    },
    {
        id: 4,
        title: 'Resume',
        url: '/resume',
        scrollTo: 'section-contact'
    }
];
const cards = [
    {
        title: "文章作品集",
        sub: "Academic Writing & Content Creation",
        href: "/articles",
        delay: 0,
        index: 0,
        sectionId: 'section3',
        back: 'To be continued...'
    },
    {
        title: "项目作品集",
        sub: "Operation Projects & Case Studies",
        href: "/projects",
        delay: 1,
        index: 1,
        sectionId: 'section4',
        back: 'To be continued...'
    },
    {
        title: "自媒体经历",
        sub: "Social Media & Content Strategy",
        href: "/social",
        delay: 2,
        index: 2,
        sectionId: 'section5',
        back: 'To be continued...'
    }
];
function Section5() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            'start start',
            'end end'
        ]
    });
    const clipTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        30,
        0
    ]);
    const clipBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        70,
        100
    ]);
    const clipLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        35,
        0
    ]);
    const clipRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        65,
        100
    ]);
    const clipPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        clipTop,
        clipBottom,
        clipLeft,
        clipRight
    ], {
        "Section5.useTransform[clipPath]": ([t, b, l, r])=>`inset(${t}% ${100 - r}% ${100 - b}% ${l}%)`
    }["Section5.useTransform[clipPath]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            height: '300vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1800&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s1(Section5, "mvrWvZ2IQhD7W4cY2sfWGocd3S4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = Section5;
function Section4Blank() {
    _s2();
    const [allClicked, setAllClicked] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full items-center gap-10",
        style: {
            gridTemplateColumns: '320px minmax(0,1fr)',
            paddingLeft: 'calc(10vw + 24px)',
            paddingRight: '2vw'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: allClicked ? {
                    opacity: 1,
                    x: 0
                } : {
                    opacity: 0,
                    x: -24
                },
                transition: {
                    duration: 0.6,
                    ease: 'easeOut'
                },
                style: {
                    pointerEvents: allClicked ? 'auto' : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-black uppercase",
                        style: {
                            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                            color: '#7a7060',
                            letterSpacing: '0.12em',
                            margin: '0 0 20px'
                        },
                        children: "Media"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "Georgia, 'Songti SC', STSong, serif",
                            color: '#2a2010',
                            fontSize: '16px',
                            lineHeight: 1.9,
                            margin: 0
                        },
                        children: "小红书自媒体“知识分享”型账号 积累2k+粉丝，擅长用内容打动读者、以情绪洞察为突破引流"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    minWidth: 0,
                    transform: 'translateX(-120px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$polaroid$2d$flick$2d$through$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onAllViewedChange: setAllClicked
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s2(Section4Blank, "dbbC2oJTwzeaR3DVHDMjqJfMPuY=");
_c2 = Section4Blank;
const UnfoldButton = ({ onUnfold })=>{
    _s3();
    const [hovered, setHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onUnfold,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            marginTop: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 700,
            color: hovered ? '#c9a84c' : '#2a2010',
            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
            letterSpacing: '0.25em',
            borderBottom: `2px solid ${hovered ? '#c9a84c' : '#2a2010'}`,
            paddingBottom: '4px',
            textShadow: hovered ? '0 0 20px rgba(201,168,76,0.6)' : 'none',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'color 0.4s ease, text-shadow 0.4s ease, border-color 0.4s ease, transform 0.2s'
        },
        children: "Unfold →"
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(UnfoldButton, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c3 = UnfoldButton;
function Home() {
    _s4();
    const [showIntro, setShowIntro] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (sessionStorage.getItem('skipIntro')) {
                sessionStorage.removeItem('skipIntro');
                // Keep existing skip-intro behavior; this state sync is intentional on first mount.
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setShowIntro(false);
                const hash = window.location.hash;
                if (hash) {
                    requestAnimationFrame({
                        "Home.useEffect": ()=>{
                            requestAnimationFrame({
                                "Home.useEffect": ()=>{
                                    const el = document.querySelector(hash);
                                    if (el) el.scrollIntoView({
                                        behavior: 'instant'
                                    });
                                }
                            }["Home.useEffect"]);
                        }
                    }["Home.useEffect"]);
                }
            }
        }
    }["Home.useEffect"], []);
    const [isUnfolding, setIsUnfolding] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [clickedCard, setClickedCard] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [startAnimation, setStartAnimation] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [cardsVisible, setCardsVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [hasAnimated, setHasAnimated] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [section3Visible, setSection3Visible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [section4Visible, setSection4Visible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [section5Visible, setSection5Visible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [contactVisible, setContactVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [contactTitleHovered, setContactTitleHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const contactItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Home.useMemo[contactItems]": ()=>[
                {
                    label: 'EMAIL',
                    value: 'dny2026@126.com',
                    href: 'mailto:dny2026@126.com'
                },
                {
                    label: 'TEL',
                    value: '15173184161',
                    href: 'tel:15173184161'
                },
                {
                    label: 'Wechat',
                    value: 'Anyd_1213'
                },
                {
                    label: 'EMAIL',
                    value: 'dny2026@126.com',
                    href: 'mailto:dny2026@126.com'
                },
                {
                    label: 'TEL',
                    value: '15173184161',
                    href: 'tel:15173184161'
                },
                {
                    label: 'Wechat',
                    value: 'Anyd_1213'
                }
            ]
    }["Home.useMemo[contactItems]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setTimeout({
                            "Home.useEffect": ()=>setStartAnimation(true)
                        }["Home.useEffect"], 300);
                    } else {
                        setStartAnimation(false);
                    }
                }
            }["Home.useEffect"], {
                threshold: 0.8
            });
            const section = document.getElementById('section2');
            if (section) observer.observe(section);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleCardClick = (card)=>{
        if (clickedCard) return;
        setClickedCard(card.href);
        setTimeout(()=>{
            document.getElementById(card.sectionId)?.scrollIntoView({
                behavior: 'smooth'
            });
            setClickedCard(null);
        }, 400);
    };
    const handleUnfold = ()=>{
        setIsUnfolding(true);
        setTimeout(()=>{
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }, 600);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    if (entries[0].isIntersecting && !hasAnimated) {
                        setCardsVisible(true);
                        setHasAnimated(true);
                        observer.disconnect();
                    }
                }
            }["Home.useEffect"], {
                threshold: 0.95
            });
            const section = document.getElementById('section2');
            if (section) observer.observe(section);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        hasAnimated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setIsUnfolding(false);
                    }
                }
            }["Home.useEffect"], {
                threshold: 0.3
            });
            const section1 = document.getElementById('section1');
            if (section1) observer.observe(section1);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    setSection3Visible(entries[0].isIntersecting);
                }
            }["Home.useEffect"], {
                threshold: 0.3
            });
            const el = document.getElementById('section3');
            if (el) observer.observe(el);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    setSection4Visible(entries[0].isIntersecting);
                }
            }["Home.useEffect"], {
                threshold: 0.3
            });
            const el = document.getElementById('section4');
            if (el) observer.observe(el);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    setSection5Visible(entries[0].isIntersecting);
                }
            }["Home.useEffect"], {
                threshold: 0.3
            });
            const el = document.getElementById('section5');
            if (el) observer.observe(el);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    setContactVisible(entries[0].isIntersecting);
                }
            }["Home.useEffect"], {
                threshold: 0.3
            });
            const el = document.getElementById('section-contact');
            if (el) observer.observe(el);
            return ({
                "Home.useEffect": ()=>observer.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleMouseMove = {
                "Home.useEffect.handleMouseMove": (e)=>{
                    const glowTexts = document.querySelectorAll('.glow-text');
                    glowTexts.forEach({
                        "Home.useEffect.handleMouseMove": (el)=>{
                            const rect = el.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width * 100;
                            const y = (e.clientY - rect.top) / rect.height * 100;
                            const elem = el;
                            elem.style.backgroundImage = `radial-gradient(circle 120px at ${x}% ${y}%, #c8a96e 0%, #3d3528 50%, #3d3528 100%)`;
                            elem.style.setProperty('-webkit-background-clip', 'text');
                            elem.style.setProperty('-webkit-text-fill-color', 'transparent');
                            elem.style.backgroundClip = 'text';
                        }
                    }["Home.useEffect.handleMouseMove"]);
                }
            }["Home.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showIntro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$intro$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntroScreen"], {
                onEnter: ()=>{
                    history.replaceState(null, '', '/');
                    setShowIntro(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    opacity: showIntro ? 0 : 1,
                    pointerEvents: showIntro ? 'none' : 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "btn-glass",
                                    x: "-10%",
                                    y: "-10%",
                                    width: "120%",
                                    height: "120%",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                            type: "fractalNoise",
                                            baseFrequency: "0.04 0.04",
                                            numOctaves: "1",
                                            seed: "2",
                                            result: "turbulence"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            in: "turbulence",
                                            stdDeviation: "1.5",
                                            result: "blurredNoise"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                            in: "SourceGraphic",
                                            in2: "blurredNoise",
                                            scale: "8",
                                            xChannelSelector: "R",
                                            yChannelSelector: "B",
                                            result: "displaced"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            in: "displaced",
                                            stdDeviation: "0.8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 456,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 455,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'fixed',
                                inset: 0,
                                zIndex: 0,
                                backgroundColor: '#fafafa'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$etheral$2d$shadow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"], {
                                color: "rgba(128, 128, 128, 1)",
                                animation: {
                                    scale: 100,
                                    speed: 90
                                },
                                noise: {
                                    opacity: 0.3,
                                    scale: 1.2
                                },
                                sizing: "fill",
                                style: {
                                    height: '100%'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 468,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 467,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                zIndex: 100,
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '18px 24px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                style: {
                                    paddingLeft: '10vw'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    list: menus
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 490,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 478,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section1",
                                    className: "flex flex-col items-center justify-center min-h-screen px-6",
                                    style: {
                                        paddingBottom: '60px',
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${("TURBOPACK compile-time value", "/dny.github.io") || ''}/illustration.png`,
                                            alt: "",
                                            style: {
                                                position: 'absolute',
                                                left: '50%',
                                                top: '0',
                                                transform: 'translateX(-42%)',
                                                height: '100%',
                                                width: 'auto',
                                                zIndex: 1,
                                                pointerEvents: 'none',
                                                userSelect: 'none',
                                                mixBlendMode: 'multiply'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "w-full text-left",
                                            style: {
                                                paddingTop: '60px',
                                                paddingLeft: '10vw',
                                                position: 'relative',
                                                zIndex: 2
                                            },
                                            variants: {
                                                show: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.6,
                                                        ease: 'easeInOut'
                                                    }
                                                },
                                                hide: {
                                                    opacity: 0,
                                                    y: -40,
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: 'easeInOut'
                                                    }
                                                }
                                            },
                                            animate: isUnfolding ? 'hide' : 'show',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        lineHeight: 1.1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$word$2d$pull$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WordPullUp"], {
                                                            words: "WELCOME TO MY",
                                                            className: "glow-text font-bold text-gray-300 text-left leading-tight tracking-[0.15em]",
                                                            framerProps: {
                                                                hidden: {
                                                                    y: 20,
                                                                    opacity: 0
                                                                },
                                                                show: {
                                                                    y: 0,
                                                                    opacity: 1,
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        ease: "easeOut"
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                color: 'inherit',
                                                                fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                                fontSize: '28px',
                                                                wordSpacing: '1.2em'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$word$2d$pull$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WordPullUp"], {
                                                            words: "PORTFOLIO",
                                                            className: "glow-text font-bold text-gray-300 text-left leading-tight tracking-[0.15em]",
                                                            framerProps: {
                                                                hidden: {
                                                                    y: 20,
                                                                    opacity: 0
                                                                },
                                                                show: {
                                                                    y: 0,
                                                                    opacity: 1,
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        ease: "easeOut",
                                                                        delay: 0.15
                                                                    }
                                                                }
                                                            },
                                                            style: {
                                                                color: 'inherit',
                                                                fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                                fontSize: '40px',
                                                                wordSpacing: '1.2em'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "glow-text text-5xl md:text-6xl font-light text-gray-900 mt-10 mb-5 tracking-widest",
                                                    style: {
                                                        fontFamily: "Georgia, 'Songti SC', STSong, serif"
                                                    },
                                                    children: "邓甯予"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "glow-text text-gray-700 text-sm md:text-base leading-8",
                                                    style: {
                                                        fontFamily: "Georgia, 'Songti SC', STSong, serif"
                                                    },
                                                    children: [
                                                        "南开大学文学硕士",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 560,
                                                            columnNumber: 15
                                                        }, this),
                                                        "对运营与商业化感兴趣 · 现实习于新浪微博",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.85em'
                                                            },
                                                            children: "「用研究网文与流行文化的眼光做内容，用数据验证每一个判断」"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UnfoldButton, {
                                                    onUnfold: handleUnfold
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section2",
                                    className: "flex flex-col items-center justify-center min-h-screen px-6 gap-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-6",
                                        style: {
                                            alignItems: 'flex-start'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: "hide",
                                                variants: {
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        filter: 'blur(0px)',
                                                        transition: {
                                                            duration: 0.8,
                                                            ease: 'easeOut',
                                                            delay: 0.4
                                                        }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 30,
                                                        filter: 'blur(8px)',
                                                        transition: {
                                                            duration: 0.25,
                                                            ease: 'easeIn',
                                                            delay: 0
                                                        }
                                                    }
                                                },
                                                animate: cardsVisible ? 'show' : 'hide',
                                                style: {
                                                    margin: 0,
                                                    marginBottom: '56px'
                                                },
                                                children: startAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$gradual$2d$spacing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradualSpacing"], {
                                                    text: "Start where you're curious.",
                                                    className: "text-left font-bold glow-text",
                                                    style: {
                                                        fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                        fontSize: '32px',
                                                        color: '#2a2010',
                                                        letterSpacing: '0.12em'
                                                    }
                                                }, "play", false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-center items-center gap-8 flex-wrap",
                                                children: cards.map((card, i)=>/* 外层：浮现动画（不变） */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: "hide",
                                                        variants: {
                                                            show: {
                                                                opacity: 1,
                                                                y: 0,
                                                                filter: 'blur(0px)',
                                                                transition: {
                                                                    duration: 0.8,
                                                                    ease: 'easeOut',
                                                                    delay: 0.4 + 0.15 * (i + 1)
                                                                }
                                                            },
                                                            hide: {
                                                                opacity: 0,
                                                                y: 40,
                                                                filter: 'blur(6px)',
                                                                transition: {
                                                                    duration: 0.25,
                                                                    ease: 'easeIn',
                                                                    delay: 0
                                                                }
                                                            }
                                                        },
                                                        animate: cardsVisible ? 'show' : 'hide',
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            animate: clickedCard === card.href ? {
                                                                scale: 1.05,
                                                                opacity: 0
                                                            } : {
                                                                scale: 1,
                                                                opacity: 1
                                                            },
                                                            transition: {
                                                                duration: 0.4,
                                                                ease: 'easeInOut'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BentoItem, {
                                                                delay: card.delay,
                                                                index: card.index,
                                                                onClick: ()=>handleCardClick(card),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700 text-base font-medium",
                                                                        style: {
                                                                            fontFamily: "Georgia, 'Songti SC', STSong, serif",
                                                                            textAlign: 'center',
                                                                            display: 'block',
                                                                            width: '100%'
                                                                        },
                                                                        children: card.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            display: 'block',
                                                                            width: '100%',
                                                                            fontSize: '12px',
                                                                            color: '#5a5040',
                                                                            fontWeight: 600,
                                                                            fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                                            letterSpacing: '0.08em',
                                                                            textAlign: 'center'
                                                                        },
                                                                        children: card.sub
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 627,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, card.href, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 17
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 601,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 574,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 572,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section3",
                                    className: "flex items-center justify-center min-h-screen px-6",
                                    style: {
                                        overflow: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: '40px',
                                            width: '100%'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: "hide",
                                                animate: section3Visible ? 'show' : 'hide',
                                                variants: {
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        filter: 'blur(0px)',
                                                        transition: {
                                                            duration: 0.8,
                                                            ease: 'easeOut',
                                                            delay: 0
                                                        }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 30,
                                                        filter: 'blur(8px)',
                                                        transition: {
                                                            duration: 0.25,
                                                            ease: 'easeIn'
                                                        }
                                                    }
                                                },
                                                style: {
                                                    flex: '0 0 auto'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$reveal$2d$images$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevealImageList"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 652,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: "hide",
                                                animate: section3Visible ? 'show' : 'hide',
                                                variants: {
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        filter: 'blur(0px)',
                                                        transition: {
                                                            duration: 0.8,
                                                            ease: 'easeOut',
                                                            delay: 0.15
                                                        }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 30,
                                                        filter: 'blur(8px)',
                                                        transition: {
                                                            duration: 0.25,
                                                            ease: 'easeIn'
                                                        }
                                                    }
                                                },
                                                style: {
                                                    flex: '1 1 0',
                                                    minWidth: 0,
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    paddingRight: '80px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$interactive$2d$image$2d$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingAccordionItem"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section4",
                                    className: "flex flex-col items-center justify-center min-h-screen px-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: "hide",
                                        animate: section4Visible ? 'show' : 'hide',
                                        variants: {
                                            show: {
                                                opacity: 1,
                                                y: 0,
                                                filter: 'blur(0px)',
                                                transition: {
                                                    duration: 0.8,
                                                    ease: 'easeOut'
                                                }
                                            },
                                            hide: {
                                                opacity: 0,
                                                y: 30,
                                                filter: 'blur(8px)',
                                                transition: {
                                                    duration: 0.25,
                                                    ease: 'easeIn'
                                                }
                                            }
                                        },
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$project$2d$showcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectShowcase"], {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 688,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 679,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 678,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section4-blank",
                                    className: "flex min-h-screen items-center justify-start overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section4Blank, {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 694,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 693,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section5",
                                    className: "relative w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: "hide",
                                        animate: section5Visible ? 'show' : 'hide',
                                        variants: {
                                            show: {
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: 'easeOut'
                                                }
                                            },
                                            hide: {
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.25,
                                                    ease: 'easeIn'
                                                }
                                            }
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section5, {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 707,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 699,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 698,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "section-contact",
                                    className: "flex flex-col items-center justify-center min-h-screen px-6 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            initial: "hide",
                                            animate: contactVisible ? 'show' : 'hide',
                                            variants: {
                                                show: {
                                                    opacity: 1,
                                                    y: 0,
                                                    filter: 'blur(0px)',
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: 'easeOut',
                                                        delay: 0
                                                    }
                                                },
                                                hide: {
                                                    opacity: 0,
                                                    y: 30,
                                                    filter: 'blur(8px)',
                                                    transition: {
                                                        duration: 0.25,
                                                        ease: 'easeIn'
                                                    }
                                                }
                                            },
                                            className: "glow-text",
                                            onMouseEnter: ()=>setContactTitleHovered(true),
                                            onMouseLeave: ()=>setContactTitleHovered(false),
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: 700,
                                                color: '#7a7060',
                                                fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                                                letterSpacing: '0.12em',
                                                textShadow: contactTitleHovered ? '0 0 18px rgba(201,168,76,0.65)' : 'none',
                                                transition: 'text-shadow 0.25s ease',
                                                margin: 0
                                            },
                                            children: "Get in touch."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: "hide",
                                            animate: contactVisible ? 'show' : 'hide',
                                            variants: {
                                                show: {
                                                    opacity: 1,
                                                    y: 0,
                                                    filter: 'blur(0px)',
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: 'easeOut',
                                                        delay: 0.15
                                                    }
                                                },
                                                hide: {
                                                    opacity: 0,
                                                    y: 30,
                                                    filter: 'blur(8px)',
                                                    transition: {
                                                        duration: 0.25,
                                                        ease: 'easeIn'
                                                    }
                                                }
                                            },
                                            className: "w-full max-w-5xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$contact$2d$ticker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactTicker"], {
                                                items: contactItems
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 745,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 736,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 712,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 496,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 453,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(Home, "9h8pVUGT4x8wl1AGU4iABvAo314=");
_c4 = Home;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "BentoItem");
__turbopack_context__.k.register(_c1, "Section5");
__turbopack_context__.k.register(_c2, "Section4Blank");
__turbopack_context__.k.register(_c3, "UnfoldButton");
__turbopack_context__.k.register(_c4, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e70940a7._.js.map