let level1;
function initLevel(){

/**
* Collects all the level objects.
*/
level1 = new Level( 
    [   
        new Coin('img/8_coin/coin_1.png', 200, 360),
        new Coin('img/8_coin/coin_1.png', 300, 200),
        new Coin('img/8_coin/coin_1.png', 400, 120),
        new Coin('img/8_coin/coin_1.png', 500, 340),
        new Coin('img/8_coin/coin_1.png', 600, 160),
        new Coin('img/8_coin/coin_1.png', 800, 240),
        new Coin('img/8_coin/coin_1.png', 900, 320),
        new Coin('img/8_coin/coin_1.png', 1000, 150),
        new Coin('img/8_coin/coin_1.png', 1200, 380)
    ],
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken()
    ],

    [
        new Endboss()
    ],
    
    [   
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',220,270),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',260,380),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',350,270),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',550,240),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',600,395),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',940,315),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',1000,280),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png',1380,390)
    ], 
   
    [
        new Cloud(),
    ],
    [ 
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 *2),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 *2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 *2),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 *2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 *2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 *2),
    ]
    );

}