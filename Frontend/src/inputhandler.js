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