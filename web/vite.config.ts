import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";

const webRoot = fileURLToPath(new URL(".", import.meta.url));
const repoRoot = path.resolve(webRoot, "..");

// Bản web tĩnh của "Mỗi ngày cùng con": đóng gói app React hiện có thành
// trang tĩnh để triển khai trên GitHub Pages (không cần máy chủ, không đăng nhập).
export default defineConfig({
  root: webRoot,
  base: "./",
  plugins: [react()],
  resolve: {
    // Dùng lại nguyên mã nguồn của app ở thư mục gốc kho.
    alias: { "@": repoRoot },
  },
  // Dùng lại ảnh và biểu tượng trong public/ của app.
  publicDir: path.join(repoRoot, "public"),
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" ||
          warning.code === "SOURCEMAP_ERROR"
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
});
