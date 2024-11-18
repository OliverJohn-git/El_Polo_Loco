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
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x <mo.x &&
            this.y < mo.y + mo.height
    }

    hit(){
        this.energy -=5; 
        console.log('hit')
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
}