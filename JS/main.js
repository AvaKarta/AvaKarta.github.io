"use strict";
import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.138.0/examples/jsm/loaders/GLTFLoader.js";
import { FlyControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/FlyControls.js";

/* skapar tids variablar */
console.log(window.devicePixelRatio);
/*   Ett objekt med schema för olika klasser  */

/* Ett objekt med kordinater för alla klassrum*/

const salar = {
  2207: { orbitcenter: [144.0, 0.5, -68.3], level: 2 },
  2208: { orbitcenter: [124.0, 0.5, -68.3], level: 2 },
  2209: { orbitcenter: [108.0, 0.5, -68.3], level: 2 },
  2244: { orbitcenter: [-114.0, 0.5, -98.4], level: 2 },
  2247: { orbitcenter: [-98.3, 0.5, -98.4], level: 2 },
  2250: { orbitcenter: [-86.9, 0.5, -98.4], level: 2 },
  2248: { orbitcenter: [-72.7, 0.5, -98.4], level: 2 },
  2251: { orbitcenter: [-51.5, 0.5, -98.4], level: 2 },
  2252: { orbitcenter: [-33, 0.5, -94], level: 2 },
  2254: { orbitcenter: [-23.3, 0.5, -98.4], level: 2 },
  2255: { orbitcenter: [-6.2, 0.5, -98.4], level: 2 },
  2256: { orbitcenter: [17, 0.5, -98.4], level: 2 },
  2257: { orbitcenter: [36.2, 0.5, -98.4], level: 2 },
  2258: { orbitcenter: [50, 0.5, -98.4], level: 2 },
  2260: { orbitcenter: [72, 0.5, -98.4], level: 2 },
  2266: { orbitcenter: [98.5, 0.5, -98.4], level: 2 },
  2268: { orbitcenter: [114.5, 0.5, -102.4], level: 2 },
  2269: { orbitcenter: [122.4, 0.5, -98.4], level: 2 },
  2270: { orbitcenter: [141, 0.5, -98.4], level: 2 },
  Aulan: { orbitcenter: [240.9, 9, -70], level: 3 },
  Matsal: { orbitcenter: [252.2, 9, 10.0], level: 3 },
  Blackbox: { orbitcenter: [100.5, 9, 30.0], level: 3 },
  Livskunskapen: { orbitcenter: [114.5, 9, 60.6], level: 3 },
  3287: { orbitcenter: [108.8, 9, -100.4], level: 3 },
  3403: { orbitcenter: [-130, 9, 10.0], level: 3 },
  "3454B": { orbitcenter: [195.7, 9, 34.3], level: 3 },
  3464: { orbitcenter: [38.4, 9, 31.3], level: 3 },
  "Tore Wretman": { orbitcenter: [38.4, 9, 31.3], level: 3 },
  3465: { orbitcenter: [56.1, 9, 31.3], level: 3 },
  "Kajsa Warg": { orbitcenter: [56.1, 9, 31.3], level: 3 },
  3468: { orbitcenter: [68.3, 9, 11.2], level: 3 },
  3471: { orbitcenter: [49.3, 9, 11.2], level: 3 },
  "3528A": { orbitcenter: [-87, 9, 102.2], level: 3 },
  "3528B": { orbitcenter: [-93, 9, 72.7], level: 3 },
  "3528C": { orbitcenter: [-92, 9, 43.1], level: 3 },
  "3531A": { orbitcenter: [-130, 9, 55.0], level: 3 },
  "3531B": { orbitcenter: [-133, 9, 36.0], level: 3 },
  "3531C": { orbitcenter: [-133, 9, 22.2], level: 3 },
  3535: { orbitcenter: [-133, 9, 76.2], level: 3 },
  3536: { orbitcenter: [-130, 9, 95.0], level: 3 },
  3544: { orbitcenter: [-130.7, 9, 116.0], level: 3 },
  3545: { orbitcenter: [-121.2, 9, 137.5], level: 3 },
  "3603B": { orbitcenter: [-46.4, 9, 21.2], level: 3 },
  3604: { orbitcenter: [-17.5, 9, 27.0], level: 3 },
  "3604A": { orbitcenter: [5.1, 9, 27.0], level: 3 },
  "3604B": { orbitcenter: [5.2, 9, 50.0], level: 3 },
  3606: { orbitcenter: [-58, 9, 45.1], level: 3 },
  3607: { orbitcenter: [-63, 9, 70.0], level: 3 },
  3609: { orbitcenter: [4.9, 9, 76.3], level: 3 },
  3610: { orbitcenter: [-9.1, 9, 52.3], level: 3 },
  3611: { orbitcenter: [-36.4, 9, 52.9], level: 3 },
  3612: { orbitcenter: [5.2, 9, 99.0], level: 3 },
  3614: { orbitcenter: [-28.3, 9, 99.0], level: 3 },
  3615: { orbitcenter: [-51, 9, 99.0], level: 3 },
  3618: { orbitcenter: [-71.6, 9, 24.1], level: 3 },
  3710: { orbitcenter: [161.6, 9, 36.9], level: 3 },
  3712: { orbitcenter: [148.4, 9, 56.1], level: 3 },
  3713: { orbitcenter: [147.2, 9, 70.7], level: 3 },
  3714: { orbitcenter: [130.2, 9, 70.7], level: 3 },
  3715: { orbitcenter: [127.8, 9, 55.1], level: 3 },
  3716: { orbitcenter: [130, 9, 43.5], level: 3 },
  3717: { orbitcenter: [128.5, 9, 30.5], level: 3 },
  4209: { orbitcenter: [140, 18.1, -68.5], level: 4 },
  4210: { orbitcenter: [115, 18.1, -68.5], level: 4 },
  4214: { orbitcenter: [64, 18.1, -68.5], level: 4 },
  4215: { orbitcenter: [40, 18.1, -68.5], level: 4 },
  4216: { orbitcenter: [3, 18.1, -68.5], level: 4 },
  4220: { orbitcenter: [-29, 18.1, -68.5], level: 4 },
  4221: { orbitcenter: [-54, 18.1, -68.5], level: 4 },
  4228: { orbitcenter: [-105, 18.1, -68.5], level: 4 },
  4229: { orbitcenter: [-129, 18.1, -68.5], level: 4 },
  4237: { orbitcenter: [-130, 18.1, -99.0], level: 4 },
  4238: { orbitcenter: [-110, 18.1, -99.0], level: 4 },
  4241: { orbitcenter: [-90, 18.1, -99.0], level: 4 },
  4242: { orbitcenter: [-65, 18.1, -99.0], level: 4 },
  4243: { orbitcenter: [-35, 18.1, -99.0], level: 4 },
  4244: { orbitcenter: [-10, 18.1, -99.0], level: 4 },
  4246: { orbitcenter: [16, 18.1, -99.0], level: 4 },
  4247: { orbitcenter: [43, 18.1, -99.0], level: 4 },
  4248: { orbitcenter: [65, 18.1, -99.0], level: 4 },
  4249: { orbitcenter: [82, 18.1, -99.0], level: 4 },
  4250: { orbitcenter: [98, 18.1, -99.0], level: 4 },
  4251: { orbitcenter: [114.4, 18.1, -99.0], level: 4 },
  4252: { orbitcenter: [136, 18.1, -99.0], level: 4 },
  5209: { orbitcenter: [139, 26, -68.5], level: 5 },
  5210: { orbitcenter: [115, 26, -68.5], level: 5 },
  5214: { orbitcenter: [63, 26, -68.5], level: 5 },
  5215: { orbitcenter: [47, 26, -68.5], level: 5 },
  5216: { orbitcenter: [31, 26, -68.5], level: 5 },
  5217: { orbitcenter: [9, 26, -68.5], level: 5 },
  5218: { orbitcenter: [-14.5, 26, -68.5], level: 5 },
  5219: { orbitcenter: [-39, 26, -68.5], level: 5 },
  5220: { orbitcenter: [-58, 26, -68.5], level: 5 },
  5224: { orbitcenter: [-105, 26, -68.5], level: 5 },
  5225: { orbitcenter: [-130, 26, -68.5], level: 5 },
  5233: { orbitcenter: [-133, 26, -99.0], level: 5 },
  5234: { orbitcenter: [-115, 26, -99.0], level: 5 },
  5236: { orbitcenter: [-86, 26, -99.0], level: 5 },
  5237: { orbitcenter: [-60, 26, -99.0], level: 5 },
  5238: { orbitcenter: [-46, 26, -99.0], level: 5 },
  5239: { orbitcenter: [-28, 26, -99.0], level: 5 },
  5240: { orbitcenter: [-5, 26, -99.0], level: 5 },
  5241: { orbitcenter: [15, 26, -99.0], level: 5 },
  5242: { orbitcenter: [34, 26, -99.0], level: 5 },
  5243: { orbitcenter: [55, 26, -99.0], level: 5 },
  5244: { orbitcenter: [71.5, 26, -99.0], level: 5 },
  5245: { orbitcenter: [91.5, 26, -99.0], level: 5 },
  5246: { orbitcenter: [117, 26, -99.0], level: 5 },
  5247: { orbitcenter: [140, 26, -99.0], level: 5 },
  6212: { orbitcenter: [123, 34, -68.5], level: 6 },
  6214: { orbitcenter: [66, 34, -68.5], level: 6 },
  6215: { orbitcenter: [50, 34, -68.5], level: 6 },
  6216: { orbitcenter: [38, 34, -68.5], level: 6 },
  6218: { orbitcenter: [28.5, 34, -64], level: 6 },
  6219: { orbitcenter: [21, 34, -64], level: 6 },
  6220: { orbitcenter: [14, 34, -64], level: 6 },
  6221: { orbitcenter: [6.5, 34, -64], level: 6 },
  6222: { orbitcenter: [0, 34, -64], level: 6 },
  6223: { orbitcenter: [-9, 34, -68.5], level: 6 },
  6224: { orbitcenter: [-18.5, 34, -64], level: 6 },
  6226: { orbitcenter: [-30, 34, -64], level: 6 },
  6227: { orbitcenter: [-32.2, 34, -73.5], level: 6 },
  6228: { orbitcenter: [-50, 34, -68.5], level: 6 },
  6233: { orbitcenter: [-106, 34, -68.5], level: 6 },
  6234: { orbitcenter: [-130, 34, -68.5], level: 6 },
  6242: { orbitcenter: [-135, 34, -99], level: 6 },
  6243: { orbitcenter: [-121.7, 34, -99], level: 6 },
  6244: { orbitcenter: [-121.7, 34, -99], level: 6 },
  6245: { orbitcenter: [-121.7, 34, -99], level: 6 },
  6246: { orbitcenter: [-100.4, 34, -99], level: 6 },
  6247: { orbitcenter: [-66.1, 34, -99], level: 6 },
  6249: { orbitcenter: [-45.7, 34, -99], level: 6 },
  6250: { orbitcenter: [-38.1, 34, -91.8], level: 6 },
  6253: { orbitcenter: [-21.2, 34, -99], level: 6 },
  6255: { orbitcenter: [-6.7, 34, -93], level: 6 },
  6260: { orbitcenter: [39.7, 34, -99], level: 6 },
  "6261B": { orbitcenter: [57.7, 34, -99], level: 6 },
  "6261A": { orbitcenter: [75.1, 34, -99], level: 6 },
  6262: { orbitcenter: [93, 34, -99], level: 6 },
  6266: { orbitcenter: [129, 34, -99], level: 6 },
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

/* Sätter ut 4 ljus källor runt Åva */

const lightCordinates = [
  new THREE.Vector3(100, 100, 100),

  new THREE.Vector3(100, -100, 100),
];

const lightCordinates2 = [
  new THREE.Vector3(-100, 100, -100),

  new THREE.Vector3(-1000, -100, -100),
];

const lightCordinates3 = [
  new THREE.Vector3(100, 100, -100),

  new THREE.Vector3(100, -100, -100),
];

const lightCordinates4 = [
  new THREE.Vector3(-100, 100, 100),

  new THREE.Vector3(-100, -100, 100),
];

for (let index = 0; index < lightCordinates.length; index++) {
  let lightCordinate = lightCordinates[index];
  console.log(lightCordinate);
  let sunLight = new THREE.DirectionalLight("#ffffff", 0.3);
  sunLight.castShadow = true;
  sunLight.shadow.camera.far = 20;
  sunLight.shadow.mapSize.set(1024, 1024);
  sunLight.shadow.normalBias = 0.05;
  sunLight.position.set(lightCordinate.x, lightCordinate.y, lightCordinate.z);
  scene.add(sunLight);
}

for (let index = 0; index < lightCordinates2.length; index++) {
  let lightCordinate = lightCordinates2[index];
  console.log(lightCordinate);
  let sunLight = new THREE.DirectionalLight("#ffffff", 0.4);
  sunLight.castShadow = true;
  sunLight.shadow.camera.far = 20;
  sunLight.shadow.mapSize.set(1024, 1024);
  sunLight.shadow.normalBias = 0.05;
  sunLight.position.set(lightCordinate.x, lightCordinate.y, lightCordinate.z);
  scene.add(sunLight);
}

for (let index = 0; index < lightCordinates3.length; index++) {
  let lightCordinate = lightCordinates3[index];
  console.log(lightCordinate);
  let sunLight = new THREE.DirectionalLight("#ffffff", 0.367);
  sunLight.castShadow = true;
  sunLight.shadow.camera.far = 20;
  sunLight.shadow.mapSize.set(1024, 1024);
  sunLight.shadow.normalBias = 0.05;
  sunLight.position.set(lightCordinate.x, lightCordinate.y, lightCordinate.z);
  scene.add(sunLight);
}

for (let index = 0; index < lightCordinates4.length; index++) {
  let lightCordinate = lightCordinates4[index];
  console.log(lightCordinate);
  let sunLight = new THREE.DirectionalLight("#ffffff", 0.33);
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
  "/3D-modeler/Skolstart4.glb",
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

    gltf.scene.children[0].position.set(0, -0.7, 0);
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
