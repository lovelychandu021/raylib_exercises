// const innerrectangleWidth = 100;
// const innerrectangleHeight = 80;
// const outerrectangleWidth = 300;
// const outerrectangleHeight = 200;
// const windowWidth = 1000;
// const windowHeight = 1000;
// const r = require("raylib");
// r.InitWindow(windowWidth, windowHeight, "center rectangle inside center rectangle");
// r.SetTargetFPS(60);
// const outerx= 50;
// const outery = 50;
// function center(outer, outerrectangle,innerrectangle){
//   return outer + (outerrectangle - innerrectangle) / 2;
//   }
//   while (!r.WindowShouldClose()) {
//     r.BeginDrawing();
//     r.ClearBackground(r.BLUE);
//     r.DrawRectangle(outerx,outery,outerrectangleWidth,outerrectangleHeight,r.WHITE);
//     r.DrawRectangle(center(outerx,outerrectangleWidth,innerrectangleWidth), center( outery, outerrectangleHeight,innerrectangleHeight),innerrectangleWidth, innerrectangleHeight, r.RED);
//     r.EndDrawing();
//   }

// r.CloseWindow();

const r = require("raylib");
const innerrectangleWidth = 100;
const innerrectangleHeight = 80;
const outerrectangleWidth = 300;
const outerrectangleHeight = 200;
const windowWidth = 1000;
const windowHeight = 1000;
const outerx = 50;
const outery = 50;
const innerx = center(outerx, outerrectangleWidth, innerrectangleWidth);
const innery = center(outery, outerrectangleHeight, innerrectangleHeight);
function setup() {
  r.InitWindow(windowWidth, windowHeight, "center rectangle inside center rectangle");
  r.SetTargetFPS(60);
}
function update() {
}
function center(outer, outerrectangle, innerrectangle) {
  return outer + (outerrectangle - innerrectangle) / 2;
}
function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawRectangle(outerx, outery, outerrectangleWidth, outerrectangleHeight, r.WHITE);
  r.DrawRectangle(innerx, innery, innerrectangleWidth, innerrectangleHeight, r.RED);
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
  loop();
  r.CloseWindow();
}
main();