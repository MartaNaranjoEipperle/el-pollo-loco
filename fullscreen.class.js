class Fullscreen extends DrawableObject {
    IMAGE = [
        'img/7_statusbars/3_icons/fullscreen.png'
    ];

    constructor() {
        super().loadImage(this.IMAGE);
        this.height = 30;
        this.width = 30;
        this.x = 670;
        this.y = 430;
        this.fullscreen();
    }
}


function fullscreen() {
    document.getElementById('canvas').classList.add('full-screen')
}