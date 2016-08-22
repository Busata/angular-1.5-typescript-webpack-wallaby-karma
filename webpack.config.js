var path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['src', 'tests', 'node_modules'],
        extensions: ['', '.webpack.js', '.js','.ts']
    },
    module: {
        loaders: [
            {
                test: /\.(j|t)s$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                name: 'scss',
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
            }
        ]
    }
};