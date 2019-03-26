
module.exports = function(api) {
  api.cache(true);
  return {
    "presets":["@babel/preset-env"],
    "plugins":[
      "@babel/plugin-transform-modules-commonjs",
      "@babel/plugin-proposal-class-properties"
    ],
    "babelrcRoots": [".", "node_modules"]
  };
}
