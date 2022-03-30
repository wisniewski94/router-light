import { defineConfig } from 'vite';
import mdPlugin from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [mdPlugin({
    mode: 'html'
  })]
})