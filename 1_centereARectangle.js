// const rectangleWidth = 30;
// const rectangleHeight = 30;
// const windowWidth = 200;
// const windowHeight = 200;
// const r = require("raylib");
// r.InitWindow(windowWidth, windowHeight, "vectors");
// r.SetTargetFPS(60);
// function start(windowWidth, rectangleWidth) {
//   windowWidth = (windowWidth - rectangleWidth) / 2
//   return windowWidth;
// }

// while (!r.WindowShouldClose()) {
//   r.BeginDrawing();
//   r.ClearBackground(r.BLUE);

//   r.DrawRectangle(start(windowWidth, rectangleWidth), start(windowHeight, rectangleHeight), rectangleWidth, rectangleHeight, r.WHITE);

//   r.EndDrawing();
// }
// r.CloseWindow();


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