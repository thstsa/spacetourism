let roadmap = [
    ["Month 1-12","On-Ground Training","Trainees begin their training at the Armstrong Traincing Facility in Silicon Vally, CA. Over the course of 1 year, trainees will become experts in the complex principles of space travel, including proper nutrition, hygene, and the intricate parts of our space capsules."],
    ["Month 13-16","Zero-Gravity Simulation","ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga"],
    ["Month 17-24","Physical Therapy and Preperation","ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga"],
    ["End of Course","Take Off","ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga"]
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