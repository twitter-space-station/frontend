const {i18n} = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
};
