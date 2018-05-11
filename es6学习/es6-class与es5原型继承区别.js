 // es5面向对象与继承
function Animal (name) {
    this.name = name;
    this.eat = function () {
        alert(this.name +  'eat')
    }
}

function Dog (name) {
    this.name = name;
    this.dray = function () {
        alert(this.name +  'dray')
    }
}

Dog.prototype = new Animal();
var dog =  new  Dog('哈士奇')

// es6 Class
class  Animal {
    consrtuctor (name) {
        this.name = name;
    }
    eat () {
        alert(this.name +  'eat')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    say () {
        alert(this.name + 'say')
    }
}
const dog =  new  Dog('哈士奇')