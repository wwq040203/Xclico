class particle {
    constructor(x, y, diameter, r, g, b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.diameter = diameter;
        this.vy = Math.random() * 3 + 1;
        this.vx = Math.random() * 4 - 2;
        this.v = Math.random() + 0.75;
        this.a = 0;
    }
    show() {
        color = new Array();
        color[0] = this.r;
        color[1] = this.g;
        color[2] = this.b;
        color[3] = 200;
        fill(color);
        circle(this.x, this.y, this.diameter);
    }
    update() {
        if (this.color[3] <= 0 || this.y < 0/* -windowHeight  / 2*/ || this.x < 0 || this.x > windowWidth) {
            /* this.y = 0// */this.y = mouseY;
            /* this.x = 0// */this.x = mouseX;
            this.color[3] = 200;
            
        }
        else {
            this.y -= this.vy;
            this.color[3] -= this.v;
            this.x -= this.vx;
        }
    }
}

//variable
let d;
let arr;
let j = 1;
let max = 300;
let sliderr;
let sliderg;
let sliderb;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    //d = new particle(0, 0, 10, 235, 194, 0);
    arr = new Array()
    sliderr = createSlider(0, 195, 195);
    sliderg = createSlider(0, 195, 144);
    sliderb = createSlider(0, 195, 0);
    sliderr.position(0,windowHeight+10);
    sliderg.position(0,windowHeight+25);
    sliderb.position(0,windowHeight+40);
    for (let i = 0; i < max; ++i) {
        arr.push(new particle(-1, -1, Math.random() * 20 + 20, random(sliderr.value(), sliderr.value() + 50), random(sliderg.value(), sliderg.value() + 50), random(sliderb.value(), sliderb.value() + 50)));
    }
}



function draw() {
    background(225);
    //translate(windowWidth / 2, windowHeight / 2);
    //d.show();
    //d.update();
    for (let i = 0; i < j; ++i) {
        arr[i].show();
        arr[i].update();
    }
    if (j < max) j++;
}