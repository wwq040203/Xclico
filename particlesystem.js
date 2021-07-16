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
        this.color = new Array();
        this.color.push(this.r);
        this.color.push(this.g);
        this.color.push(this.b);
        this.color.push(200);
    }
    show() {
        fill(this.color);
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
    change() {
        if (csr) {
            this.color[0] = random(sr.value(), sr.value() + 50);
        }
        if (csg) {
            this.color[1] = random(sg.value(), sg.value() + 50);
        }
        if (csb) {
            this.color[2] = random(sb.value(), sb.value() + 50);
        }
    }
}

//variable
let d;
let arr;
let j = 1;
let max = 300;
let sr;
let sg;
let sb;
let psr
let csr;
let psg
let csg;
let psb
let csb;
let sback;



function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    //d = new particle(0, 0, 10, 235, 194, 0);
    arr = new Array()
    sr = createSlider(0, 195, 195);
    psr = 195;
    sg = createSlider(0, 195, 144);
    psg = 144;
    sb = createSlider(0, 195, 0);
    psb = 0;
    sr.position(0, windowHeight + 10);
    sg.position(0, windowHeight + 25);
    sb.position(0, windowHeight + 40);
    sback = createSlider(0,255,225);
    sback.position(150,windowHeight + 25);
    for (let i = 0; i < max; ++i) {
        arr.push(new particle(-1, -1, Math.random() * 20 + 20, random(sr.value(), sr.value() + 50), random(sg.value(), sg.value() + 50), random(sb.value(), sb.value() + 50)));
    }
}



function draw() {
    background(sback.value());
    //translate(windowWidth / 2, windowHeight / 2);
    //d.show();
    //d.update();
    if (sr.value() != psr) {
        csr = true;
        psr = sr.value();
    }
    if (sg.value() != psg) {
        csg = true;
        psg = sg.value();
    }
    if (sb.value() != psb) {
        csb = true;
        psb = sb.value();
    }
    for (let i = 0; i < j; ++i) {
        arr[i].show();
        arr[i].update();
    }
    for (let i = 0; i < max; ++i) {
        arr[i].change();
    }
    csr = false;
    csg = false;
    csb = false;

    if (j < max) j++;
}