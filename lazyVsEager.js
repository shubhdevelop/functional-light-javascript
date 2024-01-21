
//Deffer
function lazyRepeater(count){
    return function allTheAs(){
        return "".padStart(count,"A")
    }
}

// Eager way
function eagerRepeater(count){
    var str = "".padStart(count,"A")
    return function allTheAs(){
        return str;
    }
}


var lazyAs = lazyRepeater(10)
var eagerAs = eagerRepeater(10);

console.log(

    lazyAs()
);

console.log(

    eagerAs()
)


function memoizedRepeater(count){
  let str = "";
  return function allTheAs(){
     if(str=== ""){
         str = ''.padStart(count,"A")
         return str
     }
     return str;
    }
}

var memoizedAs = memoizedRepeater(10)
console.log(memoizedAs())
console.log(memoizedAs())
console.log(memoizedAs())