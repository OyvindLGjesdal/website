// next.config.js
module.exports = {
    target: 'serverless',
    trailingSlash: true,
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },
    devIndicators: {
        autoPrerender: false,
    },
    generateBuildId: async () => {
        return 'git-sha-' + process.env.GITHUB_SHA;
    },
}
