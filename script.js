var x = 0;
var y = 0;
function preload(){
    moustach = loadImage("https://i.postimg.cc/VLLVRCTQ/Moustache-PNG-Clipart.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}
function modelLoaded(){
    console.log("model Loaded");
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(moustach, x, y, 50, 50);
}
function getPoses(results){
    if (results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x - 25;
        y = results[0].pose.nose.y - 10;
    }
}
function take_SnapShot(){
    save("moustach.png")
}