// Example javascript
import { Person } from './Person.js';

// =====  M A I N  =====

let horizontal_line = "=".repeat(105);

let regi = new Person('Reginaldo Costa', 69);
let titi = new Person('Tiziana Costa', 63);
let leti = new Person('Leticia Costa', 36);
let be   = new Person('Bernardo Costa', 30);
 
let costas = [regi, titi, leti, be];

console.log(horizontal_line);
costas.map((p) => {
    //console.log(JSON.stringify(p, null, 4));
    console.log(p.toString()); 
});
console.log(horizontal_line);

let myList = ['A', 'B', 'C'];
for (let i in myList) {
    // noinspection JSUnfilteredForInLoop
    console.log(i.toString() + ' - ' + myList[i]);
}

myList.forEach(function(item, i) {
    console.log(i.toString() + ' - ' + item);
});

console.log('Hello World');
let reginaldo = new Person('Reginaldo Costa', 66, 'DEBUG');
let tiziana   = new Person('Tiziana Costa', 61, 'DEBUG');
let blank     = new Person(' ');
let empty     = new Person('');

console.log(horizontal_line);
console.log("reginaldo ==> " + reginaldo.toString());
console.log("tiziana   ==> " + tiziana.toString());
console.log("blank     ==> " + blank.toString());
console.log("empty     ==> " + empty.toString());
console.log(horizontal_line);


var Vector = "(1K460);(1K470);  (2L3456);  DUMMY WORD ;     (2L321) ;   ";
function tknze (description) {
    var tokens = [];
    description.split(';')
        .map( function (elem, index) {
            var token = elem.trim();
            if (token.length == 7 && token.startsWith('(') && token.endsWith(')'))
                tokens.push( token.substr(1, token.length - 2) );
        });
    return tokens.sort();
}

var XX = tknze(Vector);
console.log(XX);
console.log(XX.join(','));

var DICT = {
    A: 1,
    B: 2
};
var VALS = Object.values(DICT);
var KEYS = Object.keys(DICT);
console.log(VALS.join(","));
console.log(KEYS.join(","));


console.log('*** END ***');


