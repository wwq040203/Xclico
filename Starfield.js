class Starfield {
    constructor(x, y, length) {
        this.length = length;
        let ran = random(0, 2 * PI)
        this.x = x + ran;
        this.y = y + ran;
        this.color1 = color(Math.random() * 154 + 100, Math.random() * 154 + 100, 255 /* Math.random() * 254 + 1 */);
        this.v = random(PI / 150, PI / 180);
    }
    show() {
        stroke(this.color1);
        arc(0, 0, this.length, this.length, this.x, this.y);
    }
    update() {
        this.x += this.v;
        this.y += this.v;
    }
}

//global variable
let arr;
let d;
let back = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    arr = new Array()
    for (let i = 0; i < 200; ++i) {
        x = random(0, PI / 4);
        y = random(x+0.5, PI / 2);
        arr.push(new Starfield(x, y, random(windowHeight)));
    }
}

function draw() {
    background(0);
    translate(windowWidth / 2, windowHeight / 2);
    noFill();
    for (let i = 0; i < 200; ++i) {
        arr[i].show()
        arr[i].update()
    }
}

