
let btn = document.querySelector(`.menu-btn`);
let menu = document.querySelector(`.menu`);
btn.addEventListener("click", function (e) {
    menu.classList.toggle("active");
    btn.classList.toggle("active");
});

