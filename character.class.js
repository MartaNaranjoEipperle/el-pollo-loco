class Character extends MovableObject {


    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_STAY_LONG = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ]

    IMAGES_STAY = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png'
    ]

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGE_GAMEOVER = [
        'img/9_intro_outro_screens/game_over/oh no you lost!.png'
    ];

    world;
    speed = 5;
    x = 10;
    y = 180;
    lastTime;
    hadGo = false;

    offset = {
        top: 120,
        bottom: 14,
        left: 40,
        right: 40,
    };

    gameOverSound = new Audio('audio/gameOver.mp3');


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_STAY_LONG);
        this.loadImages(this.IMAGES_STAY);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGE_GAMEOVER);
        this.applyGravity();
        this.animate();
    }


    /**
     * Animates characters position in relation to player input.
     * Sycronizes picture animation in relation to his movements, health status and actions.
     */
    animate() {
        this.moveOption();

        let i = 0
        setStopableInterval(() => {
            if (i < 5 && !this.isAboveGround())
                this.playAnimation(this.IMAGES_STAY_LONG);
            else if (!this.isAboveGround()) {
                this.playAnimation(this.IMAGES_STAY);
            }
            i++;
            if (this.world.character.x < 5) {
                i = 0;
                this.hadGo = true;
            }
        }, 150);
        this.goOption();
        this.actionOption();
        this.hurtOption();
    }

    moveOption() {
        setStopableInterval(() => {
            this.characterMove();
        }, 1000 / 80);
    }

    goOption() {
        setStopableInterval(() => {
            this.characterGo();
        }, 150);
    }

    actionOption() {
        setStopableInterval(() => {
            this.characterInAction();
        }, 300);
    }

    hurtOption(){
        setStopableInterval(() => {
            this.characterHurt();
        }, 10);
    }


    characterMove() {
        if (this.checkMoveRight()) {
            this.otherDirection = false;
            this.moveRight();
            this.otherDirection = false;
        }
        if (this.checkMoveLeft()) {
            this.otherDirection = true;
            this.moveLeft();
            this.otherDirection = true;
        }
        if (this.checkJump()) {
            this.jump();
        }
        this.world.camera_x = -this.x + 60;
    }

    checkMoveRight(){
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x
    }

    checkMoveLeft(){
        return this.world.keyboard.LEFT && this.x > -100
    }

    checkJump(){
        return this.world.keyboard.UP && !this.isAboveGround()
    }


    characterInAction() {
        if (this.isDead()) {
            this.characterDead();
        }
        else if (this.isAboveGround())
            this.playAnimation(this.IMAGES_JUMPING);
    }

    characterGo() {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)
            this.playAnimation(this.IMAGES_WALKING);
    }

    characterHurt() {
        if (this.isHurt())
            this.playAnimation(this.IMAGES_HURT);
    }


    characterDead() {
        this.playAnimation(this.IMAGES_DEAD);
        if (soundOn == true) {
            this.gameOverSound.play();
            this.gameOverSound.value = 0.1;
        }
        this.gameOver();
        stopGame();
    }


    /**
     * Showes you lost screen.
     */
    gameOver() {
        setInterval(() => {
            document.getElementById('game_over').classList.remove('d-none');
            document.getElementById('canvas').classList.add('d-none');
            this.gameOverSound.currentTime = 1;
        }, 1060);
        document.getElementById('mobile-key').classList.add('d-none');
    }


    isLandingOnTop(enemy) {
        return this.isColliding(enemy) && this.isAboveGround() && this.speedY < 0;
    }
}
