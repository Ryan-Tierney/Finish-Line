class Wall {
    constructor(yPosition, xPosition, game) {
        this.width = 750; 
        this.height = 30;
        this.speed = 0;
        this.position = {
            x: xPosition,
            y: yPosition
        }

        this.game = game;
    }

    draw(context) {
        context.fillStyle = "#f00"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}