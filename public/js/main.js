var colouredRows = document.getElementsByClassName("coloured-row");
var time = 300;

$(document).ready(function(){
	$('.jumbotron .display-4').fadeIn(2000);
	$('.jumbotron .lead').fadeIn(3000);
	$('.jumbotron .lead.follow').fadeIn(4000);
	$('#icons').fadeIn(5000);

	for (var i = 0; i < colouredRows.length; i++)
	{

		$(colouredRows[i]).fadeIn(time);
		time += 300;
	}
});

$('#nav-home-tab').on('click', function(){
	console.log("hi");
	$('.nav-text').fadeTo(500, 0.6);
	$('#home').fadeTo(500, 1);
	bannerColour();
});

$('#nav-about-tab').on('click', function(){
	$('.nav-text').fadeTo(500, 0.6);
	$('#about').fadeTo(500, 1);
	bannerColour();
});

$('#nav-experience-tab').on('click', function(){
	$('.nav-text').fadeTo(500, 0.6);
	$('#experience').fadeTo(500, 1);
	bannerColour();
});

$('#nav-contact-tab').on('click', function(){
	$('.nav-text').fadeTo(500, 0.6);
	$('#contact').fadeTo(500, 1);
	bannerColour();
});

$('.coloured-row').on('mouseover', function(){
	$(this).css("background-color", randomColour());
	$(this).css("width", randomWidth());
	$('#home-overview').css("color", randomColour());
});

function oninit(){
	bannerColour();
	rowColour();
};

function rowColour(){
	var rows = document.getElementsByClassName("coloured-row");

	for (var i = 0; i < rows.length ; i++)
	{
		$(rows[i]).css("background-color", randomColour());
		$(rows[i]).css("width", randomWidth());
	}
	$('#home-main-p').css("color", randomColour());
};

function bannerColour(){
	var r = Math.floor(Math.random()*(255-150+1)+150);
	var g = Math.floor(Math.random()*(255-150+1)+150);
	var b = Math.floor(Math.random()*(255-150+1)+150);
	var rgb = 'rgb(' + r + ", " + g + ", " + b + ')';

	$('.jumbotron hr').css("background-image", 
	 	'linear-gradient(to right,' + rgb + ", #333," + rgb);	
	$('.jumbotron').css("background-image", 
	 	'linear-gradient(to bottom,' + rgb + ", 40%, #fff");
};

function randomWidth(){
	var width = 50 + Math.floor(Math.random() * 50);
	 return width + "%";
}

function randomColour(){
	var r = Math.floor(Math.random() * (150-0+1));
	var g = Math.floor(Math.random() * (150-0+1));
	var b = Math.floor(Math.random() * (150-0+1));

	return 'rgb(' + r + ", " + g + ", " + b + ')';
}