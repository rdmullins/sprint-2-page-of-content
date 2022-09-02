let siteFeedback = [
    "I thought that would be bigger news.",
    "Well, there seems to be an absence here of a certain... ornithological piece. An article regarding mass awareness of a certain... avian variety.",
    "Oh, have you not heard? It was my understanding that everyone had heard."
];

let buttonContents = [
    "You thought what would be big news?",
    "What are you talking about?",
    "Heard what?"
];

let interactiveDiv = document.getElementById('interactiveContent');

function interact (conversationPoint) {
    console.log("Time through/Corresponding index: ", conversationPoint);
    let divAreaText = document.createElement('p');
    let divAreaButton = document.createElement('button');
    divAreaText.textContent = siteFeedback[conversationPoint];
    divAreaButton.textContent = buttonContents[conversationPoint];
    divAreaButton.addEventListener('click', interact(conversationPoint+1));
    interactiveDiv.appendChild(divAreaText);
    interactiveDiv.appendChild(divAreaButton);
}