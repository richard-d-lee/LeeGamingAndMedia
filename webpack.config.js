// webpack.config.js
module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    mode: "development",
          module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
            }
          }
        }
      ]
    },
     output: { 
      filename: 'bundle.js',
      path: __dirname + '/client/dist' 
    }
  };