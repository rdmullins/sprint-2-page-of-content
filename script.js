function interact () {
    console.log("Button is working.");
    let divArea = document.getElementById('interactiveContent');
    let button = document.getElementById('button');
    divArea.textContent = "That's odd. I thought that would be big news."
    button.textContent = "You thought what would be big news?"
}