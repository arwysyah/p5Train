function createAngel() {
  var angle = 0;
  //   var x = map(cos(angle), -1, 1, 0, width / 2);
  // var y = map(sin(angle), -1, 1, 0, height / 2);
  var x = map(cos(angle), -1, 1, 0, width);
  var y = map(sin(angle), -1, 1, 0, height);
  line(windowWidth / 2, windowHeight / 2, x, y);
  ellipse(x, y, 200, 200);
  angle += 0.02;
  return angle;
}
