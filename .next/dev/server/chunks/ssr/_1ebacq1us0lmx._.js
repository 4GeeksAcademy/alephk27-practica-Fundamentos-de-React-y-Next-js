(()=>{"use strict";module.exports = [
"[project]/app/recipes/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecipeDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/recipes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const cuisineLabels = {
    Italian: "Italiana",
    Mexican: "Mexicana",
    Japanese: "Japonesa",
    Indian: "India",
    American: "Americana"
};
const difficultyLabels = {
    Easy: "Fácil",
    Medium: "Media",
    Hard: "Difícil"
};
function RecipeDetailPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const recipe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$recipes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recipes"].find((item)=>item.id === id);
    if (!recipe) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto flex min-h-[calc(100svh-4rem)] max-w-4xl flex-col items-center justify-center px-5 py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-bold uppercase tracking-[0.18em] text-orange-700",
                    children: "Recetario"
                }, void 0, false, {
                    fileName: "[project]/app/recipes/[id]/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-3 text-3xl font-semibold text-stone-950 sm:text-4xl",
                    children: "No se encontró la receta"
                }, void 0, false, {
                    fileName: "[project]/app/recipes/[id]/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 max-w-md text-sm leading-6 text-stone-600",
                    children: "Puede que el enlace no sea válido o que la receta ya no esté disponible."
                }, void 0, false, {
                    fileName: "[project]/app/recipes/[id]/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "mt-7 inline-flex min-h-11 items-center rounded-md bg-emerald-800 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700",
                    href: "/recipes",
                    children: "Volver a las recetas"
                }, void 0, false, {
                    fileName: "[project]/app/recipes/[id]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/recipes/[id]/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950",
                href: "/recipes",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/app/recipes/[id]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    "Todas las recetas"
                ]
            }, void 0, true, {
                fileName: "[project]/app/recipes/[id]/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid overflow-hidden rounded-xl border border-stone-200 bg-white lg:grid-cols-[1.05fr_0.95fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-72 bg-stone-100 sm:min-h-96 lg:min-h-[520px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: recipe.title,
                            className: "h-full min-h-72 w-full object-cover sm:min-h-96 lg:min-h-[520px]",
                            src: recipe.imageUrl
                        }, void 0, false, {
                            fileName: "[project]/app/recipes/[id]/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/recipes/[id]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center p-6 sm:p-9 lg:p-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800",
                                        children: cuisineLabels[recipe.cuisine]
                                    }, void 0, false, {
                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800",
                                        children: difficultyLabels[recipe.difficulty]
                                    }, void 0, false, {
                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-5 text-3xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-4xl",
                                children: recipe.title
                            }, void 0, false, {
                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-base leading-7 text-stone-600",
                                children: recipe.description
                            }, void 0, false, {
                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                "aria-labelledby": "recipe-details",
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold uppercase tracking-[0.16em] text-stone-500",
                                        id: "recipe-details",
                                        children: "Detalles"
                                    }, void 0, false, {
                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "mt-4 grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-md bg-stone-50 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-xs text-stone-500",
                                                        children: "Tiempo de preparación"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "mt-1 font-semibold text-stone-900",
                                                        children: [
                                                            recipe.cookTimeMinutes,
                                                            " minutos"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-md bg-stone-50 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-xs text-stone-500",
                                                        children: "Valoración"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "mt-1 font-semibold text-stone-900",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                className: "mr-1 text-amber-500",
                                                                children: "★"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 19
                                                            }, this),
                                                            recipe.rating.toFixed(1),
                                                            " / 5"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                "aria-labelledby": "recipe-categories",
                                className: "mt-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold uppercase tracking-[0.16em] text-stone-500",
                                        id: "recipe-categories",
                                        children: "Categorías"
                                    }, void 0, false, {
                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-700",
                                                children: cuisineLabels[recipe.cuisine]
                                            }, void 0, false, {
                                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-700",
                                                children: difficultyLabels[recipe.difficulty]
                                            }, void 0, false, {
                                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/recipes/[id]/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/recipes/[id]/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/recipes/[id]/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/recipes/[id]/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/recipes/[id]/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/recipes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recipes",
    ()=>recipes
]);
const recipes = [
    {
        id: "1",
        title: "Spaghetti alla carbonara",
        description: "Pasta romana cremosa con guanciale crujiente, pecorino y pimienta negra.",
        cuisine: "Italian",
        difficulty: "Medium",
        cookTimeMinutes: 30,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "2",
        title: "Risotto de setas",
        description: "Arroz arborio cocinado lentamente con setas, caldo y parmesano.",
        cuisine: "Italian",
        difficulty: "Medium",
        cookTimeMinutes: 45,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "3",
        title: "Pizza margherita",
        description: "Masa fina con tomate, mozzarella fresca, albahaca y aceite de oliva.",
        cuisine: "Italian",
        difficulty: "Medium",
        cookTimeMinutes: 35,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "4",
        title: "Lasaña boloñesa",
        description: "Capas de pasta, ragú cocinado a fuego lento y bechamel dorada.",
        cuisine: "Italian",
        difficulty: "Hard",
        cookTimeMinutes: 90,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "5",
        title: "Trofie al pesto genovés",
        description: "Pasta corta con pesto de albahaca, piñones, ajo y parmesano.",
        cuisine: "Italian",
        difficulty: "Easy",
        cookTimeMinutes: 25,
        rating: 4.7,
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "6",
        title: "Osobuco alla milanese",
        description: "Jarret de ternera estofado y servido con gremolata de limón y perejil.",
        cuisine: "Italian",
        difficulty: "Hard",
        cookTimeMinutes: 150,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "7",
        title: "Tacos al pastor",
        description: "Cerdo adobado con piña, cilantro y cebolla en tortillas de maíz.",
        cuisine: "Mexican",
        difficulty: "Medium",
        cookTimeMinutes: 50,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "8",
        title: "Enchiladas verdes",
        description: "Tortillas rellenas de pollo, cubiertas de salsa de tomatillo y crema.",
        cuisine: "Mexican",
        difficulty: "Medium",
        cookTimeMinutes: 45,
        rating: 4.7,
        imageUrl: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "9",
        title: "Chilaquiles rojos",
        description: "Totopos bañados en salsa de chile, con huevo, queso y aguacate.",
        cuisine: "Mexican",
        difficulty: "Easy",
        cookTimeMinutes: 25,
        rating: 4.6,
        imageUrl: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "10",
        title: "Mole poblano",
        description: "Pollo tierno con una salsa compleja de chiles, especias y chocolate.",
        cuisine: "Mexican",
        difficulty: "Hard",
        cookTimeMinutes: 120,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "11",
        title: "Quesadillas de flor de calabaza",
        description: "Tortillas doradas rellenas de queso fundido y flores de calabaza.",
        cuisine: "Mexican",
        difficulty: "Easy",
        cookTimeMinutes: 20,
        rating: 4.5,
        imageUrl: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "12",
        title: "Pozole rojo",
        description: "Caldo de maíz cacahuazintle y cerdo con chile guajillo y guarniciones frescas.",
        cuisine: "Mexican",
        difficulty: "Hard",
        cookTimeMinutes: 110,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85&sat=-10"
    },
    {
        id: "13",
        title: "Ramen shoyu",
        description: "Fideos en caldo de soja con huevo marinado, cerdo y cebollino.",
        cuisine: "Japanese",
        difficulty: "Hard",
        cookTimeMinutes: 100,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "14",
        title: "Sushi de salmón",
        description: "Arroz avinagrado enrollado con salmón fresco, pepino y aguacate.",
        cuisine: "Japanese",
        difficulty: "Medium",
        cookTimeMinutes: 55,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "15",
        title: "Okonomiyaki",
        description: "Tortita salada japonesa de col con salsa dulce, mayonesa y katsuobushi.",
        cuisine: "Japanese",
        difficulty: "Medium",
        cookTimeMinutes: 35,
        rating: 4.6,
        imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "16",
        title: "Katsu curry",
        description: "Filete de pollo empanado con arroz y curry japonés suave y aromático.",
        cuisine: "Japanese",
        difficulty: "Medium",
        cookTimeMinutes: 50,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=85&sat=15"
    },
    {
        id: "17",
        title: "Onigiri de umeboshi",
        description: "Bolas de arroz moldeadas a mano con ciruela encurtida y alga nori.",
        cuisine: "Japanese",
        difficulty: "Easy",
        cookTimeMinutes: 30,
        rating: 4.5,
        imageUrl: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "18",
        title: "Yakitori de pollo",
        description: "Brochetas a la parrilla glaseadas con salsa tare de soja y mirin.",
        cuisine: "Japanese",
        difficulty: "Easy",
        cookTimeMinutes: 30,
        rating: 4.7,
        imageUrl: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "19",
        title: "Butter chicken",
        description: "Pollo especiado en una salsa sedosa de tomate, mantequilla y crema.",
        cuisine: "Indian",
        difficulty: "Medium",
        cookTimeMinutes: 55,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "20",
        title: "Chana masala",
        description: "Garbanzos guisados con tomate, jengibre y una mezcla fragante de especias.",
        cuisine: "Indian",
        difficulty: "Easy",
        cookTimeMinutes: 40,
        rating: 4.7,
        imageUrl: "https://images.unsplash.com/photo-1582576163090-09d3b6f8f0c4?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "21",
        title: "Palak paneer",
        description: "Queso paneer dorado en una salsa verde de espinacas y especias suaves.",
        cuisine: "Indian",
        difficulty: "Medium",
        cookTimeMinutes: 45,
        rating: 4.6,
        imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "22",
        title: "Biryani de pollo",
        description: "Arroz basmati aromático cocido en capas con pollo, azafrán y especias.",
        cuisine: "Indian",
        difficulty: "Hard",
        cookTimeMinutes: 85,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "23",
        title: "Masoor dal",
        description: "Lentejas rojas cremosas con cúrcuma, comino y un toque de lima.",
        cuisine: "Indian",
        difficulty: "Easy",
        cookTimeMinutes: 35,
        rating: 4.6,
        imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85&sat=20"
    },
    {
        id: "24",
        title: "Aloo gobi",
        description: "Coliflor y patata salteadas con cúrcuma, cilantro y jengibre fresco.",
        cuisine: "Indian",
        difficulty: "Easy",
        cookTimeMinutes: 40,
        rating: 4.5,
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "25",
        title: "Pancakes de arándanos",
        description: "Tortitas esponjosas con arándanos frescos y sirope de arce.",
        cuisine: "American",
        difficulty: "Easy",
        cookTimeMinutes: 25,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "26",
        title: "Mac and cheese",
        description: "Macarrones cubiertos de salsa cremosa de cheddar y gratinados al horno.",
        cuisine: "American",
        difficulty: "Easy",
        cookTimeMinutes: 35,
        rating: 4.7,
        imageUrl: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "27",
        title: "Hamburguesa clásica",
        description: "Carne a la parrilla con queso, lechuga, tomate y salsa en pan tostado.",
        cuisine: "American",
        difficulty: "Easy",
        cookTimeMinutes: 30,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "28",
        title: "Costillas BBQ",
        description: "Costillas de cerdo tiernas, asadas lentamente con glaseado ahumado.",
        cuisine: "American",
        difficulty: "Hard",
        cookTimeMinutes: 180,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85"
    },
    {
        id: "29",
        title: "Clam chowder",
        description: "Sopa cremosa de almejas con patata, apio y un toque de pimienta.",
        cuisine: "American",
        difficulty: "Medium",
        cookTimeMinutes: 50,
        rating: 4.6,
        imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85&sat=-25"
    },
    {
        id: "30",
        title: "Apple pie",
        description: "Tarta americana de manzana con canela y una corteza dorada y crujiente.",
        cuisine: "American",
        difficulty: "Medium",
        cookTimeMinutes: 75,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=1000&q=85"
    }
];
}),
];})()

//# sourceMappingURL=_1ebacq1us0lmx._.js.map