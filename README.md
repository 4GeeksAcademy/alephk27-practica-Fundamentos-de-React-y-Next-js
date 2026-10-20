# alephk27-practica-Fundamentos-de-React-y-Next-js
# explorador-de-recetas_ia_pt3

Un blog de cocina quiere una app de descubrimiento de recetas donde los usuarios puedan buscar y filtrar recetas, guardar sus favoritas y ver el detalle de cualquier receta. La PM ha enviado la siguiente especificación:

> #### Páginas requeridas
>
> - **`/`** — Home: hero con un botón CTA que navega a `/recipes`
> - **`/recipes`** — Explorador: cuadrícula de tarjetas de recetas con barra de búsqueda y dos filtros (cocina y dificultad). La búsqueda y los filtros activos deben reflejarse en la URL como query params y deben prerrellenar los inputs al cargar la página.
> - **`/recipes/[id]`** — Detalle: información completa de la receta, obtenida del dataset local por su ID
> - **`/saved`** — Recetas guardadas: lista de recetas marcadas por el usuario (almacenadas en el estado del componente)
> - **`/profile`** — Perfil: página estática con un usuario simulado y el contador de recetas guardadas
>
> #### Dataset
>
> Usa un asistente de IA para generar un array de **30 objetos de receta** guardado como `src/data/recipes.ts`. Cada receta debe tener: `id`, `title`, `description`, `cuisine` (una de: Italian, Mexican, Japanese, Indian, American), `difficulty` (Easy, Medium, Hard), `cookTimeMinutes`, `rating` e `imageUrl`.
>
> #### Comportamiento de la búsqueda
>
> La búsqueda filtra recetas cuyo `title` coincida con el término usando una regex case-insensitive (`new RegExp(term, 'i')`). Los filtros de cocina y dificultad se acumulan con la búsqueda.
>
> 💡 **Sugerencia:** Implementa el filtrado dentro del hook `useRecipes`. Encadena los filtros en orden — primero la búsqueda, luego la cocina, luego la dificultad — para que cada paso reduzca el resultado anterior: `recipes.filter(r => regex.test(r.title)).filter(r => !cuisine || r.cuisine === cuisine).filter(r => !difficulty || r.difficulty === difficulty)`.

---

## Páginas y componentes clave

| Página | Componentes clave | Hooks |
|--------|------------------|-------|
| Home `/` | `Hero`, `Navbar` | — |
| Explorador `/recipes` | `SearchBar`, `FilterBar`, `RecipeCard`, `RecipeGrid` | `useState`, `useEffect`, `useSearchParams` |
| Detalle `/recipes/[id]` | `RecipeHeader`, `IngredientsList`, `StepsList` | `useEffect` (carga por ID) |
| Guardadas `/saved` | `RecipeCard` (reutilizado) | `useState` (lista de favoritos) |
| Perfil `/profile` | `ProfileCard` | — |

---

## Lista de verificación

### Setup y dataset

- [ ] Crear el proyecto con `npx create-next-app` (TypeScript + Tailwind + App Router)
- [ ] Generar 30 objetos de receta con un asistente de IA y guardarlos como `src/data/recipes.ts`
- [ ] Definir una `interface Recipe` en TypeScript y usarla en todo el proyecto

### Páginas y enrutamiento

- [ ] Crear las 5 páginas: `/`, `/recipes`, `/recipes/[id]`, `/saved`, `/profile`
- [ ] Toda la navegación usa `<Link>` de Next.js — sin `<a href>` para enlaces internos
- [ ] La `Navbar` está presente en todas las páginas y resalta la ruta activa con `usePathname`

### Búsqueda y filtros

- [ ] `SearchBar` filtra recetas por título usando una regex case-insensitive
- [ ] `FilterBar` tiene un dropdown de cocina y un dropdown de dificultad
- [ ] El término de búsqueda activo y los filtros se almacenan como **query params en la URL** con `useSearchParams`
- [ ] Al cargar la página, los inputs se prerrellenan desde la URL y los resultados ya están filtrados
- [ ] La cuadrícula muestra un mensaje **"No se encontraron recetas"** cuando los filtros no devuelven resultados

### Favoritos

- [ ] Cada `RecipeCard` tiene un icono de marcador que activa/desactiva la receta en la lista de guardadas
- [ ] La lista de guardadas se gestiona con `useState` a nivel compartido y se pasa como props
- [ ] `/saved` muestra solo las recetas marcadas

### Custom hook

- [ ] Crear un custom hook `useRecipes` que encapsule la lógica de filtrado (búsqueda + cocina + dificultad)
- [ ] Usar `useEffect` en al menos un componente con un array de dependencias correcto

### Calidad de código

- [ ] Todos los componentes son `const` funcionales — sin componentes de clase
- [ ] Sin `style={{}}` en línea — solo clases de utilidad de Tailwind
- [ ] Los tipos TypeScript están definidos y se usan de forma consistente

⚠️ **IMPORTANTE:** Sin gestión de estado externa (Redux, Zustand). El estado vive solo en `useState` y props.

---
