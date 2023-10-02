const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Services': path.resolve(__dirname, 'src/services'),
      '@Views': path.resolve(__dirname, 'src/views'),
    },
  },
};
