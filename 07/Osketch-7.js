let img02;

function preload(){
    img02=loadImage('assets/img02.png')
}

function setup(){
    createCanvas(1000,1000);
    background(0);

 


}

function draw(){
    for (i=0;i<height;i=i+10){
        for(j=0;j<width;j=j+10){
            pixelColor=img02.get(j,i);
            fill(pixelColor);
            stroke(255);
            strokeWeight(0)
            randomSize=random(11,1)
            rect(j,i,randomSize,randomSize)
        }
    }
}
function mousePressed(){
    saveCanvas("Osketch-7","png")
}
