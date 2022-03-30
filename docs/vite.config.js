import { defineConfig } from 'vite';
import mdPlugin from 'vite-plugin-markdown';

export default defineConfig({
  base: '/router-light/',
  plugins: [mdPlugin({
    mode: 'html'
  })]
})