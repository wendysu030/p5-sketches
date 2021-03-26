

function setup(){
    createCanvas(1000,1000,WEBGL)

    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-18.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

}

function draw(){
    background(11, 36, 15);


    for(i=0;i<20;i++){
    
        //pointLight
        rectMode(CENTER);
        stroke(123, 171, 224);
        strokeWeight(0.5)
        noFill()
        rotate(360)
    
        torus(200, 50);
    
    }
    
    for(i=0;i<20;i++){
    
        //pointLight
        rectMode(CENTER);
        stroke(186, 245, 238);
        strokeWeight(0.2)
        noFill()
        rotate(360)
    
        torus(300, 70);
    
    }

    for(i=0;i<20;i++){
    
    //pointLight
    rectMode(CENTER);
    stroke(255);
    strokeWeight(random(1)+0.1)
    noFill()
    rotate(random(10))

    torus(340, 180);

    }




}