const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  staticDirs: ['.././static'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: '@storybook/svelte',
  svelteOptions: {
    preprocess: import('../svelte.config.js').preprocess
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      use: [require.resolve('@storybook/source-loader')],
      include: [path.resolve(__dirname, '../src')],
      enforce: 'pre'
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      $components: path.resolve(__dirname, '../src/components'),
      $atoms: path.resolve(__dirname, '../src/components/atoms'),
      $molecules: path.resolve(__dirname, '../src/components/molecules'),
      $organisms: path.resolve(__dirname, '../src/components/organisms'),
      $pages: path.resolve(__dirname, '../src/components/pages'),
      $stores: path.resolve(__dirname, '../src/stores')
    };
    return config;
  },
  core: {
    builder: 'webpack4'
  }
};
