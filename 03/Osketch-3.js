function setup(){
    createCanvas(1000,1000);
    background(255);
    angleMode(DEGREES);


    noFill();
    strokeWeight(1);
    for (i=0;i<100;i++){
        push();
        translate(550,470);
        rotate(i);
        ellipse(i+50,i+100,100,300)
    pop()
    }

    for (i=0;i<100;i++){
        push();
        translate(550,530);
        rotate(i+60);
        ellipse(i+50,i+100,100,300)
    pop()
    }

    for (i=0;i<100;i++){
        push();
        translate(500,560);
        rotate(i+120);
        ellipse(i+50,i+100,100,300)
    pop()
    }
    for (i=0;i<100;i++){
        push();
        translate(450,530);
        rotate(i+180);
        ellipse(i+50,i+100,100,300)
    pop()
    }
    for (i=0;i<100;i++){
        push();
        translate(450,470);
        rotate(i+240);
        ellipse(i+50,i+100,100,300)
    pop()
    }
    for (i=0;i<100;i++){
        push();
        translate(500,440);
        rotate(i+300);
        ellipse(i+50,i+100,100,300)
    pop()
    }




}

function draw(){

}

function mousePressed(){
    saveCanvas("Osketch-3","png")
}