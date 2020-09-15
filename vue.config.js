module.exports = {
    // productionSourceMap: false,
    publicPath: '/',

    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8082,
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/scss/theme.scss";`
            }
        }
    }
}