
function setup(){
    createCanvas(1000,1000);
    background(255);
    angleMode(DEGREES);

    
}

function draw(){
    ellipse(mouseX,mouseY,50,50);
    ellipse(mouseX+20,mouseY+20,30,30);
    ellipse(mouseX+10,mouseY-10,20,20)
}

function mousePressed(){
    saveCanvas("Osketch-2","png")
}