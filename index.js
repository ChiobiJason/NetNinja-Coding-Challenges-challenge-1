const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

console.log(nav);

burger.addEventListener("click", () => {
    nav.classList.toggle("show")
    burger.classList.toggle("show")
})