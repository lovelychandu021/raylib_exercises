const r = require("raylib");

const rectangleWidth = 100;
const rectangleHeight = 100;

const windowWidth = 200;
const windowHeight = 200;

const startX = start(windowWidth, rectangleWidth);
const startY = start(windowHeight, rectangleHeight);

function setup() {
  r.InitWindow(windowWidth, windowHeight, "vectors");
  r.SetTargetFPS(60);
}

function update() {
}

function start(windowWidth, rectangleWidth) {
  return (windowWidth - rectangleWidth) / 2;
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawRectangle(startX, startY, rectangleWidth, rectangleHeight, r.WHITE);
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    update();
    draw();
  }
}

function main() {
  setup();
  loop()
}

main()