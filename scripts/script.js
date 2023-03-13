// variables Sidebar
let sidebar = document.querySelector(".sidebar")

let sidebar_subMenu = document.querySelectorAll(".sidebar__body__sub-menu")
let sidebar_subMenu_btn = document.querySelectorAll(".sidebar__body__menu__btn")
let sidebar_subMenu_elearning = document.querySelector(".elearning-sub-menu")
let sidebar_subMenu_semesterwork = document.querySelector(".semesterwork-sub-menu")


let sidebar_toggle = document.querySelector(".sidebar__header__toggle")
let sidebar_activityCenter = document.querySelector(".activity-center")

// variables - xxx



// Event Listeners - Sidebar
sidebar_toggle.addEventListener("click", collapse)
sidebar_activityCenter.addEventListener("click", activiryExpand)


// Event Listeners - Sidebar
sidebar_subMenu_btn.forEach(subMenu => {
    subMenu.addEventListener("click", () => {
        // E-Learning Sub Menu
        if (subMenu.classList.contains("sidebar__body__menu__elearning-btn")) {
            sidebar_subMenu_elearning.classList.toggle("sidebar__body__sub-menu--opened")
        }

        // Semester Work Sub Menu
        if (subMenu.classList.contains("sidebar__body__menu__semesterwork-btn")) {
            sidebar_subMenu_semesterwork.classList.toggle("sidebar__body__sub-menu--opened")
        }

        subMenu.querySelectorAll("i.fa-solid")[1].classList.toggle("rotate")

    })
})




// Functions
function collapse() {
    sidebar.classList.toggle("collapsed")
    sidebar_toggle.classList.toggle("rotate")

    // sidebar_activityCenter.classList.remove("activity-center--active")

    sidebar_subMenu.forEach(subMenu => {
        subMenu.classList.remove("sidebar__body__sub-menu--opened")
        // console.log(document.querySelectorAll(".sidebar__body__sub-menu--opened"))
    })
}

function activiryExpand() {
    sidebar_activityCenter.classList.toggle("activity-center--active")
}

// function expand() {}

