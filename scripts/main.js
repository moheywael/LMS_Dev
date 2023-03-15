// :::::::::::: xxxxxxxxxx :::::::::::

// :::::::::::: Preloader ::::::::::::
let preloaderOverlay = document.querySelector(".preloader-overlay")

// Preloader
window.addEventListener("load", () => {
    setTimeout(() => {
        // preloaderOverlay.style.display = "none"
        preloaderOverlay.remove()
    }, 2000)
})
