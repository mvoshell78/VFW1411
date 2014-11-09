Ti.UI.setBackgroundColor("#fff");

var familyInfo = [{title: "Mich"}, {title: "Diana"}, {title: "Michael"}, {title: "Korin"}, {title: "Azsaleigh"}];
var dogInfo = [{title: "Sam"}, {title: "Nona"}, {title: "Tyson"}, {title: "Pedro"} ];

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
	
// Window Two
var winTwo = Ti.UI.createWindow({
	backgroundColor: "#999" 	
});
//creating table
// creating a section of the table that pulls from individual arrays
var peopleSection = Ti.UI.createTableViewSection({
	headerTitle: "People Names",
	footerTitle: "Click on names to find out more info",
	});

var dogsSection = Ti.UI.createTableViewSection({
	headerTitle: "Dog Names",
	footerTitle: "Click on names to find out more info",
	});

// useing a for loop to add individul peices [i] to the sections 
for (i = 0, j = familyInfo.length; i<j; i++){
	var rows = Ti.UI.createTableViewRow({
		title: familyInfo[i].title,
	});
	peopleSection.add(rows);
};

for (i = 0, j = dogInfo.length; i < j; i++){
	var rows = Ti.UI.createTableViewRow({
		title: dogInfo[i].title,
	});
	dogsSection.add(rows);
};
// bringing those two sections into one area to add the the table 
var allSection = [peopleSection, dogsSection];
// table 
var names = Ti.UI.createTableView({
	top: title.height + title.top + border.height,
	});
// adding data to the table 
names.setData(allSection);
// conditional to use grouped for IOS
if(Ti.Platform.name === "iPhone OS"){
	names.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

// main code 

// loading second file where json data is stored
var loadFile = require("Json");

winOne.add(title, border, names);
	title.add(titleLabel);

winOne.open();