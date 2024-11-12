class MovableObject {
    x = 120;
    y = 240;
    img;
    height = 220;
    width = 400;
    speed = 0.15;
    imageCache = {};

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
}