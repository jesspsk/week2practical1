function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255)
    noStroke();
    fill(0,0,255);
    rect(0,0,width/2,height);
    fill(100,100,255);
    rect(width/2, 0, width/2, height/2);
    fill(10, 10, 50);
    rect(width/2, height/2, width/4, height/2);
    fill(150,50,150);
    rect(0.75*width, height/2, width/4, height/4)
    fill(255,0,150);
    rect(0.75*width, 0.75*height, width/4, height/4)

}