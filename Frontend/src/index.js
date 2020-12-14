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


class InputHandler {
    constructor(player) {
        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "a":
                    player.moveLeft();
                    break;
                case "w":
                    player.moveUp();
                    break;
                case "d":
                    player.moveRight();
                    break;
                case "s":
                    player.moveDown();
                    break;
                case "p":
                    player.moveTopRight();
                    break;
                case "o":
                    player.moveTopLeft();
                    break;
                case "l":
                    player.moveDownLeft();
                    break;
                case ";":
                    player.moveDownRight();

            }
        })

        document.addEventListener("keyup", (e) => {
            switch(e.key) {
                case "a":
                    player.stop();
                    break;
                case "w":
                    player.stop();
                    break;
                case "d":
                    player.stop();
                    break;
                case "s":
                    player.stop();
                    break;
                case "p":
                    player.stop();
                    break;
                case "o":
                    player.stop();
                    break;
                case "l":
                    player.stop();
                    break;
                case ";":
                    player.stop();
                    break;
            }
        })
    }
}

class Game {
    constructor() {
        this.gameWidth = 800;
        this.gameHeight = 800;

    }

    start() {
        const enemyWidth = 30;
        const enemyHeight = 30;
        let enemyXPosition = 400 - enemyWidth / 2;

        this.player = new Player(this);
        new InputHandler(this.player);
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

const signUpButton = document.getElementById("signUpButton");

const logInButton = document.querySelector("#logInButton");

signUpButton.addEventListener("click", (e) => {
    signUp(e);
})

logInButton.addEventListener("click", (e) => {
    logIn(e);
})

let canvas = document.getElementById("level-1");
let context = canvas.getContext('2d');

let game = new Game();
game.start();


let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;



    // (x, y, width, height)
    context.clearRect(0, 0, 800, 800);


    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();

const BACKEND_URL = "http://localhost:3000";

getComments();

// ! End Global Scope

function signUp(e) {
    e.preventDefault();
    
    let userInputForUsername = document.querySelector("#username-signup").value;
    
    let formData = {
        username: userInputForUsername
    }
    
    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    fetch(`${BACKEND_URL}/users`, configObj)
    .then(resp => resp.json())
    .then(parsedResp => {
        if (parsedResp.username) {
            
            newComment(parsedResp.id);

            const currentUser = document.querySelector("#current-user");
            currentUser.innerText = parsedResp.username;
            
            const highScore = document.querySelector("#levels-finished");
            if (parsedResp.levels_finished === 0) {
                highScore.innerText = `${parsedResp.levels_finished} levels finished`;
            } else if (parsedResp.levels_finished === 1) {
                highScore.innerText = `${parsedResp.levels_finished} level finished`;
            }
        }
    });
}

function logIn(e) {
    e.preventDefault();
    
    let userInputForUsername = document.querySelector("#username-login").value;
    
    let formData = {
        username: userInputForUsername
    }
    
    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    fetch(`${BACKEND_URL}/login`, configObj)
    .then(resp => resp.json())
    .then(parsedResp => {
        if (parsedResp.username) {
           
            newComment(parsedResp.id);

            const currentUser = document.querySelector("#current-user");
            currentUser.innerText = parsedResp.username;
            
            const highScore = document.querySelector("#levels-finished");
            if (parsedResp.levels_finished === 0) {
                highScore.innerText = `${parsedResp.levels_finished} levels finished`;
            } else if (parsedResp.levels_completed === 1) {
                highScore.innerText = `${parsedResp.levels_finished} level finished`;
            }
        }
    });
}

function win() {
    alert("You Win!");
}

function updateLevelsCompleted() {
    let sentence = document.querySelector("#current-user");
    
    if (!(sentence.innerText === "You are not currently logged in")) {
        let username = sentence.innerText;
    
        let formData = {
            username: username
        }
        
        let configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        
        fetch(`${BACKEND_URL}/increase-levels-finished`, configObj)
        .then(resp => resp.json())
        .then(parsedResp => {         
            const highScore = document.querySelector("#levels-finished");
            if (parsedResp.levels_finished === 0) {
                highScore.innerText = `${parfinished} levels finished`;
            } else if (parsedResp.levels_finished === 1) {
                highScore.innerText = `${parsedResp.levels_finished} level finished`;
            }
        });
    }
}

function newComment(user_id) {

    let shareButton = document.getElementById("newCommentButton");

   

    shareButton.addEventListener("click", (e) => {
        let user = document.querySelector("#current-user").innerText;

        e.preventDefault();
        let commentText = document.getElementById("newUserComment").value

        let formData = {
            comment: commentText
        }
        
        let configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(`${BACKEND_URL}/users/${user_id}/comments`, configObj)
        .then(resp => resp.json())
        .then(parsedResp => {
            let commentsSection = document.querySelector(".comment-list");
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("a-comment");
            let commentHeader = document.createElement("h4");
            let commentP = document.createElement("p");
            commentHeader.innerText = parsedResp.user.username;
            commentP.innerText = parsedResp.text;
            commentsSection.appendChild(commentDiv);
            commentDiv.appendChild(commentHeader);
            commentDiv.appendChild(commentP);
            let br = document.createElement("br");
            commentDiv.appendChild(br);        

        });

    })
}


function loggedIn() {
    let sentence = document.querySelector("#current-user");
    
    if (!(sentence.innerText === "NOT LOGGED IN")) {
        return true;
    } else {
        return false;
    }
}


function getComments() {
    fetch(`${BACKEND_URL}/comments`)
    .then(resp => resp.json())
    .then(parsedResp => {
      
     
        parsedResp.forEach( e => {
            let commentsSection = document.querySelector(".comment-list");
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("a-comment");
            let commentHeader = document.createElement("h4");
            let commentP = document.createElement("p");
            let deleteComment = document.createElement('button');
            deleteComment.classList.add("deleteButton");
            deleteComment.addEventListener("click", (e) => {
                e.preventDefault();
                let commentToDelete = document.getElementById("p").value
                let formData = {
                    comment: commentText
                }
                
                let configObj = {
                    method: "DELETE", 
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            })
            deleteComment.innerText = "x"
            commentHeader.innerText = e.user.username;
            commentP.innerText = e.text;
            commentsSection.appendChild(commentDiv);
            commentDiv.appendChild(commentHeader);
            commentDiv.appendChild(commentP);
            commentDiv.appendChild(deleteComment);
            let br = document.createElement("br");
            commentDiv.appendChild(br);
        });
    })
}