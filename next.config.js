const withTM = require("next-transpile-modules")(["react-github-btn"]);
module.exports = withTM({
  target: "serverless",
  webpack(config, options) {
    return config;
  },
});
