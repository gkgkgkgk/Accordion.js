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

            var color = this.color;

            var blackText = true;
            if (((hex2rgb(this.color, 1.0).r + hex2rgb(this.color, 1.0).g + hex2rgb(this.color, 1.0).b) / 3.0) < 186) {
                blackText = false;
            }
			
            var item = $("<li>").hover(function() {
                    $(this).css("background-color", ('#' + color));
                },
                function() {
                    $(this).css("background-color", "black");
                }).css("border-color", ("#" + color)).appendTo(list);
            var mySpan = $("<span>").text(this.name).attr("id", this.path).hover(function() {
                    if (blackText) {
                        $(this).css("color", "black");
                    } else {
                        $(this).css("color", "white");
                    }
                },
                function() {
                    $(this).css("color", "white");
                }).appendTo(item);
			
			var icon;
			if(this.type == "folder"){
				icon = $("<i class='icon-arrow-right'></i>").appendTo(mySpan);
			}
			else if(this.type == "file"){
				icon = $("<i class='icon-arrow-right'></i>").appendTo(mySpan);
			}
            elements[this.path] = item;
        });
        $("ul ul").hide();
    }

    return "<ul>" + html.join("") + "</ul>";
}

function hex2rgb(hex, opacity) {
    var h = hex.replace('#', '');
    h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

    for (var i = 0; i < h.length; i++) {
        h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
    }

    return {
        r: h[0],
        g: h[1],
        b: h[2]
    };
};