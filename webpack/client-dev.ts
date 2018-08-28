import * as webpack from 'webpack';
import * as path from 'path';
import { CheckerPlugin } from 'awesome-typescript-loader';
import globals from '../config/globals';
import { merge } from './base';
import { HOST } from '../config'

const devConfig: any = merge({
  name: 'client',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      //'webpack/hot/only-dev-server',
      path.resolve(__dirname,'../src/index.tsx'),
    ],
  },
  output: {
    publicPath: HOST + '/dist',
  },
  plugins: [
    new CheckerPlugin(),    
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals('client')),
  ],
});

module.exports = devConfig