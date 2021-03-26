function setup() {
    createCanvas(1000, 1000)
    frameRate(30)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-11.gif",
            startLoop: 0,
            endLoop: 1
        }
    })
    animLoop.noiseFrequency(0.3)
    
    background(0)
   
}

function draw() {
    strokeWeight(animLoop.progress*5)
    translate(width /2 +50,height/2)
    const radius=height/3
    const x = cos(animLoop.theta) * radius
    const y = sin(animLoop.theta) * radius
    stroke(255)
    // angleMode(DEGREES);
    rotate(60)
    rect(x, y, 100,0)

}