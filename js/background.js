// const images = ["0.jpg", "1.jpg", "3.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

// const chosenImage = images[Math.floor(Math.random()*images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const imgs = ["0.jpg", "1.jpg", "3.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
const todaysImgNum = Math.floor(Math.random() * imgs.length);
const todaysImg = imgs[todaysImgNum];

const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(img/${todaysImg}); background-position: center; background-size:cover; background-repeat: no-repeat; width:100%; height:100vh; aspect-ratio: 1920/1200; }`;

document.head.appendChild(bgImg);
console.log(bgImg);
