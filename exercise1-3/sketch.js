function setup(){
    createCanvas(500,500);
}

function draw(){
    background(255);
    fill(150,0,205)
    rectMode(CENTER);
    square(mouseX, mouseY, 100);
    square(mouseX-100, mouseY-100, 100);
    rectMode(CORNER);
    square(mouseX+50, mouseY+50, 100);
}