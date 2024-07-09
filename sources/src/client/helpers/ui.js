global.uiBrowser = mp.browsers.new('package://ui/index.html');

// Эвенты на cef только через эту функцию
global.callCef = (event, value) => {
	try {
		if (uiBrowser && isValidJSON(value)) uiBrowser.execute(`trigger('${event}', '${value}')`)
	} catch (e) {}
}

global.isValidJSON = function (value) {
	try {
		JSON.parse(value)
		return true
	} catch (error) {
		return false
	}
}