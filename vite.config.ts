import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { glob } from 'glob'
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ include: ["lib", "types.d.ts"] }), libInjectCss()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: '@apixjs/ui',
      fileName: 'apixjs-ui',
      formats: ['es']
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        inlineDynamicImports: false,
      },
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map(
          file => [
          relative('lib', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      )
    },
    target: "esNext"
  },
  optimizeDeps: {
    include: ['pdfjs-dist'], // Optionally specify dependency name
    esbuildOptions: {
      supported: {
        'top-level-await': true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./lib/assets/styles.global.scss";`,
      }
    }
  },
})