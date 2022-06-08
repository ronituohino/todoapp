const withTM = require("next-transpile-modules")([
  "ui",
  "state-machine",
]);

module.exports = withTM({
  reactStrictMode: true,
});
