// Global Scope

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
    clearInterval(this.counter);
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
        debugger
        parsedResp.sort((a, b) => a.user.username < b.user.username ? -1: a.user.username === b.user.username ? 0 : 1)
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