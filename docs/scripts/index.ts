function toggleSidebar(_: Event | null = null): void {
    let sidebar: HTMLElement = document.querySelector(".sidebar");

    if (!sidebar.classList.contains("fade-in")) {
        sidebar.classList.add("fade-in");
        sidebar.classList.remove("fade-out");
    } else {
        sidebar.classList.add("fade-out");
        sidebar.classList.remove("fade-in");
    }
}

function main(): void {
    document.querySelector(".btn-sidebar").addEventListener("click", toggleSidebar);
}

document.addEventListener("DOMContentLoaded", main);
