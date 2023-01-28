const FADESPEED = 50;
let currentlyFading = {};

function fade(elementId,speed,type,func = function(){}){
    if(elementId in currentlyFading){
        clearInterval(currentlyFading[elementId]);
    }
    let opacity = 0;
    if(type == "out")opacity = 1;

    
    currentlyFading[elementId] = setInterval(function(){
        if(opacity <= 0)opacity = 0;
        
        try{
            document.getElementById(elementId).style["opacity"] = opacity;
        }catch{
            clearInterval(currentlyFading[elementId]);
            delete currentlyFading[elementId];   
        }
        
        
        
        if((opacity >= 1 && type=="in") || (opacity <= 0 && type=="out")){
            clearInterval(currentlyFading[elementId]);
            delete currentlyFading[elementId];
            func();
        }
        if(type == "in") opacity += 1/speed;
        else opacity -= 1/speed;
    },10);
}

function fadeSwapImg(elementId,src,speed){
   fade(elementId,speed,"out",function(){
       document.getElementById(elementId).setAttribute("src",src);
       fade(elementId,speed,"in");
   });
}