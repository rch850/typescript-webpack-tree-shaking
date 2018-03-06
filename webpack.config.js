module.exports = {
    entry: './index.ts',
    output: {
        filename: 'index.output.js',
        path: __dirname
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
}
