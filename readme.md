## WebPack

Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

- Bundles ES Modules, CommonJS, and AMD modules (even combined).

- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).

- Dependencies are resolved during compilation, reducing the runtime size.

- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.

- Highly modular plugin system to do whatever else your application requires.

### Main Concepts

#### Entry 

An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

Simple Entry Example

```
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```
Multiple Entry Example

```
module.exports = {
  entry: {
    './path/to/my/entry/file.js',
    './path/to/my/entry/file2.js'
  }
};
```

#### Output

The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

Output Syntax Example

```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

#### Loaders
Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

At a high level, loaders have two properties in your webpack configuration:

- The `test` property identifies which file or files should be transformed.
- The `use` property indicates which loader should be used to do the transforming


Text Loader Example:
```
const path = require('path');

    module.exports = {
    output: {
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
};
```

jsx loader Example

```
module.exports = {   
    module: {   
        loaders: [{   
            test: /\.(js|jsx)$/,   
            exclude: /(node_modules)/,   
            loader: 'babel-loader',   
            query: {   
                presets: ['es2015', 'react', 'stage-O1']   
            }   
        }, ]   
    }   
}   
```

Scss Loader Example:

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```
### Plugins

Plugins are the backbone of webpack. Webpack itself is built on the same plugin system that you use in your webpack configuration!

They also serve the purpose of doing anything else that a loader cannot do. Webpack provides many such plugins out of the box.

#### HTML Webpack Plugin
Plugin that simplifies creation of HTML files to serve your bundles

Installation

``` 
npm i --save-dev html-webpack-plugin
```
Example
```
{
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'assets/admin.html'
    })
  ]
}
```

#### MiniCssExtractPlugin
This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

```
npm install --save-dev mini-css-extract-plugin
```

Basic Example 
```
// import plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //add it in plugins list 
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // add loader from from MiniCssExtractPlugin
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
```
SCSS Example 
```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin({filename: 'style.css'})],
  module: {
    rules: [
     {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
};
```

#### CssMinimizerWebpackPlugin

This plugin uses cssnano to optimize and minify your CSS.

Just like optimize-css-assets-webpack-plugin but more accurate with source maps and assets using query string, allows caching and works in parallel mode.

Installation
```
npm install css-minimizer-webpack-plugin --save-dev
```

Usage
```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

Above code minimize code in production environment only. to minimize code in development environment please add following in webpack.config.js

```
// [...]
module.exports = {
  optimization: {
    // [...]
    minimize: true,
  },
};
```
