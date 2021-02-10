let img;
function preload() {
    img = loadImage('cowboy.png');
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('sketch-holder');
    //    image(img, 0, 0);
}

function draw() {
    let sizex = 80;
    let sizey = 80;
    if (mouseIsPressed) {
        sizex = 150;
        sizey = 150;
        tint(0, 255, 255);

    } else {
        sizex = 80;
        sizey = 80;
        noTint();
    }
    image(img, (mouseX-40), (mouseY-40), sizex, sizey);
}

    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }