import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        esmExternals: 'loose',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'igroom.ru',
            },
            {
                protocol: 'https',
                hostname: '**.igroom.ru',
            },
        ],
        unoptimized: true,
        domains: ['igroom.ru'],
    },
    logging: {
        level: 'verbose',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'shared', 'styles')],
        additionalData: `
        @use "variables.scss" as *;
        @use "mixins.scss" as *;
        `,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: false,
                        titleProp: true,
                    }
                }
            ]
        });

        return config;
    },
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
