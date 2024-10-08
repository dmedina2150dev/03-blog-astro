import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  image: {
    service: passthroughImageService(),
  },
  site: 'https://blog-astro-example.vercel.app/'
});