import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    // host: "0.0.0.0",
    host: true, // allows access from network
    port: 5173, // optional: set your port
    // strictPort: true, // prevent auto-changing port
  },
});
