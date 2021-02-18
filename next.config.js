module.exports = {
    async redirects() {
        return [
            {
                source: '/regalo',
                destination: 'https://creativecloud.adobe.com/',
                permanent: true,
            },
        ]
    },
}