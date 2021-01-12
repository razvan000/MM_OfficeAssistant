var dropdown = document.getElementById("pickLocation");
var btn = document.getElementById("btnSelectRoom");

btn.style.visibility = "hidden";

dropdown.onchange = function () {
    var selectedIndex = dropdown.selectedIndex;
    if (selectedIndex == 0) {
        btn.style.visibility = "hidden";
    } else btn.style.visibility = "visible";
}