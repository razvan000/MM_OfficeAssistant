document.onkeydown = function(e) {
    switch (e.code) {
        case "KeyM":
            location.href = "ScheduleMeeting.html";
            break;
        case "KeyP":
            location.href = "Info.html";
            break;
        case "KeyC":
            location.href = "ChatBot.html";
            break;
        default:
            break;
    }
}