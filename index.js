document.addEventListener('keydown', altDownHandler);
document.addEventListener('keyup', altUpHandler);
document.addEventListener('click', clickHandler);
document.addEventListener('mousemove', mousemoveHandler);

let altDown = false;


function clickHandler() {
    if (altDown) {
        console.log('ALT DOWN CLICK')
        document.body.style.backgroundColor = 'YELLOW';
    } else {
        console.log('ALT UP CLICK')
        document.body.style.backgroundColor = 'PINK';
    }
}

function mousemoveHandler() {
    if (altDown) {
        console.log('ALT DOWN MOVE')
        document.body.style.backgroundColor = 'BLUE';
    } else {
        console.log('ALT UP MOVE')
        document.body.style.backgroundColor = 'GREEN';
    }
}

function altDownHandler(e) {
    if (e.keyCode === 18) {
        console.log("ALT DOWN");
        altDown = true;
    }
}

function altUpHandler(e) {
    if (e.keyCode === 18) {
        console.log("ALT DOWN");
        altDown = false;
    }
}
