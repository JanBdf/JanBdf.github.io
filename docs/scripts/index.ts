function mouseCallback(evt: MouseEvent): void {
    let movinghead_left: HTMLElement = document.querySelector(".left .movinghead-head")
    let bounds = movinghead_left.getBoundingClientRect();
    let middle_x = bounds.left + 0.5 * bounds.width
    let middle_y = bounds.top + 0.5 * bounds.height
    let delta_x = evt.clientX - middle_x;
    let delta_y = evt.clientY - middle_y;
    let angle = Math.atan(delta_x / delta_y);
    console.log(delta_x, delta_y, angle);

    let actual_angle: number;
    if (delta_y > 0) {
        actual_angle = -angle;
    } else {
        actual_angle = Math.PI - angle;
    }

    movinghead_left.style.transform = `rotate(${actual_angle}rad)`

    let line: HTMLElement = document.querySelector('.line');
    line.style.top = middle_y + 'px';
    line.style.left = middle_x + 'px';
    line.style.transform = `rotate(${actual_angle}rad)`
}

function oncomplete(): void {
    document.addEventListener('mousemove', mouseCallback);
}

function init(): void {
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
