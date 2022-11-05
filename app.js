let nav =document.getElementById("nav-bar-id");
let bigText = document.getElementById("big-text");
let ids= ["nav","bigText","arrow"];
function showMenuBar(){
    if(nav.style.display == "none"){
        nav.style.display = "flex";
        bigText.style.display = "none";
        arrow.style.display = "none";
        return
    }
    nav.style.display = "none";
    bigText.style.display = "block";
    arrow.style.display = "block";
}
window.addEventListener("resize",()=>{
if(window.innerWidth >= "400"){
    let navbar = document.getElementById("nav");
    navbar.appendChild(nav)
}
else
    if(window.innerWidth < "400"){
    let header = document.getElementById("header");
    header.appendChild(nav);
}})