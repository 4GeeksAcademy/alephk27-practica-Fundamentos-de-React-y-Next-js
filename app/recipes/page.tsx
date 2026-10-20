import { Suspense } from "react";
import RecipeExplorer from "../../src/components/RecipeExplorer";

export default function RecipesPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-5 py-14 text-sm text-stone-600 sm:px-8">
          Cargando recetas...
        </div>
      }
    >
      <RecipeExplorer />
    </Suspense>
  );
}