function setup(){
    createCanvas(1000,1000);
    background(0);
    

    
    frameRate(10)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-6.gif",
            startLoop: 0,
            endLoop: 1
        }
    })

    animLoop.noiseFrequency(0.1)

}




function draw(){
   


    noFill();
    stroke(255)
    translate(width / 2, height / 2)
    const radius=height/10
    const x = cos(animLoop.theta) * radius
    const y = sin(animLoop.theta) * radius
   

    for (i=0;i<20;i++){
        strokeWeight(0.01+i*0.2)
        ellipse(x,y,70-10*i,70-10*i)
    }
}



function mousePressed(){
    saveCanvas("Osketch-6","png")
}