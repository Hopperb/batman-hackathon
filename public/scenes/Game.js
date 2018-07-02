'use strict';

var scene = new Phaser.scene

class scene extends Phaser.Scene {

    constructor() {
        super('scene');
    }

    preload() {
        this.load.image('backgroud', './assets/imgs/background.png');
        this.load.image('foreground', './assets/imgs/foreground.png');
    }

    create() {

        // Get the window sizes
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        // Find the center of the top space
        let topBackgroundXOrigin = windowWidth / 2;
        let topBackgroundYOrigin = (windowHeight / 5) * 1.5;
        let topBackgroundHeight = (windowHeight / 5) * 3;
        
        // Base width and height of the images
        let imageBaseWidth = 2822;
        let imageBaseHeight = 384;
        let heightRatio = topBackgroundHeight / imageBaseHeight;

        // Add the sky image at the right location and resize it to take all the space, no scaling needed
        let skyImage = this.add.image(topBackgroundXOrigin, topBackgroundYOrigin, 'background');
        skyImage.setDisplaySize(windowWidth, topBackgroundHeight);

        // Add each layer one by one
        this.city = this.add.tileSprite(topBackgroundXOrigin, topBackgroundYOrigin, imageBaseWidth, imageBaseHeight, 'foreground');
        this.city.setScale(heightRatio);
    }

    update() {
        this.city.tilePositionX += 0.05;
    }
}

module.exports = scene