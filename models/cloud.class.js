class Cloud extends MovableObject {
    y = 0;
    width = 520;
    height = 720;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = 120 + Math.random() * 500 ;
        this.animate();
    }   


    animate() {
        this.moveLeft();
    }
}