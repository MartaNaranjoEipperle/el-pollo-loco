class Bottle extends MovableObject {

    width = 50;
    height = 80;
    offset = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    }

    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.x = x
        this.y = y
    }
}