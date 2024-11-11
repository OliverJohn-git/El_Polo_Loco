class BackgroundObject extends MovableObject {

    height = 1020;
    width = 760;
    constructor(imagePath, x, ){
        super().loadImage(imagePath);
        this.y = 980 - this.height;
        this.x = x;
    }
}