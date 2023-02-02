let roadmap = [
    ["Month 1-12","On-Ground Training","Trainees begin their training at the NASA Johnson Space Center in Houston, Texas. Over the course of 1 year, trainees will become experts in the complex principles of space travel, including proper nutrition, hygene, and the intricate parts their EVA Astronaut Suits. We maximize the education of our trainees to ensure the saftey our future astronauts.","res/spacecenter.png"],
    ["Month 13-15","Zero-Gravity Simulation","At the NASA Zero Gravity Research Facility in Brook Park, Ohio, trainees will get 3 months of hands on expierence and practice in manuvering in zero gravity. Trainees will re-learn basic tasks in zero-gravity, such as eating, using the restroom, and even sleeping!", "res/zerog.png"],
    ["Month 16-24","Physical Therapy and Preperation","In the final 8 months leading up to the space launch, trainees will build their bodies into peak shape to prepare them for the disorienting and fatiguing conditions of space travel. Trainees will be undergo intense weight training, cardio, and calisthenic exercise while also being educated on the various elements of physical health and stength.", "res/fitness.png"],
    ["End of Course","Take Off and Recovery","Trainees will complete their training with a final exam covering all corners of the course and embark on a space launch to International Space Station. Trainees will be travelling on the Space Launch System(SLS), provided by our partner organization, NASA. Upon re-entering the atmosphere, our trained Rescue and Recovery Team will clear and establish a safe splashdown area off the coast of Florida, where they will recover the crew from their capsule.","res/recovery.png"]
];





function loadRoadmapSlide(arr,ind){
    currentRmInd = ind;
    fade("slideContent",FADESPEED/2,"out",function(){
        document.getElementById("rmSlideImage").setAttribute("src",arr[ind][3]);
        document.getElementById("rmSlideHeader").innerHTML = `${arr[ind][0]}: <span class="blueGradientText">${arr[ind][1]}</span>`;
        document.getElementById("rmSlideSub").textContent = arr[ind][2];
        
        //update dots
        document.getElementById("rmDotContainer").innerHTML = "";
        for(let i = 0; i < roadmap.length;i++){
            if(i != currentRmInd) document.getElementById("rmDotContainer").innerHTML += `<span class="rmSideDot" onclick="loadRoadmapSlide(roadmap,${i})"></span>`;
            else document.getElementById("rmDotContainer").innerHTML += `<span class="rmMainDot" onclick="loadRoadmapSlide(roadmap,${i})"></span>`;
        }
        
        fade("slideContent",FADESPEED/2,"in");
    });
    
}

let currentRmInd = 0;
loadRoadmapSlide(roadmap,currentRmInd);

function nextRmSlide(){
    currentRmInd++;
    if(currentRmInd == roadmap.length)currentRmInd=0;
    loadRoadmapSlide(roadmap,currentRmInd);
}

function prevRmSlide(){
    currentRmInd--;
    if(currentRmInd == -1)currentRmInd=roadmap.length-1;
    loadRoadmapSlide(roadmap,currentRmInd);
}

