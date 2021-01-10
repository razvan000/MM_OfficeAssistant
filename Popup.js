var scheduleModal = document.getElementById("scheduleModal");
var reserveModal = document.getElementById("reserveModal");
var infoModal = document.getElementById("infoModal");
var btnSchedule = document.getElementById("btn1");
var btnReserve = document.getElementById("btn2");
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

btnReserve.addEventListener("mouseover", function(){ reserveModal.style.display = "block"; })
btnReserve.addEventListener("mouseout", function(){ reserveModal.style.display = "none"; })
btnReserve.onclick = function () {
  location.href = "ReserveRoom.html";
};

btnInfo.addEventListener("mouseover", function(){ infoModal.style.display = "block"; })
btnInfo.addEventListener("mouseout", function(){ infoModal.style.display = "none"; })