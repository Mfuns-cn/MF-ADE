export function debounce(delay, callback) {
	let timer

	return function() {
		clearTimeout(timer)
		timer = setTimeout(function() {
			callback()
		}, delay)
	}
}