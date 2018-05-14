module.exports = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.min.js",
        publicPath: "/assets/"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader!autoprefixer-loader!bootstrap-loader"
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            // Used for Bootstrap Less Source Files
            {
                test: /\.css/,
                loader: 'style!css'
            },// Used for Bootstrap Glyphicon Fonts
            {
                test: /\.(woff2|woff|ttf|svg|eot)$/,
                loader: 'file'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            },
            //image loader
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.xml$/,
                loader: 'xml-loader'
            }
        ]
    }
}