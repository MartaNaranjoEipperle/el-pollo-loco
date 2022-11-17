class GameOver extends MovableObject {

    IMAGE_GAMEOVER = [
        'img/9_intro_outro_screens/game_over/oh no you lost!.png'
    ]


    constructor() {
        super().loadImages(this.IMAGE_GAMEOVER);
        this.width = 720;
        this.height = 480;
    }
}