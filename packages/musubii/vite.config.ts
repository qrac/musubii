import { defineConfig } from "vite"
import banner from "vite-plugin-banner"

import pkg from "./package.json"
import pjt from "./project.json"

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
  plugins: [
    banner(() => {
      return `${pjt.name} v${pkg.version} ${pkg.license} by ${pkg.author.name}`
    }),
  ],
})
