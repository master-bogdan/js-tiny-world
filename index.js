// catch, dog, man, woman, cat-woman
window.addEventListener('DOMContentLoaded', () => {

class Inhabitant {
    constructor(type, image, name, gender, ocupation, saying) {
        this.type = type;
        this.image = image;
        this.name = name;
        this.gender = gender;
        this.ocupation = ocupation;
        this.saying = saying;
    }
    render() {
        const row = document.querySelector('.row');
        row.insertAdjacentHTML('afterbegin', `
        <div class="col col-md-6">
            <div class="card">
                <h3 class="card-title">${this.name}</h3>
                <img src=${this.image} alt="${this.name}">
                <p>Inhabitant: <span>${this.type}</span></p>
                <p>Gender: <span>${this.gender}</span></p>
                <p>Ocupation: <span>${this.ocupation}</span></p>
                Press to hear underwater voice
                <audio class="audio" controls>
                Press to hear underwater voice
                    <source src="${this.saying}" type="audio/mpeg">
                </audio>
                <button type="button" class="button-primary card-btn">Press to hear underwater voice</button>
            </div>
        </div>
        `);
    }
}






let diver = new Inhabitant('Human', 'img/diver.png', 'Amelia', "Divers don't have genders", 'Dive, Eat, sleep <= repeat', 'voices/diver.mp3');

let clownfish = new Inhabitant('Fish', 'img/clownfish.jpg', 'Sharik', 'Male and then can be Female', 'Secure anemone', 'silence');

let dolphin = new Inhabitant('Mammal', 'img/dolphin.jpg', 'Luna', 'Female', 'Every time play with something', 'voices/dolphin.mp3');

let shark = new Inhabitant('Fish', 'img/shark.png', 'Bruce', 'Male', 'Scare and eat everythink', 'voices/shark.mp3');

let napoleon = new Inhabitant('Fish', 'img/napoleon.png', 'Freddy', 'Male', 'Eat egs and run away', 'silence');

napoleon.render();
shark.render();
clownfish.render();
diver.render();
dolphin.render();

const sound = document.querySelectorAll('.audio');

let soundIndex = Array.from(sound).map((item, index) => {
    return index;
});
console.log(soundIndex);
    
function playVoice() {
    
}

const buttonPlay = document.querySelectorAll('.card-btn');
let buttonIndex = Array.from(buttonPlay).map((item, index) => {
    return index;
});
console.log(buttonIndex);


buttonPlay.forEach((item) => {
    item.addEventListener('click', (e) => {
        // console.log(e.currentTarget =);
        soundIndex = e.currentTarget;
        soundIndex.play(); 
    });
});



});