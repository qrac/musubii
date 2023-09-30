import { defineConfig } from "vite"

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: ["./src/musubii.css"],
      output: {
        assetFileNames: "[name].[ext]",
      },
    },
  },
})
