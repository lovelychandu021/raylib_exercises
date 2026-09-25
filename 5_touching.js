const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

const circle1_x = 400;
const circle1_y = 500;

const circle2_x = 600;
const circle2_y = 500;

const radius1 = 100;
const radius2 = 100;
const distance = distanceBetween2points(circle1_x, circle1_y, circle2_x, circle2_y);

function intersect() {
    return distance >= radius1 + radius2 ? true : false
}

function distanceBetween2points(x1, y1, x2, y2) {
    return ((((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5)
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Intersecting Circles");
    r.SetTargetFPS(60);
}

function update() {
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    if (intersect) {
        r.DrawCircle(circle1_x, circle1_y, radius1, r.RED);
        r.DrawCircle(circle2_x, circle2_y, radius2, r.RED);
    } else {
        r.DrawCircle(circle1_x, circle1_y, radius1, r.BLACK);
        r.DrawCircle(circle2_x, circle2_y, radius2, r.BLACK);
    }
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

main()