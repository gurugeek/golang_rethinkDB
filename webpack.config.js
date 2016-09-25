module.exports = {
    entry: './index.js',
    output: {
    path: __dirname,
    filename: 'bundler.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}