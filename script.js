function clone(obj) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (obj === null || typeof obj !== "object" ) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

//Handle the 3 simple types, and null or undefined :
// null, undefined, number, string, boolean
const objNull = null;
const objUndef = undefined;
const objNum = 8;
const objStr = 'string';
const objBool = true;



console.log(clone(objNull)); // null
console.log(clone(objUndef)); //undefined
console.log(clone(objNum)); // 8
console.log(clone(objStr)); // string
console.log(clone(objBool)); // true

// Handle Date
const objDate = new Date();
console.log(clone(objDate)); //Sat Aug 22 2020 07:41:26 GMT+0200 (Central European Summer Time)

//date format
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
console.log('today ', today);

// Handle Array
const objArray = [1, 2, 3, 4, 5];
console.log(clone(objArray)); //

// Handle Object
const objObj = {a: 1, b: 2};
console.log(clone(objObj)); //
