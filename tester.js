var one = {
    name: "one",
    path: "/one"
}
var two = {
    name: "two",
    path: "/two"
}
var three = {
    name: "three",
    path: "/three"
}
var oneOne = {
    name: "oneOne",
    path: "/one/oneOne"
}
var oneTwo = {
    name: "oneTwo",
    path: "/one/oneTwo"
}
var twoOne = {
    name: "twoOne",
    path: "/two/twoOne"
}
var twoOneOne = {
    name: "twoOneOne",
    path: "/two/twoOne/twoOneOne"
}

var objects = [one, two, three, oneOne, oneTwo, twoOne, twoOneOne];


$(document).ready(function() {
    console.log("Ready");
    console.log(generateAccordion(objects, "accordion"));
    generateAccordion(objects, "accordion");
    //$("#content").append(generateAccordion(objects, "accordion"));
    //$('ul').hide();
    $('li').click(function(e) {  // inserted callback param "e" meaning "event"
        //e.stopPropagation(); // stop click from bubbling up
        $(this).next("ul").hide();
    });
    
});