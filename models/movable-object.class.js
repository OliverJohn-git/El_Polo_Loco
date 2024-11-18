class MovableObject {
    x = 120;
    y = 240;
    img;
    height = 220;
    width = 400;
    speed = 0.15;
    speedY = 0;
    acceleration = 1;
    imageCache = {};
    otherDirection = false;

    applyGravity(){
        setInterval(()=>{
            if (this.isAboveGround() || this.speedY > 0) {                  //Gravity point jumps between 220 - 240
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        },1000/25)
    }

    isAboveGround(){
        return this.y < 230;
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
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    jump(){
        this.speedY = 30;
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width );
    }

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Chicken ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.width, this.y, this.height)
            ctx.stroke();
        }
    }

    isColliding(mo){
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x <mo.x &&
            this.y < mo.y + mo.height
    }

}