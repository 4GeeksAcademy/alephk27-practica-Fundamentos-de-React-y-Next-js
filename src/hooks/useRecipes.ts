import { recipes, type recipe } from "../data/recipes";

export function useRecipes(
  search: string,
  cuisine: string,
  difficulty: string,
): recipe[] {
  let regex: RegExp;
  try {
    regex = new RegExp(search, "i");
  } catch {
    return [];
  }

  return recipes
    .filter((item) => regex.test(item.title))
    .filter((item) => !cuisine || item.cuisine === cuisine)
    .filter((item) => !difficulty || item.difficulty === difficulty);
}