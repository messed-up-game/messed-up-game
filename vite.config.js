import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    // Allow the Netlify preview host for the Visual Editor
    allowedHosts: ["devserver-preview--messed-up-game-project.netlify.app"],
  },
});
