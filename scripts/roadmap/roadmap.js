let roadmap = [
    ["basic","1-2","Basic step","ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga"],
    ["pro","Pro step","This is an addition to the basic step above that comes with the pro plan"],
    ["basic","2-4","Another basic step","ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga ooga booga"],
];

function generateRoadmap(arr){
    let contentArea = document.getElementById("roadmapContent");
    contentArea.innerHTML = "";
    for(let i = 0; i < arr.length;i++){
        if(arr[i][0] == "pro"){
            contentArea.innerHTML += `
            <div class="premiumRoadmapBlock">
                <h3>${arr[i][1]}<img src="res/star.svg" align="center"></h3>
                <p>${arr[i][2]}</p>
            </div>
            `;
        }
        else{
            contentArea.innerHTML += `
            <div class="roadmapBlock">
                <h3>Month ${arr[i][1]}: <span class="blueGradientText">${arr[i][2]}</span></h3>
                <p>${arr[i][3]}</p>
            </div>`;
        }
        if(i < arr.length-1 && arr[i+1][0] != "pro"){
            contentArea.innerHTML += "<div class='roadmapConnector'></div>";
        }
        else{
            contentArea.innerHTML += "<div class='roadmapGap'></div>";
        }
    }
}

generateRoadmap(roadmap);