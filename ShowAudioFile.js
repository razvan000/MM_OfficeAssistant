var text = document.getElementById("FeedbackRecordingText");
var mpeg = document.getElementById("FeedbackRecordingMpeg");
var svg = document.getElementById("svg");

text.style.visibility = "hidden";
mpeg.style.visibility = "hidden";

svg.onclick = function () {
    text.style.visibility = "visible";
    mpeg.style.visibility = "visible";
}