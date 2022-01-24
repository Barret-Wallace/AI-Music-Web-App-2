function preload(){
VDiva = "VirtualDiva.mp3";
DMonkey = "DanceMonkey.mp3";
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(600,180);
    cam = createCapture(VIDEO);
    cam.hide();
}
function draw(){
    image(cam, 0, 0, canvas.width, canvas.height);
}
