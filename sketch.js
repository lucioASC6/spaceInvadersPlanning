let title_img, background_img, spaceship_img, enemySpaceship_img, laser_img;
let spaceshipXCor = 455;
let spaceshipYCor = 500;
let laserXCor = spaceshipXCor + 38;
let laserYCor = spaceshipYCor;
let laserSpeed = 10;

function preload() {
    title_img = loadImage('title.png');
    background_img = loadImage('spaceBackground.jpg');
    spaceship_img = loadImage('spaceship.png');
    enemySpaceship_img = loadImage('enemySpaceship.jpg');
    laser_img = loadImage('laser.png');
}

function setup() {
    createCanvas(1000, 600);
    // image(background_img, 0, 0);
    // background_img.resize(600, 600);
    // image(title_img, 10, 80);
}

// function keyPressed() {
//     if (keyCode === RETURN) {
//         draw();
//     }
// }

function draw() {
    image(background_img, 0, 0);
    background_img.resize(1000, 600);
    image(spaceship_img, spaceshipXCor, spaceshipYCor);
    spaceship_img.resize(90, 90);
    if (keyIsDown(LEFT_ARROW)) {
        spaceshipXCor -= 8;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        spaceshipXCor += 8;
    }
    if (keyIsDown(UP_ARROW)) {
        image(laser_img, spaceshipXCor + 38, laserYCor);
        laser_img.resize(15, 30);
        laserYCor -= laserSpeed;
    }
}