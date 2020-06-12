



(function(window) {
	var speakWord = "Good Bye";
	var bye_buddy = function (name) {
  		console.log(speakWord + " " + name);
	}

	window.bye_buddy = bye_buddy;

})(window);
