Ti.UI.setBackgroundColor("#fff");

var familyInfo = {
			"adults":{
				"headtitle" : "Parent's Names",
				"footertitle" : " Click on the name for more info",
				"parents":
			[
				{
					"names": "Mich", 
				  	"description": "Mich is the dad"
				},
				{	"names": "Diana", 
				  	"description": "Diana is the mom"
				} 
			]
		},
				
			"kids":{
				"headtitle" : "Children's Names",
				"footertitle" : " Click on the name for more info",
				"children":
			[
				{
					"names": "Michael", 
					"description": "Michael is the oldest child"
				},
				{
					"names": "Korin", 
					"description" : "Korin is the oldest daughter"
				},
				{
					"names": "Azsaleigh", 
					"description" : " Azsa is the baby"}]
				}
			};
					
console.log(familyInfo.kids.headtitle);
console.log(familyInfo.adults.headtitle);
console.log(familyInfo.adults.parents[0].names);
console.log(familyInfo.adults.parents[1].names);

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
	


//creating table
// titles pulled from json data
var parentsSection = Ti.UI.createTableViewSection({
	headerTitle: familyInfo.adults.headtitle,
	footerTitle: familyInfo.adults.footertitle,
	});
	
var childrenSection = Ti.UI.createTableViewSection({
	headerTitle: familyInfo.kids.headtitle,
	footerTitle: familyInfo.kids.footertitle,
	});	
	
// funtion for clicking the rows 
// takes you to a new window with a similar looking title 
// second window

var getDescription = function(){
// Window Two
	var winTwo = Ti.UI.createWindow({
		backgroundColor: "#999"
		}); 
		// header for second  window
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
		text: this.title,
		font: {fontSize: 35, fontFamily: "hevetical", fontWeigth: "bold"},
		top: 15,
		});	
			
		winTwo.add(title, border);
		title.add(titleLabel);
		winTwo.open();
		};	

// useing a for loop to add individul peices [i] to the sections 
for (i = 0, j = familyInfo.adults.parents.length; i<j; i++){
	console.log(familyInfo.adults.parents[i] );
	var rows = Ti.UI.createTableViewRow({
		title: familyInfo.adults.parents[i].names,
		hasChild: true
	});
	// hasDetail is IOS Specific
	if(Ti.Platform.name === "iPhone OS"){
	rows.hasChild = false;
	rows.hasDetail = true;
	}
	parentsSection.add(rows);
	rows.addEventListener("click", getDescription);
};

for (i = 0, j = familyInfo.kids.children.length; i<j; i++){
	
	var rows = Ti.UI.createTableViewRow({
		title: familyInfo.kids.children[i].names,
		hasChild: true
	});
	// hasDetail is IOS Specific
	if(Ti.Platform.name === "iPhone OS"){
	rows.hasChild = false;
	rows.hasDetail = true;
	}
	childrenSection.add(rows);
	rows.addEventListener("click", getDescription);
};
var allSection = [parentsSection, childrenSection];

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
