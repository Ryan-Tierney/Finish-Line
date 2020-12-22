class Player {
    constructor(game) {
        this.width = 30;
        this.height = 30;
        this.maxSpeed = 5; 
        this.speed = 0; 
        this.axis;
        this.game = game; 
        this.position = {
            x: 0,
            y: 0
        }
    }

    draw(context) {
        context.fillstyle = "#f00"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.strokeRect(this.position.x, this.position.y, 7, 7)
    }

    moveLeft() {
        this.speed = -this.maxSpeed; 
        this.axis = "x";
    }

    moveRight() {
        this.speed = this.maxSpeed;
        this.axis = "x"; 
    }

    moveDown() {
        this.speed = this.maxSpeed; 
        this.axis = "y";
    }

    moveUp() {
        this.speed = -this.maxSpeed; 
        this.axis = "y"; 
    }

    moveTopRight() {
        this.speed = this.maxSpeed;
        this.axis = "xy1";
    }

    moveTopLeft() {
        this.speed = this.maxSpeed; 
        this.axis = "xy2";
    }

    moveDownLeft() {
        this.speed = this.maxSpeed;
        this.axis = "xy3";
    }

    moveDownRight() {
        this.speed = this.maxSpeed;
        this.axis = "xy4";
    }

    stop() {
        this.speed = 0;
    }

    update(deltaTime) {
        if (!deltaTime) return;

        if (this.axis === "y") {
            this.position.y += this.speed;
        } else if (this.axis === "x") {
            this.position.x += this.speed;
        } else if (this.axis === "xy1") {
            this.position.x += this.speed;
            this.position.y += -this.speed;
        } else if (this.axis === "xy2") {
            this.position.x += -this.speed;
            this.position.y += -this.speed;
        } else if (this.axis === "xy3") {
            this.position.x += -this.speed;
            this.position.y += this.speed;
        } else if (this.axis === "xy4") {
            this.position.x += this.speed;
            this.position.y += this.speed;
        }

        if (this.position.x < 0) {
            this.position.x = 0; 
        }
        if (this.position.x + this.width > 800) {
            this.position.x = 800 - this.width;    
        }
        if (this.position.y < 0) {
            this.position.y = 0; 
        }
        if (this.position.y + this.height > 800) {
            this.position.y = 800 - this.height;
        }
    }
}