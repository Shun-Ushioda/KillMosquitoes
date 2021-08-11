let alive;
let dead;
let spray;
let x1, x2, x3, x4, x5, x6, x7;
let y1, y2, y3, y4, y5, y6, y7;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

function setup()
{
  createCanvas(800, 800);
  alive = loadImage("data/bug_ka.png");
  dead = loadImage("data/ka_dead.png");
  spray = loadImage("data/spray_can.png");
  x1 = 0;
  x2 = 0;
  x3 = 0;
  x4 = 0;
  x5 = 0;
  x6 = 0;
  x7 = 0;

  y1 = int(random(50,height-50));
  y2 = int(random(50,height-50));
  y3 = int(random(50,height-50));
  y4 = int(random(50,height-50));
  y5 = int(random(50,height-50));
  y6 = int(random(50,height-50));
  y7 = int(random(50,height-50));
}

function draw()
{
  background(255);

textSize(30);
fill(0);
text("蚊を倒せ！",30,40);
  x1++;
  x2+=2;
  x3+=3;
  x4+=4;
  x5+=5;
  x6+=6;
  x7+=7;

  y1+=int(random(-10, 10));
  y2+=int(random(-10, 10));
  y3+=int(random(-10, 10));
  y4+=int(random(-10, 10));
  y5+=int(random(-10, 10));
  y6+=int(random(-10, 10));
  y7+=int(random(-10, 10));

  if (x1>width) x1=0;
  if (x2>width) x2=0;
  if (x3>width) x3=0;
  if (x4>width) x4=0;
  if (x5>width) x5=0;
  if (x6>width) x6=0;
  if (x7>width) x7=0;

  if (dist(x1, y1, mouseX-60, mouseY-40)<30)
  {
    count1++;
  }
  if (dist(x2, y2, mouseX-60, mouseY-40)<30)
  {
    count2++;
  }
  if (dist(x3, y3, mouseX-60, mouseY-40)<30)
  {
    count3++;
  }
  if (dist(x4, y4, mouseX-60, mouseY-40)<30)
  {
    count4++;
  }
  if (dist(x5, y5, mouseX-60, mouseY-40)<100)
  {
    count5++;
  }
  if (dist(x6, y6, mouseX-60, mouseY-40)<100)
  {
    count6++;
  }
  if (dist(x7, y7, mouseX-60, mouseY-40)<100)
  {
    count7++;
  }

  if (count1>20) image(dead, x1, y1); 
  else image(alive, x1, y1);

  if (count2>35) image(dead, x2, y2); 
  else image(alive, x2, y2);

  if (count3>30) image(dead, x3, y3);
  else image(alive, x3, y3);

  if (count4>40) image(dead, x4, y4);
  else image(alive, x4, y4);

  if (count5>150) image(dead, x5, y5);
  else image(alive, x5, y5);

  if (count6>100) image(dead, x6, y6);
  else image(alive, x6, y6);

  if (count7>200) image(dead, x7, y7);
  else image(alive, x7, y7);

  image(spray, mouseX-60, mouseY-40);
}

function mousePressed()
{
  if (dist(x1, y1, mouseX-60, mouseY-40)<100)
  {
    background(255, 0, 0);
  }
}