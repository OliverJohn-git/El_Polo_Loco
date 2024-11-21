class StatusBar extends DrawableObject{
    
    IMAGES = {
        "health":[
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
    ],
    "coins":[
      'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ],
    "bottles":[
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ]
};
    selectedBar;
    percentage;
    selectedImage = 6;
    height = 350;
    width = 100;

    constructor(x, y, selectedBar, percentage){
        super();
        this.loadImages(this.IMAGES.health);
        this.loadImages(this.IMAGES.coins);
        this.loadImages(this.IMAGES.bottles);
        this.x = x;
        this.y = y;
        this.selectedBar = selectedBar
        this.setPercentage(percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.selectedBar][this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}