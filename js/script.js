

const animation= {
    targets: '.animeBoxes',
    translateX: [
        {value: 250, duration: 500},
    ],
    rotate: '1turn',
    easing: 'easeInOutQuad',
    delay: anime.stagger(1000),
    endDelay: 200,
    direction: 'alternate',
    backgroundColor: '#FF33DA',
    borderRadius: ['0%', '50%'],
    opacity: '0.5',
    autoplay: false

}

const help = anime(animation);


const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");

playBtn.addEventListener("click", help.play);
pauseBtn.addEventListener("click", help.pause);
stopBtn.addEventListener("click", help.reset);
