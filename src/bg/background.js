// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

function getPercent(age){
	var retireAge = age * 365;
	var days = (new Date() - new Date(1995, 6, 1)) / (1000 * 60 * 60 * 24);
	var percent = (days/retireAge * 100);
	return percent.toFixed(2);
}


if(localStorage['retireAge']){
	chrome.browserAction.setBadgeText({text: getPercent(localStorage['retireAge'])});  
	
	window.setInterval(function(){
		chrome.browserAction.setBadgeText({text: getPercent(localStorage['retireAge'])});
	}, 1000 * 60 * 60);
}

// console.log(chrome.tabs.create({'url': "../../html/options.html" }));