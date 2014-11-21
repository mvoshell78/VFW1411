var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
var i = [Math.floor(Math.random()*imageFiles.length)];
Ti.UI.setBackgroundColor ("#fff");
var photo =Ti.UI.createImageView({
		image: "images/" + imageFiles[i]
	});
var randomImage = function(){
	var current = i;
	i = [Math.floor(Math.random()*imageFiles.length)];
	
	console.log(i,current);
	
	if (current === i){
		randomImage();
	};
	
	photo.image = "images/" + imageFiles[i];
	
	};
	
	


var galleryLabel = Ti.UI.createLabel({
	text: " Click For Random Image",
	label: "image",
	bottom: 25
});

galleryWin.add(galleryLabel);
galleryWin.add(photo);

galleryWin.addEventListener("click", function(event){
	if (event.source.label === "image" ){
		randomImage();
		}; 
		if (event.source.label === "back"){
			galleryWin.close();
			} else{
				
			}
});

