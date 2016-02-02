module.exports = function () {
	var config = {
		
		min: './minified',
		
		less: './styles/styles.less',
		
		alljs: [
		'./features/**/*.js',
		'./services/*.js'
		]
	};
	
	return config;
};