function setup(){
    createCanvas(1000,1000)



}

function draw(){
    background(71, 11, 68);
    translate(width/2,height/2);


    noFill()
    beginShape();
    for (let i=0;i<100; i+=0.1){
        stroke(230, 154, 163);
        strokeWeight(5)
        let r=random(100,400);
        let x=r*cos(i);
        let y=r*sin(i);
        vertex(x,y);
    }
    endShape(CLOSE);
    noLoop()
    

    noFill()
    beginShape();
    for (let i=0;i<50; i+=0.1){
        stroke(255, 247, 248);
        strokeWeight(2)
        let r=random(100,200);
        let x=r*cos(i);
        let y=r*sin(i+7);
        vertex(x,y);
    }
    endShape(CLOSE);
    noLoop()

    noFill()
    beginShape();
    for (let i=0;i<50; i+=0.1){
        stroke(255, 247, 248);
        strokeWeight(2)
        let r=random(100,200);
        let x=r*cos(i+7);
        let y=r*sin(i+7);
        vertex(x,y);
    }
    endShape(CLOSE);
    noLoop()


}

function mousePressed(){
    saveCanvas("Osketch-12","png")
}