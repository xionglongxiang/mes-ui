import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    dedupe: ["vue"],
  },
  plugins: [vue()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    globals: true,
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: [],
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
