function preload() {
    video = createCapture(VIDEO);
    video.hide();
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video.size(500, 400);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("object_status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(video, 0, 0, 500, 400);
}