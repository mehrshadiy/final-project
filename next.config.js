/** @type {{images: {remotePatterns: [{protocol: string, hostname: string}]}, reactStrictMode: boolean}} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nest.navaxcollege.com'
            },
        ],
    },
}

module.exports = nextConfig;