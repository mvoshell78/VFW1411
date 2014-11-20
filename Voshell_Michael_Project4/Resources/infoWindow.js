var turtleInfo = {
			"turtles":{
				"headtitle" : "Greg's Tortoises",
				"footertitle" : "Select a tortise for more info ",
				"tortoises":
			[
				{
					"names": "Russian Red Foot", 
				  	"description": "Red-footed tortoises (Chelonoidis carbonaria) are tortoises from northern South America. They are medium-sized tortoises that generally average 30 centimetres (12 in) as adults, but can reach over 40 cm (16 in). They have a dark-colored loaf-shaped carapace (back shell) with a lighter patch in the middle of each scute (scales on the shell), and dark limbs with brightly colored scales that range from pale yellow to dark red. There are recognized differences between red-footed tortoises from different regions. They are closely related to the yellow-footed tortoise (C. denticulata) from the Amazon Basin. They are popularly kept as pets, and over-collection has caused them to be vulnerable to extinction. "
				},
				{	"names": "Leopard ", 
				  	"description": "The Leopard tortoise (Stigmochelys pardalis) is a large and attractively marked tortoise found in the savannas of eastern and southern Africa, from Sudan to the southern Cape. It is the only member of the genus Stigmochelys, but in the past it was commonly placed in Geochelone instead.[1] This chelonian is a grazing species of tortoise that favors semi-arid, thorny to grassland habitats, although some leopard tortoises have been found in rainier areas. In both very hot and very cold weather they may dwell in abandoned fox, jackal, or anteater holes. Leopard tortoises do not dig other than to make nests in which to lay eggs. Not surprisingly, given its propensity for grassland habitats, it grazes extensively upon mixed grasses. It also favors succulents and thistles, and (in captivity) the fruit and pads of the prickly pear cactus (Opuntia sp.) (cactus are New World plants not native to Africa). The African Leopard Tortoise typically lives 80 to 100 years."
				},
				{
					"names": "African Spurred " ,
					"description": "The African spurred tortoise (Geochelone sulcata), also called the sulcata tortoise, is a species of tortoise, which inhabits the southern edge of the Sahara desert, in northern Africa. It is the third-largest species of tortoise in the world and the largest species of mainland tortoise not found on an island and the only species in the genus Centrochelys"
				}
			]
			
			
	}
	};
var descWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});	

	
var tortoiseTable = Ti.UI.createTableView({
	top: titleBlock.height + border.height + 20
	
});

var tortoisesSection = Ti.UI.createTableViewSection({
	headerTitle: turtleInfo.turtles.headtitle,
	footerTitle: turtleInfo.turtles.footertitle,
	});
for (i = 0, j = turtleInfo.turtles.tortoises.length; i<j; i++){
	console.log(turtleInfo.turtles.tortoises[i] );
	var rows = Ti.UI.createTableViewRow({
		title: turtleInfo.turtles.tortoises[i].names,
		desc: turtleInfo.turtles.tortoises[i].description,
		hasChild: true
	});
	var allSection=[tortoisesSection];
	// hasDetail is IOS Specific
	if(Ti.Platform.name === "iPhone OS"){
	rows.hasChild = false;
	rows.hasDetail = true;
	}
	tortoisesSection.add(rows);
	tortoiseTable.setData(allSection);
	tortoiseTable.add(tortoisesSection);
	
	//rows.addEventListener("click", getDescription);
};
infoWin.add(tortoiseTable,titleBlock, border);
infoWin.addEventListener("click", function(event){
	console.log(event.source);
	getDesc(event.source.desc);
});
var getDesc = function(desc){
	var descTxt = Ti.UI.createLabel({
		text: desc,
		font: {fontSize: 20, fontFamily: "hevetical"},
		top: titleBlock.height + border.height + 30,
		left:20
		});
	
	descWin.add(  descTxt, titleBlock, border);
	descWin.open();
	titleBlock.addEventListener("click", function(event){
		descWin.close();
	});
};
