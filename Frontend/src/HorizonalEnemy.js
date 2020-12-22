class HorizontalEnemy {
    constructor(yPosition, game) {
        this.width = 30;
        this.height = 30;
        this.speed = 15;
        this.axis; 
        this.position = {
            x: 0,
            y: yPosition
        }


        this.game = game;
    }

    draw(context) {
        context.fillStyle = "#f00"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return; 

        this.position.x += this.speed;

        if (this.position.x  + this.height > 800) {
            this.speed = -this.speed; 
        }
        if (this.position.x < 0) {
            this.speed = 15;
        }
    }
}        
