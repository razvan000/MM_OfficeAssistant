
// 
const playBtn = document.getElementById('playBtn')
const stopBtn = document.getElementById('stopBtn')
const pauseBtn = document.getElementById('pauseBtn')
const slowmoBtn= document.getElementById('slowMoBtn')
const initialSpeedBtn= document.getElementById('initialSpeedBtn')
const fastForwardBtn= document.getElementById('fastForwardBtn')
const muteBtn =  document.getElementById('muteBtn')
const ssBtn = document.getElementById('ssBtn')
const ssBwBtn = document.getElementById('ssBwBtn')
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const video = document.getElementsByTagName("video")[0]
window.addEventListener('resize', ()=>{
    video.addEventListener('loadedmetadata', ()=>{
        ratio = video.videoWidth / video.videoHeight;
        w = video.videoWidth - 300;
        h = parseInt(w / ratio, 10);
        canvas.width = w;
        canvas.height = h;
    })
}, false)

video.addEventListener('loadedmetadata', ()=>{
    ratio = video.videoWidth / video.videoHeight;
    w = video.videoWidth - 300;
    h = parseInt(w / ratio, 10);
    canvas.width = w;
    canvas.height = h;
})

ssBwBtn.onclick=function(){
    context.drawImage(video,0,0)
    var imgData= context.getImageData(0, 0, canvas.width, canvas.height)
    for(let i=0; i<imgData.data.length; i+=4){
        let pixel = 0.2 * imgData.data[i] + 0.72 * imgData.data[i+1] + 0.07 *imgData.data[i+2]
        imgData.data[i]=pixel
        imgData.data[i+1]=pixel
        imgData.data[i+2]=pixel
    }
    context.putImageData(imgData,0,0)
}

ssBtn.onclick=function(){
    context.drawImage(video,0,0)
}


stopBtn.onclick=function(){
   
    video.pause()
    video.currentTime=0

}

muteBtn.onclick=function(){

    if(muteBtn.value==='Mute'){
        muteBtn.value='Unmute'
        video.volume=0
    }else{
        muteBtn.value='Mute'
        video.volume=1
    }
}


playBtn.onclick=function(){
    video.play();
}

pauseBtn.onclick=function(){
    video.pause();
}

slowmoBtn.onclick=function(){

    video.playbackRate=0.5

}

initialSpeedBtn.onclick=function(){

    video.playbackRate=1
}

fastForwardBtn.onclick=function(){

    video.playbackRate=1.4
}



