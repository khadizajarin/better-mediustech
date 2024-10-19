/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.better.com',
            },
            {
                protocol: 'https',
                hostname: 'html.themeori.net',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
