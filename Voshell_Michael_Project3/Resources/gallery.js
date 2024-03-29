

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


var winTwo = Ti.UI.createWindow({
	backgroundColor: "#E0E6F5",
	layout: "horizontal"
});
	
var container = Ti.UI.createScrollView({
	layout: "horizontal",
	width: pageWidth,
	height: pageHeight - border.height - border.top,// needed to make the page scroll past the bottom of the screen
	contentWidth: pageWidth,//needed to maintain horizontal view 
	showVerticalScrollIndicator: true,// needed to show scroll indicator
	top: 0
});

var galleryOpen = function(source){
	if (source = "[object TiUILabel]"){
	
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
	
	winTwo.add(title, border, container);
		winTwo.open();	
		title.add(back);
} else {

};
};

var closeWindowTwo = function(){
	winTwo.close();
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
				top: titleHeight,
				font: {fontSize: 15, fontFamily: "ArialRounded"}
				});
				
				winThree.add( fullImage, fullImageTxt, back2);
				winThree.open();

	var closeWindowThree = function(){
	winThree.close();
	};	
		back2.addEventListener("click",closeWindowThree);
	};
	
	
winOne.addEventListener("click",function(event){
	galleryOpen(event.source);
});	

	container.addEventListener("click",function(event){
		console.log(event.source.title);
		if(event.source = "[object TiUIImageView]"){
			fullWindow(event.source.image);
		
		};
	});
	back.addEventListener("click",closeWindowTwo);