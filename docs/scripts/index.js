import * as mh from "./lib/movinghead.js";
function update(_ = null) {
    let text_element = document.querySelector(".text-thingo");
    let text_area = text_element.getBoundingClientRect();
    mh.movingheads.forEach((movinghead) => {
        // movinghead.pointTo((text_area.left + 0.5 * text_area.width), (text_area.top + 0.5 * text_area.height));
    });
}
function onInputChange(e) {
    let target = e.currentTarget;
    let value = parseInt(target.value);
    mh.movingheads.forEach((movinghead) => {
        movinghead.setBeamAngle(value / 1000 * 90);
    });
}
function toggleSidebar(e = null) {
    let sidebar = document.querySelector(".sidebar");
    if (!sidebar.classList.contains("fade-in")) {
        sidebar.classList.add("fade-in");
        sidebar.classList.remove("fade-out");
    }
    else {
        sidebar.classList.add("fade-out");
        sidebar.classList.remove("fade-in");
    }
}
function main() {
    document.querySelector(".btn-sidebar").addEventListener("click", toggleSidebar);
    // mh.init();
    //
    // window.addEventListener('resize', update);
    // window.addEventListener('click', update);
    // document.querySelector("#slider").addEventListener("input", onInputChange);
    // update();
}
document.addEventListener("DOMContentLoaded", main);
