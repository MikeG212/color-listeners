document.addEventListener('click', clickHandler);
document.addEventListener('mousemove', mousemoveHandler);

function clickHandler(event) {
    if (event.altKey) {
        console.log('ALT DOWN CLICK')
        document.body.style.backgroundColor = 'YELLOW';
    } else {
        console.log('ALT UP CLICK')
        document.body.style.backgroundColor = 'PINK';
    }
}

function mousemoveHandler(event) {
    if (event.altKey) {
        console.log('ALT DOWN MOVE')
        document.body.style.backgroundColor = 'BLUE';
    } else {
        console.log('ALT UP MOVE')
        document.body.style.backgroundColor = 'GREEN';
    }
}
