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
			console.log("Depth: " + i);
			for(let x = 0; x < listOfStrings.length; x++){
				var counter = -1;
				for(let y = 0; y < listOfStrings[x].length; y++){
					if(listOfStrings[x].charAt(y) == '/'){
						counter++;
					}
				}
				if(counter == i){ // if it is on the same layer
					console.log(listOfStrings[x] + " same layer " + i);
				}
			}
		}
	}
	
	
	return "<p>Success</p>";
}