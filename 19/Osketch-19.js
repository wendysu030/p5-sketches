let courgette;
let hiArray;
let r=0;
function preload(){
    courgette= loadFont('assets/Courgette-Regular.ttf')

}

function setup(){
    createCanvas(1000,1000);


    frameRate(10)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-19.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

    textFont(courgette);
    textSize(900);

    hiArray=courgette.textToPoints("O",width/2,height/2,800);


}
function draw(){
    background(56,103,144)

    for (let i = 0; i<hiArray.length;i++){
        push();
        translate(hiArray[i].x-300,hiArray[i].y+280);
        stroke(255)
        rotate(r);
        r++;
        strokeWeight(3)
        line(-100,-1,100,3);
        pop();
    }


}