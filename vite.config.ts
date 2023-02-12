import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
