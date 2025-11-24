let x = 200;
let y = 280;

let blink = false;
let armAngle = 0;
let waving = false;
let waveFrame = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(255, 180, 60);

  // 배경 기둥
  noStroke();
  fill(150, 170, 50);
  rect(70, 0, 40, height);
  rect(180, 0, 40, height);
  rect(290, 0, 40, height);

  // 바닥선
  stroke(180);
  line(0, 345, width, 345);

  // 팔 흔들기 애니메이션
  if (waving) {
    waveFrame++;
    armAngle = sin(waveFrame * 0.2) * 30;
    if (waveFrame > 60) { // 약 2초 정도 흔들고 멈춤
      waving = false;
      armAngle = 0;
      waveFrame = 0;
    }
  }

  // 캐릭터
  push();
  translate(x, y);
  scale(1.4);

  // 머리카락 / 얼굴 외곽
  noStroke();
  fill(30, 20, 10);
  rect(-50, -115, 100, 140, 50);
  ellipse(0, -70, 105, 130);
  ellipse(-40, -20, 40, 70);
  ellipse(40, -20, 40, 70);

  // 얼굴 피부
  fill(255, 230, 210);
  ellipse(0, -70, 90, 95);

  // 귀
  fill(255, 230, 210);
  ellipse(-45, -70, 18, 25);
  ellipse(45, -70, 18, 25);

  // 귀 그림자
  fill(190);
  ellipse(-45, -58, 6, 6);
  ellipse(45, -58, 6, 6);

  // 볼터치
  noStroke();
  fill(255, 180, 180, 120);
  ellipse(-22, -55, 18, 12);
  ellipse(22, -55, 18, 12);

  // 눈썹
  stroke(40);
  strokeWeight(3);
  noFill();
  arc(-18, -90, 25, 10, PI + QUARTER_PI, TWO_PI);
  arc(18, -90, 25, 10, PI, PI + HALF_PI);

  // 눈 (깜빡임)
  noStroke();
  if (!blink) {
    fill(255);
    ellipse(-20, -70, 22, 16);
    ellipse(20, -70, 22, 16);
    fill(0);
    ellipse(-20, -70, 8, 8);
    ellipse(20, -70, 8, 8);
  } else {
    fill(0);
    rect(-30, -72, 20, 3);
    rect(10, -72, 20, 3);
  }

  // 코
  stroke(120, 80, 60);
  strokeWeight(2);
  line(0, -65, 0, -58);

  // 입
  noStroke();
  fill(230, 100, 120);
  arc(0, -45, 20, 10, 0, PI);

  // 옷
  drawClothes(0, 0);

  // 오른팔 (회전해서 흔들림)
  push();
  translate(40, 10);
  rotate(radians(armAngle));
  fill(255, 230, 210);
  rect(0, 0, 40, 12, 5);
  pop();

  // 왼팔 (고정)
  push();
  translate(-40, 10);
  fill(255, 230, 210);
  rect(-40, 0, 40, 12, 5);
  pop();

  pop(); // 캐릭터 끝
}

function drawClothes(cx, cy) {
  fill(205, 225, 255);
  rect(cx - 35, cy - 20, 70, 90, 10);

  stroke(180);
  strokeWeight(1);
  for (let i = cx - 30; i < cx + 40; i += 15) {
    line(i, cy - 20, i, cy + 70);
  }
  for (let j = cy - 10; j < cy + 70; j += 15) {
    line(cx - 35, j, cx + 35, j);
  }
  noStroke();
}

// 마우스 클릭 → 눈 깜빡
function mousePressed() {
  blink = true;
  setTimeout(() => (blink = false), 200);
}

// 키보드 입력
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
  } else if (key === " ") {
    waving = true;
    waveFrame = 0;
  }
}



