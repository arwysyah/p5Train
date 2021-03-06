var song;
var amp;
const canvas = 300;
var mic;
function preload() {
  song = loadSound("bruno_mars.mp3");
}
var isPlay = false;
function setup() {
  createCanvas(canvas, canvas);
  slider = createSlider(1, 0, 1, 0.01);
  mic = new p5.AudioIn();
  mic.start();
  button = createButton(getName());
  button.position(0, 0);
}

function getName() {
  const buttonName = song.isPlaying() === false ? "Play" : "Stop";
  return buttonName;
}
function getBackGround() {
  isPlay ? background(12) : background(0, 220, 0);
}

function draw() {
  getBackGround();
  song.setVolume(slider.value());

  let vol = mic.getLevel();
  console.log(vol);
  ellipse(300 / 2, 150, canvas, vol * canvas);
}
