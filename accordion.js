function generateAccordion(listP, type){
	
	var list = listP;
	var listOfStrings = [];

	for (var i = 0, len = list.length; i < len; i++) {
		console.log(list[i].path);
		listOfStrings.push(list[i].path);
	}
	
	if(type == "accordion"){
		console.log("Starting Accordion");
	}
	
	
	return "<p>Success</p>";
}