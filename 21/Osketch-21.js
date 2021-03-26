let detailY;

function setup(){
    createCanvas(1000,1000,WEBGL)

    detailY = createSlider(3, 16, 3);
    detailY.position(10, height + 5);
    detailY.style('width', '80px');

    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-21.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

}

function draw(){

    pointLight(100,100,15,-400,-200,700)
    pointLight(250,200,100,700,500,800)
    pointLight(230,200,200,800,-300,500)
    background(250, 169, 102);

    rectMode(CENTER);
    noStroke();
    // normalMaterial(255)
    // fill(237, 129, 66);
    rotate(45)
    rotateX(millis() / 500);
    torus(270, 100,200,detailY.value());






}