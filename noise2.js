function setup(){
    createCanvas(windowWidth, windowHeight);
    for(let i=0;i<5;++i){
        off[i]=random()*10;
    }
    for(let i=0;i<5;++i){
        noisescale[i]=random(0.01,0.001);
    }
}

let size=1;
let hori=0;
let vert=0;
let off=new Array()
let noisescale=new Array()



function draw(){
    background('rgb(7, 206, 244)');
    if(keyIsDown(LEFT_ARROW)){
        hori-=size*3;
    }
    if(keyIsDown(RIGHT_ARROW)){
        hori+=size*3;
    }
    if(keyIsDown(UP_ARROW)){
        vert-=size*3;
    }
    if(keyIsDown(DOWN_ARROW)){
        vert+=size*3;
    }
    for(let i=0;i<windowWidth/2;i+=size){
        let val=noise((i+hori)*0.007);
        val=val*500+100;
        noStroke();
        fill(color(40, 180, 99));
        rect(i, windowHeight-val-vert, size, val+vert);
    }
    stroke(0);
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
    for(let i=0;i<windowWidth/2;i+=size){
        let val=noise((i+hori)*0.007)*1;
        for(let j=0;j<5;++j){
            val+=noise((i+off[j]+hori)*noisescale[j]);
        }
        val=val/6;
        val=val*500+100;
        noStroke();
        fill(color(40, 180, 99));
        rect(i+windowWidth/2, windowHeight-val-vert, size, val+vert);
    }
}