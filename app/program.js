var OSinfo = require('./modules/OSInfo');
var os = require('os');


process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(timeCalculator) {

    var minutes = Math.floor(seconds / 60),
        hours = Math.floor(seconds / 3600);

    var seconds= process.stdin.read();
	    if (seconds !== null) {
	        var instruction = seconds.toString().trim();


	function timeCalculator(seconds) {

	    switch (seconds) {

	    	case seconds = NaN:
	    		process.stdout.write("Wpisano złą wartość\n");
			    process.exit();
			    break;

			case seconds < 0:
	    		process.stdout.write("Wpisano ujemną wartość\n");
			    process.exit();
			    break;

			case seconds > 0 & seconds !< 3600:
	    		process.stdout.write(minutes);
			    process.exit();
			    break;

			default seconds > 3600:
	    		process.stdout.write(hours);
			    process.exit();
			}
		}
	}
});

exports.print = timeCalculator;