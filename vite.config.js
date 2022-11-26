import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

export default defineConfig({
    plugins: [
        laravel(['resources/client/main.jsx']),
        react()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources', 'client'),
            '@components': resolve(__dirname, 'resources', 'client', 'components'),
            '@assets': resolve(__dirname, 'resources', 'client', 'assets'),
            '@shared': resolve(__dirname, 'resources', 'client', 'shared'),
            '@pages': resolve(__dirname, 'resources', 'client', 'pages'),
            '@utils': resolve(__dirname, 'resources', 'client', 'utils'),
        }
    }
});
