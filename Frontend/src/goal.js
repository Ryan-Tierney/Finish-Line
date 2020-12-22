class Goal {
    constructor(game) {
        this.width = 30;
        this.height = 30;

        this.position = {
            x: 800 - this.width,
            y: 800 - this.height
        }
    }

    draw(context) {
        context.fillStyle = "#FFF999"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;


    }
}
