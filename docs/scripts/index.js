function mouseCallback(evt) {
    var movinghead_left = document.querySelector(".left .movinghead-head");
    var bounds = movinghead_left.getBoundingClientRect();
    var middle_x = bounds.left + 0.5 * bounds.width;
    var middle_y = bounds.top + 0.5 * bounds.height;
    var delta_x = evt.clientX - middle_x;
    var delta_y = evt.clientY - middle_y;
    var angle = Math.atan(delta_x / delta_y);
    console.log(delta_x, delta_y, angle);
    var actual_angle;
    if (delta_y > 0) {
        actual_angle = -angle;
    }
    else {
        actual_angle = Math.PI - angle;
    }
    movinghead_left.style.transform = "rotate(".concat(actual_angle, "rad)");
    var line = document.querySelector('.line');
    line.style.top = middle_y + 'px';
    line.style.left = middle_x + 'px';
    line.style.transform = "rotate(".concat(actual_angle, "rad)");
}
function oncomplete() {
    // document.addEventListener('mousemove', mouseCallback);
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
