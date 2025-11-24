let baseH = 30;
let tOff = 0;
let recording = false;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  frameRate(24);
}

function draw() {
  let t = millis() * 0.001;
  let s = sin(t);
  let c = cos(t);
  background(baseH, 10, 95);

  let h1 = (t * 50) % 360;
  let h2 = (t * 70 + 120) % 360;

  fill(h1, 40, 100);
  rect(60, 40, 260, 260);

  fill(h2, 30, 100);
  rect(300, 80, 260, 220);

  fill(60, 5, 100, 20);
  rect(300, 220, 260, 80);

  let leftHue = (t * 80) % 360;
  let leftY = 170 + s * 15;
  let leftR = 130 + sin(t * 1.3) * 20;
  fill(leftHue, 40, 100);
  circle(190, leftY, leftR);

  let rightHue = (t * 90 + 200) % 360;
  let rightX = 430 + cos(t * 1.2) * 20;
  let rightR = 150 + sin(t * 0.9) * 15;
  fill(rightHue, 30, 100);
  circle(rightX, 190, rightR);

  let smallHue = (frameCount * 4) % 360;
  let sx = 470 + cos(t * 2.0) * 25;
  let sy = 80 + sin(t * 3.0) * 10;
  fill(smallHue, 50, 100);
  circle(sx, sy, 80 + sin(t * 2.0) * 6);

  stroke((t * 100) % 360, 20, 70);
  strokeWeight(2);
  let y1 = 350 + sin(t * 0.8) * 8;
  let y2 = 20 + cos(t * 0.8) * 8;
  line(-50, y1, width + 50, y2);

  noStroke();
  push();
  translate(180, 230);
  rotate(sin(t * 1.1) * 0.3);
  let sc = 1 + sin(t * 1.6) * 0.2;
  scale(sc);
  stroke((t * 60) % 360, 30, 80);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(-70, 30);
  vertex(-10, -40);
  vertex(40, 30);
  endShape(CLOSE);
  pop();
  noStroke();

  for (let i = 0; i < 6; i++) {
    let dh = (sin(t * 3 + i) * 180 + 180) % 360;
    fill(dh, 40, 100);
    let dy = sin(t * 4 + i * 0.5) * 6;
    circle(80 + i * 18, 340 + dy, 10 + sin(t * 3 + i) * 3);
  }

  for (let i = 0; i < 8; i++) {
    let bh = (frameCount * 5 + i * 40) % 360;
    fill(bh, 50, 100);
    let hBar = 20 + sin(t * 6 + i) * 8;
    rect(430 + i * 12, 20, 8, hBar);
  }
}

function mousePressed() {
  if (!recording) {
    recording = true;
    saveGif('my_abstract_10s', 10);
  }
}
