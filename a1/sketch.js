function setup() {
  createCanvas(600, 400);
  noStroke();
  background("#F3F2D9"); // 배경 크림색
}

// 색 참고:
// 배경: #F3F2D9
// 왼쪽 분홍: #F5C8C9
// 오른쪽 초록: #B9F4AC
// 왼 파란 원: #C3D6E0
// 오른쪽 큰 원: #DDECEC
// 오른쪽 위 분홍 원: #F7C8D0
// 아래 노란 점: #F7F5CB
// 직사각형 바(위쪽): #C1DCE7
// 대각선: #BABABA
// 삼각형: #AAA9A9

function draw() {
  background("#F3F2D9");

  // 왼쪽 분홍 사각형
  fill("#F5C8C9");
  rect(60, 40, 260, 260);

  // 오른쪽 초록 사각형
  fill("#B9F4AC");
  rect(300, 80, 260, 220);

  // 아래 옅은 직사각형
  fill("rgba(255,255,255,0.4)");
  rect(300, 220, 260, 80);

  // 왼쪽 큰 파란 원
  fill("#C3D6E0");
  circle(190, 170, 130);

  // 오른쪽 큰 민트 원
  fill("#DDECEC");
  circle(430, 190, 150);

  // 오른쪽 위 작은 분홍 원
  fill("#F7C8D0");
  circle(470, 80, 80);

  // 위쪽 작은 바들
  fill("#C1DCE7");
  for (let i = 0; i < 8; i++) {
    rect(430 + i * 12, 20, 8, 20);
  }

  // 대각선
  stroke("#BABABA");
  strokeWeight(2);
  line(0, 360, 600, 20);
  noStroke();

  // 삼각형
  stroke("#AAA9A9");
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(120, 260);
  vertex(180, 200);
  vertex(240, 260);
  endShape(CLOSE);
  noStroke();

  // 아래 작은 노란 점 6개
  fill("#EDE59A"); // 배경보다 조금 더 진한 노랑
  for (let i = 0; i < 6; i++) {
    circle(80 + i * 18, 360, 10); // y값을 360으로 조금 더 아래
  }


  noLoop(); // 정적 이미지라 draw 1번만 실행
}
