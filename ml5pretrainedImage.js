let mobileNet;
let puffin;

function modelReady() {
  console.log("model Ready");
}
function imageReady() {
  image(puffin, 0, 0, width, height);
  mobileNet.predict(puffin, gotResults);
}

function gotResults(error, res) {
  if (error) {
    console.log(error);
  } else {
    console.log(res);
    let label = res[0].label;
    let prob = res[0].confidence;
    createP(label);
    createP(prob);
  }
}
function setup() {
  createCanvas(500, 300);
  puffin = createImg("./images/ayam.png", imageReady);
  puffin.hide();
  background(0);

  mobileNet = ml5.imageClassifier("MobileNet", modelReady);
}
