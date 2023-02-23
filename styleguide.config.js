module.exports = {
  components: './src/components/**/*.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  ignore: ['./src/components/**/*.styles.{js,jsx,ts,tsx}'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
