
function setup(){
    createCanvas(1000,1000,WEBGL);


    frameRate(10)
    createLoop({
        gif: {
            options: { quality: 5 },
            fileName: "Osketch-15.gif",
            startLoop: 1,
            endLoop: 2
        }
    })

    angleMode(DEGREES)



}
function draw(){
    background(0)

    rotateX(40)

    noFill()
    
    strokeWeight(50)

    translate(0, -100)
    for (let i = 0; i<5;i++){

        var r=map(sin(frameCount/2),-1,1,100,200)
        var g=map(i,0,20,100,200)
        var b=map(cos(frameCount),-1,1,200,100)
        stroke(r,g,b)

        beginShape()
        for (var j=0;j<360;j+=1){
        var rad = i*50+200
        var x=rad*cos(j)
        var y=rad*sin(j)
        var z=sin(frameCount*20+i*10)*50

        vertex(x,y,z)
        }
        endShape(CLOSE)
    }
    



}