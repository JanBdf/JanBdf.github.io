function mouseCallback(evt) {
    var nav = document.querySelector(".sidebar");
    var mouse_diag = Math.sqrt(Math.pow(evt.clientY, 2) + Math.pow(evt.clientX, 2));
    var dist = mouse_diag / Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    nav.style.opacity = String(Math.max(1 - dist, 0.2));
}
function navClickCallback(evt) {
    var nav = document.querySelector(".sidebar");
    nav.style.visibility = "hidden";
}
function oncomplete() {
    document.addEventListener('mousemove', mouseCallback);
    var nav = document.querySelector(".sidebar");
    nav.addEventListener("click", navClickCallback);
}
function init() {
    switch (document.readyState) {
        case "loading":
            break;
        case "complete":
            oncomplete();
            break;
        case "interactive":
            break;
    }
}
document.addEventListener("readystatechange", init);
