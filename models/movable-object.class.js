class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 200;
    width = 100;

    loadImage(){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log('Moving right');
    }

    moveLeft(){
        console.log('moving left')
    }
}