class Chicken extends MovableObject{
    y= 500;
    height= 60;
    width= 120;
    path;

    offset = {
        top:    10,
        bottom: -45,
        left:   0,
        right:  60,
    }

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
       'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    currentImage = 0;
    
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 250 + Math.random() * 500 ;
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 0.5

        this.animate();
    }   

    animate() {
        this.walkInterval = setInterval(() => {
          if (this.x <= -10) {
            this.x = Character.x + 400;
          }
          this.moveLeft();
        }, 1000 / 60);
    
        this.animationInterval = setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING);
        }, 200);
      }
    
      deadChicken() {
        clearInterval(this.walkInterval);
        clearInterval(this.animationInterval);
        this.playRandomAudio();
        this.loadImage(
          "assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"
        );
    }
}