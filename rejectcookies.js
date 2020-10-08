
function findHighestZIndex(elem) {
    var elems = document.getElementsByTagName(elem);
    console.log(elems)
    var highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
    var highestel = elems[0]
    for (var i = 0; i < elems.length; i++) {
        var zindex = Number.parseInt(
            document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
            10
        );
        if (zindex > highest) {
            highest = zindex;
            highestel = elems[i]
        }
    }
    return highestel;
}



var y = document.getElementById("cookie")

var z = findHighestZIndex("*");

z.style.backgroundColor = "green"


var x = findHighestZIndex("*").getElementsByTagName("button");

x[0].click()




