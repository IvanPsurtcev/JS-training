let arrayToList = function (arr) {
    let result = null;
    for (let i = arr.length-1; i >= 0; i--) {
        result = { 
            value: arr[i],
            rest:  result
        }
    }
    return result;
}

let listToArray = function (list) {
    let result = [];
    do { 
        result.push(list.value);
        list = list.rest;
    } while ( list !== null )
    return result;
};

let prepend = function (el, list) {
    return { 
        value: el,
        rest:  list
    }
}

let nth = function (list, ind) {
    if ( !list ) {
        return undefined;
    } else if ( ind === 0 ) {
            return list.value
    } else {
        return nth(list.rest, ind-1)
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));