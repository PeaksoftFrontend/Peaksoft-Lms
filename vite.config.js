import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export const viteConfig = defineConfig({
  plugins: [react()],
});
