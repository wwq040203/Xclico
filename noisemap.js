function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    debugMode();
    for (let i = 0; i < 5; ++i) {
        off[i] = random() * 10;
    }
    for (let i = 0; i < 5; ++i) {
        noisescale[i] = random(0.01, 0.001);
    }
    weight=2//int(random(0,5));
}

let size = 10;
let hori = 0;
let vert = 0;
let off = new Array()
let noisescale = new Array()
let weight;
function draw() {
    background(225);
    orbitControl();
    //noStroke();
    translate(-width/2, -height/2);
    if (keyIsDown(LEFT_ARROW)) {
        hori -= size * 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        hori += size * 3;
    }
    if (keyIsDown(UP_ARROW)) {
        vert -= size * 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        vert += size * 3;
    }
    for (let i = 0; i < height; i += size) {
        beginShape(TRIANGLE_STRIP);
        for (let j = 0; j < width; j += size) {
            let val = noise((i+vert) * 0.007, (j+hori) * 0.007) * weight;
            let val1 = noise((i + size + vert) * 0.007, (j+hori) * 0.007) * weight;
            for (let z = 0; z < 5; ++z) {
                val += noise((i + off[z] + vert) * noisescale[z], (j + off[z] + hori) * noisescale[z]);
                val1 += noise((i + off[z] + size+ vert) * noisescale[z], (j + off[z] + hori) * noisescale[z]);
            }
            val=val/(5+weight);
            val1=val1/(5+weight);
            val = map(val,0,1,0,200,true)-75;
            val1 = map(val1,0,1,0,200,true)-75;
            if(val<=20){
                fill(0,0,255);
                val=20;
            }
            if(val>20 && val<27){
                fill(255,255,0);
            }
            if(val>=27 && val<50)
            {
                fill(0,255,0);
            }
            if(val>=50)
            {
                fill(0,200,0);
            }
            vertex(j, i, val);
            if(val1<=20){
                fill(0,0,255);
                val1=20;
            }
            if(val1>20 && val1<27){
                fill(255,255,0);
            }
            if(val1>=27 && val1<50)
            {
                fill(0,255,0);
            }
            if(val1>=50)
            {
                fill(0,200,0);
            }
            vertex(j, i + size, val1);
        }
        endShape();
    }
}