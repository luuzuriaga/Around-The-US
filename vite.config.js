import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Cambia esto a './' o a '/' para que Vercel encuentre los archivos
  base: './', 
  server: {
    port: 3000,
  },
});