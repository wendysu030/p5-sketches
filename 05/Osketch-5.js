let img01;

function preload(){
    img01=loadImage('assets/img01.png')
}

function setup(){
    createCanvas(1000,1000);
    background(255);

    for (i=0;i<height;i=i+50){
        for(j=0;j<width;j=j+50){
            pixelColor=img01.get(j,i);
            fill(pixelColor);
            stroke(255);
            strokeWeight(10)
            randomSize=random(80,50)
            ellipse(j,i,randomSize,randomSize)
        }
    }



}

function mousePressed(){
    saveCanvas("Osketch-5","png")
}