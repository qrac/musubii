import { defineConfig } from "minista"
import { pluginSsg } from "minista-plugin-ssg"
import { pluginMdx } from "minista-plugin-mdx"
import { pluginBundle } from "minista-plugin-bundle"
import svgr from "vite-plugin-svgr"

import remarkToc from "remark-toc"
import remarkDirective from "remark-directive"
import remarkDirectiveRehype from "remark-directive-rehype"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"

const remarkTocOptions = {
  maxDepth: 3,
}
const rehypePrettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "dracula-soft",
  },
  keepBackground: false,
}

export default defineConfig({
  plugins: [
    pluginSsg(),
    pluginMdx({
      useRehypeHighlight: false,
      mdxOptions: {
        remarkPlugins: [
          [remarkToc, remarkTocOptions],
          remarkDirective,
          remarkDirectiveRehype,
        ],
        rehypePlugins: [
          rehypeSlug,
          rehypeAutolinkHeadings,
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
      },
    }),
    pluginBundle(),
    svgr(),
  ],
})
