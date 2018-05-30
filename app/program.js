var OSinfo = require('../modules/OSInfo.js');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){

		var time = require('os');

		function getTime() {
			let uptime = Math.floor(time.uptime());
			let hours = Math.floor(uptime / 3600);
			let minutes = Math.floor(uptime / 60);
			return hours + ' hours ' + minutes + ' minutes ' + uptime + ' seconds'
		}

		exports.time = getTime;
	});