let mobileNet;
let video;

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
    let label = res[0].label;
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    mobileNet.predict(gotResults);
  }
}
function setup() {
  createCanvas(500, 400);
  video = createCapture(VIDEO, videoIsReady);
  background(0);
  video.hide();
  mobileNet = ml5.imageClassifier("MobileNet", video, videoIsReady);
}

function draw() {
  image(video, 0, 0, width, height);
}
