const numberOfDrums = document.querySelectorAll('.drum').length;

const allSounds = {
    'w': 'sounds/tom-1.mp3',
    'a': 'sounds/tom-2.mp3',
    's': 'sounds/tom-3.mp3',
    'd': 'sounds/tom-4.mp3',
    'j': 'sounds/snare.mp3',
    'k': 'sounds/crash.mp3',
    'l': 'sounds/kick-bass.mp3',
};

// listens to the button pressed
for (let i = 0; i<numberOfDrums; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function(){

        let buttonInnerHtml = this.innerHTML;

        let audio = new Audio(allSounds[buttonInnerHtml]);
        audio.play();

        animation(buttonInnerHtml)
    })

}

// listens to keyboard key pressed
document.addEventListener('keydown', function (event){

    let audio = new Audio(allSounds[event.key]);
        audio.play();

    animation(event.key)
})


function animation(text) {
    let selectedButton = document.querySelector('.' + text);

    selectedButton.classList.add('pressed'); // Adds this class to a selected button

    setTimeout(function () {
        selectedButton.classList.remove('pressed');
    }, 100);
}