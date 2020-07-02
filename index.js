// catch, dog, man, woman, cat-woman
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

    }
}

let cat = new Inhabitant('Animal - Cat', '', 'Murzik', 'Male', 'Eat, sleep <= repeat', 'Meov, meeeeeeeeooooooooov!!!!!!!!!!!');
let dog = new Inhabitant('Animal - Dog', '', 'Sharik', 'Male', 'Secure house, Eat, Woof', 'Woof! Woof, woff, woff!!!');
let man = new Inhabitant('Human - Man', '', 'John', 'Male', 'Programmer', 'Hello World!');
let woman = new Inhabitant('Human - Woman', '', 'Lizz', 'Female', 'Just Awesome Girl', '...talking every time with girlfriends');
let catWoman = new Inhabitant('Human / Animal', '', 'undefined', 'Female', 'World saving and Meov!', 'Hello meov! Urrrrrr');