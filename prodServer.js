import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.prod';
import Express from 'express';

const app = new Express();
const port = 3000;
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info('Listening @ http://localhost:%s/ ', port
    );
  }
  /* eslint-enable no-console */
});
