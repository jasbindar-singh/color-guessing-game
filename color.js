var boxNumber = 6;
var box = document.querySelectorAll(".box");
var color = fillCol(6);
var picked = color[Math.floor(Math.random() * 6)];
var colPick = document.querySelector(".colorbox");
var verdict = document.querySelector(".verdict");
var newColors = document.querySelector(".new");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var head = document.querySelector("h1");

hard.addEventListener("click", function() {
    hard.style.background = "#5555ff";
    hard.style.color = "#ffffff";
    easy.style.background = "#ffffff";
    easy.style.color = "#5555ff";
    boxNumber = 6;
    color = fillCol(boxNumber);
    for(var i = 0; i < color.length; i++) {
            box[i].style.background = color[i];
            box[i].style.display = "block";
    }
    picked = color[Math.floor(Math.random() * boxNumber)];
    colPick.textContent = picked;
    verdict.textContent = "";
    newColors.textContent = "New Colors"
    head.style.background = "#5555ff";
});

easy.addEventListener("click", function() {
    easy.style.background = "#5555ff";
    easy.style.color = "#ffffff";
    hard.style.background = "#ffffff";
    hard.style.color = "#5555ff";
    boxNumber = 3;
    color = fillCol(boxNumber);
    for(var i = 0; i < color.length; i++) {
            box[i].style.background = color[i];
    }
    for(var i = 3; i < 6; i++) {
            box[i].style.display = "none";
    }
    picked = color[Math.floor(Math.random() * boxNumber)];
    colPick.textContent = picked;
    verdict.textContent = "";
    newColors.textContent = "New Colors"
    head.style.background = "#5555ff";
});

newColors.addEventListener("click", function() {
    color = fillCol(boxNumber);
    picked = color[Math.floor(Math.random() * boxNumber)];
    colPick.textContent = picked;
    for(var i = 0; i < color.length; i++) {
        box[i].style.background = color[i];
    }
    verdict.textContent = "";
    newColors.textContent = "New Colors"
    head.style.background = "#5555ff";
});

colPick.textContent = picked;

for(var i = 0; i < color.length; i++) {
    box[i].style.background = color[i];
    box[i].addEventListener("click", function() {
        var clicked = this.style.background;
        if(clicked === picked) {
            verdict.textContent = "Right You Won!";
            newColors.textContent = "Play Again?"
            head.style.background = picked;
            for(var j = 0; j < color.length; j++) {
                box[j].style.background = picked;
            }
        }
        else {
            verdict.textContent = "Wrong Try Again!";
            this.style.background = "#232323";
        }
    });
}

function colRan() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var ranColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return ranColor;
}

function fillCol(c) {
    var filledColor = [];
    for(var i = 0; i < c; i++) {
        filledColor[i] = colRan();
    }
    return filledColor;
}












