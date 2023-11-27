/*
<!--Webpage for CSC102 Fa 2023
    week 7 
Written by: Nevaeh Fernandez
            nevferna@uat.edu
            22OCT23
        -->

function sayLol(timestamp) {
    document.write(" <input type='button' value='lol'>");
   // requestAnimationFrame(sayLol);
} */

/*function addButton(){ 
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type","button");
    inputElement.setAttribute("value", "New Button");
   // var buttonText = documnet.createTextNode("New Button");
   // parent.appendChild(buttonText);

    var parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElement);

    var newParagraph = document.createElement("p");

    var paragraphText = document.createTextNode("New Paragraph");
    newParagraph.appendChild(paragraphText);
    
    parent.appendChild(newParagraph);


}*/

const hours = [40, 25, 15, 17, 60];

hours[2] = 30

console.log(hours[2])
        // i < 5
    for(let i = 0; i < hours.length; i++){
        console.log(hours[i])
    }

    const scores = []
    scores[0] = 2.5
    scores[1] = 8.3
    scores[2] = 6.5
    scores.push(4.0)
    scores.push(5.2)

    // Our accumulator 
    let total = 0

    // Our Average
    let average = 0

    for(let i = 0; i <scores.length; i++){
        total = total + scores[i]
    }


function addButtons(){
    console.log("Adding Buttons!");

    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id", "startButton");
    inputElementStart.setAttribute("onclick", "startButton()");


    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("onclick", "stopButton()");
    inputElementStop.setAttribute("disabled", "true");

    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

function startButton() {
    console.log("Pressed Start!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "3s";
}

function stopButton(){
    console.log("Pressed Stop!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");
    

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");
    

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "0s";

}
var clicked = false; 

window.addEventListener("click", (event) => {
    if(!clicked){
        let audioSources = ["mixkit-mystwrious-bass-pulse-2298.wav", "mixkit-movie-trailer-epic-impact-2908.wav", "mixkit-tick-tock-clock-timer-1045.wav"];

        let audioElement = document.getElementById("backgroundAudio");

        audioElement.src = audioSources[Math.floor(Math.random() * audioSources.length)];

        audioElement.play();
        audioElement.loop = true; 
        clicked = true;
    }
});