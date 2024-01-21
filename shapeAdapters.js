function unary(fn){
    return function(x){
        return fn(x)
    }
}
function binary(fn){
    return function(x, y){
        return fn(x, y)
    }
}
function flip(fn){
    return function fliped(x, y, ...args){
        return fn(y, x, ...args)
    }
}
function reverseArgs(fn){
    return function reversed(...args){
        return fn(...args.reverse())
    }
}

// "apply" -> List----> Individual Input
function spreadArgs(fn){
    return function spread(args){
        return fn(...args)
    }
} //                                   
// "unApply" -> Individual Input -----> List
function unSpreadArgs(fn){
    return function unSpread(...args){
        return fn(args);
    }
} 