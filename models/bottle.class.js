class Bottle extends DrawableObject{
    IMAGES = [
        'img/6_salsa_bottle/salsa_bottle.png'
    ];

    offset = {
        top:    0,
        bottom: 0,
        left:   0,
        right:  0,
    }

    constructor() {
        super();
        this.loadImages(this.IMAGES);
    }
}