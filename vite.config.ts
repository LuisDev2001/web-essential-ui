import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-') || tag === 'iconify-icon'
        }
      }
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ["es"],
      name: "EssentialUiWebcomponents",
      fileName: "essential-webcomponents"
    },
    sourcemap: false,
    target: "esnext",
    minify: true,
  },
  define: { 'process.env.NODE_ENV': '"production"' }

})
