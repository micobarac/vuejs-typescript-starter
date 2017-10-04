const isProd = process.argv.indexOf('-p') !== -1;

if (isProd) {
  module.exports = require('./config/webpack.prod.conf');
} else {
  module.exports = require('./config/webpack.dev.conf');
}