Ti.UI.setBackgroundColor("#fff");
// needed to get files for application
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
console.log(imageFiles);
// var to determine height and width of device
var pageWidth = Ti.Platform.displayCaps.platformWidth;
var pageHeight = Ti.Platform.displayCaps.platformHeight;
var boxCount = 4;
var margin = pageWidth * .04; // multipling .07 makes margin relitive to device size
var boxWidth =  pageWidth - ((boxCount + 1) * margin);
var boxSize = boxWidth/ boxCount;
console.log(pageWidth, boxWidth, boxSize, margin);


			
var winOne = Ti.UI.createWindow({
	backgroundColor: "fff"
	});

var openView = Ti.UI.createView({
	backgroundColor: "red",
	border: 1,
	borderRadius: 10,
	width:300,
	top: pageHeight/2,// to display about center of the device
	height: 35
	});

var openTxt = Ti.UI.createLabel({
	text: "Click to open image gallery"
});

var winTwo = Ti.UI.createWindow({
	backgroundColor: "#E0E6F5",
	layout: "horizontal"
	});
var border = Ti.UI.createView({
	height: 1,
	width: pageWidth,
	top: 20
});
var container = Ti.UI.createScrollView({
	layout: "horizontal",
	width: pageWidth,
	height: pageHeight - border.height - border.top,// needed to make the page scroll past the bottom of the screen
	contentWidth: pageWidth,//needed to maintain horizontal view 
	showVerticalScrollIndicator: true,// needed to show scroll indicator
	top: 0
});
var galleryOpen = function(){
	winOne.close();
	

 	for (i=0; i< imageFiles.length; i++){	
		var newView = Ti.UI.createView({
			backgroundColor: "#E0F2F5",
			borderWidth: 1,
			borderRadius:10,
			height: boxSize,
			width: boxSize,
			top: margin,
			left: margin,
			});
	var thumbnail = Ti.UI.createImageView({
		image: "images/" + imageFiles[i], 
		// used to expand images to fit entire thumbnail
		top: 0,
		height: newView.height*2,
		width: newView.width*2
		});
	newView.add(thumbnail);
	container.add(newView);
	};
		
		winTwo.add(border, container);
		winTwo.open();	
};


	winOne.add(openView);
	openView.add(openTxt);
	openView.addEventListener("click", galleryOpen);
	winOne.open(); 
