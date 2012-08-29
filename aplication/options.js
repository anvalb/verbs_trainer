function saveOptions() {
    window.localStorage.lightStyle = document.getElementById('lightStyle').checked;
    window.localStorage.darkStyle = document.getElementById('darkStyle').checked;
}
$(function () {
    if (window.localStorage.lightStyle == null && window.localStorage.darkStyle == null) {
        window.localStorage.lightStyle = "true";
    }
    if (window.localStorage.lightStyle == "true") {
        $('#lightStyle').attr("checked", "checked");
    }
    else {
        $('#darkStyle').attr("checked", "checked");
    }
});