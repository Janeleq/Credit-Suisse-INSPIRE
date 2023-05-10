import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  // root,
  plugins: [react()],
  // build: {
  //   outDir,
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     input: {
  //       main: resolve(root, 'index.html'),
  //       about: resolve(root, 'about', 'index.html')
  //     }
  //   }
  // }
})
