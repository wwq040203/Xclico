function setup(){
    createCanvas(windowWidth,windowHeight);
}
let size=7;
let hori=0;
let vert=0;
function draw(){
    background(0);
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
    for(let i=0;i<windowWidth;i+=size){
        for(let j=0;j<windowHeight;j+=size){
            let r=noise((hori+i)*0.005,(vert+j)*0.003);
            let g=noise((hori+i)*0.008,(vert+j)*0.006);
            let b=noise((hori+i)*0.012,(vert+j)*0.010);
            noStroke();
            fill(color((r)*115+140,(g)*115+140,(b)*25+200));
            square(i,j,size);
        }
    } 
}