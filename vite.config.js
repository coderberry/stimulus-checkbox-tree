import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'netlify') {
    return {}
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'StimulusCheckboxTree',
        fileName: 'stimulus-checkbox-tree'
      },
      rollupOptions: {
        external: ['@hotwired/stimulus'],
        output: {
          globals: {
            '@hotwired/stimulus': 'Stimulus'
          }
        }
      }
    }
  }
})
