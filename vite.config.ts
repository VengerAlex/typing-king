import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {alias: {'@': fileURLToPath(new URL('./src', import.meta.url)),},},
  // resolve: {
  //   extensions: ['.ts', '.tsx'],
  //   alias: {
  //     '@providers': path.resolve(__dirname, './src/components/providers'),
  //     '@types': path.resolve(__dirname, './src/types'),
  //     '@components': path.resolve(__dirname, './src/components'),
  //     '@hooks': path.resolve(__dirname, './src/hooks'),
  //   }
  // },
})
