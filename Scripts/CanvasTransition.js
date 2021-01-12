var canvas = document.getElementById("backgroundTransition");
var ctx = canvas.getContext("2d");

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

var grd = ctx.createLinearGradient(100, 150, 100, 0);
grd.addColorStop(0, "transparent");
grd.addColorStop(0.45, "cyan");
grd.addColorStop(0.55, "cyan");
grd.addColorStop(1, "transparent");

ctx.fillStyle = grd;
var rectXStart = getOffset(canvas).left;
var rectYStart = getOffset(canvas).top;
//ctx.fillRect(rectXStart, rectYStart, 200, 200);
ctx.fillRect(0, 0, 400, 200);
canvas.style.border = "none";