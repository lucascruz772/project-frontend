import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/project-frontend/",
  css: {
    modules: {
      localsConvention: "camelCase", // Garante que as classes sejam acessíveis como camelCase (ex.: styles.taskList)
    },
  },
});
