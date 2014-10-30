Ti.UI.setBackgroundColor("000");
var padding = 30;
var i = 0;
var uselessFactsArray = ["The average life of a taste bud is 10 days.", "In 1980, a Las Vegas hospital suspended workers for betting on when patients would die.", "Dibble means to drink like a duck.","It was once against the law to have a pet dog in a city in Iceland.","A B-25 bomber crashed into the 79th floor of the Empire State Building on July 28, 1945."];

// Vars for views

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
	height: 150,
	//height: Ti.Ui.SIZE,
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

var newTxt = function(){
	if (i >= uselessFactsArray.length) {
		i = 0;
		}
			useless2.text = uselessFactsArray[i];
			i++;
	};

var preTxt = function(){
	if (i < 0) {
		i = uselessFactsArray.length - 1;
		}
			useless2.text = uselessFactsArray[i];
			i--;
	
	};

nextButton.addEventListener("click", newTxt);
previousButton.addEventListener("click", preTxt);

// main code 
	
winMain.add(viewOne, viewTwo, previousButton, nextButton);
	viewOne.add(useless);
	viewTwo.add(useless2);
	previousButton.add(previousTxt);
	nextButton.add(nextTxt);
	
winMain.open();