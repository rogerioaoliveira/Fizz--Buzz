let resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(x) {
    a = x % 3 === 0;
    b = x % 5 === 0;
    if (a && b == true)
        return "FizzBuzz";
    if (a == true)
        return "Fizz";
    if (b == true)
        return "Buzz";
    if (typeof x !== 'number')
        return "Não é um numero";
    else return x;
}