let create = document.getElementById("home");
let characters = document.getElementById("characters");
let darkmode = document.getElementById("mode_dark");
let sundark = document.getElementById("mode_light");
let light = document.getElementById("mode_light");
let moonlight = document.getElementById("mode_dark");
let theme = localStorage.getItem("theme");
let darkchange = document.querySelector(".modedark");
let lightchange = document.querySelector(".modelight");
let logo = document.getElementById("logo_Drag");
let darklogo = document.getElementById("logo_Drag")
let back = document.getElementById("logo_Drag")

darkmode.addEventListener("click", () => {
    document.body.classList.remove("dark-mode"); // activa modo oscuro
    darkmode.src = "../storage/img/luna_prendida.svg";
    sundark.src = "../storage/img/sol_desactivado.svg";
    localStorage.setItem("theme", "dark");
});

sundark.addEventListener("click", () => {
    document.body.classList.add("dark-mode"); // desactiva modo oscuro
    light.src = "../storage/img/akar-icons_sun-fill.svg";
    moonlight.src = "../storage/img/bi_moon-fill.svg";
    localStorage.setItem("theme", "light");
});

if (theme === "light") {
    darkmode.src = "../storage/img/bi_moon-fill.svg";
    sundark.src = "../storage/img/akar-icons_sun-fill.svg";
} else if (theme === "dark") {
    darkmode.src = "../storage/img/luna_prendida.svg";
    sundark.src = "../storage/img/sol_desactivado.svg";
    document.body.classList.add("dark-mode");
}

darkchange.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", "dark");
})
lightchange.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", "light");
})