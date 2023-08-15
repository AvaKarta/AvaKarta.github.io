"use strict";
import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.138.0/examples/jsm/loaders/GLTFLoader.js";
import { FlyControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/FlyControls.js";

/* skapar tids variablar */

/*   Ett objekt med schema för olika klasser  */

/* Ett objekt med kordinater för alla klassrum*/

const salar = {
  2207: { orbitcenter: [144.0, 0.5, -68.3], level: 2, side: "Nord" },
  2208: { orbitcenter: [124.0, 0.5, -68.3], level: 2, side: "Nord" },
  2209: { orbitcenter: [108.0, 0.5, -68.3], level: 2, side: "Nord" },
  2244: { orbitcenter: [-114.0, 0.5, -98.4], level: 2, side: "Nord" },
  2247: { orbitcenter: [-98.3, 0.5, -98.4], level: 2, side: "Nord" },
  2250: { orbitcenter: [-85.3, 0.5, -98.4], level: 2, side: "Nord" },
  2248: { orbitcenter: [-77.0, 0.5, -98.4], level: 2, side: "Nord" },
  2251: { orbitcenter: [-55.5, 0.5, -98.4], level: 2, side: "Nord" },
  2252: { orbitcenter: [-33, 0.5, -94], level: 2, side: "Nord" },
  2254: { orbitcenter: [-23.3, 0.5, -98.4], level: 2, side: "Nord" },
  2255: { orbitcenter: [-6.2, 0.5, -98.4], level: 2, side: "Nord" },
  2256: { orbitcenter: [17, 0.5, -98.4], level: 2, side: "Nord" },
  2257: { orbitcenter: [36.2, 0.5, -98.4], level: 2, side: "Nord" },
  2258: { orbitcenter: [50, 0.5, -98.4], level: 2, side: "Nord" },
  2260: { orbitcenter: [72, 0.5, -98.4], level: 2, side: "Nord" },
  2266: { orbitcenter: [98.5, 0.5, -98.4], level: 2, side: "Nord" },
  2268: { orbitcenter: [114.5, 0.5, -102.4], level: 2, side: "Nord" },
  2269: { orbitcenter: [122.4, 0.5, -98.4], level: 2, side: "Nord" },
  2270: { orbitcenter: [141, 0.5, -98.4], level: 2, side: "Nord" },
  3403: { orbitcenter: [-130, 9, 10.0], level: 3, side: "Nord" },
  "3531A": { orbitcenter: [-130, 9, 55.0], level: 3, side: "Nord" },
  3536: { orbitcenter: [-130, 9, 95.0], level: 3, side: "Nord" },
  "3604B": { orbitcenter: [5.2, 9, 50.0], level: 3, side: "Nord" },
  3607: { orbitcenter: [-63, 9, 70.0], level: 3, side: "Nord" },
  3612: { orbitcenter: [5.2, 9, 90.0], level: 3, side: "Nord" },
  4209: { orbitcenter: [140, 18.1, -68.5], level: 4, side: "Nord" },
  4210: { orbitcenter: [115, 18.1, -68.5], level: 4, side: "Nord" },
  4214: { orbitcenter: [64, 18.1, -68.5], level: 4, side: "Nord" },
  4215: { orbitcenter: [40, 18.1, -68.5], level: 4, side: "Nord" },
  4216: { orbitcenter: [3, 18.1, -68.5], level: 4, side: "Nord" },
  4220: { orbitcenter: [-29, 18.1, -68.5], level: 4, side: "Nord" },
  4221: { orbitcenter: [-54, 18.1, -68.5], level: 4, side: "Nord" },
  4228: { orbitcenter: [-105, 18.1, -68.5], level: 4, side: "Nord" },
  4229: { orbitcenter: [-129, 18.1, -68.5], level: 4, side: "Nord" },
  4237: { orbitcenter: [-130, 18.1, -99.0], level: 4, side: "Nord" },
  4238: { orbitcenter: [-110, 18.1, -99.0], level: 4, side: "Nord" },
  4241: { orbitcenter: [-90, 18.1, -99.0], level: 4, side: "Nord" },
  4242: { orbitcenter: [-65, 18.1, -99.0], level: 4, side: "Nord" },
  4243: { orbitcenter: [-35, 18.1, -99.0], level: 4, side: "Nord" },
  4244: { orbitcenter: [-10, 18.1, -99.0], level: 4, side: "Nord" },
  4246: { orbitcenter: [16, 18.1, -99.0], level: 4, side: "Nord" },
  4247: { orbitcenter: [43, 18.1, -99.0], level: 4, side: "Nord" },
  4248: { orbitcenter: [65, 18.1, -99.0], level: 4, side: "Nord" },
  4249: { orbitcenter: [82, 18.1, -99.0], level: 4, side: "Nord" },
  4250: { orbitcenter: [98, 18.1, -99.0], level: 4, side: "Nord" },
  4251: { orbitcenter: [114.4, 18.1, -99.0], level: 4, side: "Nord" },
  4252: { orbitcenter: [136, 18.1, -99.0], level: 4, side: "Nord" },
  5209: { orbitcenter: [139, 26, -68.5], level: 5, side: "Nord" },
  5210: { orbitcenter: [115, 26, -68.5], level: 5, side: "Nord" },
  5214: { orbitcenter: [63, 26, -68.5], level: 5, side: "Nord" },
  5215: { orbitcenter: [47, 26, -68.5], level: 5, side: "Nord" },
  5216: { orbitcenter: [31, 26, -68.5], level: 5, side: "Nord" },
  5217: { orbitcenter: [9, 26, -68.5], level: 5, side: "Nord" },
  5218: { orbitcenter: [-14.5, 26, -68.5], level: 5, side: "Nord" },
  5219: { orbitcenter: [-39, 26, -68.5], level: 5, side: "Nord" },
  5220: { orbitcenter: [-58, 26, -68.5], level: 5, side: "Nord" },
  5224: { orbitcenter: [-105, 26, -68.5], level: 5, side: "Nord" },
  5225: { orbitcenter: [-130, 26, -68.5], level: 5, side: "Nord" },
  5233: { orbitcenter: [-133, 26, -99.0], level: 5, side: "Nord" },
  5234: { orbitcenter: [-115, 26, -99.0], level: 5, side: "Nord" },
  5236: { orbitcenter: [-86, 26, -99.0], level: 5, side: "Nord" },
  5237: { orbitcenter: [-60, 26, -99.0], level: 5, side: "Nord" },
  5238: { orbitcenter: [-46, 26, -99.0], level: 5, side: "Nord" },
  5239: { orbitcenter: [-28, 26, -99.0], level: 5, side: "Nord" },
  5240: { orbitcenter: [-5, 26, -99.0], level: 5, side: "Nord" },
  5241: { orbitcenter: [15, 26, -99.0], level: 5, side: "Nord" },
  5242: { orbitcenter: [34, 26, -99.0], level: 5, side: "Nord" },
  5243: { orbitcenter: [55, 26, -99.0], level: 5, side: "Nord" },
  5244: { orbitcenter: [71.5, 26, -99.0], level: 5, side: "Nord" },
  5245: { orbitcenter: [91.5, 26, -99.0], level: 5, side: "Nord" },
  5246: { orbitcenter: [117, 26, -99.0], level: 5, side: "Nord" },
  5247: { orbitcenter: [140, 26, -99.0], level: 5, side: "Nord" },
  6212: { orbitcenter: [123, 34, -68.5], level: 6, side: "Nord" },
  6214: { orbitcenter: [66, 34, -68.5], level: 6, side: "Nord" },
  6215: { orbitcenter: [50, 34, -68.5], level: 6, side: "Nord" },
  6216: { orbitcenter: [38, 34, -68.5], level: 6, side: "Nord" },
  6218: { orbitcenter: [28.5, 34, -64], level: 6, side: "Nord" },
  6219: { orbitcenter: [21, 34, -64], level: 6, side: "Nord" },
  6220: { orbitcenter: [14, 34, -64], level: 6, side: "Nord" },
  6221: { orbitcenter: [6.5, 34, -64], level: 6, side: "Nord" },
  6222: { orbitcenter: [0, 34, -64], level: 6, side: "Nord" },
  6223: { orbitcenter: [-9, 34, -68.5], level: 6, side: "Nord" },
  6224: { orbitcenter: [-18.5, 34, -64], level: 6, side: "Nord" },
  6226: { orbitcenter: [-30, 34, -64], level: 6, side: "Nord" },
  6227: { orbitcenter: [-32.2, 34, -73.5], level: 6, side: "Nord" },
  6228: { orbitcenter: [-50, 34, -68.5], level: 6, side: "Nord" },
  6233: { orbitcenter: [-106, 34, -68.5], level: 6, side: "Nord" },
  6234: { orbitcenter: [-130, 34, -68.5], level: 6, side: "Nord" },
  6242: { orbitcenter: [-135, 34, -99], level: 6, side: "Nord" },
  6266: { orbitcenter: [129, 34, -99], level: 6, side: "Nord" },
  6262: { orbitcenter: [93, 34, -99], level: 6, side: "Nord" },
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

async function getWeather(url) {
  try {
    let response = await fetch(url);
    // Detta gör om resultatet från APIet till ett JSON-objekt.
    let json = await response.json();
    console.log(json);
    weatherContainer.innerHTML = `<img id="weather-icon" src="${
      json.current.condition.icon
    }" alt="Weather icon" height="${window.innerHeight * 0.1}px">
    <span>${json.current.condition.text}</span>
    <span>Känns  som ${json.current.feelslike_c}°</span>`;
  } catch (error) {
    weatherContainer.innerHTML = `<span>Kunde inte hitta väder data.</span>`;
  }
}

getWeather(api);

/*  Skapar det nödvändgia för THREE.js*/

const GLTF = new GLTFLoader();
const loader = new THREE.TextureLoader();
const scene = new THREE.Scene();

/* Skapar en skybox*/
let skySphere = new THREE.SphereGeometry(4000, 100, 100);
skySphere.scale(-1, 1, 1);
let skyMaterial = new THREE.MeshBasicMaterial({
  map: loader.load("Bilder/skyimage/CasualDay4K.jpg"),
});
let Sky = new THREE.Mesh(skySphere, skyMaterial);
scene.add(Sky);

/* Skapar Height och Width variablar för canvas*/

let height = window.innerHeight * 0.9;
let width = window.innerWidth;
if (window.innerWidth > 1400) {
  width = 1400;
}

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
camera.position.set(-230, 40, -20);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

if (window.innerWidth > 2000) {
  renderer.setPixelRatio(window.devicePixelRatio * 0.5);
} else {
  renderer.setPixelRatio(window.devicePixelRatio);
}

renderer.setSize(width, window.innerHeight * 0.9);

const grass = loader.load("/Bilder/grass.jfif");
grass.wrapS = THREE.RepeatWrapping;
grass.wrapT = THREE.RepeatWrapping;
grass.repeat.set(64, 64);

// const fieldPlane = new THREE.PlaneGeometry(10000, 10000);
// const fieldTexture = new THREE.MeshStandardMaterial({ map: grass });
// const field = new THREE.Mesh(fieldPlane, fieldTexture);
// field.rotation.x -= Math.PI / 2;
// field.position.set(0, -4, 0);
// scene.add(field);
// console.log(window.innerWidth);

/* Sätter ut 4 ljus källor runt Åva */

const lightCordinates = [
  new THREE.Vector3(100, 100, -100),
  new THREE.Vector3(100, 100, 100),
  new THREE.Vector3(-100, 100, 100),
  new THREE.Vector3(-100, 100, -100),
  new THREE.Vector3(100, -100, -100),
  new THREE.Vector3(100, -100, 100),
  new THREE.Vector3(-100, -100, 100),
  new THREE.Vector3(-1000, -100, -100),
];

for (let index = 0; index < lightCordinates.length; index++) {
  let lightCordinate = lightCordinates[index];
  console.log(lightCordinate);
  let sunLight = new THREE.DirectionalLight("#ffffff", 0.4);
  sunLight.castShadow = true;
  sunLight.shadow.camera.far = 20;
  sunLight.shadow.mapSize.set(1024, 1024);
  sunLight.shadow.normalBias = 0.05;
  sunLight.position.set(lightCordinate.x, lightCordinate.y, lightCordinate.z);
  scene.add(sunLight);
}

/* Kontroler för att dra runt en viss punkt */

const oControls = new OrbitControls(camera, renderer.domElement);
oControls.minPolarAngle = 0;
oControls.maxPolarAngle = Math.PI * 0.5;
oControls.target.set(0, 0, -80);
oControls.maxDistance = 600;
oControls.minDistance = 20;

/*  Används för att kunna hitta kordinater för orbitcenter */

// const fControls = new FlyControls(camera, renderer.domElement);
// fControls.movementSpeed = 30;
// fControls.rollSpeed = Math.PI / 2;
// fControls.dragToLook = true;

/* Laddar in 3d byggnad Alla kod som manipulerar 3dmodelen måsta vara innanför load() */

GLTF.load(
  "/3D-modeler/skolasommar2023blend.glb",
  function (gltf) {
    /* lägger till 3d-modelen till scenen/canvas */
    let object = gltf.scene;
    scene.add(gltf.scene);
    console.log(gltf.scene);

    /*  Sorterar våningarna eftersom det har slumpmässiga platser i arrayen då det laddas in.*/

    let orderedList = [];
    for (let i = 2; i < object.children.length + 2; i++) {
      object.children.forEach((element) => {
        if (element.name[4] == i) {
          orderedList.push(element);
        }
      });
    }

    object.children.splice(
      0,
      6,
      orderedList[0],
      orderedList[1],
      orderedList[2],
      orderedList[3],
      orderedList[4],
      orderedList[5]
    );

    /* Postionerar vånigarna korrekt */

    gltf.scene.children[0].position.set(0, 0, 0);
    for (let i = 1; i < 6; i++) {
      gltf.scene.children[i].position.set(0, 0 + 8.5 * i, 0);
    }

    const standardCameratarget = new THREE.Vector3(-230, 40, -20);
    const standardOrbittarget = new THREE.Vector3(0, 0, -80);
    const buttons = document.querySelectorAll(".buttons");
    let cameraTarget = new THREE.Vector3(0, 30, 30);
    let orbitTarget = new THREE.Vector3();
    let cameraKey = false;
    let animationKey = false;
    let plantest = new THREE.Vector3(0, 100, 0);
    let level = 0;
    let devToggle = false;
    let input = "";
    let count = 0;
    let lesson = "";
    let tempInput = "";
    let result = "";

    // let sortedLessons = [];

    addEventListener("submit", (event) => {
      event.preventDefault();
      input = document.getElementById("search").value;
      tempInput = input;

      if (salar.hasOwnProperty(input)) {
        // console.log(tempInput);
        // console.log(salar[tempInput].level);

        level = salar[tempInput].level;
        cameraTarget.set(
          salar[tempInput].orbitcenter[0],
          salar[tempInput].orbitcenter[1] + 30,
          salar[tempInput].orbitcenter[2] + 30
        );
        orbitTarget.set(
          salar[tempInput].orbitcenter[0],
          salar[tempInput].orbitcenter[1],
          salar[tempInput].orbitcenter[2]
        );

        animationKey = true;
        oControls.autoRotate = false;
      } else if (input == "dev") {
        if (devToggle == true) {
          infoBoxcontainer.style.display = "none";
          devToggle = false;
        } else {
          infoBoxcontainer.style.display = "block";
          devToggle = true;
        }
      } else {
        alert("Salen har inte lagts till i databasen än!");
      }
    });

    console.log(cameraTarget.x);
    let multiplier = 1.0015;
    let secondMultiplier = 1.0015;
    let thirdMultiplier = 1.0015;

    function animate() {
      requestAnimationFrame(animate);

      Sky.position.set(camera.position.x, camera.position.y, camera.position.z);

      infoBox.innerHTML = `Position: X ${camera.position.x.toFixed(
        1
      )}, Y ${camera.position.y.toFixed(1)}, Z ${camera.position.z.toFixed(1)}`;

      // fControls.update(0.01);
      oControls.update(0.01);
      if (animationKey == true) {
        if (
          camera.position.x.toFixed(1) == cameraTarget.x &&
          camera.position.y.toFixed(1) == cameraTarget.y &&
          camera.position.z.toFixed(1) == cameraTarget.z
        ) {
          animationKey = false;
          multiplier = 1.0015;
          secondMultiplier = 1.0015;
          thirdMultiplier = 1.0015;
          // oControls.autoRotate = true;
        } else {
          let newLevel = level - 1;
          // console.log(object.children[newLevel].position);
          if (
            object.children[newLevel].position.y.toFixed(1) ==
              150 + 8.5 * (level - 1) &&
            object.children[level - 2].position.y.toFixed(1) ==
              8.5 * (level - 2)
          ) {
            camera.position.lerp(cameraTarget, 0.02 * thirdMultiplier);
            oControls.target.lerp(orbitTarget, 0.02 * thirdMultiplier);
            cameraKey = false;
            thirdMultiplier += 0.015;
          } else {
            if (cameraKey) {
              for (let index = level - 1; index < 6; index++) {
                plantest.set(0, 150 + 8.5 * index, 0);
                object.children[index].position.lerp(
                  plantest,
                  0.02 * secondMultiplier
                );
              }
              for (let index = 0; index < level - 1; index++) {
                plantest.set(0, 8.5 * index, 0);
                object.children[index].position.lerp(
                  plantest,
                  0.02 * secondMultiplier
                );
              }
              secondMultiplier += 0.015;
            } else {
              camera.position.lerp(standardCameratarget, 0.02 * multiplier);
              oControls.target.lerp(standardOrbittarget, 0.02 * multiplier);
              if (
                camera.position.x.toFixed(1) == standardCameratarget.x &&
                camera.position.y.toFixed(1) == standardCameratarget.y &&
                camera.position.z.toFixed(1) == standardCameratarget.z
              ) {
                cameraKey = true;
              }
            }
            multiplier += 0.015;
          }
        }
      }

      renderer.render(scene, camera);
    }

    animate();
  },
  undefined,
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

/* uppdatera storlek på canvas då fönstret ändrar storlek*/

function resize() {
  let factor = 0.9;
  let w = window.innerWidth;
  let h = window.innerHeight * factor;
  if (window.innerWidth > 1000) {
    w = 1000;
  }
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", resize);
