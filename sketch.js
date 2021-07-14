function setup()
{
  createCanvas(windowWidth, windowWidth);
  fill(0);
  triangle(-10,20,0,-20,10,20); 
}

function draw()
{
  background(225);
  translate(windowWidth/2,windowHeight/2);
  a=mouseX-windowWidth/2;
  b=mouseY-windowHeight/2;
  tan=atan(b/a);
  if(keyIsPressed == true)
  {
  print(tan);
  }
  if(a>0)
  {
    rotate(tan+PI/2);
  }
  else
  {
    rotate(tan+PI*3/2);
  }
  fill(0);
  triangle(-10,20,0,-20,10,20); 
}
