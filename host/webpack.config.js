const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const deps = require("./package.json").dependencies;

const printCompilationMessage = require('./compilation.config.js');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:8080/",
     clean: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    compress: true,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, 'src')],
   //hot: true,
    onListening: function (devServer) {
      const port = devServer.server.address().port

      printCompilationMessage('compiling', port)

      devServer.compiler.hooks.done.tap('OutputMessagePlugin', (stats) => {
        setImmediate(() => {
          if (stats.hasErrors()) {
            printCompilationMessage('failure', port)
          } else {
            printCompilationMessage('success', port)
          }
        })
      })
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ['react-refresh/babel'],
          },
        },
      },
      
        {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
    ],
  },
  optimization: {
    
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
      // (compiler) => {
      //   const TerserPlugin = require('terser-webpack-plugin');
      //   new TerserPlugin({
      //     terserOptions: {
      //       compress: {},
      //     }
      //   }).apply(compiler);
      // },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote:"remote1@http://localhost:3001/remoteEntry.js"
      },
      exposes: {
        "./Counter":"./src/components/Counter.jsx",
        "./AlbumsQuery":"./src/reduxstore/AlbumsQuery.jsx",
        "./ShoppingCartQuery":"./src/reduxstore/ShoppingCartQuery.jsx",
        "./ShoppingCartReducer":"./src/reduxstore/ShoppingCartReducer.jsx"

      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ].filter(Boolean),
});
