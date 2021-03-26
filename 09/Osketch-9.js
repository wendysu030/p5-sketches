let img3;

function preload(){
    img3=loadImage('assets/img3.png')
}

function setup(){
    createCanvas(1000,1000);
    background(255);

    for (i=0;i<height;i=i+20){
        for(j=0;j<width;j=j+9){
            pixelColor=img3.get(j,i);
            fill(pixelColor);
            noStroke();
            randomSize=random(2,90)
            ellipse(j,i,randomSize,randomSize)
        }
    }



}

function mousePressed(){
    saveCanvas("Osketch-9","png")
}