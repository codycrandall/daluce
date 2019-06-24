const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/ui-core/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/ui-core/index.js',
	mode: 'development',
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 0
						}
					},
					'sass-loader'
				]
			},

		]
	},
	resolve: {

		alias: {
			'react-dom': '@hot-loader/react-dom'
		},
		extensions: ['.jsx', '.js']
	},
	plugins: [HtmlWebpackPluginConfig]
};
