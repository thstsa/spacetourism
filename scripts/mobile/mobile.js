
//changing CSS files when window gets too small

let currentCSS = "main.css";
function updateCSS(){
    if(window.innerWidth < 950 && currentCSS != "mobile.css"){
        currentCSS = "mobile.css";
        document.getElementById("mainStylesheet").setAttribute("href","styles/" + currentCSS);
    }
    else if(window.innerWidth >= 950 && currentCSS != "main.css"){
        currentCSS = "main.css";
        document.getElementById("mainStylesheet").setAttribute("href","styles/" + currentCSS);
    }
}
updateCSS();
window.addEventListener("resize",updateCSS);








//toggle burger menu
function toggleBurgerMenu(){
    let menu = document.getElementById("burgerPopup");
    let menuIcon = document.getElementById("burgerIcon");
    if(menu.style["opacity"] == 0){
        
        fade("burgerPopup",FADESPEED/5,"in")//menu.style["opacity"] = 1;
        menu.style["pointer-events"] = "unset";
        menuIcon.setAttribute("src","res/cancel.svg");
    }
    else{
        fade("burgerPopup",FADESPEED/5,"out")//menu.style["opacity"] = 0;
        menu.style["pointer-events"] = "none";
        menuIcon.setAttribute("src","res/menu.svg");
    }
}