// Example javascript
import { Person } from './Person.js';

 var costas = [
     new Person('Reginaldo Costa', 69),
     new Person('Tiziana Costa', 63),
     new Person('Leticia Costa', 36),
     new Person('Bernardo Costa', 30)
 ];

costas.map((p) => {
    console.log(JSON.stringify(p, null, 4)); 
});

let horizontal_line = "=======================================================================================================";

// =====  M A I N  =====

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


