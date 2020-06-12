


(function(window) {
	var speakWord = "Hello";
	var hello_buddy = function (name) {
		console.log(speakWord + " " + name);
	}

	window.hello_buddy= hello_buddy;

})(window);
