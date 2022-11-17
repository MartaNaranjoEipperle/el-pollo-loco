class Level {
    coins;
    enemies; 
    endboss;
    bottles;
    clouds;
    backgroundObjects;
    level_end_x = 1450;

    constructor( coins, enemies, endboss, bottles, clouds, backgroundObjects ){
        this.coins = coins;
        this.enemies = enemies;
        this.endboss = endboss;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}