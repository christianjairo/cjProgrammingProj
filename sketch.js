var sun;

var star = {
  x: 400,
  y: 400,
  r: 255,
  g: 255,
  b: 255
};

var diam= 200;

var planet1 = {
  x: 325,
  y: 200,
  diameter: 100
};

var planet2 = {
  x: 600,
  y: 625,
  diameter: 125
};

var planet3 = {
  x: 900,
  y: 400,
  diameter: 50
};

var r, g, b;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(0);
    
//star
  star.x = random(0, width);
  star.y = random(0, height);
  fill(star.r, star.g, star.b);
  ellipse(star.x, star.y, 5, 5);
    
//sun
  fill("#ffe100");
  sun = ellipse(200, 400, diam, diam);
    
//planet1
  fill(r,g,b);
  ellipse(planet1.x, planet1.y, planet1.diameter, planet1.diameter);
    
//planet2
  fill(r,g,b);
  ellipse(planet2.x, planet2.y, planet2.diameter, planet2.diameter);
    
//planet3
  fill(r, g, b);
  ellipse(planet3.x, planet3.y, planet3.diameter, planet3.diameter);
}

function mousePressed(planet1) {
  r= random(255);
  g= random(255);
  b= random(255);}

function mousePressed(planet2) {
  r= random(255);
  g= random(255);
  b= random(255);}

function mousePressed(planet3) {
  r= random(255);
  g= random(255);
  b= random(255);}  

function keyPressed(sun) {
  if(keyCode == UP_ARROW) {
  //sun
    diam+=5;
  } else if(keyCode == DOWN_ARROW) {
  //sun
  diam-=5;
  }
    
}