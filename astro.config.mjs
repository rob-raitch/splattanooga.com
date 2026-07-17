import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Move "fonts" completely out of the experimental block!
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Flavors',
      cssVariable: '--font-flavors',
    },
    {
      provider: fontProviders.google(),
      name: 'Quicksand',
      cssVariable: '--font-quicksand', // Create a separate variable for your body text
    }
  ]
});
