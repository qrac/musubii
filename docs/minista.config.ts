import { defineConfig } from "minista"
import { pluginSsg } from "minista-plugin-ssg"
import { pluginMdx } from "minista-plugin-mdx"
import { pluginEntry } from "minista-plugin-entry"
import svgr from "vite-plugin-svgr"

import remarkToc from "remark-toc"
import remarkDirective from "remark-directive"
import remarkDirectiveRehype from "remark-directive-rehype"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const remarkTocOptions = {
  maxDepth: 3,
}

export default defineConfig({
  plugins: [
    pluginSsg(),
    pluginMdx({
      mdxOptions: {
        remarkPlugins: [
          [remarkToc, remarkTocOptions],
          remarkDirective,
          remarkDirectiveRehype,
        ],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      },
    }),
    pluginEntry(),
    svgr(),
  ],
})
