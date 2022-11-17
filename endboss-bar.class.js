class EndbossBar extends DrawableObject {

    IMAGES_BAR = [
        'img/7_statusbars/2_statusbar_endboss/blue.png',
        'img/7_statusbars/2_statusbar_endboss/green.png',
        'img/7_statusbars/2_statusbar_endboss/orange.png'
    ];

    endbossLife = 100;


    constructor() {
        super().loadImages(this.IMAGES_BAR);
        this.height = 60;
        this.width = 200;
        this.x = 480;
        this.y = 0;
        this.setLife();
    }


    loseEnergy() {
        this.endbossLife -= 30;
    }


    setLife() {
        let path = this.IMAGES_BAR[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }


     /**
     * Loads the right picture to the coinbar in relation to the number of coins.
     */
    resolveImageIndex() {
        if (this.endbossLife == 100) 
            return 0;
        if (this.endbossLife < 100 && this.endbossLife >39) 
            return 1;
        if (this.endbossLife < 39) 
            return 2;
    }
    
}