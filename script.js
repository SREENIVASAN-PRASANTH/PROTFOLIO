let navbarLinkEl = document.getElementById("navbarLink");
let menuEl = document.getElementById("menu");

menuEl.onclick = function(){
    navbarLinkEl.classList.toggle("show-menu");
}