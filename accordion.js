function generateAccordion(listP, type){
	
	var list = listP;
	var listOfStrings = [];

	var maximumDepth = 0;

	var html = [];
	
	
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
		var rootList = $("<ul id = 'tree'>").appendTo("#content");
		var elements = {};
    $.each(list, function() {
        var parent = elements[this.path.substr(0, this.path.lastIndexOf("/"))];
        var list = parent ? parent.next("ul") : rootList;
        if (!list.length) {
            list = $("<ul>").insertAfter(parent);
        }
        var item = $("<li>").appendTo(list);
        $("<a>").attr("href", this.path).text(this.name).appendTo(item);
        elements[this.path] = item;
    });
		$("ul ul").hide();
	}
	
	
	return "<ul>" + html.join("") + "</ul>";
}