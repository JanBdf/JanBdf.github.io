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
function main() {
}
document.addEventListener("DOMContentLoaded", main);
