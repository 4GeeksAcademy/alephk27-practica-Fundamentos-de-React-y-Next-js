"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RecipeCard from "./RecipeCard";
import { useRecipes } from "../hooks/useRecipes";
import type { recipe } from "../data/recipes";

const cuisines: recipe["cuisine"][] = [
  "Italian",
  "Mexican",
  "Japanese",
  "Indian",
  "American",
];

const difficulties: recipe["difficulty"][] = ["Easy", "Medium", "Hard"];

function getCuisine(value: string | null): recipe["cuisine"] | "" {
  return cuisines.find((cuisine) => cuisine === value) ?? "";
}

function getDifficulty(value: string | null): recipe["difficulty"] | "" {
  return difficulties.find((difficulty) => difficulty === value) ?? "";
}

export default function RecipeExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") ?? "");
  const [cuisine, setCuisine] = useState(getCuisine(searchParams.get("cuisine")));
  const [difficulty, setDifficulty] = useState(
    getDifficulty(searchParams.get("difficulty")),
  );

  useEffect(() => {
    const params = new URLSearchParams(query);
    setSearchTerm(params.get("search") ?? "");
    setCuisine(getCuisine(params.get("cuisine")));
    setDifficulty(getDifficulty(params.get("difficulty")));
  }, [query]);

  const visibleRecipes = useRecipes(searchTerm, cuisine, difficulty);

  function updateUrl(nextSearch: string, nextCuisine: string, nextDifficulty: string) {
    const params = new URLSearchParams(query);
    const filters = {
      search: nextSearch.trim(),
      cuisine: nextCuisine,
      difficulty: nextDifficulty,
    };

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });

    const nextQuery = params.toString();
    router.replace(nextQuery ? `/recipes?${nextQuery}` : "/recipes", {
      scroll: false,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateUrl(searchTerm, cuisine, difficulty);
  }

  function clearFilters() {
    setSearchTerm("");
    setCuisine("");
    setDifficulty("");
    router.replace("/recipes", { scroll: false });
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-stone-200 pb-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">
            Encuentra algo rico
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Explorar recetas
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
            Ideas de distintas cocinas para cada antojo y cada momento.
          </p>
        </div>
        <p className="text-sm font-medium text-stone-500">
          {visibleRecipes.length} {visibleRecipes.length === 1 ? "receta" : "recetas"}
        </p>
      </div>

      <form
        className="mt-7 grid gap-3 rounded-lg border border-stone-200 bg-white p-4 sm:grid-cols-[minmax(12rem,1fr)_repeat(2,minmax(9rem,0.45fr))_auto] sm:items-end sm:p-5"
        onSubmit={handleSubmit}
      >
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-stone-700">
            Buscar por nombre
          </span>
          <input
            className="h-11 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
            onChange={(event) => {
              const value = event.currentTarget.value;
              setSearchTerm(value);
              updateUrl(value, cuisine, difficulty);
            }}
            placeholder="Ej. ramen, pasta..."
            type="search"
            value={searchTerm}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-stone-700">
            Cocina
          </span>
          <select
            className="h-11 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
            onChange={(event) => {
              const value = getCuisine(event.currentTarget.value);
              setCuisine(value);
              updateUrl(searchTerm, value, difficulty);
            }}
            value={cuisine}
          >
            <option value="">Todas las cocinas</option>
            <option value="Italian">Italiana</option>
            <option value="Mexican">Mexicana</option>
            <option value="Japanese">Japonesa</option>
            <option value="Indian">India</option>
            <option value="American">Americana</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-stone-700">
            Dificultad
          </span>
          <select
            className="h-11 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
            onChange={(event) => {
              const value = getDifficulty(event.currentTarget.value);
              setDifficulty(value);
              updateUrl(searchTerm, cuisine, value);
            }}
            value={difficulty}
          >
            <option value="">Cualquier nivel</option>
            <option value="Easy">Fácil</option>
            <option value="Medium">Media</option>
            <option value="Hard">Difícil</option>
          </select>
        </label>

        <button
          className="h-11 rounded-md px-3 text-sm font-semibold text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          onClick={clearFilters}
          type="button"
        >
          Limpiar
        </button>
      </form>

      {visibleRecipes.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRecipes.map((item) => (
            <RecipeCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border-y border-stone-200 py-16 text-center">
          <h2 className="text-xl font-semibold text-stone-900">
            No se encontraron recetas
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Prueba con otra búsqueda o cambia los filtros.
          </p>
        </div>
      )}
    </section>
  );
}