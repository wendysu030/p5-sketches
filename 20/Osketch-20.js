let angle=0;

function setup(){
    createCanvas(1000,1000,WEBGL)

    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-20.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

}

function draw(){
    background(125, 125, 125);

    rectMode(CENTER);
    noStroke();
    normalMaterial()
    // fill(237, 129, 66);
    rotateY(millis() / 1000);
    torus(250, 50);






}