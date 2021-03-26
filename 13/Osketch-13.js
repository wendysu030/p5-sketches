function setup(){
    createCanvas(1000,1000)

    frameRate(3)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-13.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

}

function draw(){
    background(205, 191, 219);
    translate(width/2,height/2);


    noFill()
    beginShape();
    for (let i=0;i<100; i+=0.1){
        stroke(random(100)+80, random(10)+20, 120);
        strokeWeight(random(10)+200)
        let xoff=map(cos(i),-1,1,0,2);
        let yoff=sin(i)+1;

        let r=map(noise(xoff,yoff),0,1,400,100);
        let x=r*cos(i);
        let y=r*sin(i);
        vertex(x,y);
    }
    endShape(CLOSE);
    
    



}

