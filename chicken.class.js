class Chicken extends MovableObject {

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    chickenIntervals = [];
    energy = 100;
    y = 360;
    height = 50;
    width = 50;
    imageDead = new Image();
    
    offset = {
        top: 10,
        bottom: 10,
        left: 5,
        right: 10,
    }

    deadSound = new Audio('audio/smalldead.mp3');


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.CHICKEN_DEAD);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.1 + Math.random() * 0.5
        this.animate();
    }

    /**
     * Animates the chicken by changing its position with random speed and showing walking animation.
     */
    animate() {
        this.chickenGo();
        this.chickenAnimation();       
    }
    

    chickenGo(){
        setInterval(() => {
            if (!this.isHurt()) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }


    chickenAnimation(){
         setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.CHICKEN_DEAD);
                if (soundOn == true)
                    this.deadSound.play();
                    this.deadSound.value = 0.1;
            }
            else 
                this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }

}

