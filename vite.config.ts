/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")
    },
  },
  test: {
    globals:true,
    environment:"jsdom",
  }
})
