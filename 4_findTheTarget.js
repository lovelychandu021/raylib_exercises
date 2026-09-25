const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

const sourcex = 500;
const sourcey = 500;
const radius = 40;

const target_1_x = 400;
const target_1_y = 400;
const target_2_x = 900;
const target_2_y = 900;

function distanceBetween2points(x1, y1, x2, y2) {
    return ((((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5)
}

let distance_1 = distanceBetween2points(sourcex, sourcey, target_1_x, target_1_y);
let distance_2 = distanceBetween2points(sourcex, sourcey, target_2_x, target_2_y);

let targetX;
let targetY;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Find the Closer Target");
    r.SetTargetFPS(60);
}

function update() {
    if (distance_1 < distance_2) {
        targetX = target_1_x;
        targetY = target_1_y;
    } else {
        targetX = target_2_x;
        targetY = target_2_y;
    }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(sourcex, sourcey, radius, r.BLUE);
    r.DrawCircle(target_1_x, target_1_y, radius, r.RED);
    r.DrawCircle(target_2_x, target_2_y, radius, r.RED);
    r.DrawLine(sourcex, sourcey, targetX, targetY, r.BLACK)
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
}
main();
