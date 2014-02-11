define(function(require){
	var button = document.createElement("button");

	// demonstrate lazy loading
	// only loads in alerter when needed
	button.onclick = function(){
		var alerter = require(["alerter"], function(alerter){
			alerter("hello from the app")
		});
	}

	button.textContent = "Click me to load the alerter";

	document.body.appendChild(button);
})