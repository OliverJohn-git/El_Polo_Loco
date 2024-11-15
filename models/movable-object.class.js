class MovableObject {
    x = 120;
    y = 240;
    img;
    height = 220;
    width = 400;
    speed = 0.15;
    speedY = 0;
    acceleration = 5;
    imageCache = {};
    otherDirection = false;

    applyGravity(){
        setInterval(()=>{
            if (this.isAboveGround()){                  //Gravity point jumps between 220 - 240
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        },1000/25)
    }

    isAboveGround(){
        return this.y < 225;
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    moveRight(){
        console.log('Moving right');
    }

    moveLeft(){
        setInterval(()=>{
            this.x -= this.speed;
        }, 1000/60);
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }
}