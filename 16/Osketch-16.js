let FredokaOne;
let hiArray;
function preload(){
    FredokaOne= loadFont('assets/FredokaOne.ttf')

}

function setup(){
    createCanvas(1000,1000);


    frameRate(10)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-16.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

    textFont(FredokaOne);
    textSize(600);
    // fillColor(252,246,155)
    hiArray=FredokaOne.textToPoints("O",width/2,height/2,600);


}
function draw(){
    background(252,220,201)
    // text("O",width/2-100,height/2);
    for (let i = 0; i<hiArray.length;i++){
        push();
        translate(hiArray[i].x-230,hiArray[i].y+180);
        stroke(252,random(255),155)
        strokeWeight(10)
        line(-10,-10,30,30);
        pop();
    }

        // ellipse(hiArray[i].x,hiArray[i].y,20,20)

}