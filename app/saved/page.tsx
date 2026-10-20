"use client";

import Link from "next/link";
import RecipeCard from "../../src/components/RecipeCard";
import { useSavedRecipes } from "../../src/context/SavedRecipesContext";

export default function SavedPage() {
  const { savedRecipes } = useSavedRecipes();

  return (
    <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">
        Tu colección
      </p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 pb-7">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Recetas guardadas
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
            Tus próximas comidas favoritas, todas en un mismo lugar.
          </p>
        </div>
        <span className="text-sm font-medium text-stone-500">
          {savedRecipes.length} {savedRecipes.length === 1 ? "receta" : "recetas"}
        </span>
      </div>

      {savedRecipes.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {savedRecipes.map((item) => (
            <RecipeCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-72 flex-col items-center justify-center py-14 text-center">
          <span
            aria-hidden="true"
            className="mb-5 flex size-14 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-700"
          >
            ♡
          </span>
          <h2 className="text-xl font-semibold text-stone-900">Tu colección empieza aquí</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-stone-600">
            Cuando guardes una receta, la encontrarás aquí para volver a ella cuando quieras.
          </p>
          <Link
            className="mt-6 inline-flex min-h-11 items-center rounded-md bg-emerald-800 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            href="/recipes"
          >
            Buscar recetas
          </Link>
        </div>
      )}
    </section>
  );
}