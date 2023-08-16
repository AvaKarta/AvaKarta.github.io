"use strict";

/* skapar tids variablar */

/*   Ett objekt med schema för olika klasser  */

/* Ett objekt med kordinater för alla klassrum*/

console.log(window.devicePixelRatio);

const salar = {
  1: { x: 0.85, y: 0.35, level: 5 },
  Aulan: { x: 0.845, y: 0.88, level: 3 },
  2207: { x: 0.833, y: 0.663, level: 2 },
  2208: { x: 0.833, y: 0.622, level: 2 },
  2209: { x: 0.833, y: 0.583, level: 2 },
  2244: { x: 0.953, y: 0.08, level: 2 },
  2247: { x: 0.953, y: 0.12, level: 2 },
  2250: { x: 0.953, y: 0.1419, level: 2 },
  2248: { x: 0.953, y: 0.18, level: 2 },
  2251: { x: 0.953, y: 0.23, level: 2 },
  2252: { x: 0.93, y: 0.267, level: 2 },
  2254: { x: 0.953, y: 0.29, level: 2 },
  2255: { x: 0.953, y: 0.33, level: 2 },
  2256: { x: 0.953, y: 0.381, level: 2 },
  2257: { x: 0.953, y: 0.421, level: 2 },
  2258: { x: 0.943, y: 0.451, level: 2 },
  2260: { x: 0.953, y: 0.502, level: 2 },
  2266: { x: 0.953, y: 0.565, level: 2 },
  2268: { x: 0.978, y: 0.6, level: 2 },
  2269: { x: 0.953, y: 0.62, level: 2 },
  2270: { x: 0.953, y: 0.658, level: 2 },
  3403: { x: 0.55, y: 0.05, level: 3 },
  "3531A": { x: 0.365, y: 0.05, level: 3 },
  "3531B": { x: 0.44, y: 0.05, level: 3 },
  "3531C": { x: 0.49, y: 0.05, level: 3 },
  3535: { x: 0.28, y: 0.05, level: 3 },
  "3528A": { x: 0.18, y: 0.144, level: 3 },
  "3528C": { x: 0.41, y: 0.13, level: 3 },
  "3528B": { x: 0.31, y: 0.13, level: 3 },
  3536: { x: 0.22, y: 0.05, level: 3 },
  3544: { x: 0.13, y: 0.05, level: 3 },
  3545: { x: 0.05, y: 0.08, level: 3 },
  "3603B": { x: 0.495, y: 0.24, level: 3 },
  3604: { x: 0.474, y: 0.3, level: 3 },
  "3604A": { x: 0.474, y: 0.35, level: 3 },
  "3604B": { x: 0.384, y: 0.35, level: 3 },
  3606: { x: 0.405, y: 0.21, level: 3 },
  3607: { x: 0.315, y: 0.21, level: 3 },
  3609: { x: 0.29, y: 0.35, level: 3 },
  3610: { x: 0.373, y: 0.31, level: 3 },
  3611: { x: 0.373, y: 0.26, level: 3 },
  3612: { x: 0.181, y: 0.35, level: 3 },
  3614: { x: 0.181, y: 0.28, level: 3 },
  3615: { x: 0.181, y: 0.22, level: 3 },
  3618: { x: 0.48, y: 0.18, level: 3 },
  3471: { x: 0.53, y: 0.45, level: 3 },
  "3454B": { x: 0.45, y: 0.78, level: 3 },
  3468: { x: 0.53, y: 0.49, level: 3 },
  3465: { x: 0.45, y: 0.465, level: 3 },
  3464: { x: 0.45, y: 0.425, level: 3 },
  4209: { x: 0.833, y: 0.655, level: 4 },
  4210: { x: 0.833, y: 0.6, level: 4 },
  4214: { x: 0.833, y: 0.486, level: 4 },
  4215: { x: 0.833, y: 0.43, level: 4 },
  4216: { x: 0.833, y: 0.34, level: 4 },
  4220: { x: 0.833, y: 0.273, level: 4 },
  4221: { x: 0.833, y: 0.22, level: 4 },
  4228: { x: 0.833, y: 0.106, level: 4 },
  4229: { x: 0.833, y: 0.052, level: 4 },
  4237: { x: 0.953, y: 0.045, level: 4 },
  4238: { x: 0.953, y: 0.085, level: 4 },
  4241: { x: 0.953, y: 0.135, level: 4 },
  4242: { x: 0.953, y: 0.197, level: 4 },
  4243: { x: 0.953, y: 0.26, level: 4 },
  4244: { x: 0.953, y: 0.315, level: 4 },
  4246: { x: 0.953, y: 0.375, level: 4 },
  4247: { x: 0.953, y: 0.432, level: 4 },
  4248: { x: 0.953, y: 0.485, level: 4 },
  4249: { x: 0.953, y: 0.523, level: 4 },
  4250: { x: 0.953, y: 0.559, level: 4 },
  4251: { x: 0.953, y: 0.594, level: 4 },
  4252: { x: 0.953, y: 0.644, level: 4 },
  5209: { x: 0.833, y: 0.655, level: 5 },
  5210: { x: 0.833, y: 0.6, level: 5 },
  5214: { x: 0.833, y: 0.485, level: 5 },
  5215: { x: 0.833, y: 0.445, level: 5 },
  5216: { x: 0.833, y: 0.415, level: 5 },
  5217: { x: 0.833, y: 0.365, level: 5 },
  5218: { x: 0.833, y: 0.31, level: 5 },
  5219: { x: 0.833, y: 0.255, level: 5 },
  5220: { x: 0.833, y: 0.21, level: 5 },
  5224: { x: 0.833, y: 0.105, level: 5 },
  5225: { x: 0.833, y: 0.05, level: 5 },
  5233: { x: 0.953, y: 0.037, level: 5 },
  5234: { x: 0.953, y: 0.079, level: 5 },
  5236: { x: 0.953, y: 0.15, level: 5 },
  5237: { x: 0.953, y: 0.205, level: 5 },
  5238: { x: 0.953, y: 0.232, level: 5 },
  5239: { x: 0.953, y: 0.276, level: 5 },
  5240: { x: 0.953, y: 0.33, level: 5 },
  5241: { x: 0.953, y: 0.372, level: 5 },
  5242: { x: 0.953, y: 0.414, level: 5 },
  5243: { x: 0.953, y: 0.464, level: 5 },
  5244: { x: 0.953, y: 0.499, level: 5 },
  5245: { x: 0.953, y: 0.544, level: 5 },
  5246: { x: 0.953, y: 0.6, level: 5 },
  5247: { x: 0.953, y: 0.655, level: 5 },
  6212: { x: 0.833, y: 0.62, level: 6 },
  6214: { x: 0.833, y: 0.488, level: 6 },
  6215: { x: 0.833, y: 0.454, level: 6 },
  6216: { x: 0.833, y: 0.423, level: 6 },
  6218: { x: 0.815, y: 0.405, level: 6 },
  6219: { x: 0.815, y: 0.388, level: 6 },
  6220: { x: 0.815, y: 0.373, level: 6 },
  6221: { x: 0.815, y: 0.358, level: 6 },
  6222: { x: 0.815, y: 0.341, level: 6 },
  6223: { x: 0.833, y: 0.32, level: 6 },
  6224: { x: 0.82, y: 0.3, level: 6 },
  6226: { x: 0.82, y: 0.27, level: 6 },
  6227: { x: 0.848, y: 0.268, level: 6 },
  6228: { x: 0.833, y: 0.226, level: 6 },
  6233: { x: 0.833, y: 0.105, level: 6 },
  6234: { x: 0.833, y: 0.05, level: 6 },
  6242: { x: 0.953, y: 0.035, level: 6 },
  6243: { x: 0.953, y: 0.07, level: 6 },
  6244: { x: 0.953, y: 0.07, level: 6 },
  6245: { x: 0.953, y: 0.07, level: 6 },
  6246: { x: 0.953, y: 0.11, level: 6 },
  6247: { x: 0.953, y: 0.193, level: 6 },
  6249: { x: 0.963, y: 0.235, level: 6 },
  6255: { x: 0.943, y: 0.32, level: 6 },
  6253: { x: 0.953, y: 0.29, level: 6 },
  6250: { x: 0.94, y: 0.255, level: 6 },
  "6261B": { x: 0.953, y: 0.51, level: 6 },
  "6261A": { x: 0.953, y: 0.47, level: 6 },
  6260: { x: 0.953, y: 0.43, level: 6 },
  6262: { x: 0.953, y: 0.545, level: 6 },
  6266: { x: 0.953, y: 0.63, level: 6 },
};

