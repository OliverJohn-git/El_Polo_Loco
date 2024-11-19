class Coin extends DrawableObject{
    IMAGES = [
        'img/8_coin/coin_1.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
    }
}