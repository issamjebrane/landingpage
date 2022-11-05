function showMenuBar(){
    let nav =document.getElementById("nav-bar-id");
    if(nav.style.visibility == "hidden"){
        nav.style.visibility = "visible";
        return
    }
    nav.style.visibility = "hidden";
}