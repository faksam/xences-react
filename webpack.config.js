const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const getFaviconUrl = (size) => {
    return ``
}

const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Xences',
            getFaviconUrl,
        }),
        new MiniCssExtractPlugin(),
        new StyleLintPlugin({
            configFile: '.stylelintrc.json',
            context: 'src',
            files: '**/*.scss',
            failOnError: false,
            quiet: false,
          }),
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // All files '.sass|css'
            {
                test: /\.(scss|css)$/,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
        ]
    }
};
