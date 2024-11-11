class MovableObject {
    x = 120;
    y = 240;
    img;
    height = 220;
    width = 400;

    loadImage(path){
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