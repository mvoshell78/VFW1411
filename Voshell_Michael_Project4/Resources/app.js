Ti.UI.setBackgroundColor("#fff");
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var boxSize = ((pageHeight - 50) / 4);
var titleSize = 60;
var mainWindow = Ti.UI.createWindow({
	backgroundColor: ("#fff"),
	opacity: ".8"
});
var back = Ti.UI.createLabel({
	text: "Back",
	label: "back",
	color: "blue",
	top: 20,
	left: 10,
	font: {fontSize: 12, fontFamily: "ariel" }
});

var titleBlock = Ti.UI.createView({
	backgroundColor: ("#FBF4F4"),
	top: 0,
	opacity:".5",
	height: titleSize
});
var border = Ti.UI.createView({
	backgroundColor:"#999",
	height: 1,
	top: titleBlock.height + titleBlock.top 
	});
var titleTxt = Ti.UI.createLabel({
	text: "Mich Voshell",
	font: {fontSize: 20, fontFamily: "hevetical" },
	top: 20
});

var optionOne = Ti.UI.createView({
	backgroundColor: ("#4FC478"),
	height: boxSize,
	top: titleBlock.height
});
var optionOneTxt = Ti.UI.createLabel({
	text: "Photo Gallery",
	label: "1",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"},
	bottom: 5,
	left: 5
});

var optionTwo = Ti.UI.createView({
	backgroundColor: ("#BB3E55"),
	height: boxSize,
	top: titleBlock.height + optionOne.height
});
var optionTwoTxt = Ti.UI.createLabel({
	text: "Tortoise Information",
	label: "2",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	bottom: 5,
	left: 5
});

var optionThree = Ti.UI.createView({
	backgroundColor: ("#463CB4"),
	height: boxSize,
	top: titleBlock.height + optionOne.height + optionTwo.height
});
var optionThreeTxt = Ti.UI.createLabel({
	text: " I am option three",
	label: "3",
	font: {fontSize: 35, fontFamily: "Baskerville", fontStyle: "italic" },
	bottom: 5,
	left: 5
});


var galleryWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	});

var infoWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

mainWindow.add(titleBlock, border, optionOne, optionTwo, optionThree);
mainWindow.addEventListener("click",function(event){
	if (event.source.label === "1"){
		galleryWin.open();
		};
		if (event.source.label === "2"){
			infoWin.open();
		};
});

var loadImageGallery = require("imagegallery");
var loadinfoWin = require("infoWindow");

optionOne.add(optionOneTxt);
optionTwo.add(optionTwoTxt);
optionThree.add(optionThreeTxt);
titleBlock.add(titleTxt);
mainWindow.open();
