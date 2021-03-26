function setup(){
    createCanvas(1000,1000);
    background(255);
    angleMode(DEGREES);


    noFill();
    strokeWeight(1);
    for (i=0;i<200;i++){
        push();
        translate(500,500);
        rotate(i+2);
        ellipse(0,0,100,500)
    pop()
    }

}

function draw(){

}

function mousePressed(){
    saveCanvas("Osketch-1","png")
}
