var util = {
	extend: function(target, source) {
		if (Object.assign) {
			return Object.assign(target, source)
		} else {
			Object.keys(source).forEach(function(key) {
				target[key] = source[key]
			})
			return target
		}
	}
}

module.exports = util