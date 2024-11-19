class Coin extends DrawableObject{
    IMAGES = [
        'img/8_coin/coin_1.png'
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