noseX = 0;
noseY = 0;

function preload(){
    glasses_mustache = loadImage("https://i.postimg.cc/wxGyDT6c/glasses-nose-and-mustache-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(glasses_mustache, noseX - 55, noseY - 70, 120, 120);
}

function take_picture(){
    save('filterImage.png');
}

function modeLoaded(){
    console.log("PoseNet has been initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}