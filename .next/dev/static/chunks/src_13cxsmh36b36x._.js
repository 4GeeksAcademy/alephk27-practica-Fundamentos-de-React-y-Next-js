(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/RecipeCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecipeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$SavedRecipesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/SavedRecipesContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const difficultyLabels = {
    Easy: "Fácil",
    Medium: "Media",
    Hard: "Difícil"
};
const cuisineLabels = {
    Italian: "Italiana",
    Mexican: "Mexicana",
    Japanese: "Japonesa",
    Indian: "India",
    American: "Americana"
};
function RecipeCard({ item }) {
    _s();
    const { isSaved, toggleSaved } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$SavedRecipesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedRecipes"])();
    const saved = isSaved(item.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative overflow-hidden rounded-lg border border-stone-200 bg-white transition-shadow hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/recipes/${item.id}`,
                className: "block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden bg-stone-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: item.title,
                            className: "aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",
                            loading: "lazy",
                            src: item.imageUrl
                        }, void 0, false, {
                            fileName: "[project]/src/components/RecipeCard.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecipeCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 pr-16 sm:p-5 sm:pr-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-emerald-800",
                                        children: cuisineLabels[item.cuisine]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeCard.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-stone-500",
                                        children: difficultyLabels[item.difficulty]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeCard.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecipeCard.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-lg font-semibold leading-snug text-stone-950 group-hover:text-emerald-800",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-stone-600",
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeCard.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex items-center justify-between border-t border-stone-100 pt-3 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-stone-600",
                                        children: [
                                            item.cookTimeMinutes,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecipeCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-stone-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "mr-1 text-amber-500",
                                                children: "★"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RecipeCard.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            item.rating.toFixed(1)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecipeCard.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecipeCard.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecipeCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecipeCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": saved ? `Quitar ${item.title} de guardadas` : `Guardar ${item.title}`,
                "aria-pressed": saved,
                className: `absolute right-3 top-3 flex size-10 items-center justify-center rounded-full border shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${saved ? "border-rose-200 bg-rose-50 text-rose-600" : "border-stone-200 bg-white/95 text-stone-600 hover:bg-rose-50 hover:text-rose-600"}`,
                onClick: ()=>toggleSaved(item),
                title: saved ? "Quitar de guardadas" : "Guardar receta",
                type: "button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    className: "text-xl leading-none",
                    children: saved ? "♥" : "♡"
                }, void 0, false, {
                    fileName: "[project]/src/components/RecipeCard.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeCard.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(RecipeCard, "KfTfWVICu7N463iSG7C+MYcn+Bc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$SavedRecipesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedRecipes"]
    ];
});
_c = RecipeCard;
var _c;
__turbopack_context__.k.register(_c, "RecipeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RecipeExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecipeExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecipeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RecipeCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRecipes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const cuisines = [
    "Italian",
    "Mexican",
    "Japanese",
    "Indian",
    "American"
];
const difficulties = [
    "Easy",
    "Medium",
    "Hard"
];
function getCuisine(value) {
    return cuisines.find((cuisine)=>cuisine === value) ?? "";
}
function getDifficulty(value) {
    return difficulties.find((difficulty)=>difficulty === value) ?? "";
}
function RecipeExplorer() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const query = searchParams.toString();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("search") ?? "");
    const [cuisine, setCuisine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getCuisine(searchParams.get("cuisine")));
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDifficulty(searchParams.get("difficulty")));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecipeExplorer.useEffect": ()=>{
            const params = new URLSearchParams(query);
            setSearchTerm(params.get("search") ?? "");
            setCuisine(getCuisine(params.get("cuisine")));
            setDifficulty(getDifficulty(params.get("difficulty")));
        }
    }["RecipeExplorer.useEffect"], [
        query
    ]);
    const visibleRecipes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecipes"])(searchTerm, cuisine, difficulty);
    function updateUrl(nextSearch, nextCuisine, nextDifficulty) {
        const params = new URLSearchParams(query);
        const filters = {
            search: nextSearch.trim(),
            cuisine: nextCuisine,
            difficulty: nextDifficulty
        };
        Object.entries(filters).forEach(([key, value])=>{
            if (value) params.set(key, value);
            else params.delete(key);
        });
        const nextQuery = params.toString();
        router.replace(nextQuery ? `/recipes?${nextQuery}` : "/recipes", {
            scroll: false
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        updateUrl(searchTerm, cuisine, difficulty);
    }
    function clearFilters() {
        setSearchTerm("");
        setCuisine("");
        setDifficulty("");
        router.replace("/recipes", {
            scroll: false
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-5 border-b border-stone-200 pb-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase tracking-[0.18em] text-orange-700",
                                children: "Encuentra algo rico"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl",
                                children: "Explorar recetas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 max-w-xl text-sm leading-6 text-stone-600 sm:text-base",
                                children: "Ideas de distintas cocinas para cada antojo y cada momento."
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-stone-500",
                        children: [
                            visibleRecipes.length,
                            " ",
                            visibleRecipes.length === 1 ? "receta" : "recetas"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecipeExplorer.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "mt-7 grid gap-3 rounded-lg border border-stone-200 bg-white p-4 sm:grid-cols-[minmax(12rem,1fr)_repeat(2,minmax(9rem,0.45fr))_auto] sm:items-end sm:p-5",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-2 block text-xs font-semibold text-stone-700",
                                children: "Buscar por nombre"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "h-11 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15",
                                onChange: (event)=>{
                                    const value = event.currentTarget.value;
                                    setSearchTerm(value);
                                    updateUrl(value, cuisine, difficulty);
                                },
                                placeholder: "Ej. ramen, pasta...",
                                type: "search",
                                value: searchTerm
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-2 block text-xs font-semibold text-stone-700",
                                children: "Cocina"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "h-11 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15",
                                onChange: (event)=>{
                                    const value = getCuisine(event.currentTarget.value);
                                    setCuisine(value);
                                    updateUrl(searchTerm, value, difficulty);
                                },
                                value: cuisine,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Todas las cocinas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Italian",
                                        children: "Italiana"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Mexican",
                                        children: "Mexicana"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Japanese",
                                        children: "Japonesa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Indian",
                                        children: "India"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "American",
                                        children: "Americana"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-2 block text-xs font-semibold text-stone-700",
                                children: "Dificultad"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "h-11 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15",
                                onChange: (event)=>{
                                    const value = getDifficulty(event.currentTarget.value);
                                    setDifficulty(value);
                                    updateUrl(searchTerm, cuisine, value);
                                },
                                value: difficulty,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Cualquier nivel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Easy",
                                        children: "Fácil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Medium",
                                        children: "Media"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Hard",
                                        children: "Difícil"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecipeExplorer.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "h-11 rounded-md px-3 text-sm font-semibold text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700",
                        onClick: clearFilters,
                        type: "button",
                        children: "Limpiar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecipeExplorer.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            visibleRecipes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                children: visibleRecipes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecipeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: item
                    }, item.id, false, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeExplorer.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 border-y border-stone-200 py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-stone-900",
                        children: "No se encontraron recetas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-stone-600",
                        children: "Prueba con otra búsqueda o cambia los filtros."
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecipeExplorer.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecipeExplorer.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeExplorer.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(RecipeExplorer, "dajsfAk60Xh+AtuCypIsR5zyC5g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecipes"]
    ];
});
_c = RecipeExplorer;
var _c;
__turbopack_context__.k.register(_c, "RecipeExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/recipes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRecipes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecipes",
    ()=>useRecipes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$recipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/recipes.ts [app-client] (ecmascript)");
;
function useRecipes(search, cuisine, difficulty) {
    let regex;
    try {
        regex = new RegExp(search, "i");
    } catch  {
        return [];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$recipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recipes"].filter((item)=>regex.test(item.title)).filter((item)=>!cuisine || item.cuisine === cuisine).filter((item)=>!difficulty || item.difficulty === difficulty);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_13cxsmh36b36x._.js.map