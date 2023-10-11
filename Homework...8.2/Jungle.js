class Animal {
    constructor() {
        this.animals = []
    }
    sound() {
        console.log(this.voice)
        this.energy = this.energy - 3
    }
    food() {

        this.energy = this.energy + 5
    }
    sleep() {
        this.energy = this.energy + 10
    }
}

class Jungle {
    constructor() {

    }
    soundOff() {
        animal.animals.forEach(element => {
            element.sound()
            console.log(`${element.name}'s energy: ${element.energy}`)
        })
    }
}

class Food {

}

class Tiger extends Animal {

    constructor(energy = 20) {
        super()
        this.pushAnimal()
        this.name = `Tiger`
        this.energy = energy
        this.voice = `Tiger's sound`
    }
    pushAnimal() {
        animal.animals.push(this)
    }
    food(food) {
        if(food.name === 'Grain' ) {
            console.log('I can’t eat that')
        }else {
            this.energy = this.energy + 5
        }
    }
}

class Monkey extends Animal {

    constructor(energy = 20) {
        super()
        this.pushAnimal()
        this.name = `Monkey`
        this.energy = energy
        this.voice = `Monkey's sound`
    }
    pushAnimal() {
        animal.animals.push(this)
    }
    sound() {
        console.log(this.voice)
        this.energy = this.energy - 4
    }
    food() {
        this.energy = this.energy + 2
    }
    play() {
        if(this.energy >= 8){
        console.log('Oooo Oooo')
        this.energy -= 8
        }else {
            console.log(`I'm too tired`)
        }
    }
}

class Snake extends Animal {
    constructor(energy = 20) {
        super()
        this.pushAnimal()
        this.name = `Snake`
        this.energy = energy
        this.voice = `Snake's sound`
    }
    pushAnimal() {
        animal.animals.push(this)
    }
}

class Fish extends Food {
    constructor() {
        super()
        this.name = 'Fish'
    }
}

class Grain extends Food {
    constructor() {
        super()
        this.name = 'Grain'
    }
}

class Meat extends Food {
    constructor() {
        super()
        this.name = 'Meat'
    }
}
let animal = new Animal()
let jungle = new Jungle()
let tiger = new Tiger()
let snake = new Snake()
let monkey = new Monkey()
let grain = new Grain()


tiger.food(grain)
console.log(tiger.energy)