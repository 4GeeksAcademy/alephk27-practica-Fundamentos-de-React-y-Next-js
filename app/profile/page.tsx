"use client";

import { useSavedRecipes } from "../../src/context/SavedRecipesContext";

export default function ProfilePage() {
  const { savedRecipes } = useSavedRecipes();

  return (
    <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700">
        Tu espacio
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
        Perfil
      </h1>

      <div className="mt-9 grid gap-8 border-y border-stone-200 py-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
        <div
          aria-hidden="true"
          className="flex size-24 items-center justify-center rounded-full bg-emerald-800 text-3xl font-semibold text-white"
        >
          LM
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            Cocinera curiosa
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-950">Lucía Martínez</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
            Me gusta probar sabores nuevos, cocinar para los míos y tener siempre
            una buena receta a mano.
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold text-stone-950">Recetas guardadas</h2>
          <p className="mt-1 text-sm text-stone-600">Tu colección personal</p>
        </div>
        <span className="text-3xl font-semibold tabular-nums text-emerald-800">
          {savedRecipes.length}
        </span>
      </div>
    </section>
  );
}