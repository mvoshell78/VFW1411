Ti.UI.setBackgroundColor("#fff");
var margin = 25;
var padding = 25;
var currentWindow = Ti.UI.currentWindow;
var nameInput = Ti.UI.createTextField({
	top: margin,
	borderRadius: 5,
	borderColor: ("black"),
	left: padding,
	height: 25,
	width: 250,
	hintText : "  Enter you name",
	backgroundColor: ("#fff")
});

var addressInput = Ti.UI.createTextField({
	top: (margin * 2) + nameInput.height,
	borderRadius: 5,
	borderColor: ("black"),
	left: padding,
	height: 25,
	width: 250,
	layout: "vertical",
	hintText: "  Enter your street address",
	backgroundColor: ("#fff")
});

var cityInput = Ti.UI.createTextField({
	top: (margin * 3) + nameInput.height + addressInput.height,
	borderRadius: 5,
	borderColor: ("black"),
	left: padding,
	height: 25,
	width: 100,
	layout: "vertical",
	hintText: "  City",
	backgroundColor: ("#fff")
});

var stateInput = Ti.UI.createTextField({
	top: (margin * 3) + nameInput.height + addressInput.height,
	borderRadius: 5,
	borderColor: ("black"),
	left: (padding * 2) + cityInput.width,
	height: 25,
	width: 100,
	layout: "vertical",
	hintText: "  State ",
	backgroundColor: ("#fff")
});

var zipInput = Ti.UI.createTextField({
	top: (margin * 4) + nameInput.height + addressInput.height + stateInput.height,
	borderRadius: 5,
	borderColor: ("black"),
	left: padding,
	height: 25,
	width: 50,
	layout: "vertical",
	hintText: "  Zip",
	backgroundColor: ("#fff")
});
var buttonLabel = Ti.UI.createLabel({
	left: padding,
	backgroundColor: ("#green"),
	opacity: ".7",
	borderRadius: 5,
	borderColor: ("black"),
    top: (margin * 5) + nameInput.height + addressInput.height + stateInput.height + zipInput.height,
    width: 250,
    height: 25 
});
var button = Titanium.UI.createButton( {
    title : "Send My Free Mailer",
    left: padding,
    top: (margin * 5) + nameInput.height + addressInput.height + stateInput.height + zipInput.height,
    width: 250,
    height: 25 
});
var info = Ti.UI.createLabel({
	text : "Enter your contact info and we'll send you our free mailer. ",
	top: (margin * 6) + nameInput.height + addressInput.height + stateInput.height + zipInput.height + button.height,
	left : padding,
	right: padding,
	font: {fontSize: 15, fontType: "hevitical"}
});

contactWin.add(nameInput, addressInput, cityInput, stateInput, zipInput, info, buttonLabel, button);




button.addEventListener('click', function (e){
    alert("Thank you for you interest in our tortises. We will rush our mailer out to you. Our mailer will be sent to;\n "   + nameInput.value + "\n" + addressInput.value + "\n" + cityInput.value + ", " + stateInput.value + " " +  zipInput.value);
});