/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['pt-br'],
        defaultLocale: 'pt-br',
    },
    images: {},
};

const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer(nextConfig);
