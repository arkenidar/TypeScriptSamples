const path = require('path');

module.exports = {
  entry: './raytracer.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'none'
};
