//Anim card's back
const restartAnim =
    anime({
        targets: '.asideTop',
        scale: [
            {value: 1.1},
            {value: 1}
        ],
        easing: 'easeInOutSine',
        loop: false,
        autoplay: false
    });
//Anim cpu Card
const restartAnimCpu =
    anime({
        targets: '#cardCpu',
        translateX: [
            {value: -10, duration: 500},
            {value: 0, duration: 800}
        ],
        easing: 'easeInOutSine',
        loop: false,
        autoplay: false
    });
//Anim Player card
const restartAnimPlayer =
    anime({
        targets: '#cardPlayer',
        translateX: [
            {value: 10, duration: 500},
            {value: 0, duration: 800}
        ],
        easing: 'easeInOutSine',
        loop: false,
        autoplay: false
    });
// Anim you win
const animYouWin = () => {
    anime({
        targets: '#content .lineDrawing',
        scale: [
            {value: 1.1},
            {value: 1}
        ],
        easing: 'easeInOutSine',
        loop: true,
    });
};
//Anim cpu win
const animCpuWin = () => {
    anime({
        targets: '#content .lineDrawing',
        translateY: 100,
        rotate: 15,
        duration: 1000,
        easing: 'easeInOutSine',
    });
};
//Anim draw
const animDraw = () => {
    anime({
        targets: '#content .lineDrawing',
        translateY: 50,
        direction: 'alternate',
        duration: 500,
        easing: 'linear',
        loop: true,
    });
};

