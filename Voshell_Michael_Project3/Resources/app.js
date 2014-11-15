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
	top: 10
});
var container = Ti.UI.createScrollView({
	layout: "horizontal",
	width: pageWidth,
	height: pageHeight - border.height - border.top,// needed to make the page scroll past the bottom of the screen
	contentWidth: pageWidth,//needed to maintain horizontal view 
	showVerticalScrollIndicator: true,// needed to show scroll indicator
	top: 0
});



var back = Ti.UI.createLabel({
	text: "Back",
	color: "blue",
	font: {fontSize: 12, fontfamily: "hevetical" },
	left: 10,
	top: 20,
});
var back2 = Ti.UI.createLabel({
	text: "Back",
	color: "blue",
	font: {fontSize: 12, fontfamily: "hevetical" },
	left: 10,
	top: 20,
});
var closeWindowTwo = function(){
	winTwo.close();
};

var galleryOpen = function(){
	
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
	winTwo.add(back, border, container);
		winTwo.open();	
};
	

var fullWindow = function(imageSource){
	
	var winThree = Ti.UI.createWindow({
	backgroundColor:"#E0E6F5"
	});

			var fullImage = Ti.UI.createImageView({
				image: imageSource,
				
				});
			var picTitle = (imageSource.substr(7));
			var fullImageTxt = Ti.UI.createLabel({
				text: picTitle,
				top: 40,
				font: {fontSize: 15, fontFamily: "ArialRounded"}
				});
				
				winThree.add(fullImage, fullImageTxt, back2);
				winThree.open();

	var closeWindowThree = function(){
	winThree.close();
	};	
		back2.addEventListener("click",closeWindowThree);
	};

	
	winOne.add(openView);
	openView.add(openTxt);
	openView.addEventListener("click", galleryOpen);
	container.addEventListener("click",function(event){
		console.log(event.source);
		if(event.source = "[object TiUIImageView]"){
			fullWindow(event.source.image);
			};
		});
	back.addEventListener("click",closeWindowTwo);
	winOne.open(); 
