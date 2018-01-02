var one = {
	name : "one",
	path : "one/"
}
var two = {
	name : "two",
	path : "two/"
}
var three = {
	name : "three",
	path : "three/"
}
var oneOne = {
	name : "oneOne",
	path : "one/oneOne"
}
var twoOne = {
	name : "twoOne",
	path : "two/twoOne"
}
var twoOneOne = {
	name : "twoOneOne",
	path : "two/twoOne/twoOneOne"
}


var objects = [
	one, two, three, oneOne, twoOne, twoOneOne];
	
	
	
$( document ).ready(function() {
	console.log("Ready");
	console.log(generateAccordion(objects, "accordion"));
	$("#content").append(generateAccordion(objects, "accordion"));
});