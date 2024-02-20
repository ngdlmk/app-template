module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          '@api/*': './src/api/*',
          '@assets/*': './src/assets/*',
          '@components/*': './src/components/*',
          '@constants/*': './src/constants/*',
          '@hooks/*': './src/hooks/*',
          '@navigation/*': './src/navigation/*',
          '@screens/*': './src/screens/*',
          '@state/*': './src/state/*',
          '@tests/*': './src/tests/*',
          '@theme/*': './src/theme/*',
          '@types/*': './src/types/*',
          '@utils/*': './src/utils/*',
          // Match these aliases to those defined in tsconfig.json
        },
      },
    ],
  ],
};
