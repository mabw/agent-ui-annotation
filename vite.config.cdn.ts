import { defineConfig } from 'vite';
import { resolve } from 'path';

/**
 * CDN 构建：IIFE 单文件，可通过 <script src> 直接引入。
 * 产物：dist-cdn/agent-ui-annotation.cdn.js（含 sourcemap）
 */
export default defineConfig({
  resolve: {
    alias: {
      '@core': resolve(__dirname, 'src/core'),
      '@element': resolve(__dirname, 'src/element'),
      '@adapters': resolve(__dirname, 'src/adapters'),
      '@themes': resolve(__dirname, 'src/themes'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/cdn.ts'),
      formats: ['iife'],
      name: 'AgentUIAnnotation',
      fileName: () => 'agent-ui-annotation.cdn.js',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
    outDir: 'dist-cdn',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
  },
});
