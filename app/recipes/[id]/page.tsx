"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { recipes } from "../../../src/data/recipes";

const cuisineLabels = {
  Italian: "Italiana",
  Mexican: "Mexicana",
  Japanese: "Japonesa",
  Indian: "India",
  American: "Americana",
};

const difficultyLabels = {
  Easy: "Fácil",
  Medium: "Media",
  Hard: "Difícil",
};

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <section className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-4xl flex-col items-center justify-center px-5 py-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">
          Recetario
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-stone-950 sm:text-4xl">
          No se encontró la receta
        </h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">
          Puede que el enlace no sea válido o que la receta ya no esté disponible.
        </p>
        <Link
          className="mt-7 inline-flex min-h-11 items-center rounded-md bg-emerald-800 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
          href="/recipes"
        >
          Volver a las recetas
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
        href="/recipes"
      >
        <span aria-hidden="true">←</span>
        Todas las recetas
      </Link>

      <div className="mt-6 grid overflow-hidden rounded-xl border border-stone-200 bg-white lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-h-72 bg-stone-100 sm:min-h-96 lg:min-h-[520px]">
          <img
            alt={recipe.title}
            className="h-full min-h-72 w-full object-cover sm:min-h-96 lg:min-h-[520px]"
            src={recipe.imageUrl}
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              {cuisineLabels[recipe.cuisine]}
            </span>
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">
              {difficultyLabels[recipe.difficulty]}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-4xl">
            {recipe.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-stone-600">
            {recipe.description}
          </p>

          <section aria-labelledby="recipe-details" className="mt-8">
            <h2
              className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500"
              id="recipe-details"
            >
              Detalles
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-stone-50 p-4">
                <dt className="text-xs text-stone-500">Tiempo de preparación</dt>
                <dd className="mt-1 font-semibold text-stone-900">
                  {recipe.cookTimeMinutes} minutos
                </dd>
              </div>
              <div className="rounded-md bg-stone-50 p-4">
                <dt className="text-xs text-stone-500">Valoración</dt>
                <dd className="mt-1 font-semibold text-stone-900">
                  <span aria-hidden="true" className="mr-1 text-amber-500">★</span>
                  {recipe.rating.toFixed(1)} / 5
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="recipe-categories" className="mt-7">
            <h2
              className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500"
              id="recipe-categories"
            >
              Categorías
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-700">
                {cuisineLabels[recipe.cuisine]}
              </span>
              <span className="rounded-md border border-stone-200 px-3 py-2 text-sm text-stone-700">
                {difficultyLabels[recipe.difficulty]}
              </span>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}