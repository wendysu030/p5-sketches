function setup() {
    createCanvas(1000, 1000)
    frameRate(20)
    background(0)
    fill(127)
    stroke(127)
    createLoop(1, {
        gif: true,
        gifFileName: "Osketch-14.gif",
        startLoop: 1,
        endLoop: 2
    })
    colorMode(RGB,1)


}

function draw() {
    background(0)



    translate(0, height / 2)
    const density = 0.03
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const z = animLoop.noise2D(x * density, y * density) * 0.5 + 0.5
            set(x, y, color(z, 1.5, 1))
        }
    }
    updatePixels()



    noFill()
    strokeWeight(400)
    ellipse(500,0,1000,1000)

    fill(255)
    strokeWeight(50)
    stroke(20,200,230)
    ellipse(500,0,100,200)
    
}