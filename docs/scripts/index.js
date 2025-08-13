function mouseCallback(evt) {
    var nav = document.querySelector(".sidebar");
    var mouse_diag = Math.sqrt(Math.pow(evt.clientY, 2) + Math.pow(evt.clientX, 2));
    var dist = mouse_diag / Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    nav.style.opacity = String(Math.max(1 - dist, 0.2));
}
function oncomplete() {
    document.addEventListener('mousemove', mouseCallback);
    var text_container = document.querySelector(".title-text");
    text_container.childNodes.forEach(function (node) {
        if (node instanceof HTMLElement) {
            node.addEventListener('click', function () {
                node.style.visibility = 'hidden';
            });
        }
    });
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
