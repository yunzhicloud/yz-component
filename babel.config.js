module.exports = {
	presets: [['@babel/preset-env', {
		"useBuiltIns": "entry"
	}]],
	plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-react-jsx'],
	comments: false
}
