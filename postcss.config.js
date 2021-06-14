module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('autoprefixer')
	]
}

if (process.env.JEKYLL_ENV === 'production') {
	module.exports.plugins.push(require('cssnano')({ preset: 'advanced' }))
}
