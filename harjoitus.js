let name = 'Christian'

function hello(name) {
    if (name === undefined) {
        return 'Hello friend'
    } else {
        return `Hello ${name}`
    }
}

// console.log(hello()) // undefined -> Hello friend
// console.log(hello('Seppo')) // Hello Seppo
// console.log(hello(name))

// Normaalifunktio
function test (a,b,c) {
    console.log(a,b,c)
    return a+b+c
}

// Anonyymifunktio
let test2 = function (a,b,c) {
    console.log(a,b,c)
    return a+b+c
}

// Nuolifunktio
let test3 = (a,b,c) => {
    console.log(a,b,c)
    return a+b+c
}

// console.log(test(1,2,3));
// console.log(test(1,2));
// console.log(test(1,2,3,4));

// Olio
let person = {
    'name': 'Christian',
    'age': 50,
    'hello': function () { return `Hello ${this.name}`}
}
console.log(person)
console.log(person.name)
person.name = 'Seppo'
console.log(person.name)
person.last_name='Suomalainen'
console.log(person)
let text = person.hello()
console.log(text)
function summa(a,b) {
    return a+b
}
console.log(`${person.name} ${person.age} ${summa(2,2)}`)

// let total = 4*5+summa(4,2)
// console.log(total)


class Auto {
    constructor(merkki, malli, vuosi) {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosi = vuosi;
    }
    näytäTiedot() {
        console.log(`Auto: ${this.merkki} ${this.malli}, vuosi: ${this.vuosi}`)
    }
}
let auto1 = new Auto('Toyota', 'Corolla', 2020);
let auto2 = new Auto('Honda', 'Civic', 2021);
auto1.näytäTiedot();
auto2.näytäTiedot();

