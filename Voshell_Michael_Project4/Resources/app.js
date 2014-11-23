Ti.UI.setBackgroundColor("#fff");
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var pageWidth = Ti.Platform.displayCaps.platformWidth;
var boxSize = ((pageHeight - 50) / 4);
var titleSize = 60;

var mainWindow = Ti.UI.createWindow({
	title: "Mich Voshell",
	backgroundColor: ("black"),
	opacity: ".7"
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var optionOne = Ti.UI.createView({
	backgroundColor: ("#4FC478"),
	height: boxSize,
	top:0
	
});
var optionOneTxt = Ti.UI.createLabel({
	text: "Photo Gallery",
	label: "1",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"},
	bottom: 5,
	left: 5
});

var optionTwo = Ti.UI.createView({
	backgroundColor: ("#7CAC39"),
	height: boxSize,
	top:  optionOne.height
});
var optionTwoTxt = Ti.UI.createLabel({
	text: "Tortoise Information",
	label: "2",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic"  },
	bottom: 5,
	left: 5
});

var optionThree = Ti.UI.createView({
	backgroundColor: ("#58431D"),
	height: boxSize,
	top: optionOne.height + optionTwo.height
});
var optionThreeTxt = Ti.UI.createLabel({
	text: " Contact Information",
	label: "3",
	font: {fontSize: 25, fontFamily: "Baskerville", fontStyle: "italic" },
	bottom: 5,
	left: 5
});


var galleryWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Image Gallery"
	});

var infoWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Tortise Information"
});

var contactWin = Ti.UI.createWindow({
	backgroundColor: "#58431D",
	title: "Contact Info",
	opacity: ".9"
});


mainWindow.add(optionOne, optionTwo, optionThree);
mainWindow.addEventListener("click",function(event){
	if (event.source.label === "1"){
		navWindow.openWindow(galleryWin);
		};
		if (event.source.label === "2"){
		navWindow.openWindow(infoWin);
		};
		if (event.source.label === "3"){
			navWindow.openWindow(contactWin);
		} else {
			
		};
});

var loadImageGallery = require("imagegallery");
var loadinfoWin = require("infoWindow");
var loadContactWin = require("contact");
optionOne.add(optionOneTxt);
optionTwo.add(optionTwoTxt);
optionThree.add(optionThreeTxt);

navWindow.open();
