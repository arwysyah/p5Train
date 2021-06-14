let mobileNet;
let video;
var label;

function modelReady() {
  console.log("model Ready");
}
function videoIsReady() {
  console.log("run");
  // image(video, 0, 0, width, height);
  mobileNet.predict(gotResults);
}

function gotResults(error, res) {
  if (error) {
    console.log(error);
  } else {
    console.log(res);
    label = res[0].label;

    mobileNet.predict(gotResults);
  }
}
function setup() {
  createCanvas(640, 500);
  video = createCapture(VIDEO);

  video.hide();
  background(0);
  mobileNet = ml5.imageClassifier("MobileNet", video, videoIsReady);
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(18);
  text(label, 10, height - 5);
}
