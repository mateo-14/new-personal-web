import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

export const defaultLocale = 'es'
export const locales = ['es', 'en']

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: vercel(),
  i18n: {
    defaultLocale,
    locales,
    routing: 'manual'
  }
});