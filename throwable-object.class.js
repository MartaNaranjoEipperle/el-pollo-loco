class ThrowableObject extends MovableObject {

    throwableObjectsIntervals = [];

    TROW_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    SPLASH_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png'
    ];

    BOTTLE_ONGROUND = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    world;
    energy = 5;
    bottleDirection;
    offset = {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
    };


    constructor(x, y, direction) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.TROW_BOTTLE);
        this.loadImages(this.BOTTLE_ONGROUND);
        this.loadImages(this.SPLASH_BOTTLE);
        this.x = x;
        this.y = y;
        this.bottleDirection = direction;
        this.width = 70;
        this.height = 90;
        this.trow();
    }

    /**
     * Checks in which direction the bottle needs to be throwed and thows the bottle.
     */
    trow() {
        this.SpeedY = 30;
        this.applyGravity();
        let id = setInterval(() => {
            if (this.isAboveGround()) {
                this.moveObject();
                this.playAnimation(this.TROW_BOTTLE);
            }
        }, 25);
        this.throwableObjectsIntervals.push(id);
    }


    moveObject() {
        if (this.bottleDirection) {
            this.x -= 18;
        } else {
            this.moveRightBottle()
        }
    }


    moveRightBottle() {
        this.x += 10;
    }


    bottleBreak() {
        this.throwableObjectsIntervals.forEach(clearInterval);
        this.playAnimation(this.SPLASH_BOTTLE);
        setTimeout(() => {
            this.x = -2000;
        }, 300);
    }

}
