import {defineConfig} from "vite";
import {resolve} from "node:path";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import {browserslistToTargets} from "lightningcss";
import browserslist from "browserslist";

export default defineConfig({
  root: "src",
  publicDir: resolve(__dirname, "public"),
  envDir: resolve(__dirname),
  base: "/vite-module3-academy/",
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist()),
    },
  },

  build: {
    outDir: resolve(__dirname, "dist"),
    rolldownOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/pages/about/index.html"),
        catalog: resolve(__dirname, "src/pages/catalog/index.html"),
      },
    },
    sourcemap: true,
  },

  plugins: [
    createSvgSpritePlugin({
      svgFolder: resolve(__dirname, "src/assets/svg"),
    }),
    ViteImageOptimizer({
      jpg: {
        quality: 75
      },
      png: {
        quality: 75
      },
      jpeg: {
        quality: 75
      }
    }),
  ],
});
