var attendants = document.getElementById("attendants");
var list = document.getElementById("ColleaguesList");
var listItems = document.getElementById("ColleaguesList").getElementsByTagName("li");
var attendantsText = document.getElementById("attendantsText");

list.style.visibility = "hidden";
var visible = 0;

attendants.onclick = function () {
    if (visible == 0)
    {
        list.style.visibility = "visible";
        visible = 1;
    } else {
        list.style.visibility = "hidden";
        visible = 0;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerText);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.value == "") {
        ev.target.value = data;
    } else ev.target.value = ev.target.value + ";" + data;
}
