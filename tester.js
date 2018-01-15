var one = {
    name: "one",
    path: "/one",
	color: "f4dc41"
}
var two = {
    name: "two",
    path: "/two",
	color: "f44242"
}
var three = {
    name: "three",
    path: "/three",
	color: "41dcf4"
}
var oneOne = {
    name: "oneOne",
    path: "/one/oneOne",
	color: "417ff4"
}
var oneTwo = {
    name: "oneTwo",
    path: "/one/oneTwo",
	color: "41f4ac"
}
var twoOne = {
    name: "twoOne",
    path: "/two/twoOne",
	color: "41f4ac"
}
var twoOneOne = {
    name: "twoOneOne",
    path: "/two/twoOne/twoOneOne",
	color: "76f441"
}

var objects = [one, two, three, oneOne, oneTwo, twoOne, twoOneOne];


$(document).ready(function() {
    generateAccordion(objects, "accordion");
    runAccordion();
});


function runAccordion(){
	$('li').click(function(e) { 
		$(this).next("ul").slideToggle();
    });	
}