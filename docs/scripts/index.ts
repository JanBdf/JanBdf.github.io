function mouseCallback(evt: MouseEvent): void {
    const nav: HTMLElement = document.querySelector(".sidebar");

    let mouse_diag: number = Math.sqrt(evt.clientY ** 2 + evt.clientX ** 2);
    let dist: number = mouse_diag / Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);

    nav.style.opacity = String(Math.max(1 - dist, 0.2));
}

function oncomplete(): void {
    document.addEventListener('mousemove', mouseCallback);

    const text_container: Element = document.querySelector(".title-text");

    text_container.childNodes.forEach(node => {
        if (node instanceof HTMLElement) {
            node.addEventListener('click', (): void => {
                node.style.visibility = 'hidden';
            });
        }
    });
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
