img = "";
status = "";
objects = [];
function preload(){
    img = loadImage("sponge.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded !");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error  , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    if(status != undefined){
        image(img ,0 , 0 , 640 , 420);
        for(var i = 0; i < objects.length; i++){
           document.getElementById("status").innerHTML = "Status : objects detected";
           fill(255 , 0 , 0 );
           percent = floor(objects[i].confidence * 100);
           document.getElementById("object").innerHTML = "Confidence : " + percent + "% " + " Object Detected : SPONGE";
           noFill();
           stroke(255, 0 , 0 );
           rect( 70 , 80 , 520 , 280);
           console.log(objects[i].label+" " + percent + "%" + " Object FOOTBALL" + objects[i].x + 15 , objects[i].y + 15    )
        }
      }
}
