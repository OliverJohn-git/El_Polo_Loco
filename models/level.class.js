class level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 18000

    constructor (enemies, clouds, backgroundObjects) {
        this.enemies = enemies
        this.clouds = clouds
        this.backgroundObjects = backgroundObjects
    }

    createBackgroundObjects() {
        const backgroundLayers = [
          "img/5_background/layers/air.png",
          "img/5_background/layers/3_third_layer/full.png",
          "img/5_background/layers/2_second_layer/full.png",
          "img/5_background/layers/1_first_layer/full.png",
        ];
    
        const repeats = 15;
        const layerWidth = 1440;
        for (let i = 0; i < repeats; i++) {
          backgroundLayers.forEach((layer) => {
            this.backgroundObjects.push(
              new BackgroundObject(layer, i * layerWidth)
            );
          });
        }
    }
}