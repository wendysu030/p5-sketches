function setup(){
    createCanvas(1000,1000)
    background(255);
    angleMode(DEGREES);

    frameRate(10)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-8.gif",
            startLoop: 0,
            endLoop: 2
        }
    })

}

function draw(){
    noFill();
    strokeWeight(1);

    for (i=0;i<800;i++){
        push();
        translate(400,600);
        rotate(random(200));
        rect(random(200),random(200),80,50)
    pop()
    }


    for (i=0;i<800;i++){
        push();
        translate(600,400);
        rotate(180+random(200));
        rect(random(200),random(200),80,50)
    pop()
    }

    for (i=0;i<800;i++){
        push();
        translate(350,350);
        rotate(90+random(200));
        rect(random(100),random(100),50,30)
    pop()
    }

    for (i=0;i<800;i++){
        push();
        translate(650,650);
        rotate(270+random(200));
        rect(random(100),random(100),50,30)
    pop()
    }
    
}