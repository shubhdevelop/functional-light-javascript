import {partial, curryN} from 'ramda'

function ajax(url, data, cb){}

function renderUser(){}

// let getCustomer = partial(ajax, CUSTOMER_API);
// let getCurrentUser = partial(getCustomer,{id:42})

let ajaxCurry = curryN(3, ajax)

var getCustomer = ajaxCurry(CUSTOMER_API);
var getCurrentUser = getCustomer({id:42});
var renderCurrentUser = getCurrentUser(renderUser)


function add (x, y){
    return x + y;
}

let curriedAdd = curryN(2, add)
let arr = [1,2,3,4,5]

let nArr = arr.map(curriedAdd(1))

console.log(nArr)