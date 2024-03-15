import { defineConfig, presetUno } from 'unocss'
import { presetExperimentalPopover } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUno(),
    presetExperimentalPopover(),
  ],
})
