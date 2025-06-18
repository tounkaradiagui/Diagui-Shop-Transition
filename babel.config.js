module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@assets': './assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@providers': './src/providers',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
