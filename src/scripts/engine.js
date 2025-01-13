const images = [
    "src/images/1.jpg",
    "src/images/1.jpg",
    "src/images/2.jpg",
    "src/images/2.jpg",
    "src/images/3.jpg",
    "src/images/3.jpg",
    "src/images/4.jpg",
    "src/images/4.jpg",
    "src/images/5.jpg",
    "src/images/5.jpg",
    "src/images/6.jpg",
    "src/images/6.jpg",
    "src/images/7.jpg",
    "src/images/7.jpg",
    "src/images/8.jpg",
    "src/images/8.jpg",
    
];

let openCards = [];
let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Evitar cliques enquanto dois cartões estão abertos
let disableClick = false;

for(let i = 0; i < images.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let img = document.createElement("img");
    img.src = shuffleImages[i];
    box.appendChild(img);
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (disableClick || this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) return;

    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2) {
        disableClick = true;
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].querySelector("img").src === openCards[1].querySelector("img").src){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    disableClick = false;

    if (document.querySelectorAll(".boxMatch").length === images.length) {
        alert("Você venceu!");
    }
}
