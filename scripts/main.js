
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




let earthParallaxScene = new ScrollParallax();

earthParallaxScene.enable("parallaxEarth",0.5);
earthParallaxScene.enable("sloganHeader",0.2);
earthParallaxScene.enable("sloganSub",0.3);
earthParallaxScene.enable("joinButton",0.4);



//typewriter effect
function typewriter(elementId, words, wordPause,emptyPause){
    let anim = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let chunks = [];
        let chunk = "";
        for(let j = 0; j < word.length-1; j++){
            chunk += word[j];
            chunks.push(chunk);
        }
        anim = anim.concat(chunks);
        for(let j = 0; j < wordPause; j++)anim.push(word);
        anim = anim.concat(chunks.reverse());
        for(let j = 0; j < emptyPause; j++)anim.push("");
    }
    let showCursor = true;
    for(let i = 0; i < anim.length;i++){
        if(i % 5 == 0)showCursor = !showCursor;
        if(showCursor)anim[i] += '|'
    }
    
    let ind = 0;
    setInterval(function(){
        document.getElementById(elementId).textContent = anim[ind];
        ind++;
        if(ind >= anim.length)ind = 0;
    },100)
    
}

typewriter("typewrite",["here","now","with you"],15,5);