const classroom = document.querySelector("#classroom");
const dateInformation = document.querySelector("#date-information");
const dataList = document.querySelector("#salar");

/* Lägger till sökbara termer till sök input */

const salLista = Object.keys(salar);

salLista.forEach((sal) => {
  dataList.innerHTML += `<option>${sal}</option>`;
});

/*  En funktion för att veta visa vilken sal som en klass har lektion i */

/* skapar några variablar */

const infoBox = document.querySelector("#infoBox");
const infoBoxcontainer = document.querySelector("#infoBoxcontainer");
infoBoxcontainer.style.display = "none";
const rightButton = document.querySelector("#right-button");
const leftButton = document.querySelector("#left-button");
const rightCalendarbutton = document.querySelector("#right-calendar-button");
const leftCalendarbutton = document.querySelector("#left-calendar-button");
const apiKey = "ea9430c8ead841e493b132724231602";
const weatherContainer = document.querySelector("#weather");

const api =
  "https://api.weatherapi.com/v1/current.json?key=ea9430c8ead841e493b132724231602&q=Taby&aqi=no";

/* kollar upp vädret vid åva och skriver ut det i section*/

/*  Skapar det nödvändgia för THREE.js*/

/* Skapar en skybox*/

/* Skapar Height och Width variablar för canvas*/

