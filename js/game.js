let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas,keyboard);

}


window.addEventListener('keydown', (e) => {
    switch (event.code){
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
    
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
    
        case "ArrowUp":
            keyboard.UP = true;
            break;
    
        case "ArrowDown":
            keyboard.DOWNT = true;
            break;

        case "Space":
            keyboard.SPACE = true;
            break;
        default:
            break;
        }
    })


window.addEventListener('keyup', (e) => {
    switch (event.code){
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;

        case "ArrowLeft":
            keyboard.LEFT = false;
            break;

        case "ArrowUp":
            keyboard.UP = false;
            break;
            
        case "ArrowDown":
            keyboard.DOWNT = false;
            break;

        case "Space":
            keyboard.SPACE = false;
            break;
        default:
            break;
        }
})