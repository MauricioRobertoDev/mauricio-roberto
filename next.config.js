/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['pt-br'],
        defaultLocale: 'pt-br',
    },
    images: {},
};

const { withContentlayer } = require('next-contentlayer');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
