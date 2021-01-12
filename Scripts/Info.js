
// const ssBtn = document.getElementById('ssBtn')
// const canvas = document.querySelector('canvas');
// const context = canvas.getContext('2d');
// const myCanvas= document.createElement('canvas');
// const myContext = myCanvas.getContext('2d');
// const w, h, ratio;
const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')
const slowmoBtn= document.getElementById('slowMoBtn')
const initialSpeedBtn= document.getElementById('initialSpeedBtn')
const fastForwardBtn= document.getElementById('fastForwardBtn')




// video.addEventListener('loadedmetadata', function() {
//     ratio = video.videoWidth / video.videoHeight;
//     w = video.videoWidth - 100;
//     h = parseInt(w / ratio, 10);
//     canvas.width = w;
//     canvas.height = h;
//     myCanvas.width = w;
//     myCanvas.height = h;
//     }, false);

// function snap() {
//     context.fillRect(0, 0, w, h);
//     context.drawImage(video, 0, 0, w, h);
// }


function playVideo() {
    var video = document.getElementsByTagName("video")[0];
    video.play();
}

 function pauseVideo() {
    var video = document.getElementsByTagName("video")[0];
    video.pause(); 
}

playBtn.onclick=function(){
    playVideo()
}

pauseBtn.onclick=function(){
    pauseVideo()
}

slowmoBtn.onclick=function(){
    var video = document.getElementsByTagName("video")[0];
    video.playbackRate=0.5

}

initialSpeedBtn.onclick=function(){
    var video = document.getElementsByTagName("video")[0];
    video.playbackRate=1
}

fastForwardBtn.onclick=function(){
    var video = document.getElementsByTagName("video")[0];
    video.playbackRate=1.4
}



