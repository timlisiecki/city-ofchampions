
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
	[
		"Franchise Granted: November 22, 1959 as the Boston Patriots.", 
		"Changed name to New England Patriots in 1971", 
		"Stadium: Gillette Stadium",
		"Championships before 2000: 0"
	],
	[2001, 2004, 2005, 2015, 2017],
	"img/brady.png",
	"img/patriots.png",
	"brady"
);

var bruins = new Team(
	"bruins",
	"Boston Bruins",
	[
		"Franchise Granted: October 11, 1924 as the Boston Bruins.", 
		"Rivalry with Montreal Canadiens is one of the oldest sports rivalries of all time.", 
		"Arena: TD Garden",
		"Championships before 2000: 1929, 1939, 1941, 1970, 1972"
	],
	[2011],
	"img/krejci.png",
	"img/bruins.png",
	"krejci"
);

var redsox = new Team(
	"redsox",
	"Boston Red Sox",
	[
		"Franchise Granted: 1901 as the Boston Americans.", 
		"Changed name to Boston Red Sox in 1908.", 
		"Park: Fenway Park",
		"Championships before 2000: 1903, 1912, 1915, 1916, 1918"
	],
	[2004, 2007, 2013],
	"img/ortiz.png",
	"img/redsox.png",
	"ortiz"
);

var celtics = new Team(
	"celtics",
	"Boston Celtics",
	[
		"Franchise Granted: June 6, 1946 as the Boston Celtics.", 
		"Most titles of any NBA franchise, accounting for almost a quarter of all championships since league's founding.", 
		"Stadium: TD Garden",
		"Championships before 2000: 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986"
	],
	[2008],
	"img/pierce.png",
	"img/celtics.png",
	"pierce"
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


$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hide-item').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }   
        });
    });
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});






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













