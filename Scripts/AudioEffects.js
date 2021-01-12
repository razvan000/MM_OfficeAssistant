var btnSlower = document.getElementById("btnSlower");
var btnFaster = document.getElementById("btnFaster");
var audio = document.getElementById("FeedbackRecordingMpeg");


btnSlower.onclick = function () {
    audio.playbackRate = 0.5; 
}

btnFaster.onclick = function () {
    audio.playbackRate = 1.5; 
}