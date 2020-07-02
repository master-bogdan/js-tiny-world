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
        let row = document.querySelector('.row');
        row.insertAdjacentHTML('afterbegin', `
        <div class="col col-md-6">
            <div class="card">
                <h3 class="card-title">${this.name}</h3>
                <img src=${this.image} alt="${this.name}">
                <p>Inhabitant: ${this.type}</p>
                <p>Gender: ${this.gender}</p>
                <p>Ocupation: ${this.ocupation}</p>
                <audio class="audio" controls>
                    <source src="${this.saying}" type="audio/mpeg">
                </audio>
                <ul class="card-actions">
                    <li><button type="button" class="button-primary card-btn">Press to hear underwater voice</button></li>
                </ul>
            </div>
        </div>
        `);
    }
}






let diver = new Inhabitant('Human', 'img/diver.png', 'Amelia', "Divers don't have genders", 'Dive, Eat, sleep <= repeat', 'voices/diver.mp3');
diver.render();
let dog = new Inhabitant('Animal - Dog', '', 'Sharik', 'Male', 'Secure house, Eat, Woof', 'Woof! Woof, woff, woff!!!');
// dog.render();
let man = new Inhabitant('Human - Man', '', 'John', 'Male', 'Programmer', 'Hello World!');
let woman = new Inhabitant('Human - Woman', '', 'Lizz', 'Female', 'Just Awesome Girl', '...talking every time with girlfriends');
let catWoman = new Inhabitant('Human / Animal', '', 'undefined', 'Female', 'World saving and Meov!', 'Hello meov! Urrrrrr');


const sound = document.querySelectorAll('.audio');
function playVoice() {
    this.sound.play();
    // try {
    //     await sound.play();
    //   } catch(err) {
    //     console.log('error');
    //   }
}

const buttonPlay = document.querySelectorAll('.card-btn');


buttonPlay.forEach(item => {
    item.addEventListener('click', playVoice);
});



});