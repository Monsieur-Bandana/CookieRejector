document.body.style.background = "grey";

var x = document.getElementsByTagName("button");
x[0].innerHTML = "Hello World!";
x[0].style.background = "blue"

var z = findHighestZIndex('div')
z.style.background = "blue"

function findHighestZIndex(elem) {
    var elems = document.getElementsByTagName(elem);
    console.log(elems)
    var highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
    for (var i = 0; i < elems.length; i++) {
        var zindex = Number.parseInt(
            document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
            10
        );
        if (zindex > highest) {
            highest = zindex;
        }
    }
    return highest;
}