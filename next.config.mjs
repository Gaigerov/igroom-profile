import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
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
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'shared', 'styles')],
        additionalData: `
      @use "variables.scss" as *;
      @use "mixins.scss" as *;
    `,
    },
    webpack: (config, {isServer}) => {
        config.module.rules.push({
            test: /\.(otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/fonts/[name][ext]',
            },
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        if (!isServer) {
            config.plugins = config.plugins.filter(plugin => {
                return plugin.constructor.name !== 'FontStylesheetGatheringPlugin';
            });
        }

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
