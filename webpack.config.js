import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './src/index.js',
  experiments: {
    outputModule: true,
  },
  externalsPresets: {
    node: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    module: true,
    library: { type: 'module' },
    environment: { module: true },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        }],
      },
    ],
  },
};
