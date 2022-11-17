class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false
    speedY = 0;
    acceleration = 1;
    energie = 100;
    lastHit = 0;
    bottlesBank = 0;
    jumpSound = new Audio('audio/jump.mp3');
    pepeHurtSound = new Audio('audio/pepeHurt.mp3');


    /**
     * Checkes if object is above ground or is moving upwards. If true reduces the y speed by accelaration.
     * If false keeps speed y at 0.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /**
     * checkes if an object is above ground.
     * @returns true if bottles are above 360 and other objects above 210.
     */
    isAboveGround() {
        if ((this instanceof ThrowableObject)) {
            if (this.y < 445 && this.y > 365) { return false; }
            else { return true; }
        }
        else 
         return this.y < 180; 
    }


    /**
     * 
     * @param {Object} mo 
     * @returns True if colliding.
    */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    /**
     * Moves an object to the right by changing its x variable.
     * @param {Variable} speed 
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * Moves an object to the left by changing its x variable.
     * @param {Variable} speed 
    */
    moveLeft() {
        this.x -= this.speed;
    }


    stay() {
        this.x = this.speed;
    }


    /**
     * Plays an animation using an array of images.
     * @param {Array} Images array with images for animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }


    /**
     * Let an object jump by changing its speed y variable.
     * Playes jumping sound
     */
    jump() {
        this.speedY = 16;
        if (soundOn == true)
            this.jumpSound.play();
            this.jumpSound.volume = 0.6;
    }

    /**
     * Reduces energy, syncronizes healthbar and updates time of last hit and move.
     * Set character to hit for 1s and checkes if character is dead.
     */
    hit() {
        this.energie -= 5;
        if (this.energie < 0) {
            this.energie = 0;
        } else {
            this.lastHit = new Date().getTime();
            if (soundOn == true)
                this.pepeHurtSound.play();
                this.pepeHurtSound.volume = 1;
        }
    }


    take() {
        this.bottlesBank += 10;
        if (this.bottlesBank > 100) {
            this.bottlesBank = 100;
        }
    }

    takeBottelOnTheGround(){
        this.bottlesBank += 8;
        if (this.bottlesBank > 100) {
            this.bottlesBank = 100;
        } 
    }


    throwBottle() {
        this.bottlesBank -= 8;
        if (this.bottlesBank < 0) {
            this.bottlesBank = 0;
        }
    }

     /**
     * Comparing current time with time oc characters last hit.
     * @returns True if for 0.5s to got hit.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    isDead() {
        return this.energie == 0;
    }
}