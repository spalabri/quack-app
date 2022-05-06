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

animate();

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

function foodCursor() {
  var body = document.body;
  body.id = ( body.id ) ? body.id : 'body_id'; // ffox

  body.use_custom_cursor = !body.use_custom_cursor;

  body.style.cursor = 'url(https://cur.cursors-4u.net/food/foo-6/foo523.cur), auto';
}

function defaultCursor() {
  var body = document.body;
  body.style.cursor = "default";
}