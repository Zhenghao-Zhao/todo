import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // The target server for the API
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: false, // If you are using a self-signed certificate
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Rewrite the path
      },
    },
  },
});
