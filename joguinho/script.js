var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var player = {
  x: 50,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  color: "#ff0000",
  speed: 5,
  isJumping: false,
  jumpHeight: 100,
  jumpCount: 0,
};

var gravity = 2;
var keys = {};

function drawPlayer() {
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fillStyle = player.color;
  context.fill();
  context.closePath();
}

function movePlayer() {
  // Movimento horizontal
  if (keys["ArrowRight"]) {
    player.x += player.speed;
  } else if (keys["ArrowLeft"]) {
    player.x -= player.speed;
  }

  // Salto
  if (keys["ArrowUp"] && !player.isJumping) {
    player.isJumping = true;
    player.jumpCount = 0;
  }

  if (player.isJumping) {
    player.y -= gravity * player.jumpCount;
    player.jumpCount++;

    if (player.jumpCount > player.jumpHeight / gravity) {
      player.isJumping = false;
    }
  }

  // Gravidade
  if (player.y + player.height < canvas.height) {
    player.y += gravity;
  } else {
    player.y = canvas.height - player.height;
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  movePlayer();

  requestAnimationFrame(draw);
}

document.addEventListener("keydown", function (event) {
  keys[event.key] = true;
});

document.addEventListener("keyup", function (event) {
  keys[event.key] = false;
});

draw();
