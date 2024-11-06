// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Merge default config with your custom config
const config = mergeConfig(defaultConfig, {
  // Your custom Metro configuration options (if any)
});

// Wrap the config with Reanimated's configuration
module.exports = wrapWithReanimatedMetroConfig(config);
