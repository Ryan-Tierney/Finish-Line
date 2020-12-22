class VerticalEnemy {
    constructor(xPosition, game) {
        this.width = 30;
        this.height = 30;
        this.speed = 15;
        this.axis; 
        this.position = {
            x: xPosition,
            y: 0
        }


        this.game = game;
        
    }

    draw(context) {
        context.fillStyle = "#f00"
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return; 

        this.position.y += this.speed;

        if (this.position.y  + this.height > 800) {
            this.speed = -this.speed; 
        }
        if (this.position.y < 0) {
            this.speed = 15;
        }

        // player 
        let rect1 = {
            x: this.game.player.position.x, 
            y: this.game.player.position.y,
            width: this.game.player.width,
            height: this.game.player.height
        }

        // enemy1
        let rect2 = {
            x: this.game.verticalenemy1.position.x, 
            y: this.game.verticalenemy1.position.y,
            width: this.game.verticalenemy1.width,
            height: this.game.verticalenemy1.height
        }

        // enemy2
        let rect3 = {
            x: this.game.verticalenemy2.position.x,
            y: this.game.verticalenemy2.position.y,
            width: this.game.verticalenemy2.width, 
            height: this.game.verticalenemy2.height
        }

        //enemy3
        let rect4 = {
            x: this.game.verticalenemy3.position.x,
            y: this.game.verticalenemy3.position.y,
            width: this.game.verticalenemy3.width,
            height: this.game.verticalenemy3.height
        }

        // goal
        let rect5 = {
            x: this.game.goal.position.x,
            y: this.game.goal.position.y,
            width: this.game.goal.width,
            height: this.game.goal.height
        }

        //horizontalenemy1
        let rect6 = {
            x: this.game.horizontalenemy1.position.x,
            y: this.game.horizontalenemy1.position.y,
            width: this.game.horizontalenemy1.width,
            height: this.game.horizontalenemy1.height
        }

        //horizontalenemy2
        let rect7 = {
            x: this.game.horizontalenemy2.position.x,
            y: this.game.horizontalenemy2.position.y,
            width: this.game.horizontalenemy2.width,
            height: this.game.horizontalenemy2.height
        }

        //horizontalenemy3
        let rect8 = {
            x: this.game.horizontalenemy3.position.x,
            y: this.game.horizontalenemy3.position.y,
            width: this.game.horizontalenemy3.width,
            height: this.game.horizontalenemy3.height
        }

        //wall1
        let rect9 = {
            x: this.game.wallenemy1.position.x,
            y: this.game.wallenemy1.position.y,
            width: this.game.wallenemy1.width,
            height: this.game.wallenemy1.height
        }

        //wall2
        let rect10 = {
            x: this.game.wallenemy2.position.x,
            y: this.game.wallenemy2.position.y,
            width: this.game.wallenemy2.width,
            height: this.game.wallenemy2.height
        }

        //wall3
        let rect11 = {
            x: this.game.wallenemy3.position.x,
            y: this.game.wallenemy3.position.y,
            width: this.game.wallenemy3.width,
            height: this.game.wallenemy3.height
        }

                // collision between player and enemy1
        // enemy1 is the middle red square
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

        // collision between player and enemy2
        // enemy2 is the left red square
        if (rect1.x < rect3.x + rect3.width &&
            rect1.x + rect1.width > rect3.x &&
            rect1.y < rect3.y + rect3.height &&
            rect1.y + rect1.height > rect3.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

        // collision between player and enemy3
        // enemy3 is the right red square
        if (rect1.x < rect4.x + rect4.width &&
            rect1.x + rect1.width > rect4.x &&
            rect1.y < rect4.y + rect4.height &&
            rect1.y + rect1.height > rect4.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

         // collision between player and horizontalenemy1
        // enemy1 is the middle red square
        if (rect1.x < rect6.x + rect6.width &&
            rect1.x + rect1.width > rect6.x &&
            rect1.y < rect6.y + rect6.height &&
            rect1.y + rect1.height > rect6.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

         // collision between player and horizontalenemy2
        // enemy1 is the middle red square
        if (rect1.x < rect7.x + rect7.width &&
            rect1.x + rect1.width > rect7.x &&
            rect1.y < rect7.y + rect7.height &&
            rect1.y + rect1.height > rect7.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

        // collision between player and horizonalenemy3
        // enemy1 is the middle red square
        if (rect1.x < rect8.x + rect8.width &&
            rect1.x + rect1.width > rect8.x &&
            rect1.y < rect8.y + rect8.height &&
            rect1.y + rect1.height > rect8.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

        if (rect1.x < rect9.x + rect9.width &&
            rect1.x + rect1.width > rect9.x &&
            rect1.y < rect9.y + rect9.height &&
            rect1.y + rect1.height > rect9.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

        if (rect1.x < rect10.x + rect10.width &&
            rect1.x + rect1.width > rect10.x &&
            rect1.y < rect10.y + rect10.height &&
            rect1.y + rect1.height > rect10.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }

        if (rect1.x < rect11.x + rect11.width &&
            rect1.x + rect1.width > rect11.x &&
            rect1.y < rect11.y + rect11.height &&
            rect1.y + rect1.height > rect11.y) {
            // collision detected!
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }




        // collision between player and goal
        if (rect1.x < rect5.x + rect5.width &&
            rect1.x + rect1.width > rect5.x &&
            rect1.y < rect5.y + rect5.height &&
            rect1.y + rect1.height > rect5.y) {
            // collision detected!
            win();
            updateLevelsCompleted();
            this.game.player.stop();
            this.game.player.position.x = 0;
            this.game.player.position.y = 0;
        }
    }
}