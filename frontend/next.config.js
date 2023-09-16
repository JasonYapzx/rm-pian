const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
}

module.exports = nextConfig
