import Link from "next/link";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-stone-950 text-white">
      <div className="recipe-hero-image absolute inset-0 -z-20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-stone-950/45" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:pb-24">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
          <span className="h-px w-8 bg-orange-300" />
          Recetas para disfrutar
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-7xl">
          Hoy se cocina
          <br />
          algo bueno.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-stone-100 sm:text-lg">
          Encuentra inspiración entre recetas de todo el mundo, guarda tus favoritas
          y descubre qué puedes preparar con tiempo para disfrutar.
        </p>
        <Link
          className="mt-9 inline-flex min-h-12 items-center gap-4 rounded-md bg-orange-500 px-6 text-sm font-bold text-white transition-colors hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
          href="/recipes"
        >
          Explorar recetas
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <p className="absolute bottom-5 right-6 hidden text-xs text-white/70 sm:block">
        Una mesa nueva empieza con una idea.
      </p>
    </section>
  );
}

export default function Home() {
  return <Hero />;
}