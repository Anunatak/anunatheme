var config = {
	sass: {
		input: {
			src: './assets/styles',
			extension: ['sass', 'scss']
		},
		output: {
			src: './dist/styles',
			extension: 'css'
		}
	},
	scripts: {
		input: './assets/scripts',
		output: './dist/scripts'
	},
	prepWatchPath: function(file, defaultPath) {
		var filename = file.split('/').pop();
		var filePath = file.replace(filename, '');
		var segments = filename.split('.');
		var extension = segments[1];
		if(file.indexOf('.') !== 0) {
			filePath = filePath || defaultPath;
			return filePath + '/**/*.' + extension;
		} else {
			return filePath + '**/*.' + extension;
		}
	},
	prepInputPath: function(file, defaultPath) {
		var filename = file.split('/').pop();
		var filePath = file.replace(filename, '');
		var segments = filename.split('.');
		var extension = segments[1];
		if(file.indexOf('.') !== 0) {
			filePath = filePath || defaultPath.src;
			return filePath + '/' + filename;
		} else {
			return filePath + filename;
		}
	},
	prepOutputPath: function(file, defaultPath) {
		var filename = file.split('/').pop();
		var filePath = file.replace(filename, '');
		var segments = filename.split('.');
		var extension = segments[1];
		if(file.indexOf('.') !== 0) {
			filePath = filePath || defaultPath.src;
			return filePath + '/' + filename;
		} else {
			return filePath + filename;
		}
	}
};

module.exports = config;
