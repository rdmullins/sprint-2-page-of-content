let siteFeedback = [
    "Well that's strange. I thought that would be bigger news.",
    "Well, there seems to be an absence here of a certain... ornithological piece. An article regarding mass awareness of a certain... avian variety.",
    "Oh, have you not heard? It was my understanding that everyone had heard."
];

let buttonContents = [
    "You thought what would be bigger news?",
    "What are you talking about?",
    "Heard what?"
];

let conversationPoint = 0;

function interact() {
    // console.log("Time through/Corresponding index: ", conversationPoint);
    let divAreaText = document.getElementById('feedback');
    let divAreaButton = document.getElementById('button');
    
    if (conversationPoint == 3) {
        let surfinBird = document.createElement('img');
        surfinBird.src = "imgs/peter-griffin-family-guy.gif";
        divAreaText.textContent = "";
        divAreaButton.remove();
        divAreaText.appendChild(surfinBird);
    } else {
 
    divAreaText.textContent = siteFeedback[conversationPoint];
    divAreaButton.textContent = buttonContents[conversationPoint];
    conversationPoint++;
    }
}