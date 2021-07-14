class Drop
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.a=0.001;
        this.v=3;
        this.length=40;
    }

    show()
    {
        // render graphics
        stroke(HSB)
        stroke('rgba(17, 177, 226,0.5)')
        strokeWeight(2.5);
        line(this.x,this.y,this.x,this.y+this.length);

    }

    update()
    {
        if(this.y>=windowHeight)
        {
          this.y=-20;
        }
        else
        {
          this.y += this.v;
          this.v += this.a;
        }
    }

}

let d
let arr

function setup() 
{
  createCanvas(windowWidth, windowWidth);
  d=new Drop(windowWidth/2,0);
  arr=new Array();
  for(let i=0;i<1000;++i)
  {
    arr.push(new Drop(random(windowWidth),random(windowHeight)));
  }

}
function draw()
{
  background(113, 208, 236);
  d.show();
  d.update();
  for(let i=0;i<1000;++i)
  {
    arr[i].show()
    arr[i].update()
  }
}