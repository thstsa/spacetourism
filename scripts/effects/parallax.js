function lerp(start,stop,t,margin=1){
    if(Math.abs(start-stop) < margin)return stop;
    return start + (stop-start)*t;
}

//MOUSE PARALLAX
class MouseParallax {
    
    constructor(){
        
        const t = this;//using "t" instead of "this" because "this" acts weird when used with event listeners and intervals
        
        t.mouseOffset = [0,0];
        t.updateMouseOffset = function(event){
            t.mouseOffset = [-(event.clientX - window.innerWidth/2),-(event.clientY - window.innerHeight/2)];
        }
        window.addEventListener("mousemove",t.updateMouseOffset,true);
        
        t.offset = [0,0];//the offset of parallax items lags behind the offset of the mouse
        t.easeAcc = 0.05;//how fast the offset of parallax items eases towards the offset of the mouse
        t.tracking = true;
        
        t.elements = {};//keeping track of enabled elements
        t.oldProperties = {};//keeping track of the CSS properties on enabled elements before they were enabled
        
        
        t.trackInterval = setInterval(function(){
            if(!t.tracking) return null;
            t.offset[0] = lerp(t.offset[0],t.mouseOffset[0],t.easeAcc);
            t.offset[1] = lerp(t.offset[1],t.mouseOffset[1],t.easeAcc);
            for(const [element, strength] of Object.entries(t.elements)) {
                if(document.getElementById(element) == null)continue;
                document.getElementById(element).style.transform = `translate(${t.offset[0]*strength}px,${t.offset[1]*strength}px)`;
            }
        },10);
        
    }
    
    
    enable(elementId, strength){
        strength/=10;//dividing strength value by 10 so inputs dont have to be super small
        let element = document.getElementById(elementId);
        this.elements[elementId] = strength;
        this.oldProperties[elementId] = [element.style.position,element.style.zIndex,element.style.transform];
        //elements with position:static cant use z-index
        if(element.style.position == "static" || element.style.position == "") element.style.position = "relative";
        element.style.zIndex = strength*100;
    }
    
    disable(elementId){
        
        let element = document.getElementById(elementId);
        element.style.position = this.oldProperties[elementId][0];
        element.style.zIndex = this.oldProperties[elementId][1];
        element.style.transform = this.oldProperties[elementId][2];
        //All CSS properties affected by the MouseParallax will revert to how their original values before the element was enabled
        delete this.oldProperties[elementId];
        delete this.elements[elementId];
    }
}





//AUTO PARALLAX
class AutoParallax {
    
    constructor(){
        
        const t = this;//using "t" instead of "this" because "this" acts weird when used with event listeners and intervals
        
        t.windowSize = [window.innerWidth,window.innerHeight];//window dimensions
        t.goal = [0,0];//offset of the parallax will ease towards the goal, which will move around the screen in a cirlce
        t.offset = [0,0];
        t.speed = 1;//how fast we iterate through the points in the circle path array, or how fast the goal moves
        t.pathIndex = 0;//index in the circle path
        t.easeAcc = 0.05;//how fast the offset eases towards the goal
        t.direction = 1;//   1: clockwise   -1: counterclockwise
        t.tracking = true;
        
        t.elements = {};//keeping track of enabled elements
        t.oldProperties = {};//keeping track of the CSS properties on enabled elements before they were enabled
        
        
        this.trackInterval = setInterval(function(){
            
            t.windowSize = [window.innerWidth,window.innerHeight];
                                         
            if(!t.tracking) return null;
            let xscale = t.windowSize[0]/2 * t.direction;
            let yscale = t.windowSize[1]/2;
            t.goal[0] = xscale * circlePath[parseInt(t.pathIndex)][0]; 
            t.goal[1] = yscale * circlePath[parseInt(t.pathIndex)][1];
            
            
            t.pathIndex += t.speed;
            if(t.pathIndex >= 720)t.pathIndex = 0;//adjust goal to current point on cirlce path and move to next point
            
            t.offset[0] = lerp(t.offset[0],t.goal[0],t.easeAcc);
            t.offset[1] = lerp(t.offset[1],t.goal[1],t.easeAcc);
            
            for(const [key, value] of Object.entries(t.elements)) {
                if(document.getElementById(key) == null)continue;
                document.getElementById(key).style.transform = `translate(${t.offset[0]*value}px,${t.offset[1]*value}px)`;//each element's value determines the effect of the parallax
            }
            
        },10);
    }
    
    enable(elementId, strength){
        strength/=10;//dividing strength value by 10 so inputs dont have to be super small
        let element = document.getElementById(elementId);
        this.elements[elementId] = strength;
        this.oldProperties[elementId] = [element.style.position,element.style.zIndex,element.style.transform];
        //elements with position:static cant use z-index
        if(element.style.position == "static" || element.style.position == "") element.style.position = "relative";
        element.style.zIndex = strength*100;
    }
    
    disable(elementId){
        
        let element = document.getElementById(elementId);
        element.style.position = this.oldProperties[elementId][0];
        element.style.zIndex = this.oldProperties[elementId][1];
        element.style.transform = this.oldProperties[elementId][2];
        //All CSS properties affected by the MouseParallax will revert to how their original values before the element was enabled
        delete this.oldProperties[elementId];
        delete this.elements[elementId];
    }
    
}


//element.style["property-name"] = "value"



// SCROLL PARALLAX
class ScrollParallax {
    constructor(){
        
        const t = this;//using "t" instead of "this" because "this" acts weird when used with event listeners and intervals
        
        t.scrollElement = document.documentElement;//what element the parallax tracks the scroll of, default is the entire document
        t.pageScroll = 0;
        
        t.updateScroll = function(){
            t.pageScroll = t.scrollElement.scrollTop;
        }
        window.addEventListener("scroll",t.updateScroll, true);
        
        
        t.offset = 0;
        t.easeAcc = 0.05;
        t.tracking = true;
        
        t.elements = {};
        t.oldProperties = {};
        
        t.trackInterval = setInterval(function(){

            if(!t.tracking) return null;
            t.offset = lerp(t.offset,-t.pageScroll,t.easeAcc);
            for(const [key, value] of Object.entries(t.elements)) {
    
                if(document.getElementById(key) == null)continue;
                document.getElementById(key).style.transform = `translate(0px,${t.offset*value}px)`;//each element's value determines the effect of the parallax
                
            }
        },10);
    }
    
    
    
    enable(elementId, depth){
        let element = document.getElementById(elementId);
        this.elements[elementId] = depth;
        this.oldProperties[elementId] = [element.style.position,element.style.zIndex,element.style.transform];
        //elements with position:static cant use z-index
        if(element.style.position == "static" || element.style.position == "") element.style.position = "relative";
        element.style.zIndex = depth*1000;
    }
    
    disable(elementId){
        let element = document.getElementById(elementId);
        element.style.position = this.oldProperties[elementId][0];
        element.style.zIndex = this.oldProperties[elementId][1];
        element.style.transform = this.oldProperties[elementId][2];
        //All CSS properties affected by the parallax will revert to how their original values before the element was enabled
        delete this.oldProperties[elementId];
        delete this.elements[elementId];
    }
    
}