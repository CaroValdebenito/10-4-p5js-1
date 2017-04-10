function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  noLoop();
}

function draw() {
  background(200);
    for (var x = 0; x < windowWidth; x+=10) {
      for (var y = 0; y < windowWidth; y+=10) {
      rect(x,y,5,5);
}
}
}
