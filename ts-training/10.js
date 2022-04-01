function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
 
    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }
 
    let propertiesInA = 0, propertiesInB = 0;
    for (let property in a) {
        propertiesInA += 1;
    }
    for (let property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propertiesInA == propertiesInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));        
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

