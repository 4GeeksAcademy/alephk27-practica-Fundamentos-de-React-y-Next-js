"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { recipe } from "../data/recipes";

type SavedRecipesContextValue = {
  savedRecipes: recipe[];
  isSaved: (id: string) => boolean;
  toggleSaved: (item: recipe) => void;
};

const SavedRecipesContext = createContext<SavedRecipesContextValue | null>(null);

export function SavedRecipesProvider({ children }: { children: ReactNode }) {
  const [savedRecipes, setSavedRecipes] = useState<recipe[]>([]);

  function isSaved(id: string) {
    return savedRecipes.some((item) => item.id === id);
  }

  function toggleSaved(item: recipe) {
    setSavedRecipes((current) =>
      current.some((saved) => saved.id === item.id)
        ? current.filter((saved) => saved.id !== item.id)
        : [...current, item],
    );
  }

  return (
    <SavedRecipesContext.Provider value={{ savedRecipes, isSaved, toggleSaved }}>
      {children}
    </SavedRecipesContext.Provider>
  );
}

export function useSavedRecipes() {
  const context = useContext(SavedRecipesContext);

  if (!context) {
    throw new Error("useSavedRecipes must be used inside SavedRecipesProvider");
  }

  return context;
}