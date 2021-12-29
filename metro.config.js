// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: ["db", "mp3", "ttf", "obj", "png", "jpg", "svg", "glb", "cjs"],
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
// module.exports = getDefaultConfig(__dirname);
