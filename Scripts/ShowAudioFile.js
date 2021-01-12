var text = document.getElementById("FeedbackRecordingText");
var mpeg = document.getElementById("FeedbackRecordingMpeg");
var btnSlower = document.getElementById("btnSlower");
var btnFaster = document.getElementById("btnFaster");
var svg = document.getElementById("svg");

text.style.visibility = "hidden";
mpeg.style.visibility = "hidden";
btnSlower.style.visibility = "hidden";
btnFaster.style.visibility = "hidden";

svg.onclick = function () {
    if (text.style.visibility == "visible" && mpeg.style.visibility == "visible") {
        text.style.visibility = "hidden";
        mpeg.style.visibility = "hidden";
        btnSlower.style.visibility = "hidden";
        btnFaster.style.visibility = "hidden";
    } else {
        text.style.visibility = "visible";
        mpeg.style.visibility = "visible";
        btnSlower.style.visibility = "visible";
        btnFaster.style.visibility = "visible";
    }
}