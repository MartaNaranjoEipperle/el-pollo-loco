class Endboss extends MovableObject {

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'

    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    height = 450;
    width = 350;
    y = 10;
    energie = 25;
    
 
    offset = {
        top: 100,
        bottom: 100,
        left: 70,
        right: 50,
    };
    hadPains = false;

    deadSound = new Audio('audio/endbossdead.mp3');
    endSound = new Audio('audio/endbossend.mp3');
    gameOverSound = new Audio('audio/win.mp3');


    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/3_attack/G15.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1800;
        this.animate();
    }


    /**
     * Animates the endboss. Playes alert animation with some delay until character arrives at endboss.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            if (this.isDead()) 
               this.endbossDead();
            else if (this.isHurt() && this.energie < 25) 
                  this.endbossHasPain();
            else if (this.isHurt() && this.energie < 10) 
                this.endbossHasMorePain();
            else
                this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }


    endbossDead(){
        this.playAnimation(this.IMAGES_DEAD);
        this.speed = 0.1;
        if (soundOn) {
            this.endSound.play();
            this.endSound.value = 0.5;
        } 
        this.endSound.pause();
        stopGame();
        this.gameOverWin();
    }


    endbossHasPain(){
        this.playAnimation(this.IMAGES_HURT);
        this.speed = 3;
        if (soundOn)
        this.deadSound.play();
        this.deadSound.volume = 1;
    }


    endbossHasMorePain(){
        this.playAnimation(this.IMAGES_ATTACK);
        this.speed = 6;
        if (soundOn)
            this.deadSound.play();
            this.deadSound.volume = 1;
    }


     /**
     * Showes you win screen.
     */
    gameOverWin() {
        setInterval(() => {
            document.getElementById('game_over_win').classList.remove('d-none');
            document.getElementById('canvas').classList.add('d-none');
            if (soundOn)
                this.gameOverSound.play();
                this.gameOverSound.volume = 0.9;
        }, 1060);
        document.getElementById('mobile-key').classList.add('d-none');
    }

}