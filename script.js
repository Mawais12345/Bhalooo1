const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let level = 1;
const totalLevels = 15;
const player = { x: 50, y: 50, size: 20, color: "#ff69b4" };
const goal = { x: 320, y: 320, size: 25, color: "#6a5acd" };

function drawCharacter(obj) {
  ctx.fillStyle = obj.color;
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
  ctx.fill();
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCharacter(player);
  drawCharacter(goal);
  document.getElementById("level-display").innerText = "Level " + level + " of " + totalLevels;
}

function nextLevel() {
  if (level < totalLevels) {
    level++;
    player.x = 50;
    player.y = 50;
    goal.x = Math.random() * 300 + 50;
    goal.y = Math.random() * 300 + 50;
  } else {
    alert("Bhaloooo asks: Will you marry me?\\nAwaissss replies: Only if I get to bite your cheeks and kiss them every dayy 👀✨💗🫂");
  }
}

function checkCollision() {
  const dx = player.x - goal.x;
  const dy = player.y - goal.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < player.size + goal.size) {
    nextLevel();
  }
}

function gameLoop() {
  drawScene();
  checkCollision();
  requestAnimationFrame(gameLoop);
}

let joystick = {
  active: false,
  x: 0,
  y: 0
};

document.getElementById("joystickZone").addEventListener("touchstart", function (e) {
  joystick.active = true;
  joystick.x = e.touches[0].clientX;
  joystick.y = e.touches[0].clientY;
}, false);

document.getElementById("joystickZone").addEventListener("touchmove", function (e) {
  if (!joystick.active) return;
  const dx = e.touches[0].clientX - joystick.x;
  const dy = e.touches[0].clientY - joystick.y;
  player.x += dx * 0.1;
  player.y += dy * 0.1;
  joystick.x = e.touches[0].clientX;
  joystick.y = e.touches[0].clientY;
}, false);

document.getElementById("joystickZone").addEventListener("touchend", function () {
  joystick.active = false;
}, false);

gameLoop();
