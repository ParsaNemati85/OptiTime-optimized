const path = require('path');

module.exports = {
  entry: ['./src/index.js', "./src/script.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  watch : true
};