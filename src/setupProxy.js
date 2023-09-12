const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://3.35.252.223:5002/',
      changeOrigin: true,
    }),
  );
};
