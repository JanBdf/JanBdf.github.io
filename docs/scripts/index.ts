import * as mh from "./lib/movinghead.js";

function update(_: Event | null = null): void {
    let text_element: HTMLElement = document.querySelector(".text-thingo");
    let text_area = text_element.getBoundingClientRect();

    mh.movingheads.forEach((movinghead: mh.Movinghead) => {
        // movinghead.pointTo((text_area.left + 0.5 * text_area.width), (text_area.top + 0.5 * text_area.height));
    });
}

function onInputChange(e: InputEvent): void {
    let target: HTMLInputElement = e.currentTarget as HTMLInputElement;
    let value: number = parseInt(target.value);
    mh.movingheads.forEach((movinghead: mh.Movinghead) => {
        movinghead.setBeamAngle(value / 1000 * 90);
    });
}

function main(): void {
    // mh.init();
    //
    // window.addEventListener('resize', update);
    // window.addEventListener('click', update);

    // document.querySelector("#slider").addEventListener("input", onInputChange);

    // update();
}

document.addEventListener("DOMContentLoaded", main);
