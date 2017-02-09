import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.dev';

const compiler = webpack(config);


browserSync({
  port: 8080,
  ui: {
    port: 8081
  },
  server: {
    baseDir: 'dist',

    middleware: [
      historyApiFallback(),

      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: { colors: true },
        noInfo: true
      }),

      // bundler should be the same as above
      webpackHotMiddleware(compiler)
    ]
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/index.html'
  ]
});
