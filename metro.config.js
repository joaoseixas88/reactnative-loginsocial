/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const { resolver: defaultResolver } =
    await getDefaultConfig.getDefaultValues();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      ...defaultResolver,
      assetExts: defaultResolver.assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...defaultResolver.sourceExts, 'cjs', 'svg'],
    },
  };
})();
