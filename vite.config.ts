import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
          entryFileNames: `[name].${env.npm_package_version}.js`,
          chunkFileNames: `[name].${env.npm_package_version}.js`,
          assetFileNames: `[name].${env.npm_package_version}.[ext]`,
        },
      },
    },
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './src/app'), // Add alias for `@app`,
        src: path.resolve(__dirname, './src'), // Add alias for `src`,
      },
    },
    plugins: [
      react(),
      Sitemap({
        hostname: env.VITE_PUBLIC_URL,
        dynamicRoutes: JSON.parse(env.VITE_SITEMAP_URLS || ''),
        robots: [
          {
            userAgent: '*',
            allow: JSON.parse(env.VITE_ALLOW_ROBOTS_URLS || ''),
            disallow: JSON.parse(env.VITE_DISALLOW_ROBOTS_URLS || ''),
          },
        ],
      }),
      VitePWA({
        useCredentials: true,
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'favicon.svg',
          'pwa-64x64.png',
          'apple-touch-icon-180x180.png',
          'pwa-192x192.png',
          'maskable-icon-512x512.png',
          'pwa-512x512.png',
        ],
        manifest: {
          id: env.npm_package_version,
          lang: env.VITE_DEFAULT_LANGUAGE,
          start_url: '/',
          display: 'standalone',
          name: env.VITE_APP_NAME,
          short_name: env.VITE_APP_SHORT_NAME,
          description: env.VITE_APP_DESCRIPTION,
          theme_color: '#' + env.VITE_THEME_COLOR,
          background_color: '#' + env.VITE_BACKGROUND_COLOR,
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
  };
});
