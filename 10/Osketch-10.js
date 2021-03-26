function setup() {
    createCanvas(1000, 1000)
    
    frameRate(10)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-7.gif",
            startLoop: 0,
            endLoop: 1
        }
    })
    animLoop.noiseFrequency(0.1)
    colorMode(HSB, 1, 1, 1)
    fill(127)
    background(0)
    
}

function draw() {
    fill(animLoop.progress, 0.5, 1)
    noStroke()
    translate(width / 2, height / 2)
    const radius=height/3
    const x = cos(animLoop.theta) * radius
    const y = sin(animLoop.theta) * radius

    ellipse(x, y, 200, 200)
}