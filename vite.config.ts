import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ViteObfuscator from "vite-plugin-obfuscator";

export default defineConfig({
  plugins: [
    react(),
    // ViteObfuscator({
    //   global: true, // глобальная обфускация
    //   options: {
    //     compact: true, // уменьшение размера кода
    //     controlFlowFlattening: true, // управление потоком
    //     deadCodeInjection: true, // инжекция мертвого кода
    //     debugProtection: true, // защита от дебаггинга
    //   },
    // }),
  ],
  build: {
    sourcemap: false, // Отключаем source maps
  },
});
