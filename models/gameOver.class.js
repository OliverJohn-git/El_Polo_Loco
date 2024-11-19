class GameOver {
    constructor() {
        this.image = new Image();
        this.image.src = "img/9_intro_outro_screens/game_over/game over.png"; 
        this.width = 500;
        this.height = 300;
        this.x = 250;
        this.y = 150;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
