let roadmap = [
    ["Month 1-12","On-Ground Training","Trainees begin their training at the NASA Johnson Space Center in Houston, Texas. Over the course of 1 year, trainees will become experts in the complex principles of space travel, including proper nutrition, hygene, and the intricate parts of our space capsules. We maximize the education of our trainees to ensure the saftey our future astronauts."],
    ["Month 13-15","Zero-Gravity Simulation","At the NASA Zero Gravity Research Facility in Brook Park, Ohio, trainees will get 3 months of hands on expierence and practice in manuvering in zero gravity. Trainees will re-learn basic tasks in zero-gravity, such as eating, using the restroom, and even sleeping!"],
    ["Month 16-24","Physical Therapy and Preperation","In the final 8 months leading up to the space launch, trainees will build their bodies into peak shape to prepare them for the disorienting and fatiguing conditions of space travel. Trainees will be undergo intense weight training, cardio, and calisthenic exercise while also being educated on the various elements of physical health and stength."],
    ["End of Course","Take Off and Recovery","Trainees will complete their training with a final exam and a space launch mission. After successful completion of the mission, trainees will then undergo a recovery process to help them re-adjust to life on earth and make sure they are in good health before being certified as official astronauts."]
];

function generateRoadmap(arr){
    let contentArea = document.getElementById("roadmapContent");
    contentArea.innerHTML = "";
    for(let i = 0; i < arr.length;i++){
        
        contentArea.innerHTML += `
        <div class="roadmapBlock">
            <h3>${arr[i][0]}: <span class="blueGradientText">${arr[i][1]}</span></h3>
            <p>${arr[i][2]}</p>
        </div>`;

        if(i < arr.length-1){
            contentArea.innerHTML += "<div class='roadmapConnector'></div>";
        }

    }
}

generateRoadmap(roadmap);