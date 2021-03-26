function setup(){
    createCanvas(1000,1000);
    background(0);
    

    
    noFill();
    stroke(255)
    for (i=0;i<8;i++){
        var ellipseSize = 200+15*i;
        strokeWeight(0.5+i)
        ellipse(500,500,ellipseSize,ellipseSize);

    }

    for (i=0;i<40;i++){
        strokeWeight(0.01+i*0.2)
        ellipse(500,500,700-10*i,700-10*i)
    }
}

function mousePressed(){
    saveCanvas("Osketch-4","png")
}