function generateAccordion(parentDiv, listP, type, theme) {

    var list = listP;
    var listOfStrings = [];
    var maximumDepth = 0;
    var html = [];

    if (checkParams(parentDiv, listP, type, theme)) {
        return null;
    }

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
        var root = $("<ul id = 'tree'>").appendTo(parentDiv);
        var elements = {};
        $.each(list, function() {
            var parent = elements[this.path.substr(0, this.path.lastIndexOf("/"))];
            var list = parent ? parent.next("ul") : root;

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
                    if (theme == "dark") {
                        $(this).css("background-color", "black");
                    }
                    if (theme == "light") {
                        $(this).css("background-color", "white");
                    }
                }).css("border-color", ("#" + color)).css("background-color", function() {
				if (theme == "dark") {
                    return "black";
                } else if (theme == "light") {
                    return "white";
                }
            }).appendTo(list);
            var mySpan = $("<span>").text(this.name).attr("id", this.path).hover(function() {
                    if (theme == "dark") {
                        if (blackText) {
                            $(this).css("color", "black");
                        } else {
                            $(this).css("color", "white");
                        }
                    }
                    if (theme == "light") {
                        if (blackText) {
                            $(this).css("color", "white");
                        } else {
                            $(this).css("color", "black");
                        }
                    }
                },
                function() {
                    if (theme == "dark") {
                        $(this).css("color", "white");
                    }
                    if (theme == "light") {
                        $(this).css("color", "black");
                    }
                }).css("color", function() {
                if (theme == "dark") {
                    return "white";
                } else if (theme == "light") {
                    return "black";
                }
            }).appendTo(item);

            var icon;
            if (this.type == "folder") {
                icon = $("<i class='fa fa-folder'></i>").appendTo(mySpan);
            } else if (this.type == "file") {
                icon = $("<i class='fa fa-file'></i>").appendTo(mySpan);
            }
            elements[this.path] = item;
        });
        $("ul ul").hide();
    }

    return "<ul>" + html.join("") + "</ul>";
}

function checkParams(parentDiv, listP, type, theme) {
    if (listP.length <= 0) {
        $("<h3 style = 'text-align:center; color : red;'>Error in Accordion.js init</h3><p style = 'text-align:center'>Message: Object list is empty.</p>").appendTo(parentDiv);
        return true;
    }
    if (type != "accordion") {
        $("<h3 style = 'text-align:center; color : red;'>Error in Accordion.js init</h3><p style = 'text-align:center'>Message: Type " + type + " is invalid.</p>").appendTo(parentDiv);
        return true;
    }
    if (theme != "dark" && theme != "light") {
        $("<h3 style = 'text-align:center; color : red;'>Error in Accordion.js init</h3><p style = 'text-align:center; color : red;'>Message: Theme '" + theme + "' is invalid.</p>").appendTo(parentDiv);
        return true;
    }
}


function hex2rgb(hex, opacity) {
    var h = hex.replace('#', '');
    h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));
    for (var i = 0; i < h.length; i++) {
        h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
    }
    return { // return as json for seperate vals
        r: h[0],
        g: h[1],
        b: h[2]
    };
};