const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.extensions.merge(['.ts', '.js', '.vue', '.json', '.html', '.scss']);
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').set('@', resolve('src'));

    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();

    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('awesome-typescript-loader')
      .loader('awesome-typescript-loader')
      .end();

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.limit = 10000;
        options.name = 'assets/img/[name].[hash:7].[ext]';
        return options;
      })
      .end();

    config.module
      .rule('media')
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.limit = 10000;
        options.name = 'assets/media/[name].[hash:7].[ext]';
        return options;
      })
      .end();

    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.limit = 10000;
        options.name = 'assets/fonts/[name].[hash:7].[ext]';
        return options;
      })
      .end();
  }
};
