Ti.UI.setBackgroundColor("#fff");
var padding = 30;
var i = 0;

// Vars for views

var winMain = Ti.UI.createWindow({
	backgroundColor: "#fff" 	
});

var viewOne = Ti.UI.createView({
	backgroundColor: "red",
	height: 100,
	top: padding
	});
	
var viewTwo = Ti.UI.createView({
	backgroundColor: "green",
	borderRadius: 10,
	width: 325,
	height: 200,
	top: padding + viewOne.height + padding 	
});	

var previousButton = Ti.UI.createView({
	backgroundColor: "green",
	width: 100,
	height: 50,
	borderRadius: 10,
	bottom: padding,
	left: padding
});

var nextButton = Ti.UI.createView({
	backgroundColor:"green",
	width: 100,
	height: 50,
	borderRadius: 10,
	bottom: padding,
	right: padding
});

// vars for text labels

var useless = Ti.UI.createLabel({
	text: "Useless Facts",
	color: "#222",
	font: {fontSize: 30, fontFamily: "ArialRounded"},
	});
	
var useless2 = Ti.UI.createLabel({
	text: "",
	color: "#222",
	right: 10,
	left: 20,
	top: 10,
	bottom: 10,
	font: {fontSize: 30, fontFamily: "ArialRounded"},
	});
		
var previousTxt = Ti.UI.createLabel({
	text: "Previous",
	color: "#222",
	font: {fontsize: 10, fontFamily: "arialRounded"},
	});

var nextTxt = Ti.UI.createLabel({
	text: "Next",
	color: "#222",
	font: {fontsize: 10, fontFamily: "arialRounded"},
	});


// main code 

// require seperate js file
var loadFile = require("uselessFacts");	

winMain.add(viewOne, viewTwo, previousButton, nextButton);
	viewOne.add(useless);
	viewTwo.add(useless2);
	previousButton.add(previousTxt);
	nextButton.add(nextTxt);
	
winMain.open();