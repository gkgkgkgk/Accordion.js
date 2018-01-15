function generateAccordion(listP, type) {

    var list = listP;
    var listOfStrings = [];
    var maximumDepth = 0;
    var html = [];

    for (let i = 0, len = list.length; i < len; i++) {
        console.log(list[i].path);
        listOfStrings.push(list[i].path);

        var counter = 0;
        for (let x = 0; x < list[i].path.length; x++) {
            if (list[i].path.charAt(x) == '/') {
                counter++;
            }
        }
        if (counter >= maximumDepth) {
            maximumDepth = counter;
        }
    }

    if (type == "accordion") {
        var rootList = $("<ul id = 'tree'>").appendTo("#content");
        var elements = {};
        $.each(list, function() {
            var parent = elements[this.path.substr(0, this.path.lastIndexOf("/"))];
            var list = parent ? parent.next("ul") : rootList;
            if (!list.length) {
                list = $("<ul>").insertAfter(parent);
            }
            var item = $("<li>").appendTo(list);
            $("<span>").text(this.name).hover(function() {
				$(this).css("background-color","red")
			}).appendTo(item);
            elements[this.path] = item;
            			
			
			if (((hexToRgb().r + hexToRgb().g + hexToRgb().b) / 3.0) > 186) {
				
            } else {

            }

        });
        $("ul ul").hide();
    }

    return "<ul>" + html.join("") + "</ul>";
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var myhex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(myhex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}