const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[fullhash].js",
    chunkFilename: "[id].[fullhash].css",
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),

      new MiniCssExtractPlugin({
        filename: "[name].[fullhash].css",
        chunkFilename: "[id].[fullhash].css"
      }),

      new CssMinimizerPlugin({
        parallel: true,
      }),
    ]
  },

  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossy optimization with custom option
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 75, progressive: true }],
          ['pngquant', { speed: 2, strip: true, quality: [0.2, 0.4] }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
  
});
