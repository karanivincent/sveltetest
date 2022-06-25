import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('./src/components/'),
          $atoms: path.resolve('./src/components/atoms/'),
          $molecules: path.resolve('./src/components/molecules/'),
          $organisms: path.resolve('./src/components/organisms/'),
          $pages: path.resolve('./src/components/pages/'),
          $stores: path.resolve('./src/stores/')
        }
      }
    }
  }
};

export default config;
