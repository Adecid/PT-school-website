const menuBar = document.querySelector("nav ul"),
      barIcon = document.querySelector("#bar-icon");
      timesIcon = document.querySelector("#times-icon");

barIcon.addEventListener("click", () => {
    menuBar.classList.add("active-nav");
    timesIcon.classList.add("active-nav");
})
timesIcon.addEventListener("click", () => {
    menuBar.classList.remove("active-nav");
})