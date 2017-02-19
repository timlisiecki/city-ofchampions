
// The function Constructor for the teams
var Team = function(id, name, facts, champs, image, logo, star) {
	this.id = id;
	this.name = name;
	this.facts = facts;
	this.champs = champs;
	this.image = image;
	this.logo = logo;
	this.star = star;
}

// Team Information
var patriots =  new Team(
	"patriots",
	"New England Patriots",
	["Tom Brady is G.O.A.T", "Bill and Tom are BFFs", "Gronk Spike Heard Around the World"],
	[2001, 2004, 2005, 2015, 2017],
	"img/brady.png",
	"img/patriots.png",
	"brady"
);

var bruins = new Team(
	"bruins",
	"Boston Bruins",
	["Montreal Canadiens are the biggest rival", "Chara is captain", "Pastrnak dangles"],
	[2011],
	"img/krejci.png",
	"img/bruins.png",
	"krejci"
);

var celtics = new Team(
	"celtics",
	"Boston Celtics",
	["Famous for the 'Big Three'", "Bill and Tom are BFFs", "Holds many championships in the past"],
	[2008],
	"img/pierce.png",
	"img/celtics.png",
	"pierce"
);

var redsox = new Team(
	"redsox",
	"Boston Red Sox",
	["Broke the curse in 2004", "David Ortiz is the greatest", "One of America's oldest sports teams"],
	[2004, 2007, 2013],
	"img/ortiz.png",
	"img/redsox.png",
	"ortiz"
);

var teams = [patriots, bruins, celtics, redsox];


// Loop through teams array and display info for each team
function displayTeams() {
	for (var i = 0; i < teams.length; i++) {
		var findTeam = document.getElementById(teams[i].id);
		// Logic for displaying each team's info
		findTeam.querySelector(".team-name").innerHTML = teams[i].name; // Displays the Team name
		findTeam.querySelector(".logo").src = "img/" + teams[i].id + ".png";
		findTeam.querySelector(".star").src = "img/" + teams[i].star + ".png";
		for (var u = 0; u < teams[i].facts.length; u++) {
			findTeam.querySelector(".facts").innerHTML += "<li>" + teams[i].facts[u] + "</li>";
		}
		for (var u = 0; u < teams[i].champs.length; u++) {
			findTeam.querySelector(".championships").innerHTML += "<li>" + teams[i].champs[u] + "</li>";
		}
	}
}
displayTeams();



/* Works for Patriots. Use as template for loooping through and displaying each team

// Logic for displaying each team's info
document.getElementById("" + teams[0].id + "").querySelector(".team-name").innerHTML = teams[0].name; // Displays the Team name
displayImages();
displayChampionships();
displayFacts();

// Functions for Displaying Information
function displayImages(){
	document.querySelector(".logo").src = "img/" + teams[0].id + ".png";
	document.querySelector(".star").src = "img/" + teams[0].star + ".png";
}

function displayFacts(){
	for (var i = 0; i < teams[0].facts.length; i++) {
		document.querySelector(".facts").innerHTML += "<li>" + teams[0].facts[i] + "</li>";
	}
}

function displayChampionships(){
	for (var i = 0; i < teams[0].champs.length; i++) {
		document.querySelector(".championships").innerHTML += "<li>" + teams[0].champs[i] + "</li>";
	}
}
*/













