function toggleSidebar(_ = null) {
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
function hihi() {
    window.close();
}
function main() {
    document.querySelector(".btn-sidebar").addEventListener("click", hihi);
}
document.addEventListener("DOMContentLoaded", main);
