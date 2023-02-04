
// Color Changer
var clickColor = document.getElementById("color");
var changeColor = document.getElementById("circle");
clickColor.addEventListener("click", function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = "#" + randomColor;
  changeColor.style.backgroundColor = randomColor;
});

// Shape Changer
var clickShape = document.getElementById("shapeChanger");
var changeShape = document.getElementById("shape");

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

let attributeSet = [];

let attribute1 = { style: "width: 25vh; height: 15vh;" };
attributeSet.push(attribute1);

let attribute2 = { style: "width: 20vh; height: 20vh; border-radius: 50%" };
attributeSet.push(attribute2);

let attribute3 = {
  style:
    "background-color: transparent; width: 0; height: 0;border-left: 12.5vh solid transparent;border-right: 12.5vh solid transparent;border-bottom: 22vh solid aqua;margin-bottom: 4vh;"
};
attributeSet.push(attribute3);

let attribute4 = {
  style:
    "background-color: transparent; width: 0; height: 0;border-left: 10vh solid transparent;border-right: 10vh solid transparent;border-top: 12vh solid aqua;"
};
attributeSet.push(attribute4);

let attribute5 = {
  style:
    "background-color: transparent;width: 0;height: 0;border-bottom: 15.5vh solid aqua;border-right: 22vh solid transparent;margin-left: 4vh;margin-bottom: 2vh;"
};
attributeSet.push(attribute5);

let attribute6 = {
  style:
    "background-color: transparent;border-bottom: 15vh solid aqua;border-left: 5vh solid transparent;border-right: 5vh solid transparent;height: 0;width: 22vh;margin-bottom: 1vh;"
};
attributeSet.push(attribute6);

clickShape.addEventListener("click", function () {
  setAttributes(
    changeShape,
    attributeSet[Math.floor(Math.random() * attributeSet.length)]
  );
});

var sound = document.getElementById('sound');

// //audio added in background
// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 0.1;
//     audio.play();
//     audio.loop = true;
//     audio.muted = false;
//   });

var audio = new Audio('./assets/music/RockThePartyInstrumental.mp3');
clickColor.onclick = () => { audio.play(); }
clickShape.onclick = () => { audio.play(); }
audio.muted = false;
audio.volume = 0.1;
audio.loop = true;




