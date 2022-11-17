
class SplashBottle extends MovableObject {

    SPLASH_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png'
    ];


    constructor() {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png');
        this.loadImages(this.SPLASH_BOTTLE);
        this.animateSplasch();

    }


    animateSplasch() {
        setInterval(() => {
            if (this.splash()) 
                this.playAnimation(this.SPLASH_BOTTLE);
        }, 10);
    }
}

