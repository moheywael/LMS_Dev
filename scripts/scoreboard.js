let studentScore = document.querySelectorAll(".main-scoreboard__table table tbody tr")
let studentBanner = document.querySelector(".student-score-profile")
let bannerOverlay = document.querySelector(".banner-overlay")

studentScore.forEach(element => {
    element.addEventListener("click", evt => {
        evt.stopPropagation()
        studentBanner.classList.add("student-score-profile--active")
        bannerOverlay.classList.add("banner-overlay--active")
    })
})

studentBanner.addEventListener("click", evt => {
    evt.stopPropagation()
})

bannerOverlay.addEventListener("click", evt => {
    evt.stopPropagation()
    studentBanner.classList.remove("student-score-profile--active")
    bannerOverlay.classList.remove("banner-overlay--active")
})
