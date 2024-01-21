// function isOdd(value){
//  return value % 2 == 1;
// }

// function isEven(value){
//     return !isOdd(value);
// }

// isEven(4)

//Could i define it in a point free way?

"NOT"

function not(fn){
    return function negated(...args){
        return !fn(...args);
    }
}

// var isEven= not(isOdd);


function mod(y){
    return function forX(x){
        return x % y ;
    }
}

function eq(value){
    return function forValue(anotherValue){
        return value === anotherValue;
    }
}

function compose(fn2, fn1){
    return function composed(value){
        return fn2(fn1(value));
    }

}


let isOdd = compose(eq(1),mod(2))
let isEven = not(isOdd)

console.log(isOdd(3))
console.log(isOdd(2))
console.log(isEven(2))
console.log(isEven(3))