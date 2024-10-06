import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/",
  plugins: [react()],
  // buat namanya biar gk random
  // build: {
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: `assets/[name].[ext]`
  //     }
  //   }
  // }
});
