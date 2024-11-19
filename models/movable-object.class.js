class MovableObject extends DrawableObject {
   
    speed = 0.15;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    
    
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
        let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    isColliding(mo){
        return  this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    hit(){
        this.energy -=5; 
        if (this.energy < 0) {
            this.energy = 0;
        } else{
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit
        timepassed = timepassed /1000;
        return timepassed < 1
    }

    isDead(){
        return this.energy ==0;
    }

    deadChicken(character, chicken) {
        if (character.isColliding(chicken)) {
            chicken.loadImage(chicken.IMAGES_DEAD[0]);
            chicken.speed = 0;
            chicken.y += 15;
        }
    }
}