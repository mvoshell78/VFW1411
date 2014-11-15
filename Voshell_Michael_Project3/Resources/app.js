Ti.UI.setBackgroundColor("#fff");
// needed to get files for application
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
// var to determine height and width of device
var pageWidth = Ti.Platform.displayCaps.platformWidth;
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var boxCount = 4;
var margin = pageWidth * .01; // multipling .07 makes margin relitive to device size
var boxWidth =  pageWidth - ((boxCount + 1) * margin);
var boxSize = boxWidth/ boxCount;

			
var winOne = Ti.UI.createWindow({
	backgroundColor: "fff"
	});
	var openView = Ti.UI.createView({
	backgroundColor: "#f4f4fb",
	border: 1,
	borderRadius: 10,
	width:300,
	top: pageHeight/2,// to display about center of the device
	height: 35
	});
	var openTxt = Ti.UI.createLabel({
	text: "Click to open image gallery"
	});


var border = Ti.UI.createView({
	height: 1,
	width: pageWidth,
	top: 10
});



	var loadFile = require("gallery");
	winOne.add(openView);
	openView.add(openTxt);
	
	winOne.open(); 
