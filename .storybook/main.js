path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
  
      },
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
