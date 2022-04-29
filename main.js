const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

/* Must be the same dimensions as the one given to the CSS */
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT= canvas.height = 600;

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
};

animate();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  cancelAnimationFrame(id);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  id = requestAnimationFrame(animate);
}

