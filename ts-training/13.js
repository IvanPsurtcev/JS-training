let ANCESTRY_FILE = require("./ancestry.js")
let ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { 
        return a + b; 
    }
    return array.reduce(plus) / array.length;
}

//let byCenturies = {}

function groupBy(arr, func) { 
    let groupObj = {};
    arr.forEach(function(p) {
        let id = func(p);
        if ( groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push(p)
    });
    return groupObj;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

let byCenturies = groupBy(ancestry, getCentury);

for (century in byCenturies) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ 
        return p.died - p.born 
    }));
    console.log(century + ": " + byCenturies[century]);
}