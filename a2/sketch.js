function setup() {
  createCanvas(400, 400);
  frameRate(30);
  noLoop();  // 정적 이미지: draw() 한 번만 실행
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

  // 캐릭터 기본 위치
  let x = 200;
  let y = 280;

  push();
  translate(x, y);
  scale(1.4);

  // 머리카락/얼굴 외곽
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

  // 눈 (정적: 깜박임 없음)
  noStroke();
  fill(255);
  ellipse(-20, -70, 22, 16);
  ellipse(20, -70, 22, 16);

  // 눈동자
  fill(0);
  ellipse(-20, -70, 8, 8);
  ellipse(20, -70, 8, 8);

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

  // 오른팔 (정적: waving 없음)
  push();
  translate(40, 10);
  rotate(radians(0));
  fill(255, 230, 210);
  rect(0, 0, 40, 12, 5);
  pop();

  // 왼팔
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


