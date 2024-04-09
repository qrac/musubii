import { defineConfig } from "minista"
import { pluginSsg } from "minista-plugin-ssg"
import { pluginMdx } from "minista-plugin-mdx"
import { pluginEntry } from "minista-plugin-entry"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [pluginSsg(), pluginMdx(), pluginEntry(), svgr()],
})
