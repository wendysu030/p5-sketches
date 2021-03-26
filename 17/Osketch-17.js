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
            fileName: "Osketch-17.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

    textFont(FredokaOne);
    textSize(800);

    hiArray=FredokaOne.textToPoints("O",width/2,height/2,800);


}
function draw(){
    background(122,215,224)

    for (let i = 0; i<hiArray.length;i++){
        push();
        translate(hiArray[i].x-300,hiArray[i].y+250);
        stroke(random(255),random(135),155)
        strokeWeight(40)
        rect(-10,-10,100,100);
        pop();
    }


}