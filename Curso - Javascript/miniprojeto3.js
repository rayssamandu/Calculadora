const resultado = fizzBuzz(45);
console.log(resultado);


function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        console.log ('Não é um número')
    }
    else if (entrada % 3 === 0 && entrada % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (entrada % 5 === 0) {
        console.log("Buzz")
    }
    else if (entrada % 3 === 0) {
        console.log("Fizz")
    }
    else {
        console.log(entrada)
    }
}