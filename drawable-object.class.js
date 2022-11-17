class DrawableObject {
    img;
    imgCache = {};
    currentImage = 0;
    x = 40;
    y = 190;
    height = 250;
    width = 150;
    intervalIDs = [];
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };


    setstoppableInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIDs.push(id);
    }


    clearAllIntervals() {
        this.intervalIDs.forEach(clearInterval);
    }


    /**
     * Creates a new image element and sets path.
     * @param {URL} path 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    
    /**
     * Draws an image to the canvas.
     * @param {Object} ctx Context of canvas.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * Iterates through tze array. Creates an image, sets image path and pushes image to the image cache.
     * @param {Array} imageArray Array with url´s from images.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        })
    }


     /**
     * For develloper pupose. Draws smaller rechtangles around images
     * @param {Object} ctx 
     */
    drawBorder(ctx) {
        if (this.needToDrawRectangles()) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    needToDrawRectangles() {
        return this instanceof Character || this instanceof Chicken || this instanceof SmallChicken|| this instanceof Bottle || this instanceof Coin || this instanceof ThrowableObject || this instanceof Endboss
    }

}