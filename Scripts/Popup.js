var scheduleModal = document.getElementById("scheduleModal");
var reserveModal = document.getElementById("reserveModal");
var infoModal = document.getElementById("infoModal");
var btnSchedule = document.getElementById("btn1");
var btnChatBot = document.getElementById("btn2");
var btnInfo = document.getElementById("btn3");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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