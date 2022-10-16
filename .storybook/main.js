const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/preset-create-react-app"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  staticDirs: [
    "../public",
  ],
  webpackFinal: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@types': path.resolve(__dirname, '../src/types'),
		};
		return config;
	},
}