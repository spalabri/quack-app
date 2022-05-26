const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600; // Must be the same dimensions as the one given to the CSS
const CANVAS_HEIGHT= canvas.height = 600; // Must be the same dimensions as the one given to the CSS
const petImage = new Image();
petImage.src = 'images/cute_dog.png';
const spriteWidth = 547;
const spriteHeight = 481;
let frameX = 0;
let frameY = 0;
let positionX = 50;
let positionY = 120;
let gameFrame = 0;
const staggerFrames = 15;
var id = null;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Note that drawImage can accept up to 5 arguments to work around your sprite sheet
    // ctx.Image(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(petImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, positionX, positionY, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 9) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    id = requestAnimationFrame(animate);
}

function shop() {
  canvas.style.transform = "translate(-120%, -50%)";
  var shopModal = document.getElementById("shopModal");
  var shopButton = document.getElementById("shopButton");
  shopModal.style.display = "block";
  shopDefault();
}

function exitShop() {
  canvas.style.transform = "translate(-50%, -50%)";
  var span = document.getElementsByClassName("nav-close")[0];
  shopModal.style.display = "none";
}

function code() {
  canvas.style.transform = "translate(-120%, -50%)";
  var codeModal = document.getElementById("codeModal");
  var codeButton = document.getElementById("codeButton");
  codeModal.style.display = "block";
}

function exitCode() {
  canvas.style.transform = "translate(-50%, -50%)";
  var span = document.getElementsByClassName("nav-close")[0];
  codeModal.style.display = "none";
}

function sleep() {
  var sleepModal = document.getElementById("sleepModal");
  var sleepButton = document.getElementById("sleepButton");
  sleepModal.style.display = "block";
  cancelAnimationFrame(id);
}

function wake() {
  var span = document.getElementsByClassName("close")[0];
  sleepModal.style.display = "none";
  id = requestAnimationFrame(animate);
}

function settings() {
  canvas.style.transform = "translate(-120%, -50%)";
  var settingsModal = document.getElementById("settingsModal");
  var settingsButton = document.getElementById("settingsButton");
  settingsModal.style.display = "block";
}

function exitSettings() {
  canvas.style.transform = "translate(-50%, -50%)";
  var span = document.getElementsByClassName("nav-close")[0];
  settingsModal.style.display = "none";
}

function tutorial() {
  var tutorialModal = document.getElementById("tutorialModal");
  tutorialModal.style.display = "block";
}

function skipTutorial(tutorialModal) {
  var tutorialModal = document.getElementById(tutorialModal);
  tutorialModal.style.display = "none";
  animate();
}

function restartTutorial() {
  cancelAnimationFrame(id);
  canvas.style.transform = "translate(-50%, -50%)";
  settingsModal.style.display = "none";
  var tutorialModal = document.getElementById("tutorialModal");
  changeModalContent(event, 'tutorial1');
  tutorialModal.style.display = "block";
}

function changeModalContent(evt, tutorialNumber) {
    var i, tutorialcontent, tutoriallinks;

    tutorialcontent = document.getElementsByClassName("tutorial-content");
    for (i = 0; i < tutorialcontent.length; i++) {
      tutorialcontent[i].style.display = "none";
    }

    tutoriallinks = document.getElementsByClassName("tutoriallinks");
    for (i = 0; i < tutoriallinks.length; i++) {
      tutoriallinks[i].className = tutoriallinks[i].className.replace(" active", "");
    }

    document.getElementById(tutorialNumber).style.display = "block";
    evt.currentTarget.className += " active";
  }

  tutorial();
  changeModalContent(event, 'tutorial1');

function changeShopContent(evt, shopNumber, price) {
    var i, shopcontent, shoplinks;

    shopcontent = document.getElementsByClassName("shop-content");
    for (i = 0; i < shopcontent.length; i++) {
      shopcontent[i].style.display = "none";
    }

    shoplinks = document.getElementsByClassName("shoplinks");
    for (i = 0; i < shoplinks.length; i++) {
      shoplinks[i].className = shoplinks[i].className.replace(" active", "");
    }

    document.getElementById(shopNumber).style.display = "block";
    evt.currentTarget.className += " active";

    getPrice(price);
}

function getPrice(price) {
  let foodDescriptions = document.getElementsByClassName("food-descriptions");
  let prices = document.getElementsByClassName("food-description-price");
  for (i = 0; i < prices.length; i++) {
    for (j = 0; j < foodDescriptions.length; j++) {
      if (i == j) prices[i].innerHTML = price;
    }
  }
}


function shopDefault() {
  document.getElementById('shop-grid').style.display = "block";
  var foodDescriptions = document.getElementsByClassName("food-descriptions");
  for (i = 0; i < foodDescriptions.length; i++) {
    foodDescriptions[i].style.display = "none";
  }
}

var cursorItem = item;

function purchaseModal(item, price) {
  var buyModal = document.getElementById("buyModal");
  document.getElementById("item-name").innerHTML = "You are purchasing " + item + " for " + price;
  buyModal.style.display = "block";
  cursorItem = item;
}

function exitPurchaseModal() {
  buyModal.style.display = "none";
}

function feed() {
  canvas.style.transform = "translate(-50%, -50%)";
  buyModal.style.display = "none";
  shopModal.style.display = "none";
  cursorItem = assignCursor(cursorItem);
}

function assignCursor(item) {
  var body = document.body;
  body.id = ( body.id ) ? body.id : 'body_id'; // ffox

  body.use_custom_cursor = !body.use_custom_cursor;

  document.getElementById('directionsModal').style.display = "block";
  document.getElementById("feed-directions").innerHTML = "Click your pet to feed them";

  switch(item) {
    case 'lechon':
      body.style.cursor = 'url(cursor/lechon.png), auto';
      return 'lechon';
    case 'calzone':
      body.style.cursor = 'url(cursor/calzone.png), auto';
      return 'calzone';
    case 'fufu':
      body.style.cursor = 'url(cursor/fufu-egusi.png), auto';
      return 'fufu';
    case 'sushi':
      body.style.cursor = 'url(cursor/sushi.png), auto';
      return 'sushi';
    case 'tteokbokki':
      body.style.cursor = 'url(cursor/tteokbokki.png), auto';
      return 'tteokbokki';
  }
}

function defaultCursor() {
  var body = document.body;
  body.style.cursor = "default";
  document.getElementById('directionsModal').style.display = "none";
}