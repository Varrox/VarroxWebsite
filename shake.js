const continueButton = document.getElementsByClassName("shake");

const intervalDelay = 100;
const rotateDegrees = 1.5;
const scaleAmount = 0.05;
const skewDegrees = 1.7;

let rotate;
let scale;
let skew1;
let skew2;

function apply_shake() {
    for(var i = 0; i < continueButton.length; i++){
        let intervalId;
        let element = continueButton[i];
        element.addEventListener("mouseenter", () => {
            intervalId = setInterval(function(){adjust(element)}, intervalDelay);
        });

        element.addEventListener("mouseleave", () => {
            clearInterval(intervalId);
            element.style.transform = "rotate(0deg) scale(1) skew(0deg, 0deg)";
        });
    }
}

function adjust(element) {
    rotate = randomDegree(-rotateDegrees, rotateDegrees);
    scale = 1 + randomDegree(-scaleAmount, scaleAmount);
    skew1 = randomDegree(-skewDegrees, skewDegrees);
    skew2 = randomDegree(-skewDegrees, skewDegrees);

    element.style.transform =
        `rotate(${rotate}deg) scale(${scale}) skew(${skew1}deg, ${skew2}deg)`;
    }

function randomDegree(min, max) {
    return Math.random() * (max - min) + min;
}