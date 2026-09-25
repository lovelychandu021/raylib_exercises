// const width = 0.8
// const height = 0.8
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
//     r.DrawRectangle(center(outerx,outerrectangleWidth,width * outerrectangleWidth), center( outery, outerrectangleHeight,height * outerrectangleHeight),width * outerrectangleWidth, height * outerrectangleHeight, r.RED);
//     r.EndDrawing();
//   }
//   r.CloseWindow()

const r = require("raylib");
const width = 0.8
const height = 0.8
const outerrectangleWidth = 300;
const outerrectangleHeight = 200;
const windowWidth = 1000;
const windowHeight = 1000;
const outerx = 50;
const outery = 50;
const innerX = center(outerx, outerrectangleWidth, width * outerrectangleWidth);
const innerY = center(outery, outerrectangleHeight, height * outerrectangleHeight);
const innerrectanglewidth = width * outerrectangleWidth;
const innerrectangleheight = height * outerrectangleHeight
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
  r.DrawRectangle(innerX, innerY, innerrectanglewidth, innerrectangleheight, r.RED);
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