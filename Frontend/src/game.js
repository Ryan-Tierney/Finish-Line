class Game {
    constructor() {
        this.gameWidth = 800;
        this.gameHeight = 800;
        //this.timer = document.getElementById('counter-container');
        //this.totalTime = totalTime;
        //this.currentTime = totalTime;
    }

    start() {
        const enemyWidth = 30;
        const enemyHeight = 30;
        let enemyXPosition = 400 - enemyWidth / 2;
        //this.currentTime = this.totalTime;
        this.player = new Player(this);
        new InputHandler(this.player);
        //this.counter = this.startCounter();
        this.verticalenemy1 = new VerticalEnemy(enemyXPosition, this);
        this.verticalenemy2 = new VerticalEnemy((200 - enemyWidth / 2), this);
        this.verticalenemy3 = new VerticalEnemy((600 - enemyWidth / 2), this);
        this.horizontalenemy1 = new HorizontalEnemy((200 - enemyHeight / 2), this);
        this.horizontalenemy2 = new HorizontalEnemy((400 - enemyHeight / 2), this);
        this.horizontalenemy3 = new HorizontalEnemy((600 - enemyHeight / 2), this);
        this.wallenemy1 = new Wall((150 - enemyWidth / 2), (0 - enemyHeight / 2), this);
        this.wallenemy2 = new Wall((450 - enemyWidth / 2), (100 - enemyHeight / 2), this);
        this.wallenemy3 = new Wall((750 - enemyWidth / 2), (0 - enemyHeight / 2), this); 
        this.goal = new Goal(this);
    }

    /*startCounter() {
        return setInterval(() => {
            this.timeRemaining++; 
            this.timer.innerText = this.timeRemaining;
        }, 1000);
    } */

    update(deltaTime) {
        this.player.update(deltaTime);
        this.verticalenemy1.update(deltaTime);
        this.verticalenemy2.update(deltaTime);
        this.verticalenemy3.update(deltaTime);
        this.horizontalenemy1.update(deltaTime);
        this.horizontalenemy2.update(deltaTime);
        this.horizontalenemy3.update(deltaTime);
        this.goal.update(deltaTime);        
    }

    draw(context) {
        this.player.draw(context);
        this.verticalenemy1.draw(context);
        this.verticalenemy2.draw(context);
        this.verticalenemy3.draw(context);
        this.horizontalenemy1.draw(context);
        this.horizontalenemy2.draw(context);
        this.horizontalenemy3.draw(context);
        this.wallenemy1.draw(context);
        this.wallenemy2.draw(context);
        this.wallenemy3.draw(context);
        this.goal.draw(context);        
    }
}