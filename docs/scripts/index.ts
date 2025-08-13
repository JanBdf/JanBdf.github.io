function mouseCallback(evt: MouseEvent): void {
    const nav: HTMLElement = document.querySelector(".sidebar");

    let mouse_diag: number = Math.sqrt(evt.clientY ** 2 + evt.clientX ** 2);
    let dist: number = mouse_diag / Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);

    nav.style.opacity = String(Math.max(1 - dist, 0.2));
}

function navClickCallback(evt: MouseEvent): void {
    const nav: HTMLElement = document.querySelector(".sidebar");
    nav.style.visibility = "hidden";
}

function oncomplete(): void {
    document.addEventListener('mousemove', mouseCallback);
    const nav: HTMLElement = document.querySelector(".sidebar");

    nav.addEventListener("click", navClickCallback)
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
