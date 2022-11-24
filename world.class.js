class World {
    character = new Character();    
    endbossBar = new EndbossBar;
    statusBar = new StatusBar;
    bottleBar = new BottleBar;
    coinBar = new CoinBar;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    maxBottlesToThrow = 0;
    throwableObject = [];
    takeBottleSound = new Audio('audio/takebottle.mp3');
    takeCoinSound = new Audio('audio/takeCoin.mp3');
    wurfSound = new Audio('audio/wurf.mp3');
    deadSound = new Audio('audio/smalldead.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    /**
     * runs the game logic. checks collisions, if bottles are collected and if the game is over.
    */
    run() {
        setStopableInterval(() => {
            this.checkCharacterCollisionswithEnemy();
            this.checkCollisionsWithBoss();
            this.checkCoinCollisions();
            this.checkBottleCollision();
            this.checkEnemyCollisionWithBottle();
            this.checkCollisionWithBottleOnTheGround()
            this.checkEndbossCollisionWithBottle();
            this.checkThrowObjects();
        }, 200);
    }


    /**
     * checkes  if bottles are available to throw.
     * If pushes a new bottle in the throwablebottle array.
     * Then updates the bottlebar, the available bottles and the time of characters last move.
    */
    checkThrowObjects() {
        if (this.keyboard.SPACE && this.maxBottlesToThrow > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 30, this.character.otherDirection);
            this.throwableObject.push(bottle);
            this.maxBottlesToThrow--;
            this.character.throwBottle();
            this.bottleBar.setPercentage(this.character.bottlesBank);
            if (soundOn == true)
                this.wurfSound.play();
                this.wurfSound.value = 0.3;
        }
    }


    /**
     * if there are throwed bottles in the array, the function iterates through it, then 
     * itterates through the array with the enemies. Checkes if a bottle is colliding with 
     * an enemy and triggers the kill enemy function.
     */
    checkEnemyCollisionWithBottle() {
        this.throwableObject.forEach((bottle) => {
            this.level.enemies.forEach(enemy => {
                if (bottle.isColliding(enemy) && bottle.isAboveGround()) {
                    bottle.bottleBreak();
                    enemy.hit();
                   setTimeout(this.enemyDead(enemy), 2000);
                }
            });
        });
    }


    enemyDead(enemy) {
        setTimeout(() => {
            enemy.x = -2000;
        }, 300);
    }


    /**
     * iterates through the array with the throwed bottles. Checkes if bottle 
     * is colliding with endboss and triggers hit function.
    */
    checkEndbossCollisionWithBottle() {
        this.throwableObject.forEach((bottle) => {
            this.level.endboss.forEach(endboss => {
                if (bottle.isColliding(endboss)) {
                    bottle.bottleBreak();
                    endboss.hit();
                    this.endbossBar.loseEnergy();
                    this.endbossBar.setLife(this.endbossBar.endbossLife);
                }
            });
        });
    }


    /**
     * Checkes if character is hit by an enemy or if the character is jumping on an enemy.
     * 
    */
    checkCharacterCollisionswithEnemy() {
        this.level.enemies.forEach((enemy => {
            if (this.character.isLandingOnTop(enemy)) {
                enemy.hit();
                setTimeout(this.chickenDies(enemy), 2000);
            }
            else if (this.check(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energie);
            }
        }));
    }

    check(enemy){
        return this.character.isColliding(enemy) && !this.character.isAboveGround()
    }


    /**
     * Checkes if the endboss is colliding with character.
     */
    checkCollisionsWithBoss() {
        this.level.endboss.forEach((boss => {
            if (this.character.isColliding(boss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energie);
            }
        }));
    }


    /**
     * iterates through all bottles and checks if the character is colliding with it.
     * If true, playes bottle sound and updates bottles.
    */
    checkBottleCollision() {
        this.level.bottles.forEach((bottle => {
            if (this.character.isColliding(bottle)) {
                this.character.take();
                this.bottleCollected(bottle);
                this.bottleBar.setPercentage(this.character.bottlesBank);
                if (soundOn == true)
                    this.takeBottleSound.play();
                    this.takeBottleSound.value = 0.5;
            }
        }));
    }


    /**
     * iterates through all bottles on the ground and checks if the character is colliding with it.
     * If true, playes bottle sound and updates bottles.
    */
    checkCollisionWithBottleOnTheGround() {
        this.throwableObject.forEach((bottle => {
            if (this.character.isColliding(bottle)) {
                this.character.takeBottelOnTheGround();
                this.groundBottleCollected(bottle);
                this.bottleBar.setPercentage(this.character.bottlesBank);
                if (soundOn == true)
                    this.takeBottleSound.play();
                    this.takeBottleSound.value = 0.5;
            }
        }));
    }


    groundBottleCollected(bottle) {
        let i = this.throwableObject.indexOf(bottle);
        this.throwableObject.splice(i, 1);
        this.maxBottlesToThrow++;
    }


    bottleCollected(bottle) {
        let i = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(i, 1);
        this.maxBottlesToThrow++;
    }


    /**
    * iterates through all coins and checkes if character is colliding with it.
    */
    checkCoinCollisions() {
        this.level.coins.forEach((coin, i) => {
            if (this.character.isColliding(coin)) {
                this.coinBar.takeCoin();
                this.level.coins.splice(i, 1);
                this.coinBar.setCoinBar(this.coinBar.coinBank);
                if (soundOn == true)
                    this.takeCoinSound.play();
                    this.takeCoinSound.value = 0.001;
            }
        });
    }


    chickenDies(enemy) {
        if (soundOn == true) {
            this.deadSound.play();
            this.deadSound.value = 0.2;
        }
        this.character.speedY = 6.5;
        this.enemyDead(enemy);
    }


    /**
     * Function for drawing objects to the canvas.
     */
    draw() {
        this.clearAll();
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects); 
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectToMap(this.level.clouds);
        this.drawStatusBar();
        this.ctx.translate(this.camera_x, 0);
        this. drawPlayObject();
        this.ctx.translate(-this.camera_x, 0);
        this.drawObject();
    }

    drawStatusBar(){
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.endbossBar);
    }

    drawPlayObject(){
        this.addObjectToMap(this.throwableObject);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endboss);
        this.addToMap(this.character);
    }


    clearAll() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    drawObject() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawBorder(this.ctx);
        if (mo.otherDirection)
            this.flipImage(mo);
    }


    /**
     * Saves canvas configuratin, translate the x axis, mirrores the picture, and adjusts the x axis from object.
     * @param {Object} object 
    */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

}
