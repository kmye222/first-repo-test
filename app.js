//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function Brooch(x,y){
  stroke(128,0,128,255);
  fill(255,228,225,255);
  rect(x, y, 70, 70);

  fill(245, 255, 250, 255);
  ellipse(x+29, y+14.5, 10, 10);
  ellipse(x+19, y+22, 10, 10);
  ellipse(x+42, y+16, 10, 10);
  ellipse(x+50, y+25, 10, 10);
  ellipse(x+53, y+36, 10, 10);
  ellipse(x+50, y+47, 10, 10);
  ellipse(x+41, y+55, 10, 10);
  ellipse(x+28.5, y+55, 10, 10);
  ellipse(x+18.5, y+47, 10, 10);
  ellipse(x+15, y+35, 10, 10);

  fill(128, 0, 128, 255);
  rect(x, y, 10, 10);
  rect(x+60, y, 10, 10);
  rect(x+60, y+60, 10, 10);
  rect(x, y+60, 10, 10);

  fill(128, 0, 128, 255);
  ellipse(x+34,y+35, 25, 30);
}

function setup() {
  createCanvas(900,900);
  background(255,192,203,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){
    for(var y=0;y<8;y++){
      Brooch(50+x*100,50+y*100);
      console.log("x:"+x+" y:"+y);
    }
  }
}
