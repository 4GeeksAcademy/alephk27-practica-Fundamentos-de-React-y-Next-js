"use client";

import Link from "next/link";
import type { recipe } from "../data/recipes";
import { useSavedRecipes } from "../context/SavedRecipesContext";

const difficultyLabels: Record<recipe["difficulty"], string> = {
  Easy: "Fácil",
  Medium: "Media",
  Hard: "Difícil",
};

const cuisineLabels: Record<recipe["cuisine"], string> = {
  Italian: "Italiana",
  Mexican: "Mexicana",
  Japanese: "Japonesa",
  Indian: "India",
  American: "Americana",
};

export default function RecipeCard({ item }: { item: recipe }) {
  const { isSaved, toggleSaved } = useSavedRecipes();
  const saved = isSaved(item.id);

  return (
    <article className="group relative overflow-hidden rounded-lg border border-stone-200 bg-white transition-shadow hover:shadow-md">
      <Link href={`/recipes/${item.id}`} className="block">
        <div className="overflow-hidden bg-stone-100">
          <img
            alt={item.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
            src={item.imageUrl}
          />
        </div>
        <div className="p-4 pr-16 sm:p-5 sm:pr-16">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-emerald-800">
              {cuisineLabels[item.cuisine]}
            </span>
            <span className="text-xs font-medium text-stone-500">
              {difficultyLabels[item.difficulty]}
            </span>
          </div>
          <h2 className="mt-3 text-lg font-semibold leading-snug text-stone-950 group-hover:text-emerald-800">
            {item.title}
          </h2>
          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-stone-600">
            {item.description}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-3 text-xs">
            <span className="text-stone-600">{item.cookTimeMinutes} min</span>
            <span className="font-semibold text-stone-900">
              <span aria-hidden="true" className="mr-1 text-amber-500">★</span>
              {item.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
      <button
        aria-label={saved ? `Quitar ${item.title} de guardadas` : `Guardar ${item.title}`}
        aria-pressed={saved}
        className={`absolute right-3 top-3 flex size-10 items-center justify-center rounded-full border shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
          saved
            ? "border-rose-200 bg-rose-50 text-rose-600"
            : "border-stone-200 bg-white/95 text-stone-600 hover:bg-rose-50 hover:text-rose-600"
        }`}
        onClick={() => toggleSaved(item)}
        title={saved ? "Quitar de guardadas" : "Guardar receta"}
        type="button"
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {saved ? "♥" : "♡"}
        </span>
      </button>
    </article>
  );
}