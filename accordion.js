function generateAccordion(listP, type){
	
	var list = listP;
	var listOfStrings = [];

	var maximumDepth = 0;


	for (let i = 0, len = list.length; i < len; i++) {
		console.log(list[i].path);
		listOfStrings.push(list[i].path);
		
		var counter = 0;
		for(let x = 0; x < list[i].path.length; x++){
			if(list[i].path.charAt(x) == '/'){
				counter++;
			}
		}
		if(counter >= maximumDepth){
			maximumDepth = counter;
		}
	}
	
	if(type == "accordion"){
		console.log("Starting Accordion");
		for(let i = 0; i < maximumDepth; i++){
			console.log("Max " + maximumDepth + "  " + i);
		}
	}
	
	
	return "<p>Success</p>";
}