var scheduleModal = document.getElementById("scheduleModal");
var reserveModal = document.getElementById("reserveModal");
var infoModal = document.getElementById("infoModal");
var btnSchedule = document.getElementById("btn1");
var btnChatBot = document.getElementById("btn2");
var btnInfo = document.getElementById("btn3");
const welcome=document.querySelector(".welcome")
const text=welcome.textContent
const splitText= text.split("")
welcome.textContent=""
for(let i=0; i<splitText.length; i++){
  welcome.innerHTML+="<span><pre>"+splitText[i]+"</pre></span>"
}

let char=0
let timer=setInterval(onTick, 50)
function onTick(){
  const span = welcome.querySelectorAll('span')[char]
  span.classList.add('fade')
  char++
  if(char===splitText.length){
    finish()
    return
  }
}

function finish(){
  clearInterval(timer)
  timer=null
}

btnSchedule.addEventListener("mouseover", function(){ scheduleModal.style.display = "block"; })
btnSchedule.addEventListener("mouseout", function(){ scheduleModal.style.display = "none"; })
btnSchedule.onclick = function () {
  location.href = "ScheduleMeeting.html";
};

btnChatBot.addEventListener("mouseover", function(){ botModal.style.display = "block"; })
btnChatBot.addEventListener("mouseout", function(){ botModal.style.display = "none"; })
btnChatBot.onclick = function () {
  location.href = "ChatBot.html";
};

btnInfo.addEventListener("mouseover", function(){ infoModal.style.display = "block"; })
btnInfo.addEventListener("mouseout", function(){ infoModal.style.display = "none"; })
btnInfo.onclick = function () {
  location.href = "Info.html";
};