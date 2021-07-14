let slider1
let slider2
function setup() 
{
  createCanvas(windowWidth, windowWidth);

  /* let student=['wwq','lyc','hwj','czm']
  slider1 = createSlider(0,255,100);
  slider1.position(10,10);
  slider1.style('width','80px');
  slider2 =createSlider(5,15,5);
  slider2.position(10,25);
  slider2.style('width','80px'); */
  /* create2darray(x,y) */

/*   tanslate(windowWidth/2,windowHeight/2);
  triangle(0-5,0+10,0,0-10,0+5,0+10,); */


/*   let a=10;
  var b=a+1;
  const c=100;
  if(a==0)
  {

  }
  
  for (let i=0;i>10;++i)
  {

  }
  i=0
  while(i!=1)
  {

  } */
}

function draw() {

  
  
  
/*   background(220);
  translate(10, 5);
  fill(255);
  rect(0, 0, 55, 55); */

  //colorMode()
  /* strokeWeight(5)
  for(let i=0;i<100;++i)
  {
    stroke(random(255),random(255),random(255));
    point(random(windowWidth),random(0));
  } */



}
function mouseDragged()
{
 /*  stroke(slider1.value());
  strokeWeight(slider2.value());
  point(mouseX,mouseY);
 */
/*   a=mouseX-0/2;
  b=mouseY-0/2;
  tan=atan(a/b)
  fill(0);
  rotate(tan);
  triangle(0-5,0/2+10,0/2,0/2-10,0/2+5,0/2+10,); */
}

/* function mousePressed()
{

}

function keyPressed()
{

} */

function stairs(n)
{
  const a='#'
  var b=a
  if(n<=0)
  {

  }
  else{
    for(let i=0;i<n;++i)
    {
      print(b)
      b=b+a
    }
  }
}

function create2darray(x,y)
{
  let arr=new Array[x];
  for(let i=0;i<x;i++)
  {
    arr[i]=new Array[y];
  }
}

class Person
{
  constructor(age,salary)
  {
    this.age=age;
    this.salary=salary;
  }
  printname()
  {
    print(this.age);
  }
}