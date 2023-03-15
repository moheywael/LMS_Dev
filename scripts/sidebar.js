let sidebar = document.querySelector(".sidebar")

let subMenu = document.querySelectorAll(".sidebar__body__sub-menu")
let subMenu_btn = document.querySelectorAll(".sidebar__body__menu__btn")
let subMenu_elearning = document.querySelector(".elearning-sub-menu")
let subMenu_semesterwork = document.querySelector(".semesterwork-sub-menu")

let sidebarToggle = document.querySelector(".sidebar__header__toggle")

// -------------------------------

sidebarToggle.addEventListener("click", collapse)


subMenu_btn.forEach(subMenu => {
    subMenu.addEventListener("click", () => {

        // E-Learning Sub Menu
        if (subMenu.classList.contains("sidebar__body__menu__elearning-btn")) {
            subMenu_semesterwork.classList.remove("sidebar__body__sub-menu--opened")
            subMenu_elearning.classList.toggle("sidebar__body__sub-menu--opened")
        }

        // Semester Work Sub Menu
        if (subMenu.classList.contains("sidebar__body__menu__semesterwork-btn")) {
            subMenu_elearning.classList.remove("sidebar__body__sub-menu--opened")
            subMenu_semesterwork.classList.toggle("sidebar__body__sub-menu--opened")
        }

        // fix Me Please :)
        subMenu.querySelectorAll("i.fa-solid")[1].classList.toggle("rotate")

    })
})

function collapse(evt) {
    sidebar.classList.toggle("collapsed")
    sidebarToggle.classList.toggle("rotate")

    subMenu.forEach(subMenu => {
        subMenu.classList.remove("sidebar__body__sub-menu--opened")
    })
}
