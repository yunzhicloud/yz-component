const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const vueLoader = require('vue-loader')

const docSiteUrl = process.env.DEPLOY_PRIME_URL || 'https://vue-styleguidist.github.io'

module.exports = {
	title: 'YunzhiCloud ComponmentLib',
	components: 'packages/**/[a-zA-Z]*.vue',
	// showSidebar: true,
	// ribbon: {
	// 	text: 'Back to examples',
	// 	url: `${docSiteUrl}/Examples.html`
	// },
	theme: {
		baseBackground: '#fdfdfc',
		link: '#274e75',
		linkHover: '#90a7bf',
		border: '#e0d2de',
		font: ['Helvetica', 'sans-serif']
	},
	styles: {
		Playground: {
			preview: {
				paddingLeft: 0,
				paddingRight: 0,
				borderWidth: [[0, 0, 1, 0]],
				borderRadius: 0
			}
		},
		Markdown: {
			pre: {
				border: 0,
				background: 'none'
			},
			code: {
				fontSize: 14
			}
		}
	},
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.js')
		return `Component Source Path: ${componentPath}`
	},

	// Example of overriding the CLI message in local development.
	// Uncomment/edit the following `serverHost` entry to see in output
	// serverHost: 'your-domain',
	printServerInstructions(config) {
		// eslint-disable-next-line no-console
		console.log(`View your styleguide at: http://${config.serverHost}:${config.serverPort}`)
	},

	// Override Styleguidist components
	styleguideComponents: {
		LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
		// StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuide'),
		SectionsRenderer: path.join(__dirname, 'styleguide/components/SectionsRenderer')
	},
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.js?$/,
					loader: 'babel-loader',
					exclude: /(node_modules|packages)/,
					query: {
						cacheDirectory: true
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.less$/,
					use: ['style-loader', 'css-loader', {
						loader: 'less-loader', options: {
							javascriptEnabled: true
						}
					}],

				},
				{
					test: /\.png$/,
					use: ['url-loader']
				},
				{
					test: /\.(eot|woff2|woff|ttf|svg)/,
					use: ['url-loader']
				}
			]
		},
		plugins: [new vueLoader.VueLoaderPlugin()].concat(
			process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
		),
		resolve: {
			alias: {
				'@mixins': path.resolve(__dirname, './src/mixins'),
				// Make sure the example uses the local version of react-styleguidist
				// This is only for the examples in this repo, you won't need it for your own project
				'vue-styleguidist': path.join(__dirname, '../../')
			}
		}
	},
	usageMode: 'expand',
	exampleMode: 'expand',
	styleguideDir: 'dist',
	copyCodeButton: true
}
