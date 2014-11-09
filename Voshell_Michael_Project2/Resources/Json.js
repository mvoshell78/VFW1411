// json data

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
	var desctxt = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 20, fontFamily: "hevetical"},
		top: title.height + title.top + 30,
		left:20
		});
	var backButton = Ti.UI.createLabel({
		text: "Back",
		font: {fontSize: 12, fontfamily: "hevetical" },
		color: "blue",
		left: 10
		});
		
	var closeWindow = function(){
		winTwo.close();
		};
		backButton.addEventListener("click",closeWindow);	
		winTwo.add(title, border, desctxt);
		title.add(titleLabel, backButton);
		winTwo.open();
		};	
