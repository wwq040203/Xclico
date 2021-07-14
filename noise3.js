function setup() {
    createCanvas(400, 400, WEBGL);
    //debugMode();
    
}

function draw() {
    background(225);
    ambientLight(color(255, 255, 255));
    box(50);
    orbitControl();
}