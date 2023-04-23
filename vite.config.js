import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    base: './',
    server: {
        port: '3000',
        open: true,
    },
    build: {
        outDir: 'build',
        assetsDir: 'assets',
    },
    resolve: {
        alias: {
            '@synthcore': path.resolve(__dirname, 'src'),
        },
    },
});
