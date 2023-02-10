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
        for(let j = 0; j < emptyPause; j++)anim.push(" ");
    }
    /*let showCursor = true;
    for(let i = 0; i < anim.length;i++){
        if(i % 5 == 0)showCursor = !showCursor;
        if(showCursor && anim[i] != "|")anim[i] += '|'
    }
    */
    let currentImage = "";
    let ind = 0;
    let blurbImage = document.getElementById("blurbImage");
    setInterval(function(){
        
        //swapping blurb image when text changes
        if(anim[ind] == "h" && currentImage != "res/launch.png"){
            //fadeSwapImg("blurbImage","res/launch.png",FADESPEED*2);
            blurbImage.setAttribute("src","res/launch.png")
            currentImage = "res/launch.png";
            fade("blurbImage",FADESPEED*2,"in");
        }
        else if(anim[ind] == "a" && currentImage != "res/aldrin.png"){
            blurbImage.setAttribute("src","res/aldrin.png")
            currentImage = "res/aldrin.png";
            fade("blurbImage",FADESPEED*2,"in");
        }
        
        else if(anim[ind] == "t" && currentImage != "res/rover.png"){
            blurbImage.setAttribute("src","res/rover.png")
            currentImage = "res/rover.png";
            fade("blurbImage",FADESPEED*2,"in");
        }
        
        if(words.includes(anim[ind-1]) && words.includes(anim[ind]) == false)fade("blurbImage",FADESPEED*2,"out");;
        
        document.getElementById(elementId).textContent = anim[ind];
        ind++;
        if(ind >= anim.length)ind = 0;
    },100)
    
}

typewriter("typewrite",["history","astronauts","the future"],55,5);