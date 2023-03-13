// variables Sidebar
let sidebar = document.querySelector(".sidebar")
let sidebar_subMenu = document.querySelector(".sidebar__body__sub-menu")
let sidebar_toggle = document.querySelector(".sidebar__header__toggle")

// variables - xxx



// Event Listeners - Sidebar
sidebar_toggle.addEventListener("click", collapse)
sidebar_subMenu.addEventListener("click", expand)

// Event Listeners - Sidebar



// Functions
function collapse() {
    sidebar.classList.toggle("collapsed")
    sidebar_toggle.classList.toggle("sidebar__header__toggle--active")
    // activityCenter.classList.toggle("")
    sidebar_subMenu.classList.remove("active")
}

function expand() {
    sidebar_subMenu.classList.toggle("active")

}
