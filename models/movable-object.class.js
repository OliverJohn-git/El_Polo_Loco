class MovableObject {
    x = 120;
    y = 400;
    img;

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