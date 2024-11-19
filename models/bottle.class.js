class Bottle extends DrawableObject{
    IMAGES = [
        'img/6_salsa_bottle/salsa_bottle.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
    }
}