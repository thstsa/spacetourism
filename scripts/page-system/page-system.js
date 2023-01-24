const FADESPEED = 50;
let currentlyFading = {};

function fade(elementId,speed,type,func = function(){}){
    if(elementId in currentlyFading){
        clearInterval(currentlyFading[elementId]);
    }
    let opacity = 0;
    if(type == "out")opacity = 1;
    if(type == "in")document.getElementById(elementId).style["display"] = null;
    
    currentlyFading[elementId] = setInterval(function(){
        if(opacity <= 0)opacity = 0;
        document.getElementById(elementId).style["opacity"] = opacity;
        if((opacity >= 1 && type=="in") || (opacity <= 0 && type=="out")){
            clearInterval(currentlyFading[elementId]);
            delete currentlyFading[elementId];
            func();
        }
        if(type == "in") opacity += 1/speed;
        else opacity -= 1/speed;
    },10);
}


function openPage(page){

	let pages = document.getElementsByClassName("page");
	if(document.getElementById("fadeCover").style["opacity"] == 1 || document.getElementById("fadeCover").style["opacity"] == ""){
        for(let i = 0; i < pages.length; i++) {
            document.getElementById(pages[i].id).style["display"] = "none";
        }
        document.getElementById(page).style["display"] = null;
        fade("fadeCover",FADESPEED,"out");
        return 0;
    }
    fade("fadeCover",FADESPEED,"in",function(){
        document.documentElement.scrollTop = 0;
        for(let i = 0; i < pages.length; i++) {
            document.getElementById(pages[i].id).style["display"] = "none";
        }
        document.getElementById(page).style["display"] = null;
        fade("fadeCover",FADESPEED,"out");
    });
    
}

function hideAllPages(){

	let pages = document.getElementsByClassName("page");
	for(let i = 0; i < pages.length; i++){
		document.getElementById(pages[i].id).style["display"] = null;
	}
}


function fancyReload(){
    fade("fadeCover",FADESPEED,"in",function(){
        location.reload();
    });
}


openPage("landingPage");