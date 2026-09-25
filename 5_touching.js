const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 1000;
const circle1_x = 400;
const circle1_y = 500;
const radius1 = 100;
const circle2_x = 600;
const circle2_y = 500;
const radius2 = 100;
r.InitWindow(windowWidth, windowHeight, "Intersecting Circles");
r.SetTargetFPS(60);
const distance = (((circle2_x - circle1_x) ** 2) + ((circle2_y - circle1_y) ** 2)) ** 0.5;
let intersect = false;
if (distance <= radius1 + radius2) {
    intersect = true;
}
while (!r.WindowShouldClose()) {
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
r.CloseWindow();