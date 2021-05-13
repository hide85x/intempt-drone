const main = document.querySelector('.main')
const drone = document.querySelector('.drone')

const leftWing = document.querySelector('.drone-left-wing')
const rightWing = document.querySelector('.drone-right-wing')


const drone_base = document.querySelector('.drone-base')
let modifier = 5;
drone.style.top = 0
drone.style.left = 0
window.addEventListener('keydown', (event) => {
    const { style } = drone
    switch (event.key) {
        case 'ArrowUp': style.top = `${parseInt(style.top) - modifier}px`; break;
        case 'ArrowDown': style.top = `${parseInt(style.top) + modifier}px`; break;
        case 'ArrowLeft':
            style.left = `${parseInt(style.left) - modifier}px`;

            drone_base.style.transform = "rotate(-3deg)";
            leftWing.style.top = "-2px";
            rightWing.style.top = "-2px";
            break
        case 'ArrowRight':
            style.left = `${parseInt(style.left) + modifier}px`;

            drone_base.style.transform = "rotate(3deg)";
            leftWing.style.top = "1px"
            rightWing.style.bottom = "1px"
            break;
    }
})