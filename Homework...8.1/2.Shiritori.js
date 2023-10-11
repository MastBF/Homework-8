class Shiritory {

    constructor() {
        this.words = []
        this.gameOver = false
    }
    play(arg) {
        if (this.gameOver === false) {
            if (this.words.length === 0) {
                this.words.push(arg)
               return this.words
            } else if (this.words[this.words.length - 1][this.words[this.words.length - 1].length - 1] === arg[0] 
                && this.words.includes(arg) === false) {
                 this.words.push(arg)
                 return this.words
            } else {
                this.gameOver === true
                return 'game over'
            }

        } else {
           return 'game over'
        }

    }
    restart() {
        this.gameOver = false
        this.words = []
        return 'game restarted'
    }

}

let myShiritori = new Shiritory()

myShiritori.play('apple')

console.log(myShiritori.play("ear"))
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("corn"));
console.log(myShiritori.play("corn"));
console.log(myShiritori.play("corn"));
console.log(myShiritori.restart())
console.log(myShiritori.play("ear"))
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("rhino"));



