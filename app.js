let nav =document.getElementById("nav-bar-id");
let bigText = document.getElementById("big-text");

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
//this event listens to window resizing so the nav bar changes and becomes reponsive to the window size
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