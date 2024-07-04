import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { glob } from 'glob'
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: '@apixjs/ui',
      formats: ['es'],
      fileName: 'apixjs-ui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx}').map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    },
    target:"ESNext"
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
        additionalData: `@import "./src/assets/styles.global.scss";`,
      }
    }
  },
})