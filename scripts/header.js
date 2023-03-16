// :::::::::::: Desktop :::::::::::

// :::::::::::: Mobile ::::::::::::
let toggles = document.querySelectorAll(".header-toggle")
let menus = document.querySelectorAll(".header-menu")
let mobileMenus = document.querySelector(".mobile-menus")

let header_sidebarToggle = document.querySelector(".sidebar-toggle")
let header_sidebarMenu = document.querySelector(".sidebar-menu")

let header_navbarToggle = document.querySelector(".navbar-toggle")
let header_navbarMenu = document.querySelector(".navbar-menu")
let activityCenter = document.querySelector(".activity-center")

// ------------------------------

// sidebar__body__sub-menu--opened

activityCenter.addEventListener("click", evt => {
    evt.stopPropagation()
    header_navbarMenu.classList.remove("navbar-menu--opened")
    header_sidebarMenu.classList.remove("sidebar-menu--opened")
    activityCenter.classList.add("activity-center--active")
})

header_navbarMenu.addEventListener("click", evt => {
    evt.stopPropagation()
})

header_sidebarMenu.addEventListener("click", evt => {
    evt.stopPropagation()
})

header_sidebarToggle.addEventListener("click", evt => {
    evt.stopPropagation()
    activityCenter.classList.remove("activity-center--active")
    header_navbarMenu.classList.remove("navbar-menu--opened")
    header_sidebarMenu.classList.add("sidebar-menu--opened")
})

header_navbarToggle.addEventListener("click", evt => {
    evt.stopPropagation()
    activityCenter.classList.remove("activity-center--active")
    header_sidebarMenu.classList.remove("sidebar-menu--opened")
    header_navbarMenu.classList.add("navbar-menu--opened")
})


document.addEventListener("click", evt => {
    evt.stopPropagation()

    if (evt.target != header_navbarMenu && evt.target != header_navbarToggle) {
        header_navbarMenu.classList.contains("navbar-menu--opened") ? header_navbarMenu.classList.remove("navbar-menu--opened") : ""
    }

    if (evt.target != activityCenter) {
        activityCenter.classList.remove("activity-center--active")
        // fileUploadedBody.classList.remove("active")
    }

    if (evt.target != header_sidebarMenu && evt.target != header_sidebarToggle) {
        header_sidebarMenu.classList.contains("sidebar-menu--opened") ? header_sidebarMenu.classList.remove("sidebar-menu--opened") : ""
    }
})



// toggles.forEach(toggle => {
//     toggle.addEventListener("click", () => {
//         menus.forEach(menu => {
//             // console.log(toggle)
//             // console.log(menu)
//             let header_sidebarMenu = "sidebar-menu";
//             let header_sidebarToggle = "sidebar-toggle";
//             let header_navbarMenu = "navbar-menu";
//             let header_navbarToggle = "navbar-toggle";


//             if (toggle.classList.contains(header_sidebarToggle)) {
//                 menu.classList.toggle(header_sidebarMenu + "--opened")
//             }
//             if (toggle.classList.contains(header_navbarToggle)) {
//                 menu.classList.toggle(header_navbarMenu + "--opened")
//             }

//         })
//     })
// })