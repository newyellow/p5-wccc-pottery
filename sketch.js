//
// Weekly Creative Coding Challenge Topic 'Pottery'
//

// Check the challenge page if you would like to join:
// https://openprocessing.org/curation/78544 


let _backLayer;
let _midLayer;
let _frontLayer;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  _backLayer = createGraphics(width, height);
  _midLayer = createGraphics(width, height);
  _frontLayer = createGraphics(width, height);
  
  _backLayer.colorMode(HSB);
  _midLayer.colorMode(HSB);
  _frontLayer.colorMode(HSB);
  colorMode(HSB);

  _backLayer.background(0, 0, 92);

  let padding = 0.15 * min(width, height);

  // bg part
  let baseHeight = padding + 0.85 * (height - 2 * padding);

  let bgHeight = random(0.02, 0.2) * height;
  let xCount = width * dotDensity;

  for (let x = 0; x < xCount; x++) {
    let yDotCount = bgHeight * dotDensity * 0.6;

    for (let y = 0; y < yDotCount; y++) {
      let t = tan(random(TWO_PI));

      let nowX = x * (width / (xCount - 1));
      let nowY = baseHeight - bgHeight * t - 0.2 * height;

      _backLayer.stroke(200, 20, 80);
      _backLayer.circle(nowX, nowY, random(0, 2));
    }
  }
  UpdateLayers();


  let potCount = int(random(6, 18));
  let potWidth = (width - padding * 2) / potCount;

  for (let i = 0; i < potCount; i++) {
    let potX = padding + (i + 0.5) * potWidth;
    let potY = baseHeight;

    let potHeight = random(0.4, 2.0) * potWidth;
    let newPot = new PotData(potX, potY, potWidth / 2, potHeight);

    await drawPot(newPot);
  }
  UpdateLayers();
}

function UpdateLayers () {
  background(0, 0, 100);
  image(_backLayer, 0, 0);
  image(_midLayer, 0, 0);
  image(_frontLayer, 0, 0);
}
// async sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}