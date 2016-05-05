var StackTrace = require('stacktrace-js'),
	util = require('./lib/util'),
	global = this,
	invoke_count = 0


var options = {
	colors: [
		'lightseagreen',
		'forestgreen',
		'goldenrod',
		'dodgerblue',
		'darkorchid',
		'crimson'
	]
}

function debug(namespace, opts) {
	var self = this,
		opts = util.extend(options, opts)
		interval = new Date(),
		now = (new Date()).getTime(),
		color = opts.colors[invoke_count++ % opts.colors.length]

	interval.toString = function() {
		return -now + (now = new Date().getTime())
	}


    return console.log.bind(console, '%c%s +%sms', 'color: ' + color, namespace, interval)
}


var d = debug('test')

d('Hello world!')

debug('test 2')('Hello World')
