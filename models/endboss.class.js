class Endboss extends MovableObject{
    y = 260
    height= 400;
    width= 400;
    path;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
        'img/4_enemie_boss_chicken/1_walk/G5.png',
        'img/4_enemie_boss_chicken/1_walk/G6.png',
        'img/4_enemie_boss_chicken/1_walk/G7.png',
        'img/4_enemie_boss_chicken/1_walk/G8.png',
        'img/4_enemie_boss_chicken/1_walk/G9.png',
        'img/4_enemie_boss_chicken/1_walk/G10.png',
        'img/4_enemie_boss_chicken/1_walk/G11.png',
        'img/4_enemie_boss_chicken/1_walk/G12.png',
    ];

    currentImage = 0;
    
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING);
        this.x = 700;
        this.animate()
    }   

    animate(){

        this.playAnimation(this.IMAGES_WALKING);
        // setInterval(() => {
        //     this.playAnimation(this.IMAGES_WALKING);
        // }, 1000/25)
    }
}