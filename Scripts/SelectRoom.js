var mr1 = document.getElementById("gi1");
var mr2 = document.getElementById("gi2");
var mr3 = document.getElementById("gi7");
var btnSelectRoom = document.getElementById("btnSelectRoom");
var form = document.getElementById("form");
var selected = 0;

form.scrollIntoView();

mr1.onclick = function() {
    if (selected == 0) {
        mr1.style.backgroundColor = "green";
        mr2.style.backgroundColor = "#1e1e1e";
        mr3.style.backgroundColor = "#1e1e1e";
    
        btnSelectRoom.style.color = "green";
        btnSelectRoom.style.borderColor = "green";
        btnSelectRoom.value = "Room 1 Selected";
    
        form.scrollIntoView();
        selected = 1;
    } else {
        
    }


}

mr2.onclick = function() {
    mr1.style.backgroundColor = "#1e1e1e";
    mr2.style.backgroundColor = "green";
    mr3.style.backgroundColor = "#1e1e1e";

    btnSelectRoom.style.color = "green";
    btnSelectRoom.style.borderColor = "green";
    btnSelectRoom.onhover
    btnSelectRoom.value = "Room 2 Selected";

    form.scrollIntoView();

    selected = 1;
}

mr3.onclick = function() {
    mr1.style.backgroundColor = "#1e1e1e";
    mr2.style.backgroundColor = "#1e1e1e";
    mr3.style.backgroundColor = "green";

    btnSelectRoom.style.color = "green";
    btnSelectRoom.style.borderColor = "green";
    btnSelectRoom.value = "Room 3 Selected";

    form.scrollIntoView();

    selected = 1;
}