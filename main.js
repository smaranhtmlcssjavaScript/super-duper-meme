function preload() {

}
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(500,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 160, 120, 320, 240);

    strokeWeight(10);
    stroke(235, 64, 52);
    line(0, 20, 620, 20);

    strokeWeight(10);
    stroke(235, 64, 52);
    line(20, 20, 20, 460);

    strokeWeight(10);
    stroke(235, 64, 52);
    line(620, 20, 620, 460);

    strokeWeight(10);
    stroke(235, 64, 52);
    line(620, 460, 20, 460);

    fill(0,128,0);
    stroke(0,128,0);
    circle(30,30,70);

    fill(0,128,0);
    stroke(0,128,0);
    circle(610,30,70);

    fill(0,128,0);
    stroke(0,128,0);
    circle(30,450,70);

    fill(0,128,0);
    stroke(0,128,0);
    circle(610,450,70);
}
function take_snapshot() {
    save('picture.png');
}