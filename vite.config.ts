import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import {defineConfig, InlineConfig, UserConfig} from 'vite'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/configs/setupTests.ts'],
  },
  resolve: {alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}},
} as VitestConfigExport)
