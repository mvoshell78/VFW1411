Ti.UI.setBackgroundColor("#fff");


					

// Title for 1st window

var title = Ti.UI.createView({
	backgroundColor:  "#fff",
	height: 60,
	top: 5
	});
	
var border = Ti.UI.createView({
	backgroundColor:"#999",
	height: 1,
	top: title.height + title.top 
	});
	
var titleLabel = Ti.UI.createLabel({
	text: "Voshell Family Info",
	font: {fontSize: 35, fontFamily: "hevetical", fontWeigth: "bold"},
	top: 15,
	});

// Window One	
var winOne = Ti.UI.createWindow({
	backgroundColor: "#fff" 	
});
	



// table 
var names = Ti.UI.createTableView({
	top: title.height + title.top + border.height,
	});
	

// main code 

// loading second file where json data is stored
var loadFile = require("Json");

winOne.add(title, border, names);
	title.add(titleLabel);

winOne.open();
