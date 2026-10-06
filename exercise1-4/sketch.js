function setup(){
    createCanvas(600,600);
}

function draw(){
    background(0);
    fill(255,100,255);
    rectMode(CENTER);
    rect(300,300, (mouseX-width/2)*2, (mouseY-height/2)*2)
}