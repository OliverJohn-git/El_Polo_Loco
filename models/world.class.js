class World {
    character = new Character();
    level = level1
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar(20, 0, "health", 100);
    coinBar = new StatusBar(20, 70, "coins", 0);
    bottleBar = new StatusBar(20, 140, "bottles", 0);
    world;
    gameOver

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    };
    
    setWorld(){
        this.character.world = this
    }

    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) =>{
               if( this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
               }
            });
        }, 200);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);
        
        let self = this;
        requestAnimationFrame(function() {
            self.draw()
        });
    };

    addObjectsToMap(objects){
        objects.forEach((o) =>{
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx)
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
    }

    flipImageBack(mo){
        mo.x = mo.x * -1
        this.ctx.restore();
    }
}