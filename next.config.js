/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
}
