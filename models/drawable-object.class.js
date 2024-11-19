class DrawableObject{
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 240;
    height = 220;
    width = 400;
    gameOver = null;

    offset = {
        top:    this.top,
        bottom: this.bottom,
        left:   this.left,
        right:  this.right,
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width );
    }
    
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof Character || this instanceof Endboss) {
          const xPos = this.x + this.offset.left;
          const yPos = this.y + this.offset.top;
          const width = this.width - this.offset.left - this.offset.right;
          const height = this.height - this.offset.top - this.offset.bottom;
    
          ctx.beginPath();
          ctx.lineWidth = '5';
          ctx.strokeStyle = 'red';
          ctx.rect(xPos, yPos, width, height);
          ctx.stroke();
        }
      }














}