let height = window.innerHeight * 0.9;
let width = window.innerWidth;
if (window.innerWidth > 1400) {
  width = 1400;
}

/* Laddar in 3d byggnad Alla kod som manipulerar 3dmodelen måsta vara innanför load() */

/*  Sorterar våningarna eftersom det har slumpmässiga platser i arrayen då det laddas in.*/

/* Postionerar vånigarna korrekt */

const canvas = document.querySelector("#bg");
canvas.width = height * 0.7;
canvas.height = height;

let imageWidth = height * 0.58869701726;

const ctx = canvas.getContext("2d");
const plan2 = document.querySelector("#plan2");
const plan3 = document.querySelector("#plan3");
const plan4 = document.querySelector("#plan4");
const plan5 = document.querySelector("#plan5");
const plan6 = document.querySelector("#plan6");

let levels = [plan2, plan3, plan4, plan5, plan6];

ctx.imageSmoothingEnabled = false;
ctx.drawImage(plan2, 0, 0, imageWidth, height);

let level = 0;
let devToggle = false;
let input = "";
let count = 0;
let lesson = "";
let tempInput = "";
let result = "";

addEventListener("submit", (event) => {
  event.preventDefault();
  input = document.getElementById("search").value;
  tempInput = input;

  if (salar.hasOwnProperty(input)) {
    // console.log(tempInput);
    // console.log(salar[tempInput].level);

    level = salar[tempInput].level - 2;

    ctx.drawImage(levels[level], 0, 0, imageWidth, height);

    ctx.beginPath();
    ctx.arc(
      salar[tempInput].x * imageWidth,
      salar[tempInput].y * height,
      10,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "red";
    ctx.fill();
  } else if (input == "dev") {
    if (devToggle == true) {
      infoBoxcontainer.style.display = "none";
      devToggle = false;
    } else {
      infoBoxcontainer.style.display = "block";
      devToggle = true;
    }
  } else {
    alert("Salen finns inte!");
  }
});

function animate() {
  requestAnimationFrame(animate);
  {
  }
}

animate();

/* uppdatera storlek på canvas då fönstret ändrar storlek*/

function resize() {
  let factor = 0.9;

  let h = window.innerHeight * factor;

  //   canvas.style.width = h * 0.7;
  //   canvas.style.height = h;
}

window.addEventListener("resize", resize);
