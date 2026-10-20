import "./globals.css";
import Navbar from "../src/components/Navbar";
import { SavedRecipesProvider } from "../src/context/SavedRecipesContext";

export const metadata = {
  title: "Sazón | Descubre tu próxima receta",
  description: "Encuentra recetas para cocinar algo delicioso cada día.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-stone-50 text-stone-950 antialiased">
        <Navbar />
        <SavedRecipesProvider>
          <main className="min-h-screen pt-16">{children}</main>
        </SavedRecipesProvider>
      </body>
    </html>
  );
}
