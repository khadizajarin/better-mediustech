/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx'],
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
                hostname: 'via.placeholder.com'
            }
        ]
    }
};

export default nextConfig;
