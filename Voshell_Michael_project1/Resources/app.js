Ti.UI.setBackgroundColor("000");
var padding = 30

var winMain = Ti.UI.createWindow({
	backgroundColor: "#222" 	
});

var viewOne = Ti.UI.createView({
	backgroundColor: "red",
	borderRadius: 10,
	borderWidth: 2,
	width: 300,
	height: 100,
	top: padding
	});
	
var viewTwo = Ti.UI.createView({
	backgroundColor: "green",
	borderRadius: 10,
	borderWidth: 2,
	width: 325,
	height: 100,
	// need to replace heightof 100 when text has been added 
	//height: Ti.Ui.size,
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
var useless = Ti.UI.createLabel({
	text: "Useless Facts",
	color: "#222",
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
	
winMain.add(viewOne, viewTwo, previousButton, nextButton);
	viewOne.add(useless);
	previousButton.add(previousTxt);
	nextButton.add(nextTxt);
	
winMain.open();

