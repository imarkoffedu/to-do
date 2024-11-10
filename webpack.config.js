const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts', // Вхідний файл TypeScript
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Очищає dist перед новою збіркою
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss'], // Підтримка розширень файлів
    },
    module: {
        rules: [
            // TypeScript loader
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // Sass loader
            {
                test: /\.scss$/,
                use: [
                    'style-loader',    // Вставка стилів у DOM
                    'css-loader',      // Завантаження CSS
                    'sass-loader',     // Завантаження Sass
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон для HTML
        }),
        new ESLintPlugin({
            extensions: ['js', 'ts', 'scss'], // Підтримка для js, ts і scss
        }),
        new CleanWebpackPlugin(), // Очищення dist перед збіркою
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    mode: 'development',
};
