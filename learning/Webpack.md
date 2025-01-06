
###  [Go Back](/readme.md)

# WebPack

Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

- Bundles ES Modules, CommonJS, and AMD modules (even combined).

- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).

- Dependencies are resolved during compilation, reducing the runtime size.

- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.

- Highly modular plugin system to do whatever else your application requires.

## Main Concepts

### Entry 

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

### Output

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

###  devServer

This set of options is picked up by webpack-dev-server and can be used to change its behavior in various ways. Here's a rudimentary example that gzips and serves everything from our public/ directory in the project root:

```
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
```

### devServer Options

#### devServer.hot 
*used for enabling hot module replacement*

#### devServer.port
*Specify a port number to listen for requests on.*

#### devServer.watchFiles

*This option allows you to configure a list of globs/directories/files to watch for file changes. For example:*

```
module.exports = {
  //...
  devServer: {
    watchFiles: ['src/**/*.php', 'public/**/*'],
  },
};
```

### Loaders
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
      rules: [
        { 
          test: /\.txt$/, 
          use: 'raw-loader' 
        }
      ],
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
Images Loader Example:

```
module.exports = {
  module: {
    rules: [
       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
```
## Plugins

Plugins are the backbone of webpack. Webpack itself is built on the same plugin system that you use in your webpack configuration!

They also serve the purpose of doing anything else that a loader cannot do. Webpack provides many such plugins out of the box.

## HTML Webpack Plugin
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

## MiniCssExtractPlugin
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

## CssMinimizerWebpackPlugin

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

## CommonsChunkPlugin

The CommonsChunkPlugin is an opt-in feature that creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points. This plugin is removed from version 4



## ModuleFederationPlugin

The ModuleFederationPlugin allows a build to provide or consume modules with other independent builds at runtime.

Installation
```
This is included with webpack 5
```

### Sharing libraries:
With the shared key in the configuration you can define libraries that are shared between your federated modules. The package name is the same as the one found in the dependencies section of your package.json. However, by default webpack will only share the root level of a library.
```
  const { ModuleFederationPlugin } = require('webpack').container;

  module.exports = {
    plugins: [
      new ModuleFederationPlugin({
        // adds date-fns as shared module
        shared: ['date-fns'],
      }),
    ],
  };
```
### Sharing with Specify package versions

1. Array syntax

```
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      // adds lodash as shared module
      // version is inferred from package.json
      // there is no version check for the required version
      // so it will always use the higher version found
      shared: ['lodash'],
    }),
  ],
};
```

2. Object syntax
```    module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        // adds lodash as shared module
        // version is inferred from package.json
        // it will use the highest lodash version that is >= 4.17 and < 5
        lodash: '^4.17.0',
      },
    }),
  ],
};
```
3. Object syntax with sharing hints
```
const deps = require('./package.json').dependencies;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        // adds react as shared module
        react: {
          requiredVersion: deps.react,
          singleton: true,
        },
      },
    }),
  ],
};
```
#### Exposing Modules
Modules can be exposed from module federation which can be imported into other remote apps to use it. 


```
new ModuleFederationPlugin({
  exposes: {
   './Button':'./src/Button'
  }
});

```

#### Promise Based Dynamic Remotes
Generally, remotes are configured using URL's like in this example. 

```
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
};

```
Steps to include remote app module into host app

1. Expose module in remote app using module federation expose property as follows
```
new ModuleFederationPlugin({
  exposes: {
   './Button':'./src/Button'
  }
});

```
2. Add remote entry of 'remoteEntry.js' into current project where we would like to use the module as follows.
```
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
};

```
Here we added remote entry with name as "app1"

3. Import Module to use it in app.
```
const Counter =  lazy(()=> import( "app1/Button"));
```


###  [Go Back](/readme.md)
