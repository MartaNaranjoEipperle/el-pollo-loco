class CoinBar extends DrawableObject {

    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ]

    coinBank = 0;


    constructor() {
        super().loadImages(this.IMAGES_COIN);
        this.height = 60;
        this.width = 200;
        this.x = 20;
        this.y = 100;
        this.setCoinBar();
        this.takeCoin();
    }


    takeCoin() {
        this.coinBank += 1;
        if (this.coinBank > 10) 
            this.coinBank = 10;
    }


    setCoinBar() {
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }

    /**
     * Loads the right picture to the coinbar in relation to the number of coins.
     */
    resolveImageIndex() {
        if (this.coinBank == 10) {
            return 5;
        } else if (this.coinBank > 8) {
            return 4;
        } else if (this.coinBank > 6) {
            return 3;
        } else if (this.coinBank > 4) {
            return 2;
        } else if (this.coinBank > 2) {
            return 1;
        } else {
            return 0;
        }
    }
